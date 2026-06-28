# Contributing to Actually Free

Thank you for helping build the most accurate free-tier directory! This project is maintained by the community. Every contribution keeps the data current and trustworthy.

## Reporting Issues

### Outdated or Inaccurate Free Tier

Found a tool that changed its pricing or limits? **This is the most valuable contribution.** Open an issue with:

- Tool name and link
- What changed (e.g., "pricing page now requires credit card")
- Link to the current pricing page proving the change
- Today's date

We prioritize data accuracy above new entries. Outdated info is worse than no info.

### Other Issues

- **Broken links**: Open an issue with the tool name and URL.
- **Missing feature**: Describe what you'd like to search or filter by.
- **Bug reports**: Include steps to reproduce and what you expected.

## Making a Contribution

### Branch Naming

Use descriptive prefixes:

- `feat/add-tool-name` — Add a new tool entry
- `fix/issue-description` — Fix a bug or broken link
- `data/verify-or-update-tools` — Verify existing data or update outdated entries

### Fork → Branch → Commit → Push → PR

```bash
# Fork the repo (via GitHub UI)

# Clone your fork
git clone https://github.com/YOUR-USERNAME/actually-free.git
cd actually-free

# Create a branch
git checkout -b feat/add-tool-name

# Make your changes
# (see sections below for what each type of change needs)

# Format and lint before committing
npm run format && npm run lint

# Commit with a clear message
git commit -m "Add Figma to design tools with free tier verification"

# Push to your fork
git push origin feat/add-tool-name
```

Then open a pull request from your fork to `main`. [Link back to this guide](./CONTRIBUTING.md) in your PR description.

## Code Style

We use **Prettier** for formatting and **ESLint/Oxlint** for linting.

**Before committing, always run:**

```bash
npm run format && npm run lint
```

This ensures consistency. CI will reject PRs that don't pass linting.

## Adding a New Tool Entry

All new entries **must**:

1. **Require no credit card** — Verify the pricing page explicitly says so
2. **Be free forever** (not a trial) — 1-month trials don't count
3. **Include a source link** — The tool's current pricing page

### Data Format

Edit `src/data/tools.js` and add an entry with:

```javascript
{
  id: "figma",
  name: "Figma",
  category: "design",
  description: "UI/UX design tool. 3 projects free.",
  limitation: "3 projects, 2GB storage, read-only access for viewers",
  url: "https://figma.com",
  generosity: 4,
  noCardRequired: true,
  paidTierHint: "Pro $12/mo",
  openSource: false,
  source: "https://figma.com/pricing" // Your verification link
}
```

**Fields explained:**

- `id`: Lowercase, no spaces. Used for deduplication.
- `name`: Display name.
- `category`: Must be one of the categories in `src/data/categories.js`.
- `description`: 1–2 sentences. What can users do for free?
- `limitation`: The honest ceiling. Be specific: "3 projects", not "limited projects".
- `generosity`: 1–5 scale (1 = barely useful, 5 = nearly production-grade).
- `paidTierHint` (optional): Cheapest paid upgrade, e.g., "Pro $4/mo" or "Team plan $20/mo".
- `openSource` (optional): Set `true` if the tool is open-source.
- `source`: Link to the pricing page you verified. This is required.

### Verification Checklist

- [ ] Visited the tool's pricing page today
- [ ] Confirmed "no credit card required"
- [ ] Confirmed free tier never expires
- [ ] Copied the pricing page URL as `source`
- [ ] Tested the tool to confirm free features match description
- [ ] Ran `npm run format && npm run lint` before committing

## Testing Your Changes

### Run the Dev Server

```bash
npm run dev
```

Visit `http://localhost:5173` and verify:

- [ ] Your new entry appears in the correct category
- [ ] Search works: try searching the tool's name
- [ ] Filters work: select the tool's category
- [ ] The generosity rating displays correctly
- [ ] The source link is clickable and correct

### For Data Updates

If you're fixing an outdated entry, test both **before and after**:

- [ ] Old data: does it appear correctly in the current build?
- [ ] New data: does the updated entry appear correctly?
- [ ] Search/filter still work with the change?

## Updating Existing Entries

If a tool's free tier changed:

1. Update the `limitation` field with the new ceiling
2. Update the `generosity` score if it changed
3. Update `paidTierHint` if pricing changed
4. Update `source` to today's pricing page
5. Add a note in your commit message: `Updated Figma limit from 5 to 3 projects (verified 2026-06-29)`

## PR Review

Your PR should include:

- **What changed**: 1–2 sentences describing the addition or fix
- **Why it matters**: For new tools, why is this genuinely free? For fixes, what was wrong?
- **Verification**: Link to the pricing page or screenshot proving the claim
- **Testing**: Did you run `npm run dev` and verify locally?

Example PR description:

```
## Add Excalidraw

Excalidraw is a free, open-source whiteboarding tool. Fits the **design** category.

### Verification
- No credit card required: https://excalidraw.com/pricing
- Fully free forever (MIT licensed)
- Tested locally: appears in Design category, search works

### Changes
- Added entry to `src/data/tools.js`
- Ran `npm run format && npm run lint`

Closes #42
```

## Code of Conduct

- **Be respectful**: Disagreements about what "free" means are normal; assume good faith.
- **Cite sources**: Every claim should link to a pricing page or official docs.
- **Keep data fresh**: If you notice old data, file an issue even if you don't have a fix.
- **No spam**: Only add tools you'd genuinely recommend to a friend.

## Questions?

Open a discussion or issue. We're happy to help clarify what counts as "free" or to explain the data structure.

---

**Thank you for making Actually Free better.**
