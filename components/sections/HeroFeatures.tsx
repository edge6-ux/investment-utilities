import Image from "next/image";

const features = [
  { label: "Right-of-Way Clearing", src: "/row-clearing.png", size: 45 },
  { label: "Vegetation Management", src: "/vegetation.png", size: 45 },
  { label: "Site Preparation", src: "/site-prep.png", size: 45, scale: 1.75 },
  { label: "Storm Restoration", src: "/storm.png", size: 45, scale: 1.6 },
];

export default function HeroFeatures() {
  return (
    <section
      aria-label="Core services overview"
      className="resp-hero-features"
      style={{
        background: "var(--white)",
        padding: "1rem 8%",
        borderBottom: "1px solid var(--light-gray)",
      }}
    >
      <div className="resp-hero-features-grid hero-features-grid">
        {features.map(({ label, src, size, scale = 1 }) => (
          <div key={label} className="hero-feature-item">
            <div className="hero-feature-icon-circle">
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
            </div>
            <p className="hero-feature-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
