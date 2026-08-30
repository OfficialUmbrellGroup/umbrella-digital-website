function Logo() {
  return (
    <svg className="logo-mark" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" rx="6" fill="#222" />
      <circle cx="18" cy="18" r="10" stroke="url(#amberGrad)" strokeWidth="2.5" fill="none" />
      <path d="M18 12v12M12 18h12" stroke="url(#amberGrad)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="amberGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#02f260" />
          <stop offset="1" stopColor="#0665ef" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Logo
