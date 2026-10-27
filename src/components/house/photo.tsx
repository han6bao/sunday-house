/**
 * A photograph with real dimensions (no layout shift), lazy by default, and a
 * gentle hover drift. Use `priority` for the first image on a page.
 */
export function Photo({
  src,
  alt,
  ratio = "2/3",
  className = "",
  imgClassName = "",
  priority = false,
  position,
  sizes = "(max-width: 768px) 100vw, 50vw",
  need,
  motion,
  motionPosition,
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  position?: string;
  sizes?: string;
  /** Placeholder mode: shows a same-size box naming the photo that belongs here. */
  need?: string;
  /** A short muted loop (e.g. "/assets/motion/bride") — plays instead of the still; ".mp4" and ".jpg" poster are added. */
  motion?: string;
  /** object-position for the loop, when the crop needs steering. */
  motionPosition?: string;
}) {
  const [w, h] = ratio.split("/").map(Number);
  if (motion) {
    return (
      <figure className={`sh-photo sh-motion ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
        <video
          src={`${motion}.mp4`}
          poster={`${motion}.jpg`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
          className={imgClassName}
          style={{ objectPosition: motionPosition ?? position }}
        />
      </figure>
    );
  }
  if (need && !src) {
    return (
      <figure className={`sh-photo sh-need ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
        <figcaption className="sh-need__label">
          <span className="sh-need__kicker">Photo needed</span>
          <span className="sh-need__text">{need}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className={`sh-photo ${className}`} style={{ aspectRatio: `${w} / ${h}` }}>
      <img
        src={src}
        alt={alt}
        width={w * 400}
        height={h * 400}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={imgClassName}
        style={position ? { objectPosition: position } : undefined}
      />
    </figure>
  );
}
