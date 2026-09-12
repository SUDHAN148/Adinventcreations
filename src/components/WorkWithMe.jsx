const OPTIONS = [
  {
    title: 'Ads Management',
    price: 'From ₹15,000/mo',
    body: 'Full Meta ads setup, creative testing, and weekly optimisation for one product or service line.',
  },
  {
    title: 'Full Growth Setup',
    price: 'From ₹35,000',
    body: 'Landing page + ads + retargeting funnel built together, so every part of the journey is working towards one number.',
  },
]

export default function WorkWithMe() {
  return (
    <section id="pricing" className="section section--off">
      <div className="container">
        <div style={{ maxWidth: 620, marginBottom: 56 }}>
          <p className="eyebrow-plain">Working together</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 600 }}>
            Two ways to get started.
          </h2>
          <p style={{ marginTop: 14, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Every engagement starts with a free strategy call — pricing depends on
            your budget and goals, so treat these as a starting point.
          </p>
        </div>

        <div className="options-grid">
          {OPTIONS.map((opt) => (
            <div
              key={opt.title}
              style={{
                borderTop: '3px solid var(--accent)',
                paddingTop: 24,
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{opt.title}</h3>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--accent)',
                  fontSize: '1.1rem',
                  marginTop: 8,
                  marginBottom: 16,
                }}
              >
                {opt.price}
              </div>
              <p style={{ color: 'var(--text-muted)' }}>{opt.body}</p>
              <a href="#contact" className="btn btn--outline-navy" style={{ marginTop: 24 }}>
                Book a call
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 700px) {
          .options-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
