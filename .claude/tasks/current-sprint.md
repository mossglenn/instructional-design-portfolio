# Current Sprint: Writing Feature - Phase 1 Foundation

**Sprint Goal:** Implement core writing platform infrastructure  
**Started:** 2024-11-26  
**Target Completion:** TBD  
**Status:** In Progress

---

## Sprint Overview

Build the foundational infrastructure for the writing platform feature. This includes Content Collections setup, schema definition, base components, and basic routing.

**Success criteria:**
- Content Collections configured and validated
- Can create and render writing content (essays and notes)
- Basic listing and individual post pages working
- Type-specific styling functional

---

## Task Breakdown

### 1. Content Collections Schema ⏳

**Status:** In Progress  
**Priority:** High  
**Estimated effort:** 2-3 hours

**Tasks:**
- [ ] Define Zod schema in `src/content/config.ts`
  - [ ] Required fields: title, type, date, tags
  - [ ] Optional fields: description, draft status
  - [ ] Type enum: 'essay' | 'note'
- [ ] Create type definitions if needed
- [ ] Test schema with sample markdown file
- [ ] Verify type safety in queries

**Blockers:** None

**Notes:**
- Schema structure discussed in SESSION.md
- Reference decision: `.claude/decisions/001-content-collections-choice.md`

**Files to create/modify:**
- `src/content/config.ts` (create or modify)
- `src/types/writing.ts` (may need to create)

---

### 2. Base Writing Layout 📋

**Status:** Not Started  
**Priority:** High  
**Estimated effort:** 3-4 hours

**Tasks:**
- [ ] Create `src/layouts/WritingLayout.astro`
- [ ] Implement metadata display (title, date, tags, type)
- [ ] Add type-specific styling (essay vs note badges/colors)
- [ ] Calculate and display reading time
- [ ] Add tag list component
- [ ] Ensure responsive design
- [ ] Test with both content types

**Depends on:** Task 1 (schema must be defined)

**Blockers:** None

**Notes:**
- Should follow existing layout patterns from portfolio
- Reference: `src/layouts/Layout.astro` for base structure
- Consider extracting tag display as reusable component

**Files to create:**
- `src/layouts/WritingLayout.astro`
- Possibly `src/components/writing/TagList.astro`

---

### 3. Individual Post Pages 📋

**Status:** Not Started  
**Priority:** High  
**Estimated effort:** 2-3 hours

**Tasks:**
- [ ] Create `src/pages/writing/[...slug].astro`
- [ ] Implement `getStaticPaths()` for dynamic routing
- [ ] Use WritingLayout for rendering
- [ ] Render markdown content
- [ ] Add prev/next post navigation (optional Phase 1)
- [ ] Test with sample posts

**Depends on:** Task 1 (schema), Task 2 (layout)

**Blockers:** None

**Notes:**
- Use catch-all route `[...slug]` for flexibility
- Follow pattern from Content Collections docs
- Consider breadcrumb navigation

**Files to create:**
- `src/pages/writing/[...slug].astro`

---

### 4. Post Listing Page 📋

**Status:** Not Started  
**Priority:** High  
**Estimated effort:** 3-4 hours

**Tasks:**
- [ ] Create `src/pages/writing/index.astro`
- [ ] Query all posts via `getCollection('writing')`
- [ ] Sort by date (newest first)
- [ ] Implement post card component
- [ ] Add filter controls (essays vs notes vs all)
- [ ] Add tag filtering (optional Phase 1)
- [ ] Implement pagination (optional Phase 1)
- [ ] Test with multiple posts

**Depends on:** Task 1 (schema), Task 3 (individual pages for links)

**Blockers:** None

**Notes:**
- Consider grid vs list layout
- Mobile-first responsive design
- Extract post card as reusable component

**Files to create:**
- `src/pages/writing/index.astro`
- `src/components/writing/PostCard.astro`
- Possibly `src/components/writing/FilterControls.astro`

---

### 5. Sample Content Creation 📋

**Status:** Not Started  
**Priority:** Medium  
**Estimated effort:** 1-2 hours

**Tasks:**
- [ ] Create 2-3 sample essays in `src/content/writing/`
- [ ] Create 2-3 sample notes in `src/content/writing/`
- [ ] Ensure varied tags for testing filtering
- [ ] Test schema validation with real content
- [ ] Verify rendering in both layouts

**Depends on:** Task 1 (schema)

**Blockers:** None

**Notes:**
- Can use Lorem Ipsum or actual draft content
- Test edge cases (long titles, many tags, etc.)
- Verify date formatting

**Files to create:**
- `src/content/writing/*.md` (multiple files)

---

## Optional Phase 1 Tasks

These can be deferred to Phase 2 if time is limited:

### 6. Navigation Integration 📋

**Priority:** Low  
**Estimated effort:** 1 hour

**Tasks:**
- [ ] Add "Writing" link to main navigation
- [ ] Update Header.astro component
- [ ] Test navigation flow

**Files to modify:**
- `src/components/Header.astro`

---

### 7. Type-Specific Index Pages 📋

**Priority:** Low  
**Estimated effort:** 1-2 hours

**Tasks:**
- [ ] Create `src/pages/writing/essays.astro`
- [ ] Create `src/pages/writing/notes.astro`
- [ ] Filtered views by type
- [ ] Add navigation between views

**Depends on:** Task 4 (listing page pattern established)

**Files to create:**
- `src/pages/writing/essays.astro`
- `src/pages/writing/notes.astro`

---

## Phase 2 Preview

Not in current sprint, but on the horizon:

- RSS feed generation
- Related posts logic
- Featured posts selection
- Tag index pages
- Search functionality

---

## Sprint Notes

### Decisions Made
- Using unified collection with type field (vs separate collections)
- Plain Markdown (vs MDX)
- See: `.claude/decisions/001-content-collections-choice.md`

### Open Questions
- Optional schema fields: which to include in Phase 1?
- Default sort order for listing (newest vs oldest)?
- Pagination strategy (if needed in Phase 1)?

### Risks
- Image handling strategy still undefined (deferred until needed)
- Workflow friction with Obsidian → Git (accepted for now)

---

## Daily Progress Log

### 2024-11-26
- Created documentation structure
- Defined Content Collections decision
- Established code conventions and patterns
- Ready to begin schema implementation

---

## Sprint Retrospective

_(To be completed at sprint end)_

**What went well:**

**What could be improved:**

**Action items for next sprint:**

---

**Last Updated:** 2024-11-26
