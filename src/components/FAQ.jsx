import { useState } from 'react'

const FAQS = [
  {
    q: 'What kind of businesses do you work with?',
    a: 'Mostly D2C brands, local service businesses, and small e-commerce stores that want consistent leads or sales from Meta ads rather than one-off boosted posts.',
  },
  {
    q: 'Do I need a website before running ads?',
    a: "For lead generation, a simple landing page is enough to start. For e-commerce, a proper store makes ads convert better. I'll tell you exactly what you need on our first call.",
  },
  {
    q: 'How soon will I see results?',
    a: 'Most accounts show early signal within 1–2 weeks of launch, with real optimisation kicking in by week 3–4 once we have enough data to work with.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Access to your Meta Business account, a sense of your monthly ad budget, and 30 minutes for a strategy call. I handle the rest.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 780 }}>
        <p className="eyebrow-plain">Questions</p>
        <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 600, marginBottom: 48 }}>
          Things people usually ask.
        </h2>

        <div>
          {FAQS.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q} style={{ borderTop: '1px solid var(--line)' }}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 24,
                    background: 'none',
                    border: 'none',
                    padding: '22px 0',
                    textAlign: 'left',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: 'var(--navy)',
                  }}
                >
                  {item.q}
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      width: 20,
                      height: 20,
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', top: 9, left: 0, width: 20, height: 2, background: 'var(--navy)' }} />
                    <span
                      style={{
                        position: 'absolute',
                        top: 9,
                        left: 0,
                        width: 20,
                        height: 2,
                        background: 'var(--navy)',
                        transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </span>
                </button>
                {open && (
                  <p style={{ paddingBottom: 24, color: 'var(--text-muted)', maxWidth: 620 }}>{item.a}</p>
                )}
              </div>
            )
          })}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  )
}
