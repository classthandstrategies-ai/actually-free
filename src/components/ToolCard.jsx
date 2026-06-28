const MONOGRAM_COLORS = [
  '#f0d7ff', '#e4e4d0', '#ffa94620', '#034f4615',
  '#1a1a1a10', '#f0d7ff', '#e4e4d0', '#ffa94620',
]

export default function ToolCard({ tool }) {
  const initial = tool.name.charAt(0).toUpperCase()
  const colorIndex = tool.name.charCodeAt(0) % MONOGRAM_COLORS.length

  return (
    <article
      className="bg-white flex flex-col"
      style={{
        border: '1px solid #e4e4d0',
        borderRadius: '24px',
        padding: '24px',
      }}
    >
      {/* Header: monogram + name */}
      <div className="flex items-center gap-3" style={{ marginBottom: '12px' }}>
        <div
          className="flex items-center justify-center flex-shrink-0 font-figtree font-semibold text-midnight-ink"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: MONOGRAM_COLORS[colorIndex],
            fontSize: '14px',
            border: '1px solid #e4e4d0',
          }}
        >
          {initial}
        </div>
        <h3 className="font-figtree font-semibold text-midnight-ink" style={{ fontSize: '15px', lineHeight: 1.3 }}>
          {tool.name}
        </h3>
      </div>

      {/* Description */}
      <p
        className="font-figtree font-normal text-graphite-veil"
        style={{ fontSize: '13px', lineHeight: 1.5, marginBottom: '14px' }}
      >
        {tool.description}
      </p>

      {/* Limitation — the differentiator */}
      <div
        style={{
          background: '#fffef5',
          border: '1px solid #e4e4d0',
          borderRadius: '8px',
          padding: '10px 12px',
          marginBottom: '14px',
        }}
      >
        <p
          className="font-figtree font-medium text-midnight-ink"
          style={{ fontSize: '12px', color: '#8a8a80', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          Free tier limit
        </p>
        <p className="font-figtree font-semibold text-midnight-ink" style={{ fontSize: '13px', lineHeight: 1.45 }}>
          {tool.limitation}
        </p>
      </div>

      {/* Paid hint */}
      {tool.paidTierHint && (
        <p className="font-figtree font-normal" style={{ fontSize: '12px', color: '#8a8a80', marginBottom: '14px' }}>
          Paid: {tool.paidTierHint}
        </p>
      )}

      {/* Spacer pushes badges + button to bottom */}
      <div style={{ flex: 1 }} />

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: '14px' }}>
        <span
          className="font-figtree font-semibold"
          style={{
            fontSize: '11px',
            padding: '4px 10px',
            borderRadius: '1000px',
            background: '#034f46',
            color: '#ffffff',
          }}
        >
          No card required
        </span>
        {tool.openSource && (
          <span
            className="font-figtree font-medium"
            style={{
              fontSize: '11px',
              padding: '4px 10px',
              borderRadius: '1000px',
              border: '1px solid #1a1a1a',
              color: '#1a1a1a',
            }}
          >
            Open source
          </span>
        )}
      </div>

      {/* Visit button */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-figtree font-semibold text-midnight-ink inline-block"
        style={{
          fontSize: '13px',
          padding: '8px 16px',
          border: '1px solid #1a1a1a',
          borderRadius: '8px',
          textDecoration: 'none',
          textAlign: 'center',
          transition: 'background 0.15s, color 0.15s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#1a1a1a'
          e.currentTarget.style.color = '#ffffff'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.color = '#1a1a1a'
        }}
      >
        Visit →
      </a>
    </article>
  )
}
