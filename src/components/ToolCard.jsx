export default function ToolCard({ tool }) {
  const monogram = tool.name.charAt(0).toUpperCase()

  return (
    <div className="rounded-[--radius-3xl] border border-stone-mist bg-white p-[--spacing-32]">
      {/* Tool name + monogram */}
      <div className="flex items-center gap-[--spacing-16] mb-[--spacing-16]">
        <div className="w-10 h-10 rounded-full bg-lavender-whisper flex items-center justify-center flex-shrink-0">
          <span className="font-figtree font-600 text-charcoal text-sm">{monogram}</span>
        </div>
        <h3 className="font-figtree font-600 text-midnight-ink text-base leading-body">{tool.name}</h3>
      </div>

      {/* One-line description */}
      <p className="font-figtree font-400 text-midnight-ink text-base leading-body mb-[--spacing-16]">
        {tool.description}
      </p>

      {/* Limitation prominently displayed */}
      <p className="font-figtree font-600 text-midnight-ink text-base leading-body mb-[--spacing-16]">
        {tool.limitation}
      </p>

      {/* Paid tier hint small/muted if present */}
      {tool.paidTierHint && (
        <p className="font-figtree font-400 text-smoke text-xs mb-[--spacing-16]">
          {tool.paidTierHint}
        </p>
      )}

      {/* Badge row */}
      <div className="flex items-center gap-[--spacing-8] mb-[--spacing-16]">
        <span className="px-4 py-2 bg-deep-forest-teal text-white rounded-[--radius-full-4] font-figtree font-600 text-xs">
          No card required
        </span>
        {tool.openSource && (
          <span className="px-4 py-2 border border-midnight-ink text-midnight-ink rounded-[--radius-full-4] font-figtree font-600 text-xs">
            Open source
          </span>
        )}
      </div>

      {/* Visit ghost button */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 border border-midnight-ink text-midnight-ink font-figtree font-600 text-sm rounded-[--radius-xl] hover:bg-midnight-ink hover:text-white transition-colors"
      >
        Visit
      </a>
    </div>
  )
}
