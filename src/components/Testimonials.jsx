// PLACEHOLDER — swap in real client quotes when you have them.
const QUOTES = [
  {
    quote:
      "Adhithya took the time to actually understand our product before touching a single ad. Our cost per lead dropped within the first two weeks.",
    name: 'Client Name',
    role: 'Founder, Skincare Brand',
  },
  {
    quote:
      "Clear reporting every week, no jargon, and campaigns that actually moved our bookings up. Exactly what a small studio needs.",
    name: 'Client Name',
    role: 'Owner, Fitness Studio',
  },
]

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow-plain" style={{ marginBottom: 48 }}>What clients say</p>
        <div className="testimonial-grid">
          {QUOTES.map((q, i) => (
            <figure key={i} style={{ margin: 0 }}>
              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption style={{ marginTop: 24, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                {q.name} — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        @media (max-width: 780px) {
          .testimonial-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>
    </section>
  )
}
