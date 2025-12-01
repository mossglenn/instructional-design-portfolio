# Instructional Design Portfolio - Project Reference

**Repository:** `/Users/amosglenn/Dev/instructional-design-portfolio`  
**Last Major Update:** 2024-11-26  
**Current Phase:** Writing Feature Implementation

> **Note:** This document is stable reference material updated only at phase transitions or major architectural changes. For daily context and session-specific details, see `SESSION.md`.

---

## Project Purpose & Scope

### What This Site Does
Portfolio website for Amos Glenn showcasing instructional design and learning engineering work.

**Two primary functions:**

1. **Portfolio showcase** (Phase 0 - Complete)
   - Display completed instructional design projects
   - Embed interactive learning objects
   - Demonstrate design process and outcomes
   - Filterable by tags, roles, tools, accessibility features

2. **Writing platform** (Phase 1+ - In Development)
   - Publish polished essays on instructional design, learning science, AI
   - Share exploratory notes for idea development
   - Build reputation and thought leadership
   - Maintain content ownership (not dependent on Medium/Substack)

**Core constraints:**
- Static generation for performance
- Minimal maintenance overhead
- Clear brand identity: design thinker, strategist, learning engineer
- Social media as amplifiers, not content homes

### Technical Foundation
- **Stack:** Astro 5, TypeScript, Tailwind CSS
- **Philosophy:** File-based content, maintainability over features, solve real problems
- **Approach:** Two parallel content systems optimized for different use cases

---

## Site Architecture Overview

### Content Model

The site handles **two distinct content types** with different structures:

#### 1. Portfolio Projects
- **Location:** `src/data/projects/*.ts`
- **Format:** TypeScript modules exporting `Project` type
- **Structure:** Metadata (title, tags, roles, tools) + display content + learning object references
- **Pages:** Individual project pages in `src/pages/` (e.g., `ai-powered-learning-practice.astro`)
- **Dynamic loading:** `loadAllProjects.ts` imports all project modules
- **Status:** Complete and deployed

**Example project fields:**
```typescript
{
  id: 'gamified-statistics-tutor',
  link: '/gamified-statistics-tutor',
  display: { headline, subheading, hook, challenge, solution },
  metadata: { tags, roles, tools, accessibility },
  learningObjects: ['stats-tutorial-01']
}
```

#### 2. Writing Content
- **Location:** `src/content/writing/*.md`
- **Format:** Markdown with frontmatter
- **Structure:** Unified collection with type field (`essay` | `note`)
- **Pages:** Dynamic routes in `src/pages/writing/`
- **Dynamic loading:** Astro Content Collections API
- **Status:** In development

**Schema:**
```typescript
{
  title: string,
  type: 'essay' | 'note',
  date: Date,
  tags: string[],
  description?: string
}
```

**Architectural distinction:** Projects are TypeScript-first (code as content), writing is Markdown-first (content as files).

---

## File Structure

```
src/
├── pages/
│   ├── index.astro                    # Homepage
│   ├── [project-pages].astro          # Individual portfolio pages
│   ├── 404.astro                      # Error page
│   └── writing/                       # Writing routes
│
├── components/
│   ├── Header.astro, Footer.astro     # Site-wide chrome
│   ├── Cards, Carousels, Modals       # Shared UI components
│   ├── content/
│   │   ├── home/                      # Homepage sections
│   │   └── [project-name]/            # Project-specific content
│   └── writing/                       # Writing-specific components
│
├── content/
│   ├── config.ts                      # Content Collections schemas
│   └── writing/                       # Markdown files
│
├── data/
│   ├── projects/                      # Portfolio project definitions
│   ├── loadAllProjects.ts             # Dynamic project loader
│   └── learningObjects.ts             # Learning object configs
│
├── layouts/
│   └── Layout.astro                   # Base layout
│
├── types/
│   ├── project.ts                     # Portfolio types
│   └── writing.ts                     # Writing types
│
├── assets/
│   ├── featured/                      # Homepage carousel images
│   └── portfolio/                     # Project images by project
│
└── styles/
    └── global.css                     # Design tokens + Tailwind theme
```

```
public/
└── learning-objects/                  # Interactive HTML5/SCORM packages
    ├── stats-tutorial-01/
    ├── feedback-examples/
    └── ...
```

---

## Key Architectural Decisions

### Portfolio Content: TypeScript Modules vs Markdown
**Decision:** Use TypeScript for portfolio projects, Markdown for writing  
**Rationale:** 
- Projects have complex structure (metadata, learning objects, multi-section content)
- Type safety critical for project data integrity
- Pages already built around TypeScript imports
- Markdown better for long-form narrative writing

**Result:** Two parallel content systems optimized for different use cases

**When decided:** Phase 0 (Portfolio MVP)

---

### Writing Content: Content Collections vs MDX
**Decision:** Use Astro Content Collections with plain Markdown  
**Rationale:** 
- Type safety via Zod schemas
- Better performance (native Astro integration)
- Simpler mental model than MDX
- Works with existing static generation approach
- No need for component embedding in writing (unlike MDX's main use case)

**Trade-off accepted:** Requires workflow adjustment from current Obsidian → Git publishing process

**When decided:** Phase 1 planning  
**Documentation:** `.claude/decisions/content-collections-choice.md`

---

### Unified Writing Collection
**Decision:** Single `writing` collection with type field (`essay` | `note`)  
**Rationale:**
- Avoids duplication in schema and components
- Allows flexible filtering and mixed displays
- Simpler to maintain than separate collections
- Type field sufficient to control styling and behavior

**Implementation:** Type field controls CSS classes, metadata display, and filtering

**When decided:** Phase 1 planning

---

## How Systems Work

### Portfolio Project Flow
1. **Define project:** Create TypeScript file in `src/data/projects/`
2. **Auto-import:** `loadAllProjects.ts` dynamically imports all projects
3. **Create page:** Add `.astro` file in `src/pages/` using project data
4. **Create content components:** Build sections in `src/components/content/[project-name]/`
5. **Embed learning objects:** Reference by ID from `learningObjects.ts`

**Example:**
```typescript
// src/data/projects/gamified-statistics-tutor.ts
export default {
  id: 'gamified-statistics-tutor',
  display: {
    headline: 'Gamified Statistics Tutor',
    // ...
  },
  learningObjects: ['stats-tutorial-01']
}

// src/pages/gamified-statistics-tutor.astro
---
import project from '@/data/projects/gamified-statistics-tutor';
import IntroSection from '@content/gamified-statistics-tutor/IntroSection.astro';
---
<Layout>
  <IntroSection />
  <!-- More sections -->
</Layout>
```

---

### Learning Object Embedding
1. **Place package:** HTML5 package in `public/learning-objects/[name]/`
2. **Register:** Add entry to `learningObjects.ts`
3. **Reference:** Include ID in project's `learningObjects` array
4. **Embed:** Use `IframeLearningObject.astro` component

**Benefits:**
- Projects can embed multiple learning objects
- Learning objects reusable across projects
- Centralized configuration
- iframe isolation for third-party content

---

### Writing Content Flow (Planned)
1. **Compose:** Write in Obsidian with frontmatter
2. **Transfer:** Move finished draft to `src/content/writing/` in repo
3. **Validate:** Schema validation via Content Collections
4. **Generate:** Astro builds static pages
5. **Deploy:** Git push triggers deployment

---

### Homepage Composition
Homepage (`src/pages/index.astro`) assembles content sections:
- Hero section
- Featured projects carousel
- Skills/expertise overview
- Case study highlights
- Contact/CTA

Each section is an imported component from `src/components/content/home/`.

---

## Technical Patterns

### Import Aliases
```typescript
@/          → ./src/
@components → ./src/components/
@content    → ./src/components/content/
@layouts    → ./src/layouts/
@utilities  → ./src/utilities/
```

**Usage:**
- `@components` for shared UI (Header, Footer, Cards)
- `@content` for page-specific sections
- `@/` for everything else when no specific alias exists

---

### Component Patterns
- `.astro` files = server-rendered (default, no JS)
- `.tsx` files = React components (need `client:*` directive for interactivity)
- Use `client:load` for immediate interactivity (e.g., modals)
- Flowbite components need flowbite script (loaded in `Layout.astro`)

---

### Styling Approach
- Tailwind utilities first
- Custom design tokens in `src/styles/global.css` under `@theme{}`
- Flowbite components for UI patterns
- No component-specific CSS files unless necessary

---

### Data Loading Patterns

**For portfolio projects:**
```typescript
import { loadAllProjects } from '@/data/loadAllProjects';
const projects = await loadAllProjects();
```

**For writing content:**
```typescript
import { getCollection, getEntry } from 'astro:content';
const posts = await getCollection('writing');
const post = await getEntry('writing', slug);
```

---

## Writing Platform Strategy

### Content Types

**Essays:**
- Polished, published thinking
- ~1 per month expected
- Topics: instructional design, learning science, human-centered design, AI
- Longer form (1500-3000 words typical)

**Notes:**
- Exploratory, work-in-progress
- ~1-2 per week expected
- Responses to other writing, idea development
- Shorter form (300-800 words typical)

**Visual distinction:** Different styling/badging to set expectations

---

### Feature Requirements

**Phase 1 (Foundation):**
- Individual post pages
- Post listing page
- Type-specific styling (essay vs note)

**Phase 2 (Discovery):**
- Chronological browsing
- Tag/category filtering
- RSS feed
- Related posts logic

**Phase 3 (Enhancement):**
- Featured posts selection
- Full-text search
- Homepage integration
- Archive pages

---

### Explicitly Out of Scope
- Comments/discussion
- Social features
- Analytics beyond basic metrics
- Newsletter integration (handle separately via external service)

---

## Development Commands

```bash
npm run dev       # localhost:4321
npm run build     # Output: ./dist/
npm run preview   # Test production build
npm run lint      # ESLint check
```

---

## Documentation Map

**Project reference (you are here):**  
`.claude/CLAUDE.md` - Stable architectural reference

**Daily context:**  
`.claude/SESSION.md` - Current work state, updated every session

**Architectural decisions:**  
`.claude/decisions/` - Rationale for major choices

**Code patterns and conventions:**  
`.claude/context/patterns.md` - Reusable patterns  
`.claude/context/conventions.md` - Naming, structure, TypeScript rules

**Task tracking:**  
`.claude/tasks/current-sprint.md` - Detailed task breakdown

**Technical deep-dives:**  
`.claude/architecture/` - File structure, data models, component hierarchy

---

## Project Memory: Working with Amos

**Values in order:**
1. Maintainability over feature richness
2. Solving the real problem (not tool-first)
3. Clear documentation of decisions
4. Clean, purposeful code

**Brand themes to reinforce:**
- Bridges (connecting disciplines: learning science, design, technology)
- Clarity from ambiguity
- Science + design integration
- Applied learning engineering
- Practical over theoretical

**Communication preferences:**
- Challenge assumptions constructively
- Offer 2-4 options when brainstorming
- Flag trade-offs explicitly
- Skip generic explanations unless requested
- Provide code that's production-ready, not proof-of-concept

**Expertise areas:**
- Instructional design & learning engineering (expert-level)
- TypeScript, Astro, React (fluent, production-ready)
- Design systems & component architecture (strong)
- Content strategy (professional background)

---

## Open Architectural Questions

These require decisions before proceeding with related features:

### 1. Image Handling for Writing
**Context:** Portfolio images live in `src/assets/portfolio/` and are optimized. Writing images need similar strategy.

**Options:**
- Astro's native image optimization (consistent with portfolio)
- Manual optimization + public folder
- External CDN
- Hybrid approach (small images in repo, large in CDN)

**Decision needed before:** First essay with images

---

### 2. Workflow: Obsidian → Repo
**Context:** Obsidian vault is separate from repo for security/privacy. Current process requires manual file transfer.

**Options:**
- Accept as simplest solution (maintain separation)
- Script to bridge Obsidian vault → repo (automate copy)
- Move drafting into repo (lose Obsidian features)
- Git submodule approach (complex to maintain)

**Decision needed before:** Regular publishing begins

---

### 3. Content Discovery Implementation
**Context:** Features listed (filtering, search, related posts) but technical approach undefined.

**Questions:**
- Static pages per category/tag? (Use Astro's `getStaticPaths`)
- Client-side filtering? (Adds JS, but more flexible)
- How to calculate "related posts"? (Tag overlap? Manual curation? Date proximity?)
- Search implementation? (Static index + client-side? External service like Algolia?)

**Decision needed before:** Phase 2 of writing feature

---

### 4. Homepage Integration for Writing
**Context:** How/whether to surface writing content on homepage.

**Questions:**
- Featured post section on homepage?
- Latest writing snippet?
- Separate "Writing" link in nav sufficient?
- Risk of diluting portfolio focus?

**Decision needed before:** Phase 3 of writing feature

---

## Context Recovery for New Sessions

When starting a new session:

1. **Read SESSION.md first** for immediate context
2. **Review this file (CLAUDE.md)** for architectural understanding
3. **Check relevant decision docs** in `.claude/decisions/` if working on decided features
4. **Review task breakdown** in `.claude/tasks/current-sprint.md` for detailed work items

**If continuing work:**
- SESSION.md shows what was just completed
- SESSION.md lists immediate next actions
- SESSION.md flags any blockers

**If context seems stale:**
- Check SESSION.md last updated date
- Ask Amos for current state before proceeding
- Update SESSION.md together at session start

---

## Maintenance Schedule

**Update this file (CLAUDE.md) when:**
- Completing a phase (e.g., Phase 1 → Phase 2)
- Making architectural decisions (add to Key Architectural Decisions)
- Changing file structure significantly (update File Structure section)
- Resolving open architectural questions (move from Open Questions to Decisions)
- Adding new major features or systems

**Do NOT update this file for:**
- Daily progress on tasks
- Session-specific blockers
- Immediate next actions
- Files currently being worked on
- Minor bug fixes or tweaks

Those belong in SESSION.md.

---

**End of Stable Reference Documentation**
