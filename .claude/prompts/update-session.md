# Update Session Documentation Workflow

**Trigger phrases:** 
- "update session"
- "update session documentation"
- "update this session's documentation"

When user says any trigger phrase, execute this complete workflow.

---

## Phase 0: Gather Cross-Context Information

### Step 0.1: Review Desktop Context

Analyze current conversation for:
- **Decisions made** - Architectural choices, approach selections, trade-off evaluations
- **Blockers identified** - Things preventing progress
- **Questions surfaced** - Decisions needed but not yet made
- **Observations noted** - Patterns, insights, things to remember
- **Files read/written** - Track operations in Desktop session

Generate initial notes for each category.

---

### Step 0.2: Check Git Context

Execute these commands to understand Code session work:

```bash
# Get today's commits
git log --since="today" --pretty=format:"%h - %an - %s" --no-merotes

# Get recently modified files (last ~10 commits or today's work)
git diff --name-status HEAD~10..HEAD

# Get summary stats of changes
git diff --stat HEAD~10..HEAD
```

From git output, infer:
- **Files created** - New components, configs, types
- **Files modified** - Updates to existing code
- **Implementation work** - What was built based on commit messages
- **Refactoring done** - Restructuring or cleanup work

Generate notes about Code session work.

---

### Step 0.3: Present Context Findings

Show user what you've gathered:

```
=== CONTEXT GATHERED ===

📋 From Desktop Conversation:
- [Decisions made]
- [Blockers identified]
- [Questions surfaced]
- [Observations noted]

💻 From Git History:
- [Commits today]
- [Files created/modified]
- [Inferred implementation work]

❓ NEED CLARIFICATION:
1. [Specific unclear item]
2. [Another question]

Is this complete, or was there other work I should know about?
```

Wait for user response before proceeding.

---

## Phase 1: Generate Proposed Update

Based on confirmed context, draft updates for SESSION.md sections:

### 1.1: Most Recent Work (2-3 sentences)
Synthesize:
- Key accomplishments from both Desktop and Code
- What moved forward
- What got resolved

### 1.2: Immediate Next Actions (Priority-ordered list)
- Remove completed items
- Add new actions that emerged
- Reorder by priority based on progress
- Keep top 3-5 items focused

### 1.3: Current Blockers
- Add newly discovered blockers
- Remove resolved blockers
- Keep "None at the moment" if none exist

### 1.4: Active Decisions Needed
- Add new questions that surfaced
- Remove answered questions
- Keep context for each decision
- Note urgency/timeline

### 1.5: Files Currently In Play
List files modified/created in this session:
- From Desktop file operations
- From git changes
- Group by purpose (being created vs modified vs may need to reference)

### 1.6: Notes & Observations
Capture:
- Patterns emerging
- Insights about the codebase
- Things to remember for later
- Workflow improvements discovered

---

## Phase 2: Present for Review

Format the proposed update clearly:

```
=== PROPOSED SESSION UPDATE ===

⏱️  Last Updated: [Current timestamp]

✅ COMPLETED THIS SESSION:
[2-3 sentence summary]

⏭️  NEXT ACTIONS:
1. [Top priority action]
2. [Second priority]
3. [Third priority]

🚧 CURRENT BLOCKERS:
[List or "None at the moment"]

❓ DECISIONS NEEDED:
[List with context or "None identified"]

📁 FILES IN PLAY:
Being created/modified:
- [file] - [purpose]

May need to reference:
- [file] - [why relevant]

📝 OBSERVATIONS:
[Patterns, insights, notes]

=== END PROPOSED UPDATE ===

Does this look accurate? Any changes or additions?
```

Wait for user approval/edits.

---

## Phase 3: Apply Update

After user confirms or provides modifications:

### 3.1: Update SESSION.md

Modify these sections while preserving file structure:
- Update "Last Updated" timestamp
- Replace "Most recent work" content
- Update "Immediate Next Actions" list
- Update "Current Blockers" section
- Update "Active Decisions Needed" section  
- Update "Files Currently In Play" section
- Add to "Notes & Observations" (append, don't replace)

### 3.2: Show What Changed

Present a summary:
```
✅ SESSION.md updated successfully

Updated sections:
- Timestamp: [new timestamp]
- Most recent work: [show change]
- Next actions: [show additions/removals]
- Blockers: [show changes]
- Decisions: [show changes]
- Files: [show updated list]
- Observations: [show additions]

The session context is now current.
```

---

## Phase 4: Check for Architectural Updates

After updating SESSION.md, evaluate if CLAUDE.md needs updates:

**Ask yourself:**
- Was an architectural decision made that should be documented?
- Did file structure change significantly?
- Was an open architectural question resolved?
- Is a phase transition happening?

If YES to any:
```
📌 ARCHITECTURAL UPDATE NEEDED

I noticed [specific thing] which should be documented in CLAUDE.md.

Should I:
1. Update CLAUDE.md now
2. Add a reminder to SESSION.md to update CLAUDE.md later
3. Skip (not significant enough)

What would you like?
```

If NO to all:
- Silently continue, no mention needed

---

## Error Handling

### If git commands fail:
```
⚠️  Note: Couldn't check git history (are you in a git repo?).

I can only see Desktop context. Please tell me:
- What implementation work happened in Code?
- What files were created/modified?
```

### If SESSION.md doesn't exist:
```
⚠️  SESSION.md not found at .claude/SESSION.md

Should I:
1. Create a new SESSION.md with standard structure
2. Look in a different location
3. Skip this update
```

### If context is ambiguous:
- Ask specific clarifying questions
- Don't guess at important details
- Offer options when uncertain

---

## Best Practices

**When generating updates:**
- Be specific and concrete (not vague)
- Use past tense for completed work
- Use imperative for next actions
- Capture "why" for decisions, not just "what"
- Keep observations actionable

**When presenting to user:**
- Group related information
- Use clear formatting
- Highlight what needs attention
- Make it scannable

**When applying updates:**
- Preserve existing structure
- Don't lose information
- Append to observations (don't replace)
- Update timestamp last

---

## Success Criteria

A good session update:
- ✅ Synthesizes both Desktop and Code contexts
- ✅ Accurately reflects what got done
- ✅ Clearly prioritizes next actions  
- ✅ Captures blockers and decisions
- ✅ Documents files that matter
- ✅ Preserves useful observations
- ✅ Can orient Amos or future Claude in <2 minutes

---

**End of Workflow Definition**
