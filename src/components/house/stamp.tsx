import { HouseMark } from "./marks";

/** A round "Sunday House" stamp that turns slowly, like a wax seal. */
export function Stamp({ className = "", text = "Sunday House · Weddings + Film · Tacoma, Washington · " }: { className?: string; text?: string }) {
  return (
    <div className={`sh-stamp ${className}`} aria-hidden="true">
      <svg className="sh-stamp__ring" viewBox="0 0 200 200">
        <defs>
          <path id="sh-stamp-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <text>
          <textPath href="#sh-stamp-circle" textLength="488">
            {text}
          </textPath>
        </text>
      </svg>
      <HouseMark className="sh-stamp__mark" strokeWidth={34} />
    </div>
  );
}
