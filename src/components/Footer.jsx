export default function Footer() {
  return (
    <footer style={{ background: '#ffffeb', borderTop: '1px solid #e4e4d0', padding: '48px 24px' }}>
      <div className="max-w-[1200px] mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
        <span className="font-figtree font-semibold text-midnight-ink" style={{ fontSize: '15px' }}>
          Actually Free
        </span>
        <p className="font-figtree font-normal text-graphite-veil" style={{ fontSize: '13px' }}>
          No ads · No affiliate links · No accounts required · No credit cards
        </p>
        <p className="font-figtree font-normal" style={{ fontSize: '12px', color: '#8a8a80' }}>
          Data last reviewed June 2026. Free tiers change — verify before relying on critical workflows.
        </p>
        <div style={{ display: 'flex', gap: '24px', marginTop: '8px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/classthandstrategies-ai/actually-free' },
            { label: 'MIT License', href: 'https://github.com/classthandstrategies-ai/actually-free/blob/main/LICENSE' },
            { label: 'Contribute', href: 'https://github.com/classthandstrategies-ai/actually-free/blob/main/CONTRIBUTING.md' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-figtree font-medium text-midnight-ink hover:text-graphite-veil"
              style={{ fontSize: '13px', textDecoration: 'none' }}
            >
              {label}
            </a>
          ))}
        </div>
        <p className="font-figtree font-normal" style={{ fontSize: '11px', color: '#8a8a80' }}>
          © 2026 classthandstrategies-ai
        </p>
      </div>
    </footer>
  )
}
