# Decision: Content Collections vs MDX for Writing Platform

**Date:** 2024-11-26  
**Status:** Accepted  
**Deciders:** Amos Glenn  
**Phase:** Writing Feature - Phase 1

---

## Context

Need to implement a writing platform feature for the portfolio site to publish:
- Polished essays (instructional design, learning science, AI topics)
- Exploratory notes (work-in-progress thinking, responses to other writing)

Portfolio projects already use TypeScript modules for content. Need to determine best approach for long-form writing content.

---

## Decision

Use **Astro Content Collections** with plain Markdown (not MDX).

---

## Options Considered

### Option 1: Astro Content Collections (Chosen)
- Markdown files in `src/content/writing/`
- Zod schemas for type safety
- Native Astro integration
- Static generation

### Option 2: MDX
- Markdown + JSX components
- More flexible for embedding components
- Requires additional compilation
- More complex mental model

### Option 3: Continue TypeScript Pattern
- Extend portfolio's TypeScript module approach
- Consistent with existing system
- Awkward for long-form narrative content

### Option 4: External CMS
- Headless CMS (Contentful, Sanity, etc.)
- More features (preview, scheduling, etc.)
- Adds dependency and complexity
- Monthly costs

---

## Rationale

### Why Content Collections:

**Type Safety**
- Zod schemas provide runtime validation
- Type-safe queries in components
- Catch errors at build time

**Performance**
- Native Astro integration means optimal performance
- Static generation fits existing architecture
- No runtime overhead

**Simplicity**
- Straightforward mental model (files → content)
- Markdown is universal and portable
- Easy to migrate if needed later

**Ecosystem Fit**
- Works seamlessly with existing Astro setup
- Consistent with static site philosophy
- Well-documented and supported

### Why Not MDX:

**No Component Embedding Need**
- Writing content is narrative, not interactive
- Don't need to embed React components in posts
- MDX's main benefit doesn't apply here

**Added Complexity**
- Requires additional compilation step
- More complex error handling
- Harder to debug

**Markdown Sufficient**
- Standard markdown covers writing needs
- Frontmatter handles metadata
- Can add components via layouts if needed

### Why Not TypeScript Modules:

**Poor Fit for Writing**
- Long prose awkward in TypeScript strings
- Loses markdown editor benefits
- Content and code should be separate

**Workflow Friction**
- Would require writing in code editor exclusively
- Can't use markdown-specific tools
- Harder to preview

### Why Not External CMS:

**Ownership Priority**
- Want full control of content
- No vendor lock-in
- No recurring costs

**Unnecessary Complexity**
- Don't need collaboration features
- Don't need scheduling or workflows
- Don't need visual editors

**Maintenance Overhead**
- Another system to manage
- API integration to maintain
- Backup/migration concerns

---

## Consequences

### Positive:

✅ Type-safe content with Zod schemas  
✅ Optimal performance (static generation)  
✅ Simple mental model (files = content)  
✅ Portable content (standard markdown)  
✅ No additional dependencies  
✅ Works with existing build pipeline  

### Negative:

⚠️ Requires workflow adjustment from Obsidian → Git  
⚠️ Less flexible than MDX (can't embed components in content)  
⚠️ Manual file management (no CMS UI)  

### Accepted Trade-offs:

**Workflow friction:** Manual copy from Obsidian to repo is acceptable. Simple process, maintains separation between private notes and public content. Can script later if it becomes problematic.

**No component embedding:** Not needed for current use case. If we later need interactive elements in posts, can:
- Add via layout components
- Use Astro islands pattern
- Migrate to MDX at that time

**Manual file management:** Acceptable for solo authoring. Version control provides sufficient history/backup. No need for CMS overhead.

---

## Implementation Notes

**Schema structure:**
```typescript
writing: defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.enum(['essay', 'note']),
    date: z.date(),
    tags: z.array(z.string()),
    description: z.string().optional()
  })
})
```

**File organization:**
```
src/content/writing/
├── my-essay.md
├── my-note.md
└── another-essay.md
```

**Query pattern:**
```typescript
import { getCollection } from 'astro:content';
const posts = await getCollection('writing');
const essays = posts.filter(p => p.data.type === 'essay');
```

---

## Review Date

Review this decision at Phase 2 completion (after implementing discovery features). Evaluate if:
- Workflow friction has become problematic
- Need for component embedding has emerged
- Performance remains acceptable
- Migration to MDX would provide clear value

---

## References

- [Astro Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
- [MDX in Astro docs](https://docs.astro.build/en/guides/markdown-content/)
- Discussion in SESSION.md from 2024-11-26

---

**Status: Implemented in Phase 1**
