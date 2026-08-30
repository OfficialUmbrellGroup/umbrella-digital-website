export function RollingDigits({ value, active, duration = 1200 }) {
  const digits = String(Math.max(0, value)).split('')

  return (
    <span className="rolling-digits" aria-hidden="true">
      {digits.map((digit, i) => (
        <span key={`${i}-${value}`} className="rolling-digits__col">
          <span
            className="rolling-digits__strip"
            style={{
              transform: active ? `translateY(-${Number(digit)}em)` : 'translateY(0)',
              transition: active
                ? `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 80}ms`
                : 'none',
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  )
}
