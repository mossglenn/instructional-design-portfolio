# Data Models

Complete reference for data structures used throughout the project.

---

## Portfolio Project Model

### Project Type

**Location:** `src/types/project.ts`

```typescript
export type Project = {
  id: string;
  link: string;
  order?: number;
  display: ProjectDisplay;
  metadata: ProjectMetadata;
  learningObjects?: string[];
};
```

---

### ProjectDisplay

**Purpose:** Presentation content for project pages

```typescript
type ProjectDisplay = {
  headline: string;
  subheading: string;
  hook: string;
  challenge?: string;
  solution?: string;
  results?: string;
  keyFeatures?: string[];
  lessonsLearned?: string[];
};
```

**Fields:**
- `headline` - Main project title
- `subheading` - One-line description
- `hook` - Compelling opening paragraph
- `challenge` - Problem/context section (optional)
- `solution` - Approach/implementation section (optional)
- `results` - Outcomes/impact section (optional)
- `keyFeatures` - Bulleted list of features (optional)
- `lessonsLearned` - Insights from project (optional)

**Usage:** Sections are rendered by page-specific components

---

### ProjectMetadata

**Purpose:** Filterable attributes and categorization

```typescript
type ProjectMetadata = {
  tags: string[];
  roles: string[];
  tools: string[];
  accessibility?: AccessibilityFeatures;
  timeline?: string;
  client?: string;
  thumbnail?: string;
};
```

**Fields:**
- `tags` - Categorization tags (e.g., "gamification", "adaptive-learning")
- `roles` - Amos's role(s) in project (e.g., "instructional-designer", "developer")
- `tools` - Technologies used (e.g., "Articulate Storyline", "JavaScript")
- `accessibility` - Accessibility features object (optional)
- `timeline` - Project duration (e.g., "6 months", "2023-2024")
- `client` - Client or organization name (optional)
- `thumbnail` - Preview image path (optional)

---

### AccessibilityFeatures

```typescript
type AccessibilityFeatures = {
  wcagLevel?: 'A' | 'AA' | 'AAA';
  features: string[];
};
```

**Fields:**
- `wcagLevel` - WCAG compliance level (optional)
- `features` - List of accessibility features (e.g., "keyboard navigation", "screen reader support")

---

### Example Project

```typescript
// src/data/projects/gamified-statistics-tutor.ts
export default {
  id: 'gamified-statistics-tutor',
  link: '/gamified-statistics-tutor',
  order: 1,
  
  display: {
    headline: 'Gamified Statistics Tutor',
    subheading: 'Interactive learning platform for statistics education',
    hook: 'Statistics can be intimidating. This gamified tutor makes it engaging and accessible through adaptive challenges and immediate feedback.',
    challenge: 'Students struggled with abstract statistical concepts...',
    solution: 'Developed an adaptive learning platform...',
    results: '40% improvement in concept retention...',
    keyFeatures: [
      'Adaptive difficulty progression',
      'Real-time feedback',
      'Progress tracking'
    ]
  },
  
  metadata: {
    tags: ['gamification', 'adaptive-learning', 'statistics'],
    roles: ['instructional-designer', 'developer'],
    tools: ['JavaScript', 'D3.js', 'Custom LMS'],
    timeline: '6 months',
    accessibility: {
      wcagLevel: 'AA',
      features: ['keyboard navigation', 'screen reader support']
    }
  },
  
  learningObjects: ['stats-tutorial-01', 'stats-practice-01']
} as Project;
```

---

## Writing Content Model

### Writing Collection Schema

**Location:** `src/content/config.ts`

```typescript
import { defineCollection, z } from 'astro:content';

export const collections = {
  writing: defineCollection({
    schema: z.object({
      title: z.string(),
      type: z.enum(['essay', 'note']),
      date: z.date(),
      tags: z.array(z.string()),
      description: z.string().optional(),
      draft: z.boolean().optional().default(false)
    })
  })
};
```

---

### Writing Fields

**Required:**
- `title` - Post title (string)
- `type` - Content type: 'essay' or 'note'
- `date` - Publication date (Date)
- `tags` - Array of category tags

**Optional:**
- `description` - Short summary for listing pages
- `draft` - Hide from production if true (default: false)

---

### Content Types

#### Essay
- Polished, published thinking
- Longer form (1500-3000 words typical)
- Topics: instructional design, learning science, AI
- ~1 per month expected
- Visual treatment: More formal, highlighted

#### Note
- Exploratory, work-in-progress
- Shorter form (300-800 words typical)
- Responses to other writing, idea development
- ~1-2 per week expected
- Visual treatment: More casual, notebook-style

---

### Example Writing Content

```markdown
---
title: "Designing for Learning Transfer"
type: "essay"
date: 2024-11-26
tags: ["instructional-design", "learning-science", "transfer"]
description: "How to design learning experiences that stick beyond the training session"
draft: false
---

# Designing for Learning Transfer

The challenge isn't just teaching concepts—it's ensuring learners can apply them in real contexts...

[Content continues...]
```

---

### Querying Writing Content

```typescript
import { getCollection, getEntry } from 'astro:content';

// Get all posts
const allPosts = await getCollection('writing');

// Filter by type
const essays = allPosts.filter(post => post.data.type === 'essay');
const notes = allPosts.filter(post => post.data.type === 'note');

// Exclude drafts in production
const published = allPosts.filter(post => !post.data.draft);

// Sort by date (newest first)
const sorted = allPosts.sort((a, b) => 
  b.data.date.getTime() - a.data.date.getTime()
);

// Get single post
const post = await getEntry('writing', 'my-post-slug');

// Render content
const { Content } = await post.render();
```

---

## Learning Object Model

### LearningObject Type

**Location:** `src/data/learningObjects.ts`

```typescript
type LearningObject = {
  id: string;
  path: string;
  thumbnail?: string;
  description: string;
};
```

**Fields:**
- `id` - Unique identifier (used in project references)
- `path` - Path to HTML5 package (relative to `/public/learning-objects/`)
- `thumbnail` - Preview image path (optional)
- `description` - Display text for object

---

### Example Learning Objects

```typescript
// src/data/learningObjects.ts
export const learningObjects: LearningObject[] = [
  {
    id: 'stats-tutorial-01',
    path: 'statistics-tutorial',
    description: 'Interactive Statistics Tutorial',
    thumbnail: '/assets/learning-objects/stats-tutorial-thumb.jpg'
  },
  {
    id: 'feedback-examples',
    path: 'feedback-examples',
    description: 'Effective Feedback Scenarios'
  }
];

export function getLearningObject(id: string): LearningObject | undefined {
  return learningObjects.find(obj => obj.id === id);
}
```

---

### Learning Object Structure

```
public/learning-objects/
└── statistics-tutorial/
    ├── index.html          # Entry point
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── assets/
        └── images/
```

**Requirements:**
- Must have `index.html` as entry point
- Self-contained (all assets in package folder)
- Responsive design recommended
- Accessible (WCAG AA minimum)

---

### Embedding Learning Objects

```astro
---
import IframeLearningObject from '@components/IframeLearningObject.astro';
import { getLearningObject } from '@/data/learningObjects';

const lo = getLearningObject('stats-tutorial-01');
---

{lo && (
  <IframeLearningObject
    path={lo.path}
    title={lo.description}
    height="600px"
  />
)}
```

---

## Component Props Models

### Common Props Patterns

#### Card Component Props

```typescript
interface ProjectCardProps {
  project: Project;
  showTags?: boolean;
  showMetadata?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}
```

#### List Component Props

```typescript
interface PostListProps {
  posts: CollectionEntry<'writing'>[];
  filterType?: 'essay' | 'note' | 'all';
  sortBy?: 'date' | 'title';
  limit?: number;
}
```

#### Layout Props

```typescript
interface LayoutProps {
  title: string;
  description?: string;
  ogImage?: string;
}
```

---

## Data Relationships

### Project → Learning Objects

**Relationship:** One-to-many (optional)

```
Project
  └── learningObjects: ['id1', 'id2']
          ↓
      LearningObject[]
```

**Querying:**
```typescript
const project = await loadProject('project-id');
const objects = project.learningObjects
  ?.map(id => getLearningObject(id))
  .filter(Boolean);
```

---

### Writing → Tags

**Relationship:** Many-to-many (via array)

```
Post
  └── tags: ['tag1', 'tag2']
```

**Querying posts by tag:**
```typescript
const postsWithTag = allPosts.filter(post => 
  post.data.tags.includes('instructional-design')
);
```

**Getting all tags:**
```typescript
const allTags = [...new Set(
  allPosts.flatMap(post => post.data.tags)
)].sort();
```

---

## Type Guards and Utilities

### Type Guards

```typescript
// Check if project has learning objects
function hasLearningObjects(project: Project): boolean {
  return !!project.learningObjects && project.learningObjects.length > 0;
}

// Check if post is draft
function isDraft(post: CollectionEntry<'writing'>): boolean {
  return post.data.draft ?? false;
}

// Check if post is essay
function isEssay(post: CollectionEntry<'writing'>): boolean {
  return post.data.type === 'essay';
}
```

---

### Data Transformations

```typescript
// Project to card data
function projectToCardData(project: Project) {
  return {
    title: project.display.headline,
    description: project.display.subheading,
    link: project.link,
    tags: project.metadata.tags,
    thumbnail: project.metadata.thumbnail
  };
}

// Post to card data
function postToCardData(post: CollectionEntry<'writing'>) {
  return {
    title: post.data.title,
    excerpt: post.data.description || '',
    link: `/writing/${post.slug}`,
    date: post.data.date,
    type: post.data.type,
    tags: post.data.tags
  };
}
```

---

## Validation and Defaults

### Zod Schema Benefits

Content Collections use Zod for validation:

**Runtime validation:**
```typescript
// Invalid date format caught at build time
// Invalid enum value caught at build time
// Missing required field caught at build time
```

**Type inference:**
```typescript
// TypeScript types generated automatically
const post = await getEntry('writing', 'slug');
// post.data.type is typed as 'essay' | 'note'
```

---

### Default Values

```typescript
// In schema
z.boolean().optional().default(false)  // draft defaults to false
z.array(z.string()).optional().default([])  // tags defaults to []

// In code
const description = post.data.description ?? 'No description available';
const thumbnail = project.metadata.thumbnail || '/default-thumbnail.jpg';
```

---

## Data Loading Performance

### Static Generation

All data loaded at build time:
- Projects loaded once via `loadAllProjects()`
- Writing content queried once via `getCollection()`
- No runtime database queries
- Optimal performance

### Caching

Astro caches collection queries:
- First query loads all content
- Subsequent queries use cache
- Rebuilds only when content changes

---

## Future Data Models

Placeholder for future additions:

### Comments (if added)
```typescript
type Comment = {
  id: string;
  postSlug: string;
  author: string;
  content: string;
  date: Date;
  approved: boolean;
};
```

### Categories (if added)
```typescript
type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
};
```

---

**Last Updated:** 2024-11-26  
**See also:** 
- `.claude/context/patterns.md` for data loading patterns
- `src/types/` for actual type definitions
