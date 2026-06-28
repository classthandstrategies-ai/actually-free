import { useState } from 'react'

export default function CategorySidebar({ categories, active, counts, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (slug) => {
    onSelect(slug)
    setIsOpen(false)
  }

  const activeLabel = categories.find((cat) => cat.slug === active)?.label || 'All'

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-48 gap-2">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => onSelect(category.slug)}
            className={`px-4 py-2 rounded-[--radius-full-4] font-figtree font-600 text-sm text-left transition-colors ${
              active === category.slug
                ? 'bg-lavender-whisper text-white'
                : 'bg-transparent text-midnight-ink hover:bg-stone-mist'
            }`}
          >
            <span className="flex justify-between items-center">
              <span>{category.label}</span>
              <span className="text-xs">{counts[category.slug] || 0}</span>
            </span>
          </button>
        ))}
      </aside>

      {/* Mobile Dropdown */}
      <div className="md:hidden mb-4 relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 rounded-[--radius-full-4] bg-lavender-whisper text-white font-figtree font-600 text-sm text-left"
        >
          {activeLabel}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stone-mist rounded-[--radius-lg] z-10 shadow-md">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleSelect(category.slug)}
                className={`w-full px-4 py-2 text-left font-figtree font-600 text-sm transition-colors ${
                  active === category.slug
                    ? 'bg-lavender-whisper text-white'
                    : 'text-midnight-ink hover:bg-cream-paper'
                } ${category.slug !== categories[categories.length - 1].slug ? 'border-b border-stone-mist' : ''}`}
              >
                <span className="flex justify-between items-center">
                  <span>{category.label}</span>
                  <span className="text-xs">{counts[category.slug] || 0}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
