# Reusable Code Patterns

This document captures proven patterns used across the project. Reference these when building similar functionality.

---

## Content Loading Patterns

### Portfolio Projects (TypeScript Modules)

**When:** Loading portfolio project data

**Pattern:**
```typescript
// In component or page
import { loadAllProjects } from '@/data/loadAllProjects';

const projects = await loadAllProjects();
// Projects are sorted and ready to use
```

**Details:**
- `loadAllProjects()` dynamically imports all files in `src/data/projects/`
- Returns array of `Project` objects
- Sorting handled automatically (by `order` field or `id`)

**Example use cases:**
- Homepage project carousel
- Portfolio listing pages
- Project filtering/search

---

### Writing Content (Content Collections)

**When:** Loading blog posts, essays, notes

**Pattern:**
```typescript
// Get all writing
import { getCollection } from 'astro:content';
const allPosts = await getCollection('writing');

// Filter by type
const essays = allPosts.filter(post => post.data.type === 'essay');
const notes = allPosts.filter(post => post.data.type === 'note');

// Sort by date (newest first)
const sorted = allPosts.sort((a, b) => 
  b.data.date.getTime() - a.data.date.getTime()
);

// Get single post by slug
import { getEntry } from 'astro:content';
const post = await getEntry('writing', slug);
```

**Details:**
- Content Collections provide type-safe queries
- Filtering and sorting done in-memory (fast for static sites)
- Schema validation automatic via Zod

**Example use cases:**
- Post listing pages
- Individual post pages
- RSS feed generation
- Related posts logic

---

## Component Composition Patterns

### Page Assembly Pattern

**When:** Building pages from multiple content sections

**Pattern:**
```astro
---
// src/pages/project-name.astro
import Layout from '@layouts/Layout.astro';
import Hero from '@content/project-name/Hero.astro';
import Challenge from '@content/project-name/Challenge.astro';
import Solution from '@content/project-name/Solution.astro';
import Results from '@content/project-name/Results.astro';

const pageTitle = "Project Name";
---

<Layout title={pageTitle}>
  <Hero />
  <Challenge />
  <Solution />
  <Results />
</Layout>
```

**Benefits:**
- Each section is self-contained and testable
- Easy to reorder or remove sections
- Clear page structure
- Sections can be reused across pages

**File organization:**
```
src/components/content/
└── project-name/
    ├── Hero.astro
    ├── Challenge.astro
    ├── Solution.astro
    └── Results.astro
```

---

### Conditional Component Loading

**When:** Different components based on data

**Pattern:**
```astro
---
const showAdvancedFeatures = project.metadata.tags.includes('advanced');
---

<BaseComponent />

{showAdvancedFeatures && (
  <AdvancedFeaturesComponent />
)}

{project.learningObjects?.length > 0 && (
  <LearningObjectsSection objects={project.learningObjects} />
)}
```

**Details:**
- Use conditional rendering with `&&` operator
- Check existence before accessing nested properties
- Keep conditions simple and readable

---

## Styling Patterns

### Type-Based Styling

**When:** Different styles for content types (essay vs note, project tags, etc.)

**Pattern:**
```astro
---
const typeStyles = {
  essay: 'bg-blue-50 border-blue-200 text-blue-900',
  note: 'bg-amber-50 border-amber-200 text-amber-900'
};

const badgeClass = typeStyles[post.data.type] || 'bg-gray-50';
---

<span class={`${badgeClass} px-3 py-1 rounded-full text-sm`}>
  {post.data.type}
</span>
```

**Benefits:**
- Centralized style mapping
- Easy to add new types
- Consistent visual language
- Type-safe with TypeScript

**Variants:**
```typescript
// Can extract to utility function
function getTypeStyles(type: 'essay' | 'note'): string {
  const styles = {
    essay: 'bg-blue-50 border-blue-200',
    note: 'bg-amber-50 border-amber-200'
  };
  return styles[type];
}
```

---

### Responsive Grid Layouts

**When:** Displaying card grids that adapt to screen size

**Pattern:**
```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card {...item} />
  ))}
</div>
```

**Breakpoints:**
- Mobile (default): 1 column
- Tablet (`md:`): 2 columns
- Desktop (`lg:`): 3 columns

**Gap spacing:**
- Use `gap-6` (1.5rem) for comfortable card spacing
- Use `gap-8` for more breathing room
- Use `gap-4` for tighter layouts

---

## Data Transformation Patterns

### Date Formatting

**When:** Displaying dates in readable format

**Pattern:**
```typescript
// In utility function
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// In component
---
import { formatDate } from '@utilities/dates';
const displayDate = formatDate(post.data.date);
---
<time datetime={post.data.date.toISOString()}>
  {displayDate}
</time>
```

**Output:** "November 26, 2024"

---

### Tag Normalization

**When:** Processing tags for display or filtering

**Pattern:**
```typescript
// Normalize tags (lowercase, trim, dedupe)
export function normalizeTags(tags: string[]): string[] {
  return [...new Set(
    tags.map(tag => tag.toLowerCase().trim())
  )].sort();
}

// Get unique tags from collection
export function getAllTags(posts: Post[]): string[] {
  const allTags = posts.flatMap(post => post.data.tags);
  return normalizeTags(allTags);
}
```

---

## Learning Object Patterns

### Embedding Interactive Content

**When:** Embedding HTML5/SCORM learning objects

**Pattern:**
```astro
---
import IframeLearningObject from '@components/IframeLearningObject.astro';
import { getLearningObject } from '@/data/learningObjects';

const learningObject = getLearningObject('stats-tutorial-01');
---

<IframeLearningObject
  path={learningObject.path}
  title={learningObject.description}
  height="600px"
/>
```

**Details:**
- Learning objects live in `public/learning-objects/`
- Metadata in `src/data/learningObjects.ts`
- Iframe isolation for security
- Height adjustable per object

---

## Import Alias Patterns

### Consistent Import Structure

**Always use aliases for consistency:**

```typescript
// ✅ Good
import Layout from '@layouts/Layout.astro';
import Hero from '@content/home/Hero.astro';
import { formatDate } from '@utilities/dates';
import type { Project } from '@/types/project';

// ❌ Avoid
import Layout from '../../layouts/Layout.astro';
import Hero from '../components/content/home/Hero.astro';
```

**Available aliases:**
```typescript
@/          → src/
@components → src/components/
@content    → src/components/content/
@layouts    → src/layouts/
@utilities  → src/utilities/
```

---

## Error Handling Patterns

### Safe Content Access

**When:** Accessing optional properties

**Pattern:**
```astro
---
// Safe with optional chaining
const thumbnail = project.metadata?.thumbnail || '/default-thumbnail.jpg';

// Safe with array access
const firstTag = project.metadata.tags?.[0] || 'uncategorized';

// Safe with conditional rendering
---
{project.learningObjects && project.learningObjects.length > 0 && (
  <LearningObjectsSection />
)}
```

---

### Collection Query Errors

**When:** Querying collections that might not exist

**Pattern:**
```typescript
try {
  const posts = await getCollection('writing');
  // Use posts
} catch (error) {
  console.error('Failed to load posts:', error);
  // Provide fallback or error UI
  return [];
}
```

---

## Dynamic Route Patterns

### Collection-Based Routes

**When:** Creating pages for each item in a collection

**Pattern:**
```astro
---
// src/pages/writing/[...slug].astro
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('writing');
  
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post }
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---

<Layout title={post.data.title}>
  <Content />
</Layout>
```

**Details:**
- `getStaticPaths()` generates routes at build time
- Props passed to page component
- Markdown rendered with `await post.render()`

---

## Performance Patterns

### Image Optimization

**When:** Using images in components

**Pattern:**
```astro
---
import { Image } from 'astro:assets';
import heroImage from '@assets/featured/hero.jpg';
---

<Image
  src={heroImage}
  alt="Descriptive alt text"
  width={1200}
  height={600}
  loading="lazy"
/>
```

**Benefits:**
- Automatic optimization
- Responsive images
- WebP conversion
- Lazy loading

---

### Component Islands

**When:** Adding interactivity to specific components

**Pattern:**
```astro
---
import InteractiveComponent from '@components/InteractiveComponent';
---

<!-- Only this component loads JavaScript -->
<InteractiveComponent client:load />

<!-- Rest of page is static -->
<StaticContent />
```

**Client directives:**
- `client:load` - Load immediately
- `client:idle` - Load when browser idle
- `client:visible` - Load when in viewport
- `client:only` - Only render on client (CSR)

---

## New Pattern Template

When adding a new pattern:

```markdown
### Pattern Name

**When:** [Situation where this applies]

**Pattern:**
[Code example]

**Details:**
[Important notes, caveats, variations]

**Example use cases:**
[Where this is used in the project]
```

---

**Last Updated:** 2024-11-26  
**Patterns Count:** 15
