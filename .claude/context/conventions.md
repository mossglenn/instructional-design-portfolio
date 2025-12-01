# Code Conventions

This document defines naming conventions, file structure patterns, and TypeScript usage for the project.

---

## Naming Conventions

### Files

**Components (Astro):**
- PascalCase with `.astro` extension
- Examples: `Hero.astro`, `ProjectCard.astro`, `WritingLayout.astro`

**Components (React):**
- PascalCase with `.tsx` extension
- Examples: `ZoomModal.tsx`, `FilterControls.tsx`

**Utilities:**
- camelCase with `.ts` extension
- Examples: `formatDate.ts`, `slugify.ts`, `filterProjects.ts`

**Types:**
- camelCase with `.ts` extension
- Examples: `project.ts`, `writing.ts`

**Data modules:**
- camelCase with `.ts` extension
- Examples: `learningObjects.ts`, `loadAllProjects.ts`

**Pages:**
- kebab-case with `.astro` extension
- Examples: `index.astro`, `gamified-statistics-tutor.astro`
- Dynamic routes: `[slug].astro`, `[...slug].astro`

---

### Variables and Functions

**Variables:**
```typescript
// camelCase for regular variables
const projectTitle = "My Project";
const isPublished = true;

// PascalCase for components
const Hero = () => <div>Hero</div>;

// UPPER_CASE for constants
const MAX_POSTS_PER_PAGE = 10;
const API_BASE_URL = "https://api.example.com";
```

**Functions:**
```typescript
// camelCase for regular functions
function formatDate(date: Date): string { }
function calculateReadingTime(content: string): number { }

// PascalCase for component functions
function ProjectCard({ project }: Props) { }
```

**Boolean variables:**
- Prefix with `is`, `has`, `should`, or `can`
- Examples: `isPublished`, `hasImage`, `shouldRender`, `canEdit`

---

### Types and Interfaces

**Type names:**
- PascalCase
- Suffix with `Type` for clarity (optional but recommended)
- Examples: `ProjectType`, `WritingMetadataType`, `LearningObjectType`

**Interface names:**
- PascalCase
- Suffix with `Props` for component props
- Examples: `ProjectCardProps`, `HeroProps`

```typescript
// Type for data model
export type ProjectType = {
  id: string;
  title: string;
  // ...
};

// Interface for component props
interface ProjectCardProps {
  project: ProjectType;
  showTags?: boolean;
}
```

---

## File Organization

### Component Structure

**Shared components:**
```
src/components/
├── Header.astro          # Site-wide header
├── Footer.astro          # Site-wide footer
├── ProjectCard.astro     # Reusable project card
└── Button.astro          # Shared button component
```

**Content components:**
```
src/components/content/
├── home/                 # Homepage-specific
│   ├── Hero.astro
│   └── FeaturedProjects.astro
└── project-name/         # Project-specific
    ├── Hero.astro
    ├── Challenge.astro
    └── Solution.astro
```

**Feature components:**
```
src/components/writing/   # Writing feature
├── PostCard.astro
├── PostList.astro
└── TagFilter.astro
```

**Rule:** Components used in multiple places go in `src/components/`, page-specific components go in `src/components/content/[page-name]/`.

---

### Import Organization

**Order imports by scope:**

```typescript
// 1. External dependencies
import { getCollection } from 'astro:content';
import { z } from 'zod';

// 2. Layouts
import Layout from '@layouts/Layout.astro';

// 3. Components
import Hero from '@components/Hero.astro';
import ProjectCard from '@components/ProjectCard.astro';

// 4. Utilities
import { formatDate } from '@utilities/dates';

// 5. Types
import type { Project } from '@/types/project';

// 6. Assets
import heroImage from '@assets/hero.jpg';
```

**Within each group, alphabetize for consistency.**

---

## TypeScript Usage

### Type Safety

**Always provide explicit types for:**
- Function parameters
- Function return types
- Exported variables
- Component props

```typescript
// ✅ Good
function formatDate(date: Date): string {
  return date.toLocaleDateString();
}

// ❌ Avoid
function formatDate(date) {
  return date.toLocaleDateString();
}
```

---

### Type Definitions

**Use `type` for:**
- Data models
- Union types
- Complex types

```typescript
export type PostType = 'essay' | 'note';

export type Project = {
  id: string;
  title: string;
  tags: string[];
};
```

**Use `interface` for:**
- Component props
- Extensible object shapes

```typescript
interface ProjectCardProps {
  project: Project;
  showTags?: boolean;
}

// Can be extended
interface ExtendedProjectCardProps extends ProjectCardProps {
  onClick?: () => void;
}
```

---

### Optional Properties

**Use `?` for optional properties:**

```typescript
type Project = {
  id: string;
  title: string;
  description?: string;  // Optional
  tags: string[];
};

// Access safely
const desc = project.description || 'No description';
const desc2 = project.description ?? 'No description'; // Prefer ?? for null/undefined
```

---

### Type Imports

**Use `type` keyword for type-only imports:**

```typescript
// ✅ Good - clear this is only a type
import type { Project } from '@/types/project';

// ❌ Less clear
import { Project } from '@/types/project';
```

**Benefits:**
- Clearer intent
- Better tree-shaking
- Helps with circular dependencies

---

## Astro-Specific Conventions

### Component Frontmatter

**Structure frontmatter consistently:**

```astro
---
// 1. Imports
import Layout from '@layouts/Layout.astro';
import { formatDate } from '@utilities/dates';
import type { Project } from '@/types/project';

// 2. Props (if any)
interface Props {
  project: Project;
}

const { project } = Astro.props;

// 3. Data fetching
const posts = await getCollection('writing');

// 4. Computed values
const formattedDate = formatDate(project.date);
const tags = project.tags.join(', ');

// 5. Helper functions (keep minimal)
function getTagColor(tag: string) {
  // ...
}
---
```

---

### Props Handling

**Always define props interface:**

```astro
---
interface Props {
  title: string;
  subtitle?: string;
  tags?: string[];
}

const { 
  title, 
  subtitle = 'Default subtitle',  // Default values
  tags = [] 
} = Astro.props;
---
```

---

## React Component Conventions

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react';
import type { Project } from '@/types/project';

// 2. Props interface
interface FilterControlsProps {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
}

// 3. Component
export default function FilterControls({ 
  projects, 
  onFilterChange 
}: FilterControlsProps) {
  // 4. State
  const [selectedTag, setSelectedTag] = useState<string>('');

  // 5. Handlers
  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
    // ...
  };

  // 6. Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

---

### Client Directives

**Choose the right directive:**

```astro
<!-- Immediate interactivity needed -->
<Modal client:load />

<!-- Can wait until page is idle -->
<SearchBox client:idle />

<!-- Only when visible -->
<ImageGallery client:visible />

<!-- Only render on client -->
<ClientOnlyComponent client:only="react" />
```

**Default to `client:load` unless you have a specific reason to defer.**

---

## CSS and Styling

### Tailwind Utilities

**Prefer utility classes over custom CSS:**

```astro
<!-- ✅ Good -->
<div class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  Click me
</div>

<!-- ❌ Avoid custom CSS unless necessary -->
<div class="custom-button">
  Click me
</div>
```

---

### Class Organization

**Order classes logically:**

```astro
<div class="
  flex items-center justify-between     /* Layout */
  px-4 py-2                             /* Spacing */
  bg-blue-500 text-white                /* Colors */
  rounded-lg shadow-md                  /* Border/Shadow */
  hover:bg-blue-600 transition-colors  /* States */
">
  Content
</div>
```

---

### Conditional Classes

**Use template literals for conditional classes:**

```astro
---
const isActive = true;
const variant = 'primary';

const buttonClasses = `
  px-4 py-2 rounded-lg
  ${isActive ? 'bg-blue-500' : 'bg-gray-300'}
  ${variant === 'primary' ? 'text-white' : 'text-gray-700'}
`;
---

<button class={buttonClasses}>
  Click me
</button>
```

---

## Data Fetching Conventions

### Content Collections

**Always use type-safe queries:**

```typescript
// ✅ Good - type-safe
import { getCollection } from 'astro:content';
const posts = await getCollection('writing');
// posts is typed automatically

// ❌ Avoid manual type casting
const posts = await getCollection('writing') as Post[];
```

---

### Error Handling

**Handle potential errors:**

```typescript
try {
  const posts = await getCollection('writing');
  // Use posts
} catch (error) {
  console.error('Failed to load posts:', error);
  // Provide fallback
}
```

---

## Comments

### When to Comment

**Do comment:**
- Complex logic or algorithms
- Non-obvious decisions or workarounds
- TODO items with context
- Type assertions that need explanation

```typescript
// WORKAROUND: Flowbite requires global window object
// TODO: Replace with headless UI library (Issue #123)

// Calculate reading time (200 words per minute average)
const readingTime = Math.ceil(wordCount / 200);
```

**Don't comment:**
- Self-explanatory code
- What code does (code shows that)
- Obvious types or operations

```typescript
// ❌ Bad - obvious
// Set the title variable to project title
const title = project.title;

// ✅ Good - explains why
// Use project title as fallback if page title not provided
const title = pageTitle || project.title;
```

---

### TODO Format

```typescript
// TODO: Brief description of what needs to be done
// TODO(username): Specific task assigned to someone
// FIXME: Something that's broken and needs fixing
// HACK: Temporary solution that needs improvement
// NOTE: Important information about the code
```

---

## Git Commit Conventions

See `.claude/prompts/commit-message-guide.md` for detailed commit message conventions.

**Quick reference:**
```
<type>(<scope>): <summary>

<optional body>
```

**Types:** feat, fix, refactor, style, docs, config, test, chore  
**Scopes:** content, writing, portfolio, layout, components, types, config, data

---

## Testing Conventions

_(To be added when testing is implemented)_

Placeholder for:
- Test file naming
- Test structure
- Mocking patterns
- Coverage expectations

---

## Documentation

### Code Documentation

**Document:**
- Complex utility functions
- Reusable patterns
- Public APIs

**Format:**
```typescript
/**
 * Formats a date for display in posts
 * 
 * @param date - The date to format
 * @param locale - Optional locale (defaults to 'en-US')
 * @returns Formatted date string
 * 
 * @example
 * formatDate(new Date('2024-11-26'))
 * // Returns: "November 26, 2024"
 */
export function formatDate(
  date: Date, 
  locale: string = 'en-US'
): string {
  // Implementation
}
```

---

## Linting and Formatting

### ESLint

**Follow ESLint rules:**
- Run `npm run lint` before committing
- Fix warnings when possible
- Document reasons for disabling rules

```typescript
// Disable with explanation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// Any type required here for Astro.props compatibility
```

---

### Prettier (if configured)

- Let Prettier handle formatting
- Don't fight the formatter
- Configure in `.prettierrc` if needed

---

## Performance Conventions

### Avoid Unnecessary Re-renders

**In Astro:**
- Components are static by default (good!)
- Only use `client:*` when needed

**In React:**
- Use `useMemo` for expensive computations
- Use `useCallback` for callback props
- Consider component splitting

---

### Image Optimization

**Always use Astro's Image component:**

```astro
---
import { Image } from 'astro:assets';
import heroImg from '@assets/hero.jpg';
---

<Image src={heroImg} alt="Hero" />
```

**Not:**
```astro
<img src="/assets/hero.jpg" alt="Hero" />
```

---

## Accessibility

### Semantic HTML

```astro
<!-- ✅ Good - semantic -->
<article>
  <h1>{title}</h1>
  <time datetime={date.toISOString()}>{formattedDate}</time>
  <p>{content}</p>
</article>

<!-- ❌ Avoid - divs for everything -->
<div class="article">
  <div class="title">{title}</div>
  <div class="date">{formattedDate}</div>
  <div class="content">{content}</div>
</div>
```

---

### ARIA Labels

**Add when needed:**
```astro
<button aria-label="Close modal">
  <span aria-hidden="true">×</span>
</button>

<nav aria-label="Main navigation">
  <!-- Nav items -->
</nav>
```

---

## Checklist for New Components

When creating a new component:

- [ ] Named with PascalCase
- [ ] Props interface defined (if has props)
- [ ] TypeScript types for all parameters
- [ ] Imports organized by scope
- [ ] Uses import aliases consistently
- [ ] Tailwind classes used for styling
- [ ] Accessible (semantic HTML, ARIA labels)
- [ ] Responsive (tested on mobile/tablet/desktop)
- [ ] Client directive only if needed
- [ ] Images optimized (using Astro Image)
- [ ] Comments for complex logic
- [ ] Follows project patterns

---

**Last Updated:** 2024-11-26  
**Review:** Update when new patterns emerge or conventions change
