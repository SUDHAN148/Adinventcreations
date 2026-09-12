// PLACEHOLDER CONTENT — replace each entry with your real client work.
// Keep the same shape: name, industry, whatIDid, result, resultLabel.
const PROJECTS = [
  {
    name: 'Client Name 1',
    industry: 'D2C Skincare Brand',
    whatIDid: 'Ran Meta ad campaigns and rebuilt their product landing page for conversions.',
    result: '4.2×',
    resultLabel: 'Return on ad spend in 60 days',
  },
  {
    name: 'Client Name 2',
    industry: 'Local Fitness Studio',
    whatIDid: 'Built a lead-gen funnel with retargeting to fill class bookings every week.',
    result: '3.1×',
    resultLabel: 'Increase in monthly sign-ups',
  },
  {
    name: 'Client Name 3',
    industry: 'Home Décor E-commerce',
    whatIDid: 'Full-funnel Meta strategy from cold creative testing to retargeting sequences.',
    result: '₹18L+',
    resultLabel: 'Revenue generated in one quarter',
  },
]

export default function Work() {
  return (
    <section id="work" className="section section--off">
      <div className="container">
        <div style={{ maxWidth: 620, marginBottom: 56 }}>
          <p className="eyebrow-plain">Selected work</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 600 }}>
            Real campaigns, real numbers.
          </h2>
          <p style={{ marginTop: 14, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Placeholder case studies below — swap these for your own clients and results.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="work-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1.4fr 1fr auto',
                gap: 32,
                alignItems: 'center',
                padding: '32px 0',
                borderTop: '1px solid var(--line)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{p.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: 4 }}>{p.industry}</p>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{p.whatIDid}</p>
              <div style={{ textAlign: 'right' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                  }}
                >
                  {p.result}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>{p.resultLabel}</div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .work-row {
            grid-template-columns: auto 1fr !important;
            text-align: left !important;
            gap: 8px 16px !important;
          }
          .work-row > div:nth-child(3) { grid-column: 2; }
          .work-row > div:last-child {
            grid-column: 2;
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  )
}
