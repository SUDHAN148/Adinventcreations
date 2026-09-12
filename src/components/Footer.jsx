export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--white)', paddingTop: 1 }}>
      <div className="container" style={{ padding: '40px var(--gutter) 32px' }}>
        <div
          className="footer-grid"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <img src="/logo-white-cropped.png" alt="AdInvent Creations" style={{ height: 34, width: 'auto', marginBottom: 12 }} />
            <p style={{ color: 'var(--text-muted-on-navy)', fontSize: '0.9rem', maxWidth: 260 }}>
              Adhithya Prabhu — Meta ads &amp; paid social for brands that want to grow.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted-on-navy)', marginBottom: 12 }}>Navigate</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="#work" style={{ fontSize: '0.92rem' }}>Work</a>
                <a href="#services" style={{ fontSize: '0.92rem' }}>Services</a>
                <a href="#process" style={{ fontSize: '0.92rem' }}>Process</a>
                <a href="#contact" style={{ fontSize: '0.92rem' }}>Contact</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted-on-navy)', marginBottom: 12 }}>Connect</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {/* PLACEHOLDER LINKS — swap in your real handles/URLs */}
                <a href="mailto:hello@adinventcreations.com" style={{ fontSize: '0.92rem' }}>Email</a>
                <a href="https://instagram.com/" style={{ fontSize: '0.92rem' }}>Instagram</a>
                <a href="https://linkedin.com/" style={{ fontSize: '0.92rem' }}>LinkedIn</a>
                <a href="https://wa.me/910000000000" style={{ fontSize: '0.92rem' }}>WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--line-on-navy)',
            marginTop: 40,
            paddingTop: 20,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: '0.82rem',
            color: 'var(--text-muted-on-navy)',
          }}
        >
          <span>© {new Date().getFullYear()} AdInvent Creations. All rights reserved.</span>
          <span>Chennai, India</span>
        </div>
      </div>
    </footer>
  )
}
