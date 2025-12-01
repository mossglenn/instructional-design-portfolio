
# Instructional Design Portfolio - Claude Context

**Last Updated:** 2024-11-26 4:05 PM  
**Current Phase:** Writing Feature Implementation  
**Active Branch:** AddBlog  
**Repository:** `/Users/amosglenn/Dev/instructional-design-portfolio`

---

## Session Handoff

**Last worked on:** 2024-11-26  
**Context:** Implementing Astro Content Collections for writing platform feature. This is an addition to existing portfolio site that showcases instructional design projects. Foundation work in progress - schema definition and component structure decisions being made.

**Immediate next actions:**
1. Finalize content schema in `src/content/config.ts` (essay vs note differentiation)
2. Create base writing layout component
3. Build post listing page with filtering by type

**Current blockers:**
- Image handling strategy for markdown content needs decision
- RSS feed implementation approach TBD

**Critical files to review for context:**
- `src/content/config.ts` - Content Collections schema
- `src/data/projects/` - Existing portfolio project definitions (for comparison)
- `.claude/decisions/content-collections-choice.md` - Why this approach
- `.claude/tasks/current-sprint.md` - Detailed task breakdown

---

## Project Purpose & Scope

### What This Site Does
Portfolio website for Amos Glenn showcasing instructional design and learning engineering work.

**Two primary functions:**

1. **Portfolio showcase** (existing, complete)
   - Display completed instructional design projects
   - Embed interactive learning objects
   - Demonstrate design process and outcomes
   - Filterable by tags, roles, tools, accessibility features

2. **Writing platform** (in progress)
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
- **Current state:** MVP portfolio complete and functional, writing feature being added

---

## Site Architecture Overview

### Content Model

The site handles **two distinct content types** with different structures:

#### 1. Portfolio Projects (Existing System)
Project Pages and Project Data are different. Project pages have urls and richly display the project to the visitor. Project Data does not have a URL and are used by pages to display project details. The portfolio navigation page at `src/pages/portfolio.astro` uses the Project Data in combination with Astro components to generate a card for each project containing an overview and a link to the Project Page. 
- **Pages:** Individual project pages in `src/pages/` (e.g., `ai-powered-learning-practice.astro`)
  - **Pages Content**: Each project page imports all content as components from the corresponding directory in `src/components/content/`
- **Data:** Each project has a TypeScript module in `src/data/projects/*.ts`
  - **Format:** TypeScript modules exporting `Project` type
  - **Structure:** Metadata (title, tags, roles, tools) + display content + learning object references
  - **Dynamic loading:** `loadAllProjects.ts` imports all Project Data modules

**Example Project Data fields:**
```typescript
{
  id: 'gamified-statistics-tutor',
  link: '/gamified-statistics-tutor',
  display: { headline, subheading, hook, challenge, solution },
  metadata: { tags, roles, tools, accessibility },
  learningObjects: ['stats-tutorial-01']
}
```

#### 2. Writing Content (New System - In Progress)
- **Location:** `src/content/writing/*.md`
- **Format:** Markdown with frontmatter
- **Structure:** Unified collection with type field (`essay` | `note`)
- **Pages:** To be created in `src/pages/writing/`
- **Dynamic loading:** Astro Content Collections API

**Planned schema:**
```typescript
{
  title: string,
  type: 'essay' | 'note',
  date: Date,
  tags: string[],
  description?: string
}
```

**Key architectural difference:** Projects are TypeScript-first (code as content), writing is Markdown-first (content as files).

---

## Critical File Structure

```
src/
├── pages/
│   ├── index.astro                    # Homepage (complete)
│   ├── [project-pages].astro          # Individual portfolio pages (complete)
│   ├── 404.astro                      # Error page (complete)
│   └── writing/                       # Writing routes (TO BUILD)
│
├── components/
│   ├── Header.astro, Footer.astro     # Site-wide chrome (complete)
│   ├── Cards, Carousels, Modals       # Shared UI components (complete)
│   ├── content/
│   │   ├── home/                      # Homepage sections (complete)
│   │   └── [project-name]/            # Project-specific content (complete)
│   └── writing/                       # Writing-specific components (TO BUILD)
│
├── content/
│   ├── config.ts                      # Content Collections schemas (IN PROGRESS)
│   └── writing/                       # Markdown files (TO POPULATE)
│
├── data/
│   ├── projects/                      # Portfolio project definitions (complete)
│   ├── loadAllProjects.ts             # Dynamic project loader (complete)
│   └── learningObjects.ts             # Learning object configs (complete)
│
├── layouts/
│   └── Layout.astro                   # Base layout (complete)
│
├── types/
│   ├── project.ts                     # Portfolio types (complete)
│   └── writing.ts                     # Writing types (MAY NEED TO CREATE)
│
├── assets/
│   ├── featured/                      # Homepage carousel images (complete)
│   └── portfolio/                     # Project images by project (complete)
│
└── styles/
    └── global.css                     # Design tokens + Tailwind theme (complete)
```

```
public/
└── learning-objects/                  # Interactive HTML5/SCORM packages (complete)
    ├── stats-tutorial-01/
    ├── feedback-examples/
    └── ...
```

**Legend:**
- (complete) = Working and deployed
- (IN PROGRESS) = Active work area
- (TO BUILD) = Next phase
- (TO POPULATE) = Infrastructure ready, content pending

---

## Implementation Status

### ✅ Phase 0: Portfolio MVP (Complete)
- [x] Core design system (Tailwind + custom tokens)
- [x] Homepage with project showcase
- [x] Individual portfolio project pages
- [x] Component architecture for reusable UI
- [x] Learning object embedding system
- [x] Responsive layouts
- [x] Custom import aliases
- [x] Build and deployment pipeline

### 🚧 Phase 1: Writing Foundation (In Progress)
- [x] Content Collections approach decided
- [x] Component structure planned
- [ ] Writing schema finalized
- [ ] Base writing layout component
- [ ] Post listing page
- [ ] Individual post pages
- [ ] Type-specific styling (essay vs note)

### 📋 Phase 2: Writing Discovery (Planned)
- [ ] Chronological browsing
- [ ] Tag/category filtering
- [ ] RSS feed generation
- [ ] Related posts logic
- [ ] Featured posts selection

### 📋 Phase 3: Writing Enhancement (Future)
- [ ] Full-text search
- [ ] Homepage integration (featured writing)
- [ ] Archive pages
- [ ] Tag index pages

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

### Writing Content: Content Collections vs MDX
**Decision:** Use Astro Content Collections with plain Markdown  
**Rationale:** 
- Type safety via Zod schemas
- Better performance (native Astro integration)
- Simpler mental model than MDX
- Works with existing static generation approach
- No need for component embedding in writing (unlike MDX's main use case)

**Trade-off accepted:** Requires workflow adjustment from current Obsidian → Git publishing process

**Location:** `.claude/decisions/content-collections-choice.md`

### Unified Writing Collection
**Decision:** Single `writing` collection with type field (`essay` | `note`)  
**Rationale:**
- Avoids duplication in schema and components
- Allows flexible filtering and mixed displays
- Simpler to maintain than separate collections
- Type field sufficient to control styling and behavior

**Implementation:** Type field controls CSS classes, metadata display, and filtering

---

## How the Portfolio System Works

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

### Homepage Composition
Homepage (`src/pages/index.astro`) assembles content sections:
- Hero section
- Featured projects carousel
- Skills/expertise overview
- Case study highlights
- Contact/CTA

Each section is an imported component from `src/components/content/home/`.

---

## How the Writing System Will Work

### Writing Content Flow (Planned)
1. **Compose:** Write in Obsidian with frontmatter
2. **Transfer:** Move finished draft to `src/content/writing/` in repo
3. **Validate:** Schema validation via Content Collections
4. **Generate:** Astro builds static pages
5. **Deploy:** Git push triggers deployment

### Writing Pages (To Build)
- `/writing` - Main listing page (chronological, filterable)
- `/writing/[slug]` - Individual post pages
- `/writing/essays` - Filter to essays only
- `/writing/notes` - Filter to notes only
- `/writing/tags/[tag]` - Posts by tag

### Content Collections Pattern
```typescript
// Query all writing
import { getCollection } from 'astro:content';
const allPosts = await getCollection('writing');

// Filter by type
const essays = allPosts.filter(post => post.data.type === 'essay');
const notes = allPosts.filter(post => post.data.type === 'note');

// Sort by date
const sorted = allPosts.sort((a, b) => b.data.date - a.data.date);
```

---

## Technical Patterns to Follow

### Import Aliases (Always Use These)
```typescript
@/          → ./src/
@components → ./src/components/
@content    → ./src/components/content/
@layouts    → ./src/layouts/
@utilities  → ./src/utilities/
```

**Usage guidance:**
- `@components` for shared UI (Header, Footer, Cards)
- `@content` for page-specific sections
- `@/` for everything else when no specific alias exists

### Component Patterns
- `.astro` files = server-rendered (default, no JS)
- `.tsx` files = React components (need `client:*` directive for interactivity)
- Use `client:load` for immediate interactivity (e.g., modals)
- Flowbite components need flowbite script (loaded in `Layout.astro`)

### Styling Approach
- Tailwind utilities first
- Custom design tokens in `src/styles/global.css` under `@theme{}`
- Flowbite components for UI patterns
- No component-specific CSS files unless necessary

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

## Writing Platform Context

### Content Strategy

**Essays:**
- Polished and publishable thinking
- ~1 per month expected
- Topics: instructional design, learning science, human-centered design, AI
- Longer form (1500-3000 words typical)

**Notes:**
- Exploratory, work-in-progress
- ~1-2 per week expected
- Responses to other writing, idea development
- Shorter form (300-800 words typical)

**Visual distinction:** Different styling/badging to set expectations

### Required Features
- Separate display styling per type
- Freeform tags for filtering
- RSS feed
- Related posts/recommendations
- Chronological browsing
- Archive pages

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

**For architectural decisions:**  
`.claude/decisions/` - Rationale for major choices

**For code patterns and conventions:**  
`.claude/context/patterns.md` - Reusable patterns  
`.claude/context/conventions.md` - Naming, structure, TypeScript rules

**For task tracking:**  
`.claude/tasks/current-sprint.md` - Detailed breakdown of writing feature work

**For technical reference:**  
`.claude/architecture/` - File structure, data models, component hierarchy

---

## Known Issues & Open Questions

### 1. Image Handling for Writing
**Issue:** No defined approach for images in markdown content  
**Context:** Portfolio images live in `src/assets/portfolio/` and are optimized. Writing images need similar strategy.

**Options to evaluate:**
- Astro's native image optimization (consistent with portfolio)
- Manual optimization + public folder
- External CDN
- Hybrid approach (small images in repo, large in CDN)

**Decision needed before:** First essay with images

### 2. Workflow Friction: Obsidian → Repo
**Issue:** Manual copy from Obsidian vault to repo is friction point  
**Context:** Obsidian vault is separate from repo for security/privacy. Current process requires manual file transfer.

**Options to evaluate:**
- Accept as simplest solution (maintain separation)
- Script to bridge Obsidian vault → repo (automate copy)
- Move drafting into repo (lose Obsidian features)
- Git submodule approach (complex to maintain)

**Decision needed before:** Regular publishing begins (experiencing friction firsthand will inform choice)

### 3. Content Discovery Architecture
**Issue:** Features listed (filtering, search, related posts) but technical approach undefined  

**Questions:**
- Static pages per category/tag? (Use Astro's `getStaticPaths`)
- Client-side filtering? (Adds JS, but more flexible)
- How to calculate "related posts"? (Tag overlap? Manual curation? Date proximity?)
- Search implementation? (Static index + client-side? External service like Algolia?)

**Decision needed before:** Phase 2 of writing feature

### 4. Homepage Integration for Writing
**Issue:** How/whether to surface writing content on homepage  

**Questions:**
- Featured post section on homepage?
- Latest writing snippet?
- Separate "Writing" link in nav sufficient?
- Risk of diluting portfolio focus?

**Decision needed before:** Phase 3 of writing feature

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

## Context Recovery Checklist

If starting a new session and need to understand current state:

1. **Read Session Handoff** at top for immediate context
2. **Review Implementation Status** to see what's complete vs in-progress
3. **Understand dual content systems:**
   - Portfolio = TypeScript modules (complete)
   - Writing = Markdown + Content Collections (in progress)
4. **Check Critical File Structure** to know where to look
5. **Read relevant decision docs** in `.claude/decisions/`
6. **Review current sprint tasks** in `.claude/tasks/current-sprint.md`

**If asked to continue work:**
- Confirm which feature (portfolio vs writing)
- Verify which phase we're in
- Identify what was just completed
- Clarify immediate next action

**If asked about portfolio system:**
- It's complete and working
- Changes should be additive, not disruptive
- Refer to existing patterns in `src/data/projects/` and `src/pages/`

**If asked about writing system:**
- It's under active development
- Focus on Phase 1 foundation work
- Schema and component structure are decision points
- Implementation follows portfolio patterns where applicable

