const pillars = [
  {
    title: "Family-Owned",
    body: "Community-rooted leadership with a personal stake in every project.",
  },
  {
    title: "Company-Owned Fleet",
    body: "No subcontracted surprises — our crews and equipment show up.",
  },
  {
    title: "Licensed & Insured",
    body: "State-licensed across Southeast jurisdictions, fully insured.",
  },
  {
    title: "Rapid Mobilization",
    body: "Storm response and emergency clearing on short notice.",
  },
];

const checks = [
  "Company-owned heavy equipment fleet",
  "State-licensed across Southeast jurisdictions",
  "Experienced with utility, municipal & government procurement",
  "Available for rapid mobilization and storm response",
  "OSHA certified crews — safety is our culture, not a checkbox",
  "Family-owned with roots in North Georgia",
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Investment Utilities and Infrastructure"
      className="resp-2col"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
      }}
    >
      {/* Left — Light gray */}
      <div className="resp-pad" style={{ padding: "6rem 8%", background: "var(--light-gray)" }}>
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
          Who We Are
        </div>

        <h2
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
            fontWeight: 700,
            color: "var(--text-dark)",
            lineHeight: 1.1,
            marginBottom: "1.2rem",
          }}
        >
          Protecting Your Project.
          <br />
          Protecting Your Investment.
        </h2>

        <p style={{ color: "var(--mid-gray)", fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "0.9rem" }}>
          At Investment Utilities &amp; Infrastructure, we believe in protecting your investment with
          unparalleled site work and land services. As a family-owned and operated business rooted
          in North Georgia, we pride ourselves on our strong community ties and commitment to quality
          on every job.
        </p>
        <p style={{ color: "var(--mid-gray)", fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
          We don&apos;t sub out our core work. Our equipment is owned. Our crews are trained and
          certified. Our safety record speaks for itself.
        </p>

        {/* 2×2 pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {pillars.map(({ title, body }) => (
            <div
              key={title}
              style={{
                borderLeft: "3px solid var(--green)",
                paddingLeft: "1rem",
              }}
            >
              <strong
                style={{
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  display: "block",
                  marginBottom: "0.35rem",
                }}
              >
                {title}
              </strong>
              <p style={{ fontSize: "0.83rem", color: "var(--mid-gray)", lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Dark panel */}
      <div
        className="resp-pad"
        style={{
          background: "var(--black-nav)",
          borderTop: "4px solid var(--green)",
          padding: "6rem 8%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.15,
            marginBottom: "1.2rem",
          }}
        >
          Built on the Southeast.
          <br />
          <span style={{ color: "var(--green)" }}>Trusted for Results.</span>
        </h3>

        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.8rem" }}>
          Investment Utilities &amp; Infrastructure was built from the ground up to serve the
          infrastructure backbone of our region. From initial site clearing to long-term vegetation
          management, we handle the full scope of what utility customers need done in the field.
        </p>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {checks.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.55,
              }}
            >
              <span
                style={{
                  color: "var(--green)",
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: "0.1rem",
                }}
              >
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
