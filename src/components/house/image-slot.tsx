

type Ratio = "1/1" | "3/2" | "3/4" | "4/5" | "9/16" | "16/9" | "16/10" | "auto";

const RATIO_MAP: Record<Ratio, string> = {
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "3/4": "aspect-[3/4]",
  "4/5": "aspect-[4/5]",
  "9/16": "aspect-[9/16]",
  "16/9": "aspect-video",
  "16/10": "aspect-[16/10]",
  auto: "aspect-auto",
};

/**
 * Reserved frame for Sunday House photography. Without a `src` it renders a
 * quiet placeholder; with a `src` it presents the owner's photograph inside
 * the same matted gold-hairline frame.
 */
export function ImageSlot({
  label,
  ratio = "auto",
  className = "",
  src,
  alt,
}: {
  label?: string;
  ratio?: Ratio;
  className?: string;
  src?: string;
  alt?: string;
}) {
  const frame = [
    "image-slot",
    ratio !== "auto" ? RATIO_MAP[ratio] : "aspect-auto min-h-[16rem]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (src) {
    return (
      <figure className={frame}>
        <img
          className="image-slot__photo"
          src={src}
          alt={alt ?? label ?? "Sunday House photograph"}
          loading="lazy"
        />
      </figure>
    );
  }

  const placeholderIcon = (
    <img
      src="/assets/brand/monogram.png"
      alt=""
      className="w-8 opacity-70"
    />
  );

  return (
    <figure className={frame}>
      <div className="image-slot__inner">
        {placeholderIcon}
        <figcaption className="max-w-[16ch] leading-relaxed">
          {label ?? "Your work will live here"}
        </figcaption>
      </div>
    </figure>
  );
}