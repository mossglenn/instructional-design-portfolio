# File Structure Reference

Complete file structure with descriptions for the Instructional Design Portfolio project.

---

## Root Level

```
instructional-design-portfolio/
├── .astro/                  # Astro cache (ignored by git)
├── .claude/                 # Claude context documentation
├── .vscode/                 # VS Code settings
├── dist/                    # Build output (ignored by git)
├── node_modules/            # Dependencies (ignored by git)
├── public/                  # Static assets
├── src/                     # Source code
├── .gitignore
├── .gitmessage             # Git commit template
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.cjs     # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

---

## .claude/ - Claude Documentation

```
.claude/
├── CLAUDE.md               # Stable architectural reference
├── SESSION.md              # Daily session context
├── architecture/           # Technical deep-dives
├── context/                # Code patterns and conventions
├── decisions/              # Architectural decision records
├── prompts/                # Workflow definitions
└── tasks/                  # Sprint and task tracking
```

**Purpose:** Documentation for Claude AI assistant to maintain context across sessions and understand project architecture.

---

## src/ - Source Code

### Complete Structure

```
src/
├── assets/                 # Images and graphics
│   ├── featured/          # Homepage carousel images
│   └── portfolio/         # Project-specific images
│       ├── project-name/
│       └── ...
│
├── components/            # Reusable components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProjectCard.astro
│   ├── Modal.tsx
│   └── ...
│   │
│   ├── content/           # Page-specific content components
│   │   ├── home/         # Homepage sections
│   │   │   ├── Hero.astro
│   │   │   ├── FeaturedProjects.astro
│   │   │   └── ...
│   │   └── [project-name]/  # Project-specific sections
│   │       ├── Hero.astro
│   │       ├── Challenge.astro
│   │       ├── Solution.astro
│   │       └── ...
│   │
│   └── writing/           # Writing feature components
│       ├── PostCard.astro
│       ├── PostList.astro
│       └── ...
│
├── content/               # Markdown content
│   ├── config.ts         # Content Collections schemas
│   └── writing/          # Blog posts/essays/notes
│       ├── essay-1.md
│       ├── note-1.md
│       └── ...
│
├── data/                  # Data modules
│   ├── projects/         # Portfolio project definitions
│   │   ├── project-1.ts
│   │   ├── project-2.ts
│   │   └── ...
│   ├── loadAllProjects.ts
│   └── learningObjects.ts
│
├── layouts/              # Layout wrappers
│   ├── Layout.astro     # Base layout
│   └── WritingLayout.astro  # Writing-specific layout
│
├── pages/               # Page routes
│   ├── index.astro     # Homepage
│   ├── 404.astro       # Error page
│   ├── [project-pages].astro  # Individual project pages
│   └── writing/        # Writing routes
│       ├── index.astro
│       └── [...slug].astro
│
├── styles/             # Global styles
│   └── global.css     # Design tokens and Tailwind theme
│
├── types/              # TypeScript type definitions
│   ├── project.ts
│   └── writing.ts
│
└── utilities/          # Helper functions
    ├── formatDate.ts
    └── ...
```

---

## Directory Details

### src/assets/

**Purpose:** Images and graphics used by components

**Organization:**
- `featured/` - Standardized images for homepage carousel
- `portfolio/` - Project-specific images, organized by project folder

**Usage:**
```typescript
import heroImage from '@assets/portfolio/project-name/hero.jpg';
```

**Note:** Use Astro's Image component for optimization

---

### src/components/

**Purpose:** Reusable UI components

**Types:**
- **Top-level:** Shared components used across multiple pages (Header, Footer, Cards, etc.)
- **content/:** Page-specific content sections organized by page
- **writing/:** Components specific to writing feature

**When to create:**
- Component used in multiple places → `src/components/`
- Component specific to one page → `src/components/content/[page-name]/`
- Component for writing feature → `src/components/writing/`

**Naming:** PascalCase with `.astro` or `.tsx` extension

---

### src/content/

**Purpose:** Markdown-based content managed by Content Collections

**Structure:**
- `config.ts` - Defines collection schemas
- Collection folders (e.g., `writing/`) - Markdown files

**Current collections:**
- `writing` - Essays and notes

**Not for portfolio projects:** Portfolio uses TypeScript modules in `src/data/projects/`

---

### src/data/

**Purpose:** TypeScript data modules

**Contains:**
- `projects/` - Individual project data files
- `loadAllProjects.ts` - Dynamic project loader
- `learningObjects.ts` - Learning object configurations

**Pattern:**
```typescript
// src/data/projects/my-project.ts
export default {
  id: 'my-project',
  // ... project data
} as Project;
```

**Loading:**
```typescript
import { loadAllProjects } from '@/data/loadAllProjects';
const projects = await loadAllProjects();
```

---

### src/layouts/

**Purpose:** Layout wrapper components

**Contains:**
- `Layout.astro` - Base layout (fonts, meta tags, global scripts)
- `WritingLayout.astro` - Layout for writing content

**Usage:**
```astro
---
import Layout from '@layouts/Layout.astro';
---
<Layout title="Page Title">
  <h1>Content</h1>
</Layout>
```

---

### src/pages/

**Purpose:** File-based routing (each .astro file becomes a route)

**Structure:**
- Top-level pages: `index.astro`, `404.astro`
- Individual project pages: `project-name.astro`
- Feature folders: `writing/`
- Dynamic routes: `[slug].astro`, `[...slug].astro`

**Routing:**
- `index.astro` → `/`
- `project-name.astro` → `/project-name`
- `writing/index.astro` → `/writing`
- `writing/[...slug].astro` → `/writing/[any-path]`

---

### src/styles/

**Purpose:** Global CSS and design system

**Contains:**
- `global.css` - Design tokens, Tailwind theme, global styles

**Structure:**
```css
/* Design tokens */
@theme {
  --color-primary: #3b82f6;
  /* ... */
}

/* Global styles */
body {
  /* ... */
}
```

---

### src/types/

**Purpose:** TypeScript type definitions

**Naming:** camelCase files, PascalCase types

**Pattern:**
```typescript
// src/types/project.ts
export type Project = {
  id: string;
  title: string;
  // ...
};
```

---

### src/utilities/

**Purpose:** Helper functions and business logic

**Examples:**
- Date formatting
- String manipulation
- Data transformation
- Calculations

**Pattern:**
```typescript
// src/utilities/formatDate.ts
export function formatDate(date: Date): string {
  // ...
}
```

---

## public/ - Static Assets

```
public/
├── assets/              # Public images, icons
└── learning-objects/    # Interactive HTML5/SCORM packages
    ├── stats-tutorial-01/
    │   └── index.html
    └── feedback-examples/
        └── index.html
```

**Purpose:** Files served directly without processing

**Usage:**
- Reference as absolute paths: `/assets/image.png`
- Learning objects embedded via iframe
- No import statements needed

**Note:** Assets here are not optimized by Astro

---

## Configuration Files

### astro.config.mjs
- Astro framework configuration
- Integrations (React, Tailwind)
- Build settings
- Import aliases

### tailwind.config.cjs
- Tailwind CSS configuration
- Custom theme extensions
- Plugin configuration

### tsconfig.json
- TypeScript compiler options
- Path aliases matching astro.config.mjs
- Strict type checking enabled

### package.json
- Dependencies
- Scripts (dev, build, preview, lint)
- Project metadata

---

## Import Aliases

Configured in both `astro.config.mjs` and `tsconfig.json`:

```typescript
@/          → ./src/
@components → ./src/components/
@content    → ./src/components/content/
@layouts    → ./src/layouts/
@utilities  → ./src/utilities/
@assets     → ./src/assets/
@public     → ./public/
```

**Always use aliases for consistency.**

---

## Ignored Directories

**Git ignores:**
- `dist/` - Build output
- `node_modules/` - Dependencies
- `.astro/` - Astro cache
- `public/learning-objects/` (if third-party)

**ESLint ignores:**
- Same as above
- `_scripts/` - Build scripts
- `.vscode/` - Editor config

---

## File Naming Patterns

**Components:** PascalCase.astro or PascalCase.tsx  
**Pages:** kebab-case.astro  
**Utilities:** camelCase.ts  
**Types:** camelCase.ts  
**Data:** camelCase.ts  
**Styles:** kebab-case.css

See `.claude/context/conventions.md` for complete conventions.

---

## Adding New Features

When adding a new feature:

1. **Create component folder:** `src/components/[feature-name]/`
2. **Add page routes:** `src/pages/[feature-name]/`
3. **Add types if needed:** `src/types/[feature-name].ts`
4. **Add utilities if needed:** `src/utilities/[feature-name].ts`
5. **Update navigation:** `src/components/Header.astro`

---

**Last Updated:** 2024-11-26  
**See also:** `.claude/context/conventions.md` for naming and organization rules
