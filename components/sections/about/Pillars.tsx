import React from "react";

const G = "var(--green)";

const pillarIcons: Record<string, React.ReactElement> = {
  "Family-Owned Accountability": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Two adults */}
      <circle cx="17" cy="12" r="5" />
      <path d="M8 30 Q8 20 17 20 Q26 20 26 30 L26 36 L8 36 Z" />
      <circle cx="33" cy="14" r="4" />
      <path d="M26 30 Q26 22 33 22 Q40 22 40 30 L40 36 L26 36 Z" opacity=".75" />
      {/* Child */}
      <circle cx="24" cy="32" r="3.5" />
      <path d="M18 44 Q18 38 24 38 Q30 38 30 44 Z" />
    </svg>
  ),
  "Owned Equipment, No Surprises": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Tractor body */}
      <rect x="6" y="24" width="22" height="12" rx="2" />
      {/* Cab */}
      <rect x="20" y="16" width="10" height="10" rx="1" />
      {/* Large rear wheel */}
      <circle cx="14" cy="36" r="8" fill="none" stroke={G} strokeWidth="4" />
      <circle cx="14" cy="36" r="3" />
      {/* Small front wheel */}
      <circle cx="34" cy="38" r="5" fill="none" stroke={G} strokeWidth="3" />
      <circle cx="34" cy="38" r="2" />
      {/* Exhaust stack */}
      <rect x="28" y="10" width="3" height="8" rx="1" />
    </svg>
  ),
  "A Safety-First Operation": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Shield */}
      <path d="M24 4 L40 10 L40 24 Q40 36 24 44 Q8 36 8 24 L8 10 Z" />
      {/* Check mark */}
      <polyline points="16,24 21,30 32,18" stroke="var(--black-nav)" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Ready When It Matters Most": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Clock face */}
      <circle cx="24" cy="24" r="18" fill="none" stroke={G} strokeWidth="3.5" />
      {/* Hour hand */}
      <line x1="24" y1="24" x2="24" y2="12" stroke={G} strokeWidth="3" strokeLinecap="round" />
      {/* Minute hand */}
      <line x1="24" y1="24" x2="34" y2="24" stroke={G} strokeWidth="3" strokeLinecap="round" />
      {/* Lightning bolt overlay */}
      <polygon points="28,6 22,20 26,20 20,34 30,18 25,18" fill={G} opacity=".9" />
    </svg>
  ),
  "Licensed, Insured, Compliant": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Document */}
      <rect x="10" y="4" width="28" height="36" rx="2" />
      {/* Lines of text */}
      <rect x="16" y="12" width="16" height="2.5" fill="var(--black-nav)" opacity=".5" />
      <rect x="16" y="18" width="12" height="2.5" fill="var(--black-nav)" opacity=".5" />
      <rect x="16" y="24" width="14" height="2.5" fill="var(--black-nav)" opacity=".5" />
      {/* Seal / stamp */}
      <circle cx="30" cy="34" r="8" fill="var(--green-dark)" />
      <polyline points="26,34 29,37 34,31" stroke="var(--white)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Long-Term Partnerships": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Two hands clasping */}
      <path d="M8 28 Q8 20 14 18 L22 18 L28 14 Q32 12 34 16 L24 22 L28 22 Q34 22 36 26 L36 34 Q36 40 30 42 L16 42 Q8 40 8 34 Z" />
      <path d="M40 28 Q40 22 36 22 L34 22 Q34 18 30 18 L38 14 Q44 16 44 24 L44 32 Q44 38 40 40 L36 42 Q40 40 40 34 Z" opacity=".6" />
    </svg>
  ),
};

const pillars = [
  {
    title: "Family-Owned Accountability",
    body: "When you work with us, you work with people who have genuine skin in the game. We're a North Georgia family business — our word and our work are one and the same.",
  },
  {
    title: "Owned Equipment, No Surprises",
    body: "We maintain our own fleet of heavy equipment. That means no waiting on outside vendors, no scheduling gaps, and no subcontracted crews showing up unprepared.",
  },
  {
    title: "A Safety-First Operation",
    body: "OSHA-certified leadership. Crew-wide safety training. Current certifications across every discipline we work in. Safety isn't overhead — it's how we protect our people and our clients.",
  },
  {
    title: "Ready When It Matters Most",
    body: "Storm damage doesn't wait for business hours. We maintain 24/7 rapid-mobilization capability across our entire service area — so when you need us fast, we can move fast.",
  },
  {
    title: "Licensed, Insured, Compliant",
    body: "We are properly licensed and fully insured in every state we operate in. We understand the compliance requirements for utility, municipal, and government procurement — and we meet them.",
  },
  {
    title: "Long-Term Partnerships",
    body: "We don't treat projects as one-off transactions. We communicate clearly, manage professionally, and follow through — because we want to be your contractor on the next job, too.",
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      aria-label="What sets us apart"
      className="resp-pad"
      style={{ background: "var(--off-white)", padding: "6rem 8%" }}
    >
      {/* Header */}
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
          Why Choose Us
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
          What Sets Us Apart
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
          Reliability isn&apos;t something we talk about — it&apos;s something we demonstrate.
          Here&apos;s what makes working with Investment Utilities &amp; Infrastructure different.
        </p>
      </div>

      {/* 3-column grid */}
      <div
        className="resp-3col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {pillars.map(({ title, body }) => (
          <div
            key={title}
            style={{
              background: "var(--white)",
              borderTop: "4px solid var(--green)",
              padding: "2rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            }}
          >
            <div style={{ width: "48px", height: "48px", marginBottom: "1.2rem" }}>
              {pillarIcons[title]}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-dark)",
                marginBottom: "0.65rem",
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--mid-gray)", lineHeight: 1.75 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
