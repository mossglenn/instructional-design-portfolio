# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an instructional design portfolio website built with Astro 5.x, React 19, Tailwind CSS 4.x, and Flowbite. It showcases educational projects and interactive learning objects.

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

## Project Architecture

### Core Structure

- **src/pages/** - Astro page routes (each .astro file becomes a route)
  - `index.astro` - Homepage composed of imported content components
  - Portfolio project pages (e.g., `ai-powered-learning-practice.astro`)
  - `404.astro` - Error page

- **src/components/** - Reusable Astro and React components
  - Top-level: Shared UI components (Header, Footer, Cards, etc.)
  - **content/** - Page-specific content sections organized by page (e.g., `home/`, `gamified-statistics-tutor/`)

- **src/layouts/** - Layout wrappers
  - `Layout.astro` - Base layout with fonts, meta tags, and global scripts

- **src/data/** - Content and configuration data
  - **projects/** - Individual project data files (TypeScript modules)
  - `loadAllProjects.ts` - Dynamically imports all project modules
  - `learningObjects.ts` - Configuration for interactive learning demos

- **src/types/** - TypeScript type definitions
  - `project.ts` - Core `Project` type with metadata schema

- **src/utilities/** - Helper functions and business logic

- **public/** - Static assets served directly
  - **assets/** - Images, icons, etc.
  - **learning-objects/** - Interactive HTML5/SCORM learning modules

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
- Custom fonts loaded via `@fontsource` packages in `Layout.astro`
- Config in `tailwind.config.cjs`

## Adding New Projects

1. Create a new TypeScript file in `src/data/projects/` (e.g., `my-project.ts`)
2. Export a `Project` object as default with all required fields
3. The project will be automatically loaded via `loadAllProjects.ts`
4. Projects are sorted by `order` field (if present) or `id` alphabetically
5. Create corresponding page in `src/pages/` if needed
6. Create content components in `src/components/content/<project-name>/`

See `src/data/testProjectTypes.ts` for examples.

## Adding Learning Objects

1. Place the learning object package in `public/learning-objects/<object-name>/`
2. Ensure it has an `index.html` entry point
3. Add entry to `learningObjects` array in `src/data/learningObjects.ts`
4. Reference by ID in project's `learningObjects` field
5. Use `IframeLearningObject.astro` or `HuggingFaceEmbed.astro` to embed

## Component Patterns

- **Astro components** (.astro) - Server-rendered, no JavaScript by default
- **React components** (.tsx) - Interactive components, require `client:*` directive
- Use `client:load` for components that need immediate interactivity (e.g., `ZoomModal`)
- Flowbite components require the `flowbite` script to initialize (loaded in `Layout.astro`)

## Key Dependencies

- **Astro 5.11** - Static site generator
- **React 19** - UI library via `@astrojs/react` integration
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Flowbite 3.1** - Component library built on Tailwind
- **Framer Motion 12** / **Motion 12** - Animation libraries

## Ignored Directories

ESLint ignores:
- `dist/` - Build output
- `node_modules/` - Dependencies
- `public/learning-objects/` - Third-party learning content
- `_scripts/` - Build scripts
- `.astro/` - Astro cache
- `.vscode/` - Editor config
