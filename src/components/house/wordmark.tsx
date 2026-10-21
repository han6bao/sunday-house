import { useId } from "react";

/**
 * Hero wordmark: SUNDAY in spaced capitals with a script "House" crossing
 * it. Where the script crosses the capitals, the capitals are cut away
 * around each stroke (a knockout halo), so the overlap breathes — the photo
 * shows through the gap.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const maskId = `sh-wordmark-gap-${id}`;
  const script = (
    <text
      x="518"
      y="336"
      textAnchor="middle"
      style={{ fontFamily: "var(--font-accent, 'Pinyon Script'), cursive", fontSize: 230 }}
    >
      House
    </text>
  );
  return (
    <svg
      className={`sh-wordmark ${className}`}
      viewBox="0 0 1000 400"
      role="img"
      aria-label="Sunday House"
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="400">
          <rect width="1000" height="400" fill="#fff" />
          {/* the script, fattened with a black stroke, punches the gap */}
          <g fill="#000" stroke="#000" strokeWidth="13" strokeLinejoin="round">
            {script}
          </g>
        </mask>
      </defs>

      <g mask={`url(#${maskId})`} fill="currentColor">
        <text
          x="500"
          y="215"
          textAnchor="middle"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 190,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          {/* trailing letter-spacing is balanced by a small nudge */}
          <tspan dx="30">SUNDAY</tspan>
        </text>
      </g>

      <g fill="currentColor">{script}</g>
    </svg>
  );
}
