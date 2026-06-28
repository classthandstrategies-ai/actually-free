export default function Controls({
  search,
  onSearchChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="sticky top-0 z-10 bg-cream-paper px-[--spacing-24] py-[--spacing-24]">
      <div className="flex items-center justify-between gap-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full max-w-[400px] rounded-[--radius-lg] border border-graphite-veil bg-white px-[--spacing-12] py-[--spacing-12] font-figtree text-[16px] placeholder-graphite-veil focus:outline-none focus:ring-2 focus:ring-deep-forest-teal"
        />

        {/* Sort Select */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-[--radius-lg] border border-graphite-veil bg-white px-[--spacing-12] py-[--spacing-12] font-figtree text-[14px] font-medium text-midnight-ink focus:outline-none focus:ring-2 focus:ring-deep-forest-teal"
        >
          <option value="generous">Most generous</option>
          <option value="alphabetical">A–Z</option>
          <option value="category">By category</option>
        </select>
      </div>
    </div>
  )
}
