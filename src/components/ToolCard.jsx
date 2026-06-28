import { useState } from 'react'

const MONOGRAM_BG = [
  '#f0d7ff', '#e4f4f0', '#fff3e0', '#e8f5e9',
  '#fce4ec', '#e3f2fd', '#f3e5f5', '#e0f7fa',
]

function ToolIcon({ tool }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const initial = tool.name.charAt(0).toUpperCase()
  const bgColor = MONOGRAM_BG[tool.name.charCodeAt(0) % MONOGRAM_BG.length]

  let domain = ''
  try { domain = new URL(tool.url).hostname } catch { /* invalid url */ }

  return (
    <div
      style={{
        width: '36px', height: '36px', borderRadius: '10px',
        background: bgColor, border: '1px solid #e4e4d0',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, overflow: 'hidden', position: 'relative',
      }}
    >
      {/* Favicon */}
      {domain && !error && (
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=32`}
          alt=""
          width={20}
          height={20}
          className={`favicon-img${loaded ? ' loaded' : ''}`}
          style={{ position: 'absolute', objectFit: 'contain' }}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
      {/* Monogram fallback — visible until favicon loads */}
      {(!loaded || error) && (
        <span
          className="font-figtree font-semibold"
          style={{ fontSize: '14px', color: '#1a1a1a', userSelect: 'none' }}
        >
          {initial}
        </span>
      )}
    </div>
  )
}

export default function ToolCard({ tool }) {
  return (
    <article
      className="tool-card bg-white flex flex-col"
      style={{ border: '1px solid #e4e4d0', borderRadius: '20px', padding: '20px' }}
    >
      {/* Header: icon + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <ToolIcon tool={tool} />
        <h3 className="font-figtree font-semibold text-midnight-ink" style={{ fontSize: '14px', lineHeight: 1.35 }}>
          {tool.name}
        </h3>
      </div>

      {/* Description */}
      <p className="font-figtree font-normal text-graphite-veil" style={{ fontSize: '13px', lineHeight: 1.55, marginBottom: '12px' }}>
        {tool.description}
      </p>

      {/* Free tier limit — the differentiator */}
      <div
        style={{
          background: '#fffef5', border: '1px solid #e8e8cc',
          borderRadius: '8px', padding: '9px 11px', marginBottom: '12px',
        }}
      >
        <p style={{ fontSize: '10px', color: '#8a8a80', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600 }}>
          Free tier limit
        </p>
        <p className="font-figtree font-semibold text-midnight-ink" style={{ fontSize: '13px', lineHeight: 1.45 }}>
          {tool.limitation}
        </p>
      </div>

      {/* Paid hint */}
      {tool.paidTierHint && (
        <p className="font-figtree font-normal" style={{ fontSize: '11px', color: '#8a8a80', marginBottom: '12px' }}>
          Paid: {tool.paidTierHint}
        </p>
      )}

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Badges + Visit row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '4px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <span
            className="font-figtree font-semibold"
            style={{ fontSize: '11px', padding: '4px 9px', borderRadius: '1000px', background: '#034f46', color: '#fff' }}
          >
            No card required
          </span>
          {tool.openSource && (
            <span
              className="font-figtree font-medium"
              style={{ fontSize: '11px', padding: '4px 9px', borderRadius: '1000px', border: '1px solid #c4c4b4', color: '#5f5f59' }}
            >
              Open source
            </span>
          )}
        </div>

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-btn font-figtree font-semibold text-midnight-ink"
          style={{
            fontSize: '12px', padding: '6px 12px', flexShrink: 0,
            border: '1px solid #d0d0c0', borderRadius: '7px',
            textDecoration: 'none', whiteSpace: 'nowrap', color: '#1a1a1a',
          }}
        >
          Visit →
        </a>
      </div>
    </article>
  )
}
