export function ArrowRight({ className = '' }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function QuotationMark({ className = '' }) {
  return (
    <svg className={className} width="32" height="26" viewBox="0 0 32 26" fill="none" aria-hidden="true">
      <path
        d="M0 26V15.6C0 9.2 3.2 4.4 9.6 1.2L12 4.8C7.2 7.2 4.8 10.4 4.8 14.4H12V26H0ZM20 26V15.6C20 9.2 23.2 4.4 29.6 1.2L32 4.8C27.2 7.2 24.8 10.4 24.8 14.4H32V26H20Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function IconWealth() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="url(#g1)" strokeWidth="2" />
      <path d="M16 28c0-4.4 3.6-10 8-10s8 5.6 8 10" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 14v4M20 18h8" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#02f260" /><stop offset="1" stopColor="#0665ef" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function IconChart() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="26" width="8" height="14" rx="1" fill="url(#g2)" />
      <rect x="20" y="18" width="8" height="22" rx="1" fill="url(#g2)" />
      <rect x="32" y="10" width="8" height="30" rx="1" fill="url(#g2)" />
      <defs>
        <linearGradient id="g2" x1="8" y1="10" x2="40" y2="40">
          <stop stopColor="#02f260" /><stop offset="1" stopColor="#0665ef" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function IconLiquidity() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M10 24c0-8 6.5-14 14-14s14 6 14 14-6.5 14-14 14" stroke="url(#g3)" strokeWidth="2" />
      <path d="M18 24h12M24 18v12" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="g3" x1="10" y1="10" x2="38" y2="38">
          <stop stopColor="#02f260" /><stop offset="1" stopColor="#0665ef" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function IconInfra() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="10" y="14" width="28" height="20" rx="2" stroke="url(#g4)" strokeWidth="2" />
      <path d="M16 22h16M16 28h10" stroke="url(#g4)" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 14V10h12v4" stroke="url(#g4)" strokeWidth="2" />
      <defs>
        <linearGradient id="g4" x1="10" y1="10" x2="38" y2="38">
          <stop stopColor="#02f260" /><stop offset="1" stopColor="#0665ef" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const productIcons = {
  wealth: IconWealth,
  chart: IconChart,
  liquidity: IconLiquidity,
  infra: IconInfra,
}
