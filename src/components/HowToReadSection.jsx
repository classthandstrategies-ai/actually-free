const SAMPLE_MONOGRAMS = ['P', 'F', 'N', 'O', 'B', 'G', 'D', 'C', 'L', 'Z', 'V', 'S']

export default function HowToReadSection() {
  return (
    <section style={{ background: '#1a1a1a', padding: '80px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2
            className="font-eb-garamond font-normal"
            style={{ fontSize: '48px', lineHeight: 1.05, color: '#ffffff', marginBottom: '20px', letterSpacing: '-0.02em' }}
          >
            How to read an entry
          </h2>
          <p className="font-figtree font-normal" style={{ fontSize: '16px', lineHeight: 1.6, color: '#8a8a80', marginBottom: '48px' }}>
            Every card shows the <strong style={{ color: '#f0d7ff' }}>free-tier limit</strong> in plain sight —
            not buried in fine print after you've signed up. The "No card required" badge means
            exactly that.
          </p>

          {/* Annotated card mock */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '24px',
              textAlign: 'left',
              marginBottom: '64px',
              position: 'relative',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f0d7ff', border: '1px solid #e4e4d0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="font-figtree font-semibold" style={{ fontSize: '14px', color: '#1a1a1a' }}>F</span>
              </div>
              <span className="font-figtree font-semibold" style={{ fontSize: '15px', color: '#1a1a1a' }}>Figma</span>
              <span className="font-figtree" style={{ fontSize: '12px', color: '#8a8a80', marginLeft: 'auto', background: '#ffffeb', padding: '2px 8px', borderRadius: '4px' }}>← name</span>
            </div>
            <p className="font-figtree" style={{ fontSize: '13px', color: '#8a8a80', marginBottom: '14px', lineHeight: 1.5 }}>
              Browser-based collaborative design and prototyping tool.
              <span style={{ color: '#8a8a80', fontSize: '11px', marginLeft: '8px' }}>← description</span>
            </p>
            <div style={{ background: '#fffef5', border: '1px solid #e4e4d0', borderRadius: '8px', padding: '10px 12px', marginBottom: '14px' }}>
              <p style={{ fontSize: '11px', color: '#8a8a80', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Free tier limit ← the honest catch</p>
              <p className="font-figtree font-semibold" style={{ fontSize: '13px', color: '#1a1a1a' }}>3 files per team, unlimited viewers.</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
              <span className="font-figtree font-semibold" style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '1000px', background: '#034f46', color: '#fff' }}>No card required ← always shown</span>
            </div>
            <span className="font-figtree font-semibold" style={{ fontSize: '13px', padding: '8px 16px', border: '1px solid #1a1a1a', borderRadius: '8px' }}>Visit →</span>
          </div>

          {/* Monogram arc */}
          <p className="font-figtree" style={{ fontSize: '14px', color: '#5f5f59', marginBottom: '24px' }}>
            240 tools, all verified — just a few of them:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {SAMPLE_MONOGRAMS.map((letter, i) => (
              <div
                key={i}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: i % 3 === 0 ? '#f0d7ff' : i % 3 === 1 ? '#e4e4d0' : '#034f4620',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <span className="font-figtree font-semibold" style={{ fontSize: '15px', color: '#1a1a1a' }}>{letter}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
