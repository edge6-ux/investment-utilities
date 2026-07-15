import Image from "next/image";

type Feature = {
  label: string;
  src?: string;
  size?: number;
  scale?: number;
  desktopOnly?: boolean;
};

const features: Feature[] = [
  { label: "Right-of-Way Clearing", src: "/row-clearing.png", size: 45 },
  { label: "Vegetation Management", src: "/vegetation.png", size: 45 },
  { label: "Site Preparation", src: "/site-prep.png", size: 45, scale: 1.75 },
  { label: "Storm Restoration", src: "/storm.png", size: 45, scale: 1.4 },
  {
    label: "DOT/Road Corridor Work",
    src: "/dot-corridor.png",
    size: 45,
    desktopOnly: true,
  },
  {
    label: "Fiber and Utility Trenching",
    src: "/fiber-trenching.png",
    size: 45,
    desktopOnly: true,
  },
];

export default function HeroFeatures() {
  return (
    <section
      aria-label="Core services overview"
      className="resp-hero-features"
      style={{
        background: "var(--white)",
        padding: "0.65rem 8%",
        borderBottom: "1px solid var(--light-gray)",
      }}
    >
      <div className="resp-hero-features-grid hero-features-grid">
        {features.map(({ label, src, size = 45, scale = 1, desktopOnly = false }) => (
          <div
            key={label}
            className={`hero-feature-item${desktopOnly ? " hero-feature-item-desktop-only" : ""}`}
          >
            <div className="hero-feature-icon-circle">
              {src ? (
                <Image
                  src={src}
                  alt=""
                  width={size}
                  height={size}
                  aria-hidden="true"
                  className="hero-feature-icon-image"
                  style={{
                    width: size,
                    height: size,
                    objectFit: "contain",
                    transform: `scale(${scale})`,
                  }}
                />
              ) : null}
            </div>
            <p className="hero-feature-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
