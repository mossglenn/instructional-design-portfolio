# Git Commit Message Guide for Claude Code

## Purpose

Generate descriptive commit messages that provide context for the session update workflow. Good commit messages help Claude Desktop understand what was built during Code sessions.

---

## Commit Message Pattern

Use this format for commits:

```
<type>(<scope>): <short summary>

<optional body with details>
```

### Type Options
- `feat` - New feature or functionality
- `fix` - Bug fix
- `refactor` - Code restructuring without behavior change
- `style` - Formatting, whitespace, CSS changes
- `docs` - Documentation updates
- `config` - Configuration file changes
- `test` - Adding or updating tests
- `chore` - Build tasks, dependency updates

### Scope Options (Project-Specific)
- `content` - Content Collections, schemas
- `writing` - Writing feature components/pages
- `portfolio` - Portfolio project components
- `layout` - Layout components
- `components` - Shared components
- `types` - TypeScript type definitions
- `config` - Astro/Tailwind/build config
- `data` - Project data files

### Examples

**Good commits:**
```
feat(content): add writing collection schema with essay/note types

Created Zod schema for writing content with required fields (title, 
type, date, tags) and optional fields (description, draft). Supports
both essay and note content types.
```

```
feat(writing): create WritingLayout component

Base layout for individual writing posts with metadata display,
type-specific styling, and reading time estimate. Handles both
essay and note types with different visual treatments.
```

```
fix(types): correct Project type export in project.ts

Fixed missing export causing build errors in project pages.
```

```
refactor(portfolio): extract card component for reuse

Moved project card markup into reusable ProjectCard.astro 
component to use across homepage and portfolio listing page.
```

**Bad commits (avoid these):**
```
wip
fixed stuff
updates
made changes to files
more work on writing feature
```

---

## Claude Code Workflow

### Option 1: Ask Claude Code to Generate Message

**When you're ready to commit:**

```
You: "Generate a commit message for the changes I just made"

Claude Code:
1. Reviews git diff
2. Understands what changed
3. Proposes commit message in proper format
4. Shows you for approval
```

**Example interaction:**
```
You: Generate a commit message for these changes

Claude Code: Based on the changes, I suggest:

feat(content): add writing collection schema

Created src/content/config.ts with Zod schema for writing collection.
Defines essay and note types with required fields (title, type, date, 
tags) and optional description field. Enables type-safe content queries.

Should I commit with this message?
```

---

### Option 2: Use Claude Code as Commit Message Copilot

**Setup a commit message template:**

Create `.gitmessage` in project root:

```
# Type: feat|fix|refactor|style|docs|config|test|chore
# Scope: content|writing|portfolio|layout|components|types|config|data
# 
# <type>(<scope>): <short summary (50 chars or less)>
#
# <optional body - wrap at 72 chars>
# - What was changed
# - Why it was changed
# - Any side effects or notable details
#
```

Configure git to use it:
```bash
git config commit.template .gitmessage
```

**Then when committing:**
```
You: "Help me write a commit message for this diff"

Claude Code: [Analyzes changes and fills in template]
```

---

### Option 3: Batch Commit Strategy

If making many small changes, commit in logical batches with Claude Code's help:

**During work:**
- Make changes
- Test/verify
- Stage related files: `git add <files>`

**Before committing:**
```
You: "Look at staged changes and suggest a commit message"

Claude Code:
1. Runs: git diff --cached
2. Analyzes what's staged
3. Proposes descriptive message
4. You approve or refine
```

**This creates meaningful commits that session update can parse.**

---

## Best Practices for Code Session Commits

### 1. Commit Frequently with Context
```
✅ Good: 5-10 focused commits per session
❌ Bad: 1 giant "wip" commit at end
```

### 2. Atomic Commits
Each commit should be one logical change:
```
✅ "feat(content): add writing schema"
✅ "feat(writing): create WritingLayout component"  
✅ "feat(writing): build post listing page"

❌ "feat(writing): add schema, layout, and listing page"
```

### 3. Body Details for Complex Changes
When commit involves trade-offs or non-obvious choices:
```
feat(content): use unified collection for essays and notes

Single 'writing' collection with type field instead of separate
collections. Avoids schema duplication and enables flexible
filtering while keeping implementation simple.

Trade-off: Type field must be manually set correctly.
```

### 4. Reference Issues/Decisions
If working from documented decisions:
```
feat(content): implement Content Collections approach

Implements decision documented in .claude/decisions/content-collections-choice.md
Using Zod schemas for type safety and native Astro integration.
```

---

## Quick Reference for Claude Code

When working in Claude Code, periodically say:

**To generate commit message:**
> "Generate a commit message for the current changes"

**To commit with message:**
> "Commit the staged changes with message: [message]"

**To see what would be committed:**
> "Show me git diff for staged files"

**To batch commit multiple related files:**
> "Stage these files and suggest a commit message: [files]"

---

## Integration with Session Update

These detailed commit messages enable Claude Desktop to:
- Understand what was built during Code sessions
- Infer implementation work without manual explanation
- Generate accurate session updates
- Track architectural changes

**The investment in good commit messages pays off in effortless session updates.**

---

## Template for Claude Code Prompt

Save this in your notes and use it in Code sessions:

```
When I'm ready to commit changes, I'll say "commit message please" 
and you should:

1. Run: git diff --cached (or git diff if nothing staged)
2. Analyze what changed and why
3. Generate a commit message following this format:
   <type>(<scope>): <summary>
   
   <body with details>
   
4. Show me the message for approval
5. After I approve, run: git commit -m "message"

Use these types: feat, fix, refactor, style, docs, config, test, chore
Use these scopes: content, writing, portfolio, layout, components, types, config, data

Make the summary concise but descriptive.
Add body details for non-obvious changes.
```

Then Claude Code will know your commit message pattern.

---

**End of Guide**
