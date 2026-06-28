export default function Controls({ search, onSearchChange, sort, onSortChange }) {
  return (
    <div
      className="bg-cream-paper"
      style={{ borderBottom: '1px solid #e4e4d0', paddingTop: '12px', paddingBottom: '12px' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-3">
        <input
          type="text"
          placeholder="Search 243 tools..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input font-figtree text-midnight-ink placeholder-graphite-veil bg-white"
          style={{
            flex: 1,
            maxWidth: '400px',
            padding: '10px 14px',
            fontSize: '14px',
            border: '1px solid #e4e4d0',
            borderRadius: '8px',
            outline: 'none',
          }}
        />

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="font-figtree font-medium text-midnight-ink bg-white"
          style={{
            padding: '10px 14px',
            fontSize: '13px',
            border: '1px solid #e4e4d0',
            borderRadius: '8px',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          <option value="generous">Most generous</option>
          <option value="alphabetical">A–Z</option>
          <option value="category">By category</option>
        </select>
      </div>
    </div>
  )
}
