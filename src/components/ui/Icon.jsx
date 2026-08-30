const icons = {
  chart: (
    <>
      <rect x="6" y="28" width="8" height="14" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="20" y="18" width="8" height="24" rx="2" fill="currentColor" opacity="0.55" />
      <rect x="34" y="8" width="8" height="34" rx="2" fill="currentColor" />
    </>
  ),
  shield: (
    <path d="M24 4L8 10v12c0 10 6.5 17.5 16 22 9.5-4.5 16-12 16-22V10L24 4z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.12" />
  ),
  liquidity: (
    <>
      <path d="M6 32c6-8 12-8 18 0s12 8 18 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 24c6-8 12-8 18 0s12 8 18 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </>
  ),
  infrastructure: (
    <>
      <rect x="8" y="14" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 22h16M16 28h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  fund: (
    <>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M24 14v20M18 20h8a4 4 0 010 8h-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  ventures: (
    <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12L24 6z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
  ),
  award: (
    <>
      <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M16 32l4-8M32 32l-4-8M20 42h8l-2-6h-4l-2 6z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  compliance: (
    <>
      <path d="M12 8h24v32H12V8z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M18 18h12M18 24h12M18 30h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
}

function Icon({ name, className = '' }) {
  const graphic = icons[name]
  if (!graphic) return null
  return (
    <span className={`icon ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">{graphic}</svg>
    </span>
  )
}

export default Icon
