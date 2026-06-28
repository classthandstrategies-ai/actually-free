import ToolCard from './ToolCard'

export default function ToolGrid({ tools }) {
  if (!tools || tools.length === 0) {
    return (
      <div className="flex-1 text-center py-16">
        <p className="text-smoke">No tools found. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}
