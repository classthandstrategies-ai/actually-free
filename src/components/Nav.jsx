export default function Nav({ total, categories }) {
  const catCount = categories ? categories.filter((c) => c.slug !== 'all').length : 0
  return (
    <div className="sticky top-0 z-50 bg-cream-paper" style={{ paddingTop: '10px', paddingBottom: '8px' }}>
      {/* Same container as Controls and main — keeps pill aligned with content below */}
      <div className="max-w-[1200px] mx-auto px-6">
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            background: '#ffffff',
            border: '1px solid #e4e4d0',
            borderRadius: '14px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
        >
          <span className="font-figtree font-semibold text-base text-midnight-ink tracking-tight">
            Actually Free
          </span>
          <div className="flex items-center gap-4">
            <span className="font-figtree text-sm text-graphite-veil hidden sm:inline">
              {total} tools · {catCount} categories · 0 ads
            </span>
            <a
              href="https://github.com/classthandstrategies-ai/actually-free"
              target="_blank"
              rel="noopener noreferrer"
              className="font-figtree font-medium text-sm text-midnight-ink hover:text-graphite-veil transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
