import { useState } from 'react'

function CategoryItem({ cat, active, counts, onSelect, closeMobile }) {
  const isActive = active === cat.slug
  return (
    <button
      onClick={() => { onSelect(cat.slug); closeMobile?.() }}
      className="w-full text-left font-figtree font-medium"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '7px 12px',
        fontSize: '13px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        background: isActive ? '#1a1a1a' : 'transparent',
        color: isActive ? '#ffffff' : '#1a1a1a',
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = '#e4e4d0' }}
      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
    >
      <span>{cat.label}</span>
      <span style={{ fontSize: '11px', opacity: 0.5, marginLeft: '6px', flexShrink: 0 }}>
        {counts[cat.slug] ?? 0}
      </span>
    </button>
  )
}

export default function CategorySidebar({ categories, active, counts, onSelect, mobileOnly }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeLabel = categories.find((c) => c.slug === active)?.label || 'All'
  const closeMobile = () => setMobileOpen(false)

  const itemList = categories.map((cat) => (
    <CategoryItem
      key={cat.slug}
      cat={cat}
      active={active}
      counts={counts}
      onSelect={onSelect}
      closeMobile={closeMobile}
    />
  ))

  if (mobileOnly) {
    return (
      <div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          className="w-full font-figtree font-medium text-midnight-ink bg-white"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 14px', fontSize: '14px', border: '1px solid #e4e4d0',
            borderRadius: '8px', cursor: 'pointer',
          }}
        >
          <span>{activeLabel} ({counts[active] ?? 0})</span>
          <span style={{ opacity: 0.5 }}>{mobileOpen ? '▲' : '▼'}</span>
        </button>
        {mobileOpen && (
          <div
            className="bg-white"
            style={{
              marginTop: '4px', border: '1px solid #e4e4d0', borderRadius: '8px',
              padding: '6px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              maxHeight: '320px', overflowY: 'auto',
            }}
          >
            {itemList}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside style={{ width: '200px', paddingTop: '8px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {itemList}
      </div>
    </aside>
  )
}
