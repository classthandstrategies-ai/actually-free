export default function Hero() {
  return (
    <section className="w-full bg-cream-paper py-[--spacing-80]">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-stone-mist opacity-10 blur-3xl" />
      <div className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-graphite-veil opacity-5 blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Headline */}
        <h1 className="font-eb-garamond text-[--text-display-xl] font-400 leading-[--leading-display-xl] tracking-[--tracking-display-xl] mb-6">
          <span className="text-graphite-veil">Actually</span>{' '}
          <span className="text-midnight-ink">Free</span>
        </h1>

        {/* Subtitle */}
        <p className="font-figtree text-[--text-subheading] font-400 text-midnight-ink">
          A directory of software with genuinely free tiers — no credit card, no trial-traps, no bait-and-switch.
        </p>
      </div>
    </section>
  )
}
