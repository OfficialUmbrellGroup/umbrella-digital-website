import { useId } from "react";

function Logo() {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      className="logo-mark"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="9" fill={`url(#${uid}-bg)`} />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="8.5"
        stroke={`url(#${uid}-ring)`}
        strokeOpacity="0.45"
      />

      {/* U monogram — institutional mark for Umbrella Digital */}
      <path
        d="M12.5 12.25v10.25c0 4.15 3.35 7.5 7.5 7.5s7.5-3.35 7.5-7.5V12.25"
        stroke={`url(#${uid}-mark)`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Digital horizon accent */}
      <path
        d="M15.5 12.25h9"
        stroke={`url(#${uid}-accent)`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="12.25" r="1.25" fill={`url(#${uid}-dot)`} />

      <defs>
        <linearGradient
          id={`${uid}-bg`}
          x1="6"
          y1="4"
          x2="36"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0e2340" />
          <stop offset="1" stopColor="#071222" />
        </linearGradient>
        <linearGradient
          id={`${uid}-ring`}
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3b82f6" stopOpacity="0.55" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id={`${uid}-mark`}
          x1="12"
          y1="12"
          x2="28"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563eb" />
          <stop offset="0.55" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient
          id={`${uid}-accent`}
          x1="15"
          y1="12"
          x2="25"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient
          id={`${uid}-dot`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 12.25) scale(1.5)"
        >
          <stop stopColor="#e0f2fe" />
          <stop offset="1" stopColor="#22d3ee" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default Logo;
