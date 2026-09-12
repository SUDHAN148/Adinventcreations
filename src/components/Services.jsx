const SERVICES = [
  {
    title: 'Meta Ads Management',
    body: 'Full setup and daily management of Facebook and Instagram campaigns — audience research, creative testing, budget scaling, and conversion tracking done right from day one.',
    tags: ['Campaign strategy', 'A/B creative testing', 'Pixel & CAPI setup'],
  },
  {
    title: 'Landing Pages That Convert',
    body: "Ads only work as well as where they send people. I build fast, mobile-first landing pages designed around one goal: turning your ad traffic into leads or sales.",
    tags: ['Conversion-focused copy', 'Fast load times', 'Lead capture forms'],
  },
  {
    title: 'Retargeting & Funnels',
    body: 'Most buyers don\u2019t convert on the first visit. I build layered retargeting funnels that bring warm traffic back and keep your brand top of mind until they buy.',
    tags: ['Custom audiences', 'Email/WhatsApp handoff', 'Funnel tracking'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ maxWidth: 620, marginBottom: 64 }}>
          <p className="eyebrow-plain">What I do</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 600 }}>
            Three things I focus on, so your budget goes further.
          </h2>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} style={{ paddingTop: 28, borderTop: '3px solid var(--accent)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'rgba(11, 11, 69, 0.18)',
                  marginBottom: 12,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: 14 }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>{s.body}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.tags.map((tag) => (
                  <li key={tag} style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        @media (max-width: 860px) {
          .services-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  )
}
