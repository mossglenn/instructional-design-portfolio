# Decision Log Index

This directory contains architectural decision records (ADRs) documenting major technical choices for the project.

---

## Active Decisions

### [001 - Content Collections vs MDX](./001-content-collections-choice.md)
**Status:** Accepted  
**Date:** 2024-11-26  
**Summary:** Use Astro Content Collections with plain Markdown for writing platform instead of MDX or external CMS.

---

## Decision Template

When documenting a new decision, create a file: `NNN-short-title.md`

Use this structure:

```markdown
# Decision: [Title]

**Date:** YYYY-MM-DD
**Status:** Proposed | Accepted | Superseded | Deprecated
**Deciders:** [Names]
**Phase:** [Which phase this relates to]

## Context
[What problem are we solving?]

## Decision
[What was decided?]

## Options Considered
[What alternatives were evaluated?]

## Rationale
[Why this choice over others?]

## Consequences
[What are the positive and negative outcomes?]

## Implementation Notes
[Specific technical details]

## Review Date
[When to revisit this decision]

## References
[Links to discussions, docs, examples]
```

---

## Decision Categories

**Architecture:** Core structural choices (e.g., content systems, routing patterns)  
**Technology:** Tool/library selections (e.g., Content Collections, Tailwind version)  
**Process:** Workflow and development patterns (e.g., deployment strategy)  
**Content:** Content strategy and organization (e.g., essay vs note distinction)

---

## Reviewing Decisions

Review decisions when:
- Completing a phase
- Encountering friction from a decision
- Technology landscape changes significantly
- New requirements emerge

Mark outdated decisions as "Superseded" and link to replacement.

---

**Next Decision Number:** 002
