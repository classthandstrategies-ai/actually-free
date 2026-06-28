export default function Controls({ search, onSearchChange, sort, onSortChange, total, resultCount, isFiltered }) {
  return (
    <div
      className="bg-cream-paper"
      style={{ borderBottom: '1px solid #e4e4d0', paddingTop: '10px', paddingBottom: '10px' }}
    >
      <div
        className="max-w-[1200px] mx-auto px-6"
        style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        {/* Search */}
        <div style={{ position: 'relative', flex: 1, maxWidth: '360px' }}>
          <input
            type="text"
            placeholder={`Search ${total} tools…`}
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search tools"
            className="search-input font-figtree text-midnight-ink placeholder-graphite-veil bg-white w-full"
            style={{
              padding: '9px 36px 9px 12px',
              fontSize: '14px',
              border: '1px solid #e4e4d0',
              borderRadius: '8px',
              outline: 'none',
            }}
          />
          {search && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
              style={{
                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', color: '#8a8a80',
                fontSize: '16px', lineHeight: 1, padding: '2px',
              }}
            >
              ×
            </button>
          )}
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort tools"
          className="font-figtree font-medium text-midnight-ink bg-white"
          style={{
            padding: '9px 13px', fontSize: '13px', border: '1px solid #e4e4d0',
            borderRadius: '8px', outline: 'none', cursor: 'pointer', flexShrink: 0,
          }}
        >
          <option value="generous">Most generous</option>
          <option value="alphabetical">A–Z</option>
          <option value="category">By category</option>
        </select>

        {/* Result count — only shown when filtering */}
        {isFiltered && (
          <span
            className="font-figtree font-medium hidden sm:inline"
            style={{ fontSize: '13px', color: '#8a8a80', flexShrink: 0 }}
          >
            {resultCount === 0
              ? 'No results'
              : `${resultCount} of ${total}`}
          </span>
        )}
      </div>
    </div>
  )
}
