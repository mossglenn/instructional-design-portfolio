# Instructional Design Portfolio

**Last Updated:** 2024-11-26 4:05 PM
**Current Phase:** Writing Feature Implementation
**Active Branch:** AddBlog

---

## Quick Context

Portfolio website for Amos Glenn - learning engineer, instructional designer, strategist.

**Tech Stack:** Astro 5, TypeScript, Tailwind CSS
**Purpose:** Showcase portfolio projects + blog-style writing platform
**Repository:** /Users/amosglenn/Dev/instructional-design-portfolio

### Specific Documentation Files

- **Architecture Decisions:** `.claude/decisions/`
- **Code Patterns:** `.claude/context/patterns.md`
- **Current Tasks:** `.claude/tasks/current-sprint.md`
- **Design System:** `tailwind.config.cjs`
- **Content Config:** `src/content/config.ts`


**See:** `.claude/architecture/` for detailed technical docs
**See:** `.claude/context/conventions.md` for full details


### Key Decisions
- [Link to decision log: .claude/decisions/]
- File-based content (Markdown + frontmatter)
- Static generation for performance

---

## Current Implementation Status

### ✅ Completed
- [x] MVP portfolio website
- [x] Core design system
- [x] Project showcase pages
- [x] Custom Tailwind configuration

### 🚧 In Progress
- [x] Content Collections foundation
- [x] Writing components structure
- [ ] RSS feed generation
- [ ] Related posts logic
- [ ] Content discovery features

### 📋 Planned
- [ ] Chronological browsing
- [ ] Category filtering
- [ ] Featured posts
- [ ] Search functionality

**See:** `.claude/tasks/current-sprint.md` for detailed breakdown

---

## Next Session Handoff

**Last worked on:** [Date]
**Context:** [Brief description of what was happening]
**Next steps:** [1-3 concrete next actions]
**Blockers:** [Anything preventing progress]

**Files to review:**
- [List key files to understand current state]

---

## Architecture Overview

### Core Structure

- `src/pages/` - Astro page routes (each .astro file becomes a route)
  - `index.astro` - Homepage composed of imported content components
  - Portfolio project pages (e.g., `ai-powered-learning-practice.astro`)
  - `404.astro` - Error page

- `src/components/` - Reusable Astro and React components
  - Top-level: Shared UI components (Header, Footer, Cards, etc.)
  - `content/` - Page-specific content sections organized by page (e.g., `home/`, `gamified-statistics-tutor/`)
  - `writing/` - Components specific to writing content (blog)

- `src/content/` - Markdown-based content (not portfolio projects)
  - `/writing/` - Markdown file containing content for writing content (blog)
    - `config.ts` - defining `writingCollection` as Astro collection

- `src/layouts/` - Layout wrappers
  - `Layout.astro` - Base layout with fonts, meta tags, and global scripts

- `src/assets/` - images and graphics used by components
  - `/featured/` - images of standardized sizes , etc. used in carousel components
  - `/portfolio/` - images used in portfolio project componenents, organized by project

- `src/data/` - Content and configuration data
  - `projects/` - Individual project data files (TypeScript modules)
  - `loadAllProjects.ts` - Dynamically imports all project modules
  - `learningObjects.ts` - Configuration for interactive learning demos

- `src/types/` - TypeScript type definitions
  - `project.ts` - Core `Project` type with metadata schema

- `src/utilities/` - Helper functions and business logic

- `src/pages-unused/` - archive of pages not used in the site but kept for reference

- `src/styles/` - sitewide css files

- `public/` - Static assets served directly
  - `assets/` - Images, icons, etc.
  - `learning-objects/` - Interactive HTML5/SCORM learning modules


### Data Model

Projects follow the `Project` type defined in `src/types/project.ts`:
- **id** - Unique identifier
- **link** - URL path for the project page
- **display** - Presentation fields (headline, subheading, hook, etc.)
- **metadata** - Filterable attributes (tags, roles, tools, accessibility, etc.)
- **learningObjects** - Array of learning object IDs to embed

Learning objects are defined in `src/data/learningObjects.ts` with:
- **id** - Unique identifier
- **path** - Path to the HTML5 package in `/public/learning-objects/`
- **thumbnail** - Preview image path
- **description** - Display text


### Component Patterns

- **Astro components** (.astro) - Server-rendered, no JavaScript by default
- **React components** (.tsx) - Interactive components, require `client:*` directive
- Use `client:load` for components that need immediate interactivity (e.g., `ZoomModal`)
- Flowbite components require the `flowbite` script to initialize (loaded in `Layout.astro`)


### Import Aliases

The project uses path aliases configured in both `astro.config.mjs` and `tsconfig.json`:

```typescript
@/          → ./src/
@components → ./src/components/
@content    → ./src/components/content/
@layouts    → ./src/layouts/
@pages      → ./src/pages/
@styles     → ./src/styles/
@assets     → ./src/assets/
@public     → ./public/
@utilities  → ./src/utilities/
```

Always use these aliases when importing to maintain consistency.


### Styling

- **Tailwind CSS 4.x** via `@tailwindcss/vite` plugin
- **Flowbite** component library for UI elements
- Global styles in `src/styles/global.css`
- Custom theme in `src/styles/global.css` defines token-based designn system inside `@theme{}`
- Custom fonts loaded via `@fontsource` packages in `Layout.astro`
- Config in `tailwind.config.cjs`


### Key Dependencies

- **Astro 5.11** - Static site generator
- **React 19** - UI library via `@astrojs/react` integration
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Flowbite 3.1** - Component library built on Tailwind
- **Framer Motion 12** / **Motion 12** - Animation libraries

### Ignored Directories

ESLint ignores:
- `dist/` - Build output
- `node_modules/` - Dependencies
- `public/learning-objects/` - Third-party learning content
- `_scripts/` - Build scripts
- `.astro/` - Astro cache
- `.vscode/` - Editor config

**See:** `.claude/architecture/` for detailed technical and structural docs

---

## Workflows

## Adding New Projects

1. Create a new TypeScript file in `src/data/projects/` (e.g., `my-project.ts`)
2. Export a `Project` object as default with all required fields
3. The project will be automatically loaded via `loadAllProjects.ts`
4. Projects are sorted by `order` field (if present) or `id` alphabetically
5. Create corresponding page in `src/pages/` if needed
6. Create content components in `src/components/content/<project-name>/`

See `src/data/testProjectTypes.ts` for examples.


### Adding Learning Objects

1. Place the learning object package in `public/learning-objects/<object-name>/`
2. Ensure it has an `index.html` entry point
3. Add entry to `learningObjects` array in `src/data/learningObjects.ts`
4. Reference by ID in project's `learningObjects` field
5. Use `IframeLearningObject.astro` or `HuggingFaceEmbed.astro` to embed


### Adding Writing

1. Compose draft in Obsidian with frontmatter
2. Manually move finished draft into new git repo branch
3. Validate and build Astro stroke-inherit
4. Commit changes and push branch to GitHub remote repo
5. Create pull request to merge branch with `main` (triggering GitHub Actions and Vercel deployment)



## Development Commands

**Start development server:**
```bash
npm run dev
# Server runs at localhost:4321
```

**Build for production:**
```bash
npm run build
# Output directory: ./dist/
```

**Preview production build:**
```bash
npm run preview
```

**Lint code:**
```bash
npm run lint
```

**Run Astro CLI commands:**
```bash
npm run astro -- <command>
npm run astro -- --help
```


---

## Code Conventions

### Naming Patterns
- Components: PascalCase (e.g., `PostCard.astro`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase with `Type` suffix (e.g., `WritingMetadataType`)

### TypeScript
- Strict mode enabled
- Explicit types for all exports
- Zod for runtime validation

**See:** `.claude/context/conventions.md` for full details


---

## Known Issues & Considerations
1. **Image handling** - Need strategy for images in writing content

---


## Project Memory Triggers

When Claude reads this, it should remember:
- Amos values maintainability over feature richness
- Design decisions should be documented before implementation
- "Solve the real problem" - avoid tool-first approaches
- Brand themes: bridges, clarity, science + design

---

## Content Strategy for Writing (blog)
- **Content Collections** (Astro's built-in)
- Markdown with frontmatter (no MDX for now)
- **Two content types:**
  - Essays: Polished, published thinking (about 1 per month expected)
  - Notes: Exploratory, work-in-progress (about 1-2 per week expected)
- Unified content model with type field (essay | note) 
- Types of content have different styling
- Uses freeform tags 
- RSS feed
- Does not include comments or discussion
- Show related writing or recommendations
- Future improvements:
  - full text search
  - Homepage inclusion logic