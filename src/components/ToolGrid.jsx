import ToolCard from './ToolCard'

export default function ToolGrid({ tools }) {
  if (!tools || tools.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <p className="font-figtree font-semibold text-midnight-ink" style={{ fontSize: '16px', marginBottom: '8px' }}>
          No tools found
        </p>
        <p className="font-figtree text-graphite-veil" style={{ fontSize: '14px' }}>
          Try a different search or category
        </p>
      </div>
    )
  }

  return (
    <div className="flex-1 min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool, index) => (
          <ToolCard key={`${tool.id}-${tool.category}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  )
}
