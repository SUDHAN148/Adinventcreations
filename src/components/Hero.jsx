export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: 'clamp(48px, 8vw, 96px)',
        paddingBottom: 'clamp(48px, 8vw, 96px)',
        overflow: 'hidden',
      }}
    >
      <div
        className="bg-dot-grid"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '55%',
          height: '100%',
          maskImage: 'radial-gradient(ellipse at 70% 45%, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 45%, black 40%, transparent 75%)',
        }}
      />
      <div
        className="accent-glow"
        aria-hidden="true"
        style={{ width: 380, height: 380, top: '6%', right: '2%' }}
      />

      <div
        className="container hero-grid"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <p
            className="eyebrow-plain hero-rise-1"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(75, 94, 255, 0.1)',
              color: 'var(--navy)',
              padding: '6px 14px',
              borderRadius: 20,
              marginBottom: 22,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
            Meta &amp; Instagram ads for growing brands
          </p>
          <h1 className="hero-rise-2" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', fontWeight: 600 }}>
            Your growth,
            <br />
            digitally engineered.
          </h1>
          <p
            className="hero-rise-3"
            style={{
              marginTop: 26,
              maxWidth: 480,
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
            }}
          >
            I'm Adhithya Prabhu, founder of AdInvent Creations. I plan, launch and
            optimise Meta ad campaigns that turn scrollers into paying customers —
            tracked, tested, and built around your revenue, not vanity metrics.
          </p>
          <div className="hero-rise-4" style={{ marginTop: 38, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn--primary">
              Book a strategy call
            </a>
            <a href="#work" className="btn btn--outline-navy">
              See the work
            </a>
          </div>

          <div className="hero-rise-4" style={{ marginTop: 56, display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            <Stat value="3–10×" label="Typical ROAS lift" />
            <Stat value="₹2Cr+" label="Ad spend managed" />
            <Stat value="25+" label="Brands worked with" />
          </div>
        </div>

        <div className="hero-rise-photo" style={{ position: 'relative' }}>
          {/* PLACEHOLDER PHOTO — replace src below with your real photo,
              e.g. /public/adhithya.jpg, and update the src path here. */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '4 / 5',
              borderRadius: 6,
              overflow: 'hidden',
              background: 'linear-gradient(160deg, var(--navy) 0%, var(--navy-soft) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 30px 70px -30px rgba(11, 11, 69, 0.45)',
            }}
          >
            <PlaceholderPersonIcon />
          </div>

          {/* Floating growth-stat card, echoing the logo's ascending line */}
          <div
            className="floating-stat-card"
            style={{
              position: 'absolute',
              bottom: -28,
              left: -28,
              background: 'var(--white)',
              border: '1px solid var(--line)',
              borderRadius: 6,
              padding: '18px 22px',
              boxShadow: '0 20px 45px -20px rgba(11, 11, 69, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <MiniGrowthLine />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--navy)' }}>
                3–10×
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Avg. ROAS lift</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { max-width: 360px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 600, color: 'var(--navy)' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: 4 }}>{label}</div>
    </div>
  )
}

function PlaceholderPersonIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <circle cx="60" cy="44" r="22" stroke="rgba(255,255,255,0.5)" strokeWidth="3" />
      <path
        d="M20 108c4-24 20-38 40-38s36 14 40 38"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MiniGrowthLine() {
  return (
    <svg width="46" height="34" viewBox="0 0 46 34" fill="none" aria-hidden="true">
      <path
        d="M2 28 L14 20 L22 24 L30 10 L44 4"
        stroke="var(--accent)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="4" r="3.5" fill="var(--accent)" />
    </svg>
  )
}
