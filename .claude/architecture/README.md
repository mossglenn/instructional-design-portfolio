# Architecture Documentation Index

Technical deep-dives for the Instructional Design Portfolio project.

---

## Available Documents

### [File Structure](./file-structure.md)
Complete directory structure with descriptions for every folder and file type in the project.

**Read this when:**
- Starting work on the project
- Looking for where specific files should go
- Understanding the organization system
- Adding new features

**Key topics:**
- Source code organization
- Asset management
- Import aliases
- Configuration files

---

### [Data Models](./data-models.md)
Comprehensive reference for all data structures, types, and schemas used throughout the project.

**Read this when:**
- Creating new content types
- Querying existing data
- Understanding relationships between entities
- Writing components that consume data

**Key topics:**
- Portfolio project model
- Writing content schema
- Learning objects
- Type definitions and validation

---

## Future Documents

As the project grows, consider adding:

### Component Hierarchy
- Component tree visualization
- Parent-child relationships
- Prop flow diagrams
- State management patterns

### Routing Architecture
- Page routing structure
- Dynamic route patterns
- Navigation flow
- URL structure decisions

### Build and Deployment
- Build process steps
- Optimization strategies
- Deployment pipeline
- Environment configurations

### Performance Optimization
- Bundle analysis
- Code splitting strategies
- Image optimization
- Caching approaches

---

## How to Use This Documentation

**For new team members:**
1. Start with [File Structure](./file-structure.md) to understand organization
2. Read [Data Models](./data-models.md) to understand data flow
3. Reference `.claude/context/conventions.md` for coding standards
4. Review `.claude/context/patterns.md` for common patterns

**For implementing features:**
1. Check [Data Models](./data-models.md) for existing types
2. Review [File Structure](./file-structure.md) for where to place files
3. Follow patterns in `.claude/context/patterns.md`
4. Document decisions in `.claude/decisions/`

**For understanding decisions:**
1. Check `.claude/decisions/` for architectural choices
2. Review this directory for technical implementation
3. See `.claude/CLAUDE.md` for high-level context

---

## Maintaining Documentation

**Update architecture docs when:**
- Adding new major features
- Changing file organization significantly
- Introducing new data models
- Refactoring core systems

**Don't update for:**
- Adding individual components (follow existing patterns)
- Minor tweaks to existing features
- Bug fixes that don't change architecture

---

**Last Updated:** 2024-11-26
