import React from "react";

const G = "var(--green)";

const certIcons: Record<string, React.ReactElement> = {
  "OSHA 10": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Hard hat */}
      <path d="M8 30 Q8 16 24 14 Q40 16 40 30 Z" />
      <rect x="6" y="29" width="36" height="5" rx="2" />
      <rect x="20" y="9" width="8" height="7" rx="1" fill={G} />
    </svg>
  ),
  "OSHA 30": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Hard hat with supervisor badge */}
      <path d="M8 30 Q8 16 24 14 Q40 16 40 30 Z" />
      <rect x="6" y="29" width="36" height="5" rx="2" />
      <rect x="20" y="9" width="8" height="7" rx="1" fill={G} />
      {/* Star badge */}
      <polygon points="24,34 25.5,38 30,38 26.5,40.5 27.5,45 24,42.5 20.5,45 21.5,40.5 18,38 22.5,38" fill={G} />
    </svg>
  ),
  "CPR / First Aid": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Heart */}
      <path d="M24 40 L8 24 Q4 16 12 12 Q18 10 24 18 Q30 10 36 12 Q44 16 40 24 Z" />
      {/* Cross */}
      <rect x="21" y="20" width="6" height="14" fill="var(--black-nav)" opacity=".5" />
      <rect x="17" y="24" width="14" height="6" fill="var(--black-nav)" opacity=".5" />
    </svg>
  ),
  "Traffic Safety Supervisor": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Traffic light */}
      <rect x="16" y="4" width="16" height="38" rx="3" />
      <circle cx="24" cy="13" r="4" fill="var(--black-nav)" opacity=".4" />
      <circle cx="24" cy="24" r="4" fill="var(--black-nav)" opacity=".4" />
      <circle cx="24" cy="35" r="4" fill="var(--green-dark)" />
      <rect x="20" y="42" width="8" height="4" rx="1" />
    </svg>
  ),
  "Flagging / Traffic Control": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Flag pole */}
      <rect x="22" y="4" width="3" height="40" />
      {/* Flag */}
      <polygon points="25,6 42,14 25,22" />
      {/* Base */}
      <rect x="16" y="42" width="16" height="4" rx="2" />
    </svg>
  ),
  "Electrical Hazard / High Voltage": (
    <svg viewBox="0 0 48 48" fill={G} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Warning triangle */}
      <polygon points="24,4 44,40 4,40" />
      {/* Lightning bolt cutout */}
      <polygon points="27,14 21,26 25,26 21,36 29,22 24,22 28,14" fill="var(--black-nav)" opacity=".5" />
    </svg>
  ),
};

const certs = [
  {
    title: "OSHA 10",
    body: "Federal safety training completed by all field crew members across our workforce.",
  },
  {
    title: "OSHA 30",
    body: "Advanced supervisory safety certification held by all crew leaders and project supervisors.",
  },
  {
    title: "CPR / First Aid",
    body: "Current CPR and First Aid certification maintained across all crew members at all times.",
  },
  {
    title: "Traffic Safety Supervisor",
    body: "DOT and ROW traffic control supervisor credentials for all road and corridor work.",
  },
  {
    title: "Flagging / Traffic Control",
    body: "Certified flagger training for proper work zone management along public corridors.",
  },
  {
    title: "Electrical Hazard / High Voltage",
    body: "Hotline-tag certification authorizing safe operations near energized transmission lines.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certs"
      aria-label="Safety and certifications"
      style={{ background: "var(--white)", padding: "6rem 8%" }}
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
          Safety &amp; Compliance
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
          Crew Certifications
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
          Every member of our team arrives on site trained, certified, and prepared. We take our
          safety program seriously — because the people doing this work deserve to go home safe every
          day.
        </p>
      </div>

      {/* 3-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
        className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {certs.map(({ title, body }) => (
          <div
            key={title}
            style={{
              display: "flex",
              gap: "1.2rem",
              alignItems: "flex-start",
              background: "var(--off-white)",
              border: "1px solid var(--light-gray)",
              borderLeft: "4px solid var(--green)",
              padding: "1.5rem",
            }}
          >
            <div style={{ width: "44px", height: "44px", flexShrink: 0, marginTop: "0.1rem" }}>
              {certIcons[title]}
            </div>
            <div>
              <h4
                style={{
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  marginBottom: "0.4rem",
                }}
              >
                {title}
              </h4>
              <p style={{ fontSize: "0.84rem", color: "var(--mid-gray)", lineHeight: 1.7 }}>{body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
