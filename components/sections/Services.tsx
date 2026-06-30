"use client";

import React, { useState } from "react";
import Image from "next/image";

const C = "var(--green)";

const icons: Record<string, React.ReactElement> = {
  "Right-of-Way Clearing": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Power pylon */}
      <polygon points="20,4 28,4 32,44 16,44" opacity=".2" />
      <rect x="22" y="4" width="4" height="40" />
      <polygon points="14,14 34,14 30,20 18,20" />
      <polygon points="16,26 32,26 28,32 20,32" />
      <rect x="10" y="13" width="28" height="2" />
      <rect x="12" y="25" width="24" height="2" />
      {/* Ground line */}
      <rect x="4" y="43" width="40" height="2" opacity=".5" />
      {/* Trees left & right */}
      <polygon points="4,42 10,28 16,42" opacity=".6" />
      <polygon points="32,42 38,28 44,42" opacity=".6" />
    </svg>
  ),
  "Vegetation Management": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Trunk */}
      <rect x="22" y="30" width="4" height="14" />
      {/* Canopy layers */}
      <polygon points="24,6 36,30 12,30" />
      <polygon points="24,14 34,34 14,34" opacity=".4" />
      {/* Pruning shears blade */}
      <rect x="32" y="20" width="12" height="3" rx="1.5" transform="rotate(-35 32 20)" fill={C} />
      <rect x="32" y="26" width="12" height="3" rx="1.5" transform="rotate(35 32 30)" fill={C} />
    </svg>
  ),
  "Site Preparation": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Excavator body */}
      <rect x="6" y="28" width="22" height="10" rx="2" />
      {/* Cab */}
      <rect x="20" y="20" width="10" height="10" rx="1" />
      {/* Arm */}
      <rect x="28" y="14" width="14" height="4" rx="2" transform="rotate(-20 28 14)" />
      {/* Bucket */}
      <polygon points="36,8 44,10 40,18 34,16" />
      {/* Tracks */}
      <rect x="4" y="37" width="28" height="5" rx="2.5" />
      <rect x="6" y="36" width="4" height="7" rx="2" />
      <rect x="28" y="36" width="4" height="7" rx="2" />
    </svg>
  ),
  "Wetland Mitigation": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Water waves */}
      <path d="M4 36 Q12 30 20 36 Q28 42 36 36 Q42 30 44 36" stroke={C} strokeWidth="3" fill="none" />
      <path d="M4 42 Q12 36 20 42 Q28 48 36 42 Q42 36 44 42" stroke={C} strokeWidth="3" fill="none" opacity=".5" />
      {/* Cattail left */}
      <rect x="10" y="14" width="3" height="20" />
      <rect x="9" y="10" width="5" height="10" rx="2.5" opacity=".8" />
      {/* Cattail right */}
      <rect x="22" y="18" width="3" height="16" />
      <rect x="21" y="14" width="5" height="9" rx="2.5" opacity=".8" />
      {/* Leaf */}
      <path d="M13 24 Q22 10 32 18" stroke={C} strokeWidth="2.5" fill="none" />
    </svg>
  ),
  "Mat Laying / Line Support": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Stack of timber mats */}
      <rect x="4" y="34" width="40" height="6" rx="1" />
      <rect x="4" y="26" width="40" height="6" rx="1" opacity=".8" />
      <rect x="4" y="18" width="40" height="6" rx="1" opacity=".6" />
      {/* Plank grain lines */}
      <rect x="12" y="18" width="1.5" height="22" fill="rgba(0,0,0,0.2)" />
      <rect x="24" y="18" width="1.5" height="22" fill="rgba(0,0,0,0.2)" />
      <rect x="36" y="18" width="1.5" height="22" fill="rgba(0,0,0,0.2)" />
    </svg>
  ),
  "Storm Restoration": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Storm cloud */}
      <path d="M10 22 a8 8 0 0 1 8-8 a6 6 0 0 1 11.6-2A7 7 0 0 1 38 22Z" />
      {/* Lightning bolt */}
      <polygon points="26,24 20,36 24,36 22,48 32,32 27,32 30,24" />
    </svg>
  ),
  "High Voltage / Transmission": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Transmission tower */}
      <rect x="22" y="2" width="4" height="44" />
      <polygon points="12,10 36,10 32,18 16,18" />
      <polygon points="14,22 34,22 30,30 18,30" />
      {/* Cross arms */}
      <rect x="8" y="9" width="32" height="3" />
      <rect x="10" y="21" width="28" height="3" />
      {/* Insulators */}
      <rect x="8" y="12" width="3" height="6" rx="1" opacity=".7" />
      <rect x="37" y="12" width="3" height="6" rx="1" opacity=".7" />
      <rect x="10" y="24" width="3" height="6" rx="1" opacity=".7" />
      <rect x="35" y="24" width="3" height="6" rx="1" opacity=".7" />
      {/* Base */}
      <polygon points="18,44 30,44 26,34 22,34" />
    </svg>
  ),
  "DOT / Road Corridor Work": (
    <svg viewBox="0 0 48 48" fill={C} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Road surface */}
      <polygon points="8,44 40,44 32,10 16,10" />
      {/* Road center dashes */}
      <rect x="22" y="13" width="4" height="5" fill="var(--black-nav)" opacity=".6" />
      <rect x="21" y="22" width="6" height="5" fill="var(--black-nav)" opacity=".6" />
      <rect x="20" y="31" width="8" height="5" fill="var(--black-nav)" opacity=".6" />
      {/* Road edge lines */}
      <rect x="8" y="10" width="2.5" height="34" rx="1" opacity=".4" fill="var(--black-nav)" />
      <rect x="37.5" y="10" width="2.5" height="34" rx="1" opacity=".4" fill="var(--black-nav)" />
      {/* Trees flanking */}
      <polygon points="2,44 6,34 10,44" opacity=".5" />
      <polygon points="38,44 42,34 46,44" opacity=".5" />
    </svg>
  ),
};

const services = [
  {
    title: "Right-of-Way Clearing",
    desc: "Complete ROW establishment and maintenance along power, pipeline, and road corridors — from initial clearing through long-term vegetation programs.",
    image: "/svc-row-clearing.png",
  },
  {
    title: "Vegetation Management",
    desc: "Scheduled and reactive vegetation management to keep corridors clear, compliant, and maintained to NERC and utility standards.",
    image: null,
  },
  {
    title: "Site Preparation",
    desc: "Full site prep for utility infrastructure — grading, clearing, grubbing, and erosion control tailored to your project specs.",
    image: null,
  },
  {
    title: "Wetland Mitigation",
    desc: "Permitted wetland clearing and mitigation executed in coordination with environmental agencies and project managers.",
    image: null,
  },
  {
    title: "Mat Laying / Line Support",
    desc: "Timber mat installation for heavy equipment access across soft or sensitive terrain — supporting drilling, construction, and restoration.",
    image: null,
  },
  {
    title: "Storm Restoration",
    desc: "Rapid-response storm debris removal, hazard tree mitigation, and corridor restoration for utilities and municipalities after severe weather.",
    image: null,
  },
  {
    title: "High Voltage / Transmission",
    desc: "Certified clearing along live transmission corridors. Our crews are electrical-hazard trained for safe proximity to energized lines.",
    image: null,
  },
  {
    title: "DOT / Road Corridor Work",
    desc: "Right-of-way maintenance and clearing for state and federal road corridors, compliant with DOT specs and traffic control requirements.",
    image: null,
  },
];

function ServiceCard({ title, desc, image }: { title: string; desc: string; image: string | null }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: image ? "transparent" : "linear-gradient(135deg, #1a2a10 0%, #243518 40%, #1c2c1a 70%, #2a1a0a 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderBottom: `3px solid ${hovered ? "var(--green)" : "rgba(255,255,255,0.07)"}`,
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        transition: "border-bottom-color 0.2s",
        minHeight: image ? "260px" : undefined,
      }}
    >
      {/* Photo background */}
      {image && (
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      )}

      {/* Dark overlay — deeper when photo is present */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: image
            ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.35) 100%)"
            : "url(\"data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Card content */}
      <div style={{ position: "relative", zIndex: 2, paddingTop: "0.5rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--white)",
            marginBottom: "0.65rem",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>{desc}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      className="resp-pad"
      style={{ background: "var(--white)", padding: "6rem 8%" }}
    >
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--green)",
            marginBottom: "0.7rem",
          }}
        >
          What We Do
        </div>
        <h2
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
            fontWeight: 700,
          color: "var(--text-dark)",
          lineHeight: 1.1,
          marginBottom: "1rem",
        }}
        >
          Full-Spectrum Site Work
          <br />
          for Utility Customers
        </h2>
        <p
          style={{
            color: "var(--mid-gray)",
            fontSize: "0.93rem",
            lineHeight: 1.8,
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          From initial right-of-way clearing to long-term corridor maintenance, we deliver
          end-to-end land services for demanding infrastructure projects.
        </p>
      </div>

      <div
        className="resp-2col-cards"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem",
        }}
      >
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} desc={s.desc} image={s.image} />
        ))}
      </div>
    </section>
  );
}
