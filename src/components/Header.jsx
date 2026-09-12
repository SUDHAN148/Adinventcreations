import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 84,
        }}
      >
        <a href="#top" aria-label="AdInvent Creations home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo-navy-cropped.png" alt="AdInvent Creations" style={{ height: 40, width: 'auto' }} />
        </a>

        <nav
          aria-label="Primary"
          style={{ display: 'flex', gap: 40, alignItems: 'center' }}
          className="header-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--navy)' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary" style={{ padding: '11px 22px', fontSize: '0.9rem' }}>
            Book a call
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="menu-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            width: 32,
            height: 32,
            position: 'relative',
          }}
        >
          <span style={barStyle(menuOpen, 'top')} />
          <span style={barStyle(menuOpen, 'bottom')} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="container"
          style={{
            paddingBottom: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1.05rem', fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn btn--primary"
            style={{ alignSelf: 'flex-start' }}
          >
            Book a call
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 780px) {
          .header-nav { display: none !important; }
          .menu-toggle { display: block !important; }
        }
      `}</style>
    </header>
  )
}

function barStyle(open, pos) {
  return {
    position: 'absolute',
    left: 4,
    right: 4,
    height: 2,
    background: 'var(--navy)',
    top: pos === 'top' ? (open ? 15 : 11) : (open ? 15 : 21),
    transform: open ? `rotate(${pos === 'top' ? 45 : -45}deg)` : 'none',
    transition: 'all 0.2s ease',
  }
}
