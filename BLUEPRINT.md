# Actually Free — Project Blueprint

> Cold-start reference. Everything you need to understand, continue, or extend this project without context from the original session.

---

## What this is

A single-page React directory of **240 web-verified free tools** — software/services with genuinely free tiers (no credit card, no trial that expires). Every entry shows its honest free-tier limitation prominently, not buried in fine print. No ads, no affiliate links, no accounts.

**Live:** https://actually-free.vercel.app  
**Repo:** https://github.com/classthandstrategies-ai/actually-free  
**Local:** `/Users/geetu/Claude 7 [AC]/actually-free`

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 19 + Vite 8 | Fast SPA, Vite v4 plugin for Tailwind |
| Styling | Tailwind v4 (`@theme` block) | Design tokens live in `src/index.css` |
| Language | JavaScript (JSX) | No TypeScript — simpler for this scope |
| Lint | oxlint | Faster than ESLint, already configured |
| Format | Prettier | `.prettierrc` in root |
| CI | GitHub Actions | `lint → build` on push/PR to main |
| Deploy | Vercel | `vercel.json` in root, auto-deploys on push to `main` |
| Node | ≥20 LTS | `.nvmrc` pinned to 20 |

---

## Design system

Pulled from 4 files in the project root (not in `src/`): `DESIGN.md`, `theme.css`, `variables.css`, `tokens.json`. These are the **Wispr Flow** design tokens — do not delete them.

The `@theme` block in `src/index.css` is the Tailwind v4 source of truth. Key tokens:

```
#ffffeb  cream-paper    — page background
#1a1a1a  midnight-ink   — primary text + dark sections
#034f46  deep-forest-teal — mission band + badges
#f0d7ff  lavender-whisper — accent (was originally CTA color)
#8a8a80  graphite-veil  — secondary text, "Actually" in hero
#e4e4d0  stone-mist     — borders, subtle surfaces
```

Fonts loaded via `<link>` in `index.html` (not CSS `@import` — that ordering caused a bug):
- **EB Garamond** 400 — hero headline only (`font-eb-garamond`)
- **Figtree** 400/500/600/700 — all UI text (`font-figtree`)

**Critical:** Never import fonts via CSS `@import` after `@import "tailwindcss"` — Tailwind strips them. Always use `<link>` in `index.html`.

---

## Project structure

```
actually-free/
├── index.html                  # Google Fonts preconnect + link tags here
├── vite.config.js              # Vite + Tailwind v4 plugin
├── vercel.json                 # SPA rewrite to /index.html
├── .github/workflows/ci.yml   # lint + build on push/PR
├── src/
│   ├── index.css               # @import "tailwindcss" + @theme tokens + animations
│   ├── main.jsx                # React root (StrictMode)
│   ├── App.jsx                 # State (search/category/sort) + layout orchestration
│   ├── data/
│   │   ├── tools.js            # 240 tool entries (the core dataset)
│   │   └── categories.js       # 20 category slugs + labels (includes "All")
│   └── components/
│       ├── Nav.jsx             # Sticky white pill nav
│       ├── Hero.jsx            # 120px EB Garamond headline + subtitle + stat pills
│       ├── Controls.jsx        # Sticky search input + sort select + result count
│       ├── CategorySidebar.jsx # Desktop sidebar list / mobile dropdown
│       ├── ToolGrid.jsx        # 3-col responsive card grid + empty state
│       ├── ToolCard.jsx        # Individual tool card with favicon + badges
│       ├── HowToReadSection.jsx# Midnight Ink dark section with annotated card
│       ├── MissionBand.jsx     # Deep Forest Teal "one rule" band
│       └── Footer.jsx          # Links, license, data-reviewed disclaimer
```

---

## Data schema

Every entry in `src/data/tools.js`:

```js
{
  id: "obsidian",             // kebab-case, unique per category
  name: "Obsidian",
  category: "notes-productivity", // must match a slug in categories.js
  description: "Local-first note-taking with backlinks and graph view.",
  limitation: "Sync and Publish are paid; core app is free for personal use.",
  url: "https://obsidian.md",
  generosity: 5,              // 1–5 (5 = most generous free tier)
  noCardRequired: true,       // ALWAYS true — listing criterion
  paidTierHint: "Sync $4/mo, Publish $8/mo",  // optional
  openSource: true            // optional boolean
}
```

**Listing rules (enforced in data):**
1. `noCardRequired: true` — no exceptions. Credit card verification (even at $0) is a disqualifier (that's why GitLab CI was removed).
2. Must be free **forever** — not a trial. (CyberGhost, Pixlr were removed for this reason.)
3. The `limitation` field must be honest — state the real catch, not a vague "basic features".

**Invariants to maintain:**
- All 240 entries have `noCardRequired: true` — verify with: `tools.every(t => t.noCardRequired === true)`
- No tool with a trial-only model (no free tier) — scan with: `tools.filter(t => t.limitation.toLowerCase().includes('trial') && !t.limitation.toLowerCase().includes('self-host') && !t.limitation.toLowerCase().includes('free forever'))`
- `ai-audio-video` category was intentionally removed (web verification timed out). 0 tools carry that slug in the dataset.

---

## Categories (19 active)

| Label | Slug | Count |
|---|---|---|
| AI Chatbots | ai-chatbots | 12 |
| AI Image | ai-image | 12 |
| AI Writing | ai-writing | 12 |
| Design Tools | design-tools | 13 |
| Dev Tools | dev-tools | 13 |
| Code Hosting/CI | code-hosting-ci | 12 |
| Notes/Productivity | notes-productivity | 12 |
| Project Mgmt | project-mgmt | 18 |
| VPN | vpn | 10 |
| Cloud Storage | cloud-storage | 13 |
| Password Managers | password-managers | 13 |
| Email | email | 11 |
| Automation | automation | 12 |
| Website Builders | website-builders | 13 |
| Analytics | analytics | 12 |
| PDF Tools | pdf-tools | 13 |
| Resume Builders | resume-builders | 11 |
| Screen Recording | screen-recording | 12 |
| Communication | communication | 16 |

`categories.js` includes `{ label: 'All', slug: 'all' }` as the first entry. Don't remove it — the sidebar uses it.

---

## Architecture decisions

**State lives in `App.jsx` only.** `search`, `activeCategory`, `sort` — three `useState` hooks. Derived state (filtered list, category counts) computed with `useMemo`. No external state library needed.

**`CategoryItem` is defined at module level** (not inside the component). This was a bug that was fixed: defining a component inside a render function causes React to unmount/remount it on every re-render. `CategoryItem` in `CategorySidebar.jsx` must stay at the top of the file, outside `CategorySidebar`.

**Sort "By category"** sorts by `category` slug then `name` (alphabetical within category). This is the third sort option.

**Favicons** use Google's favicon service: `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`. The `ToolIcon` component in `ToolCard.jsx` has a monogram fallback that shows while the favicon loads. The favicon fades in via the `favicon-img` / `favicon-img.loaded` CSS classes.

**Sticky layout stacking order:**
- Nav: `position: sticky; top: 0; z-index: 50` — ~54px tall
- Controls: `position: sticky; top: 54px; z-index: 40` — ~56px tall
- Sidebar: `position: sticky; top: 118px` (54 + 56 + 8px gap)

If the nav or controls height changes, these offsets must be recalculated. They are hardcoded — not measured at runtime.

**Centering rule:** Use `display: flex; flex-direction: column; align-items: center` for centering sections (Hero, HowToRead). Never rely on `text-align: center` + `mx-auto` alone — `mx-auto` on block elements is unreliable when competing with CSS resets. `flex + items-center` is unconditional.

**Alignment rule:** Nav pill inner left padding, controls input left padding, and sidebar item padding are all `12px`. This ensures "Actually Free", "Search...", and "All 240" start at the same horizontal position.

**Container pattern** (used by all sections):
```jsx
<div className="max-w-[1200px] mx-auto px-6">
  {/* content */}
</div>
```
All sections — Nav, Controls, Hero, Main, HowToRead, Footer — use this same container. Never add extra horizontal padding on the outer wrapper (that was the original alignment bug).

---

## Known issues / intentional gaps

| Issue | Status | Notes |
|---|---|---|
| AI Audio/Video category missing | Known gap | Verification agent timed out. 0 tools in this category; category slug removed from `categories.js`. Add later manually. |
| Hardcoded "240 tools" in `HowToReadSection.jsx` | Stale if data changes | Line 55: `"240 tools, all verified"`. Unlike Nav/Hero which read from `TOTAL`, this is hardcoded. Fix by passing `total` as a prop. |
| Stagger animation caps at 240ms for cards 13+ | Intentional | All cards from position 13 onward share the same 240ms delay. Fine for most filter results. |
| Favicon requests to Google's CDN | Known tradeoff | 240 requests on page load. Privacy note: this leaks which tools a user viewed to Google. Acceptable for now; switch to local icons if privacy becomes a concern. |
| No user-submitted tool workflow | Not started | Contributing requires a GitHub PR. No in-app submission form. |
| No "last verified" per tool | Intentional | Site-wide "Data last reviewed June 2026" in Footer + README. Per-tool dates were explicitly rejected in the design session. |

---

## Visual QA lesson (hard-learned)

**Code review does not catch visual bugs.** Lint passes and build passes do not mean the layout is correct. After any visual change:
1. Open the deployed URL in a real browser
2. Check alignment at the specific viewport size (not just fullscreen)
3. Look at sticky header horizontal alignment: nav text, search input, and sidebar labels should all start at the same x position
4. Check centered sections (Hero, HowToRead, MissionBand) — use browser DevTools to verify `margin: auto` is actually applying

The `/verify` skill exists for this: use it before calling visual work done.

---

## Development workflow

```bash
cd "/Users/geetu/Claude 7 [AC]/actually-free"

npm run dev        # start dev server at localhost:5173
npm run lint       # oxlint check
npm run build      # production build to /dist
npm run preview    # preview production build locally
npm run format     # prettier format all files
```

Deploy: just push to `main`. Vercel auto-deploys.

---

## Next steps (clear priority order)

1. **Add AI Audio/Video category** — the one missing category (web verification timed out). Candidates: ElevenLabs (free tier), Suno (free tier), Udio, Adobe Podcast (free), Murf, Descript, CapCut. Manually verify each against live pricing pages before adding. Target: 10–12 entries.

2. **Fix hardcoded "240 tools" in `HowToReadSection.jsx` line 55** — pass `total` as a prop from `App.jsx` same as Nav and Hero already do.

3. **Screenshot for README** — `README.md` has `<!-- add screenshot here -->` placeholder. Add a real screenshot of the app at ~1280px width to the `public/` folder and reference it in the README. This matters for GitHub repo credibility.

4. **Visual polish pass** — the design system specifies EB Garamond for the `HowToReadSection` headline (already done) and MissionBand headline (already done). Review all section headings to confirm no Figtree vs EB Garamond misuse.

5. **Add tool count badge to README CI** — `README.md` currently shows CI + Vercel badges. Add a static badge showing tool count: `![240 tools](https://img.shields.io/badge/tools-240-034f46)`.

6. **Consider search UX improvement** — currently search matches name, description, and limitation. Adding category name to the search scope would improve discoverability (e.g., searching "productivity" finds all Notes/Productivity tools).

---

## Deployment status

| Environment | URL | Status |
|---|---|---|
| Production | https://actually-free.vercel.app | Live, auto-deploys from `main` |
| GitHub | https://github.com/classthandstrategies-ai/actually-free | Public repo |
| CI | GitHub Actions | Runs lint + build on push/PR |

Vercel project: `geeteshs-projects-ed806a46/actually-free`  
To redeploy manually: `npx vercel deploy --prod --yes --scope geeteshs-projects-ed806a46`
