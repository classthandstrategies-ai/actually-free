export default function Hero({ total }) {
  return (
    <section
      className="w-full bg-cream-paper relative overflow-hidden"
      style={{ paddingTop: '64px', paddingBottom: '80px' }}
    >
      {/* Decorative orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: '480px', height: '480px', top: '-120px', left: '-160px', background: '#e4e4d0', opacity: 0.35, filter: 'blur(80px)' }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: '320px', height: '320px', bottom: '-80px', right: '-100px', background: '#f0d7ff', opacity: 0.45, filter: 'blur(64px)' }} />

      {/* flex-col + items-center = reliable centering for all children, regardless of display type */}
      <div
        className="relative z-10 max-w-[1200px] mx-auto px-6"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <h1
          className="font-eb-garamond font-normal"
          style={{
            fontSize: 'clamp(64px, 10vw, 120px)',
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
            marginBottom: '24px',
            animation: 'fadeSlideUp 0.6s ease both',
          }}
        >
          <span style={{ color: '#8a8a80' }}>Actually</span>{' '}
          <span style={{ color: '#1a1a1a' }}>Free</span>
        </h1>

        <p
          className="font-figtree font-normal text-midnight-ink"
          style={{ fontSize: '18px', lineHeight: 1.55, maxWidth: '520px', marginBottom: '36px' }}
        >
          A directory of software with genuinely free tiers —{' '}
          <strong className="font-semibold">no credit card</strong>,
          no trial-traps, no bait-and-switch. Every limit stated plainly.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {[
            `${total} tools verified`,
            'No credit card',
            'No affiliate links',
            'No accounts required',
          ].map((stat) => (
            <span
              key={stat}
              className="stat-pill font-figtree font-medium text-midnight-ink"
              style={{ fontSize: '13px', padding: '6px 14px', border: '1px solid #e4e4d0', borderRadius: '1000px', background: '#ffffff' }}
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
