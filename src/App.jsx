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
    }

    return result
  }, [search, activeCategory, sort])

  const categoryCounts = useMemo(() => {
    const counts = {}
    categories.forEach((cat) => {
      if (cat.slug === 'all') {
        counts[cat.slug] = tools.length
      } else {
        counts[cat.slug] = tools.filter((t) => t.category === cat.slug).length
      }
    })
    return counts
  }, [])

  return (
    <div className="min-h-screen bg-cream-paper">
      <Nav />
      <Hero />
      <main className="max-w-[--page-max-width] mx-auto px-8">
        <Controls
          search={search}
          onSearchChange={setSearch}
          sort={sort}
          onSortChange={setSort}
        />
        <div className="flex gap-8">
          <CategorySidebar
            categories={categories}
            active={activeCategory}
            counts={categoryCounts}
            onSelect={setActiveCategory}
          />
          <ToolGrid tools={filtered} />
        </div>
      </main>
      <HowToReadSection />
      <MissionBand />
      <Footer />
    </div>
  )
}

export default App
