# Actually Free

A directory of genuinely free software — no credit card required.

[![CI Status](https://github.com/classthandstrategies-ai/actually-free/actions/workflows/ci.yml/badge.svg)](https://github.com/classthandstrategies-ai/actually-free/actions)
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/classthandstrategies-ai/actually-free)

<!-- add screenshot here -->

[Live Demo](https://actually-free.vercel.app) • [GitHub](https://github.com/classthandstrategies-ai/actually-free) • [Issues](https://github.com/classthandstrategies-ai/actually-free/issues)

## Features

- **200+ web-verified free tools** — Every app is tested and confirmed to offer genuine free access
- **No cards required** — Tools listed here don't need credit card signups
- **Honest free-tier limits** — Clear documentation of what's actually free vs. what requires payment
- **Trending categories** — Discover tools organized by use case (AI, design, dev tools, writing, and more)
- **AI-heavy** — Curated focus on free AI tools and models that don't require API keys
- **Search & filter** — Find the right tool instantly with powerful search and category filtering

## Tech Stack

- **Frontend Framework:** React 19 with Vite
- **Styling:** Tailwind CSS v4
- **Typography:** EB Garamond (serif) + Figtree (sans-serif)
- **Build Tool:** Vite
- **Design System:** Wispr Flow

## Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

## Installation

```bash
# Clone the repository
git clone https://github.com/classthandstrategies-ai/actually-free.git
cd actually-free

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173`

## Environment

No environment variables are required to run this project locally. The app works entirely with hand-curated data and doesn't depend on external APIs.

## Usage

After running `npm run dev`, navigate to `http://localhost:5173` in your browser. The site features:

- **Search:** Type to find tools by name or description
- **Filter by Category:** Use the sidebar to browse by tool type (AI, Design, Development, Writing, etc.)
- **Tool Cards:** Click any tool card to visit the site and verify free access
- **How to Read:** Learn about the free-tier classification system used throughout the directory

## Project Structure

```
src/
├── components/
│   ├── Nav.jsx              # Navigation bar
│   ├── Hero.jsx             # Landing section
│   ├── CategorySidebar.jsx   # Category filter sidebar
│   ├── Controls.jsx          # Search and filter controls
│   ├── ToolCard.jsx          # Individual tool card component
│   ├── ToolGrid.jsx          # Tool grid layout
│   ├── HowToReadSection.jsx   # Free-tier explanation
│   ├── MissionBand.jsx       # Mission statement section
│   └── Footer.jsx            # Footer with links
├── data/
│   ├── tools.js              # Tool directory (200+ entries)
│   └── categories.js         # Category definitions
├── App.jsx                   # Main app component
├── App.css                   # App-level styles
├── index.css                 # Global styles
└── main.jsx                  # React entry point
```

## Development

```bash
# Run development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm lint

# Format code
npm run format
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Adding new tools to the directory
- Reporting inaccuracies or outdated information
- Improving the UI/UX
- Fixing bugs

Before submitting, verify that tools genuinely offer free access without requiring a credit card.

## License

MIT License — see [LICENSE](LICENSE) for details.

## Credits

- **Design System:** [Wispr Flow](https://wispr.design)
- **Data:** Hand-curated and web-verified (no third-party APIs)
- **Community:** Built by and for developers, designers, writers, and creators seeking genuinely free tools

---

**Last Updated:** June 2026

Have a tool suggestion? Found an error? Open an [issue](https://github.com/classthandstrategies-ai/actually-free/issues) or submit a pull request.
