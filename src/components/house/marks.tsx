/**
 * Sunday House brand marks, drawn as SVG from the brand style guide:
 * the gold picture-frame house with a tiny heart, the SH monogram seal, and
 * the ornamental front-door seal inspired by the supplied rose world.
 * The owner's distributed logo files can replace these later with no markup.
 */
import type { SVGProps } from "react";

const GOLD = "#B38A4A";
const ROSE = "#C98F8E";

/** Perfectly symmetrical heart (classic silhouette, viewBox 0 0 24 24). */
export function Heart({ filled = false, ...props }: SVGProps<SVGSVGElement> & { filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinejoin="round"
      strokeLinecap="round"
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
    </svg>
  );
}

export function MiniHeart(props: SVGProps<SVGSVGElement>) {
  return <Heart {...props} />;
}

/** The Sunday House logo: a house with a heart inside (line mark). */
export function HouseMark({ strokeWidth = 30, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="96 96 832 832"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M122 900V452L512 122l390 330v448H122Z" />
      <path d="M512 522c-26-40-62-58-96-58-56 0-90 42-90 96 0 78 80 140 186 218 106-78 186-140 186-218 0-54-34-96-90-96-34 0-70 18-96 58Z" />
    </svg>
  );
}

export function FilmStripArc(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
      strokeLinecap="round"
      {...props}
    >
      {/* curved film strip */}
      <path d="M8 104 C 55 96, 96 74, 150 26" />
      <path d="M8 114 C 58 106, 102 82, 158 30" />
      {/* frames along the curve */}
      <path d="M30 96 L58 82 M38 92 L66 78 M46 88 L74 74" opacity={0.6} />
      <path d="M64 70 L92 56 M72 66 L100 52 M80 62 L108 48" opacity={0.6} />
      <path d="M96 50 L124 36 M104 46 L132 32 M112 42 L140 28" opacity={0.6} />
      {/* sprocket ticks on outer edge */}
      <path d="M16 106 L14 101 M24 103 L22 98 M32 100 L30 95 M40 97 L38 92 M48 94 L46 89" opacity={0.75} />
      <path d="M144 32 L142 27 M152 29 L150 24 M160 26 L158 21" opacity={0.75} />
    </svg>
  );
}

export function HouseFrame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke={GOLD}
      strokeWidth={1.4}
      strokeLinejoin="round"
      strokeLinecap="round"
      {...props}
    >
      <rect x="5" y="5" width="38" height="38" rx="1.5" />
      <rect x="9" y="9" width="30" height="30" rx="1" opacity={0.55} />
      <path d="M15 29 V22 l9-6.5 9 6.5 v7" />
      <path d="M18.5 29 V25 h11 v4" />
      <circle cx="24" cy="20.5" r="1.4" fill={GOLD} stroke="none" opacity={0.9} />
    </svg>
  );
}

export function FilmReelMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke={GOLD}
      strokeWidth={1.4}
      strokeLinejoin="round"
      strokeLinecap="round"
      {...props}
    >
      {/* spool */}
      <circle cx="24" cy="40" r="7" />
      <circle cx="24" cy="40" r="2.6" opacity={0.7} />
      <path d="M24 36.2v1.6 M24 42.2v1.6 M20.2 40h1.6 M26.2 40h1.6" opacity={0.85} />
      <path d="M20.6 36.6l1.1 1.1 M26.3 42.3l1.1 1.1 M26.3 37.7l1.1-1.1 M20.6 43.4l1.1-1.1" opacity={0.55} />
      {/* the film strip rising upward */}
      <rect x="20.5" y="4.5" width="7" height="26" rx="0.6" />
      {/* frames */}
      <rect x="21.7" y="6.6" width="4.6" height="5.9" opacity={0.5} />
      <rect x="21.7" y="14.8" width="4.6" height="5.9" opacity={0.5} />
      <rect x="21.7" y="23" width="4.6" height="5.9" opacity={0.5} />
      {/* sprocket ticks on the strip edges */}
      <path d="M19.2 6.6h1.3 M19.2 10.7h1.3 M19.2 14.8h1.3 M19.2 18.9h1.3 M19.2 23h1.3 M19.2 27.1h1.3" opacity={0.85} />
      <path d="M27.5 6.6h1.3 M27.5 10.7h1.3 M27.5 14.8h1.3 M27.5 18.9h1.3 M27.5 23h1.3 M27.5 27.1h1.3" opacity={0.85} />
    </svg>
  );
}

export function ShMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" {...props}>
      <circle cx="24" cy="24" r="21.5" stroke={GOLD} strokeWidth={1.4} />
      <circle cx="24" cy="24" r="18.5" stroke={GOLD} strokeWidth={0.6} opacity={0.55} />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Instrument Serif, serif"
        fontSize="17"
        letterSpacing="0.5"
        fill="#2c2726"
      >
        S
      </text>
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Instrument Serif, serif"
        fontSize="17"
        letterSpacing="0.5"
        fill="transparent"
        stroke={GOLD}
        strokeWidth={0.7}
      >
        S
      </text>
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="Instrument Serif, serif"
        fontSize="13"
        letterSpacing="9"
        fill="#2c2726"
        opacity="0.9"
      >
        H
      </text>
    </svg>
  );
}

function Flourish(props: SVGProps<SVGPathElement>) {
  return (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      {...props}
    />
  );
}

/** Ornamental front-door seal: concentric ovals, corner flourishes, hearts. */
export function DoorOrnament(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 560 320"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* concentric ornamental ovals */}
      <ellipse cx="280" cy="160" rx="270" ry="152" stroke="currentColor" strokeWidth={1} />
      <ellipse cx="280" cy="160" rx="252" ry="138" stroke="currentColor" strokeWidth={0.6} opacity={0.65} />
      <ellipse cx="280" cy="160" rx="221" ry="119" stroke="currentColor" strokeWidth={0.5} opacity={0.4} />

      {/* corner flourishes */}
      <g>
        <Flourish d="M280 20c-34 0-52 8-60 20 6 2 16 2 24-2 6-4 10-10 12-18" transform="translate(0,-4)" />
        <Flourish d="M280 20c34 0 52 8 60 20-6 2-16 2-24-2-6-4-10-10-12-18" transform="translate(0,-4)" />
      </g>
      <g transform="translate(0, 8)">
        <path
          d="M62 160c-14-8-24-8-30-2 0 8 6 16 16 20 6-4 10-10 14-18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.7}
        />
        <path
          d="M498 160c14-8 24-8 30-2 0 8-6 16-16 20-6-4-10-10-14-18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={0.7}
        />
      </g>

      {/* twin hearts beside the top flourish */}
      <Heart x={178} y={14} width={20} height={20} strokeWidth={1.1} color={ROSE} />
      <Heart x={362} y={14} width={20} height={20} strokeWidth={1.1} color={ROSE} />

      {/* the house, centered */}
      <g transform="translate(254, 96) scale(1.18)">
        <rect x="4.5" y="4.5" width="39" height="39" rx="1" stroke="currentColor" strokeWidth={1.3} />
        <rect x="8.5" y="8.5" width="31" height="31" rx="1" stroke="currentColor" strokeWidth={0.55} opacity={0.55} />
        <path d="M14 28 V21 l10-7 10 7 v7" stroke="currentColor" strokeWidth={1.15} />
        <path d="M17 28 V24 h14 v4" stroke="currentColor" strokeWidth={1} />
        <g transform="translate(14.8, 16.9) scale(0.34)">
          <path
            d="M24 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </g>
    </svg>
  );
}