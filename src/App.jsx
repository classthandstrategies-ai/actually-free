import { useState, useMemo } from 'react'
import { tools } from './data/tools'
import { categories } from './data/categories'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Controls from './components/Controls'
import CategorySidebar from './components/CategorySidebar'
import ToolGrid from './components/ToolGrid'
import HowToReadSection from './components/HowToReadSection'
import MissionBand from './components/MissionBand'
import Footer from './components/Footer'

const TOTAL = tools.length

function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [sort, setSort] = useState('generous')

  const filtered = useMemo(() => {
    let result = tools

    if (activeCategory !== 'all') {
      result = result.filter((t) => t.category === activeCategory)
    }

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.limitation.toLowerCase().includes(q)
      )
    }

    if (sort === 'generous') {
      result = [...result].sort((a, b) => (b.generosity || 0) - (a.generosity || 0))
    } else if (sort === 'alphabetical') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === 'category') {
      result = [...result].sort((a, b) =>
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      )
    }

    return result
  }, [search, activeCategory, sort])

  const categoryCounts = useMemo(() => {
    const counts = { all: tools.length }
    categories.forEach((cat) => {
      if (cat.slug !== 'all') {
        counts[cat.slug] = tools.filter((t) => t.category === cat.slug).length
      }
    })
    return counts
  }, [])

  const isFiltered = search.length > 0 || activeCategory !== 'all'

  return (
    <div style={{ minHeight: '100vh', background: '#ffffeb' }}>
      <Nav total={TOTAL} categories={categories} />
      <Hero total={TOTAL} />

      {/* Sticky controls */}
      <div className="sticky z-40" style={{ top: '64px' }}>
        <Controls
          search={search}
          onSearchChange={setSearch}
          sort={sort}
          onSortChange={setSort}
          total={TOTAL}
          resultCount={filtered.length}
          isFiltered={isFiltered}
        />
      </div>

      {/* Main content */}
      <main className="max-w-[1200px] mx-auto px-6" style={{ paddingTop: '28px', paddingBottom: '64px' }}>
        {/* Mobile: category selector above grid */}
        <div className="md:hidden" style={{ marginBottom: '16px' }}>
          <CategorySidebar
            categories={categories}
            active={activeCategory}
            counts={categoryCounts}
            onSelect={setActiveCategory}
            mobileOnly
          />
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
          {/* Desktop sidebar — sticky */}
          <div className="hidden md:block" style={{ flexShrink: 0, position: 'sticky', top: '132px', alignSelf: 'flex-start' }}>
            <CategorySidebar
              categories={categories}
              active={activeCategory}
              counts={categoryCounts}
              onSelect={setActiveCategory}
            />
          </div>

          {/* Grid */}
          <ToolGrid tools={filtered} total={TOTAL} isFiltered={isFiltered} />
        </div>
      </main>

      <HowToReadSection />
      <MissionBand />
      <Footer />
    </div>
  )
}

export default App
