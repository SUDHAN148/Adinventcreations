const STEPS = [
  {
    title: 'Strategy call',
    body: 'A free call to understand your business, your customers, and what a win looks like for you.',
  },
  {
    title: 'Research & setup',
    body: 'I study your market and competitors, then set up tracking so every rupee spent is measurable from day one.',
  },
  {
    title: 'Launch & test',
    body: 'Campaigns go live with multiple creative and audience variants, so we find what works fast.',
  },
  {
    title: 'Scale what works',
    body: "Winning ads get more budget, weak ones get cut. Weekly reporting keeps you in the loop, always.",
  },
]

export default function Process() {
  return (
    <section id="process" className="section section--navy">
      <div className="container">
        <div style={{ maxWidth: 620, marginBottom: 64 }}>
          <p className="eyebrow-plain">How I work</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 600 }}>
            A clear process, from call to campaign.
          </h2>
        </div>

        <div className="process-grid">
          {STEPS.map((step, i) => (
            <div key={step.title}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  color: 'var(--accent)',
                  marginBottom: 16,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 10 }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted-on-navy)', fontSize: '0.95rem' }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 36px;
        }
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
        @media (max-width: 540px) {
          .process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
