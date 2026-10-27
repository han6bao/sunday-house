/**
 * The Sunday House logo: SUNDAY in serif capitals with a script "House"
 * crossing it. Hand-finished artwork, served large enough to stay sharp on
 * any screen. White by default (for photos); pass tone for other grounds.
 */
export function Wordmark({ className = "", tone = "white" }: { className?: string; tone?: "white" | "ink" | "pink" }) {
  const base = `/assets/brand/logo-sh4-${tone}`;
  return (
    <picture className={`sh-wordmark ${className}`}>
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img src={`${base}.png`} alt="Sunday House" width={3600} height={1662} decoding="async" fetchPriority="high" />
    </picture>
  );
}
