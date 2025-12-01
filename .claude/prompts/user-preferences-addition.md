# User Preferences Addition for Session Update Workflow

Add this section to your Claude user preferences:

---

## Session Documentation Workflow

**When I say "update session" or "update session documentation":**

Follow the complete workflow defined in `.claude/prompts/update-session.md`. This workflow:

1. **Gathers context from multiple sources:**
   - Reviews our Desktop conversation for decisions, blockers, observations
   - Checks git log for Code session work (commits, file changes)
   - Identifies what was completed and what's next

2. **Presents findings for confirmation:**
   - Shows what was discovered from both contexts
   - Asks clarifying questions for uncertain items
   - Waits for my approval before updating files

3. **Generates proposed update:**
   - Synthesizes Desktop and Code contexts
   - Drafts updates for all SESSION.md sections
   - Formats clearly for review

4. **Applies approved update:**
   - Updates SESSION.md with confirmed information
   - Shows summary of changes
   - Checks if CLAUDE.md needs architectural updates

**Key behaviors:**
- Always check git history to capture Code session work
- Ask questions when context is unclear or incomplete
- Present proposed update BEFORE writing to file
- Be specific and concrete in updates (not vague)
- Synthesize cross-context work into coherent narrative

**This enables effortless session documentation that captures work from both Claude Desktop and Claude Code.**

---

**How to add this to your preferences:**

1. Go to Settings → Profile → User Preferences
2. Scroll to the end of your existing preferences
3. Copy and paste the section above
4. Save

Once added, Claude will recognize "update session" as a trigger for the complete workflow.
