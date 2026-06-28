export default function HowToReadSection() {
  // Sample tool for demonstration
  const sampleTool = {
    name: 'Figma',
    monogram: 'F',
    description: 'Design and prototype tool with unlimited files',
    limitation: 'Limited to 3 active projects',
    paidTierHint: 'Professional: $12/month',
    openSource: false,
    url: '#'
  }

  // Tool monograms for the arc display
  const toolMonograms = ['F', 'C', 'G', 'P', 'N', 'S', 'D', 'M']

  return (
    <section className="w-full bg-midnight-ink text-white py-[--spacing-80]">
      {/* Main container */}
      <div className="max-w-[800px] mx-auto px-8 text-center">
        {/* Headline */}
        <h2 className="font-eb-garamond text-[--text-heading-lg] font-400 text-white mb-[--spacing-32]">
          How to read a card
        </h2>

        {/* Subtext explaining limitation vs generosity */}
        <p className="font-figtree font-400 text-[--text-body] text-white mb-[--spacing-56]">
          Each card shows the <strong>limitation</strong> — the honest catch that defines the free tier — and the <strong>generosity</strong> of what you can actually do for free. No surprises. No hidden walls that appear after signup.
        </p>

        {/* Sample ToolCard with annotations */}
        <div className="mb-[--spacing-80] bg-white rounded-[--radius-3xl] border border-stone-mist p-[--spacing-32] text-left relative">
          {/* Annotation labels */}
          <div className="absolute -top-12 left-[--spacing-32] text-sm font-figtree font-500 text-stone-mist">
            Monogram + Name
          </div>

          {/* Tool monogram + name */}
          <div className="flex items-center gap-[--spacing-16] mb-[--spacing-16]">
            <div className="w-10 h-10 rounded-full bg-lavender-whisper flex items-center justify-center flex-shrink-0">
              <span className="font-figtree font-600 text-charcoal text-sm">
                {sampleTool.monogram}
              </span>
            </div>
            <h3 className="font-figtree font-600 text-midnight-ink text-base leading-body">
              {sampleTool.name}
            </h3>
          </div>

          {/* One-line description */}
          <div className="relative mb-[--spacing-16]">
            <div className="absolute -left-12 top-0 text-sm font-figtree font-500 text-stone-mist">
              Description
            </div>
            <p className="font-figtree font-400 text-midnight-ink text-base leading-body">
              {sampleTool.description}
            </p>
          </div>

          {/* Limitation — the key catch */}
          <div className="relative mb-[--spacing-16]">
            <div className="absolute -left-12 top-0 text-sm font-figtree font-500 text-red-500">
              Limitation
            </div>
            <p className="font-figtree font-600 text-midnight-ink text-base leading-body">
              {sampleTool.limitation}
            </p>
          </div>

          {/* Paid tier hint if present */}
          {sampleTool.paidTierHint && (
            <p className="font-figtree font-400 text-smoke text-xs mb-[--spacing-16]">
              {sampleTool.paidTierHint}
            </p>
          )}

          {/* Badge row */}
          <div className="relative mb-[--spacing-16]">
            <div className="absolute -left-12 top-0 text-sm font-figtree font-500 text-stone-mist">
              Badges
            </div>
            <div className="flex items-center gap-[--spacing-8]">
              <span className="px-4 py-2 bg-deep-forest-teal text-white rounded-[--radius-full-4] font-figtree font-600 text-xs">
                No card required
              </span>
              {sampleTool.openSource && (
                <span className="px-4 py-2 border border-midnight-ink text-midnight-ink rounded-[--radius-full-4] font-figtree font-600 text-xs">
                  Open source
                </span>
              )}
            </div>
          </div>

          {/* Visit button */}
          <div className="relative">
            <div className="absolute -left-12 top-0 text-sm font-figtree font-500 text-stone-mist">
              CTA
            </div>
            <a
              href={sampleTool.url}
              className="inline-block px-4 py-2 border border-midnight-ink text-midnight-ink font-figtree font-600 text-sm rounded-[--radius-xl] hover:bg-midnight-ink hover:text-white transition-colors"
            >
              Visit
            </a>
          </div>
        </div>

        {/* Monogram Arc/Grid Display */}
        <div className="mt-[--spacing-80] pt-[--spacing-56]">
          <p className="font-figtree font-400 text-[--text-body] text-stone-mist mb-[--spacing-40]">
            Explore tools across categories
          </p>

          {/* Arc/Grid of monogram tiles */}
          <div className="flex justify-center items-center gap-[--spacing-16] flex-wrap">
            {toolMonograms.map((monogram, index) => (
              <div
                key={index}
                className="w-14 h-14 rounded-full bg-lavender-whisper flex items-center justify-center flex-shrink-0 hover:bg-amber-pulse transition-colors cursor-pointer"
              >
                <span className="font-figtree font-600 text-charcoal text-lg">
                  {monogram}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
