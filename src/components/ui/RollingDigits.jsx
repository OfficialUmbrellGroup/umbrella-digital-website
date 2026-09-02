export function RollingDigits({ value }) {
  const formatted = String(Math.max(0, Math.round(value)));

  return (
    <span className="rolling-digits" aria-hidden="true">
      {formatted.split("").map((digit, i) => (
        <span key={i} className="rolling-digits__col">
          <span
            className="rolling-digits__strip"
            style={{ transform: `translate3d(0, -${Number(digit)}em, 0)` }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
}
