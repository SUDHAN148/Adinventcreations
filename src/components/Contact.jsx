export default function Contact() {
  return (
    <section id="contact" className="section section--navy">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="eyebrow-plain" style={{ display: 'flex', justifyContent: 'center' }}>
          Let's talk growth
        </p>
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
            fontWeight: 600,
            maxWidth: 760,
            margin: '0 auto',
          }}
        >
          Ready to turn ad spend into real revenue?
        </h2>
        <p style={{ marginTop: 20, color: 'var(--text-muted-on-navy)', maxWidth: 480, marginInline: 'auto' }}>
          Book a free 30-minute strategy call — no pressure, just a clear read on
          whether Meta ads make sense for your business right now.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* PLACEHOLDER LINK — replace with your real booking link (Calendly etc.) */}
          <a href="#" className="btn btn--primary">
            Book a strategy call
          </a>
          {/* PLACEHOLDER — replace with your real email */}
          <a href="mailto:hello@adinventcreations.com" className="btn btn--outline-white">
            hello@adinventcreations.com
          </a>
        </div>
      </div>
    </section>
  )
}
