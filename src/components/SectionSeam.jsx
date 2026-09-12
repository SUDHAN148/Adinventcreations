// A thin strip that continues the ascending-line motif from the logo/hero
// as a connective thread between sections, instead of a plain hairline.
export default function SectionSeam({ background = 'var(--white)' }) {
  return (
    <div className="section-seam" style={{ background }}>
      <svg viewBox="0 0 1200 48" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <path
          d="M0 34 L200 30 L340 38 L520 14 L700 22 L900 8 L1200 16"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          opacity="0.55"
        />
      </svg>
    </div>
  )
}
