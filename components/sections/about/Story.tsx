const checks = [
  "Family-owned and operated — our reputation is on the line with every job",
  "Company-owned equipment fleet — no subcontracting of core work",
  "Direct-hire, trained crews on every project",
  "OSHA-certified supervision on every job site",
  "Licensed and fully insured across all coverage states",
  "Rapid mobilization capability for storm and emergency response",
  "Experienced with utility, municipal, and government contracts",
  "Clear communication and professional project management from start to finish",
];

export default function Story() {
  return (
    <section
      id="story"
      aria-label="Our story"
      className="resp-2col"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* Left — text */}
      <div className="resp-pad" style={{ padding: "6rem 8%", background: "var(--white)" }}>
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
            marginBottom: "1.4rem",
          }}
        >
          Rooted in Georgia.
          <br />
          Trusted Across the Southeast.
        </h2>

        <p style={{ color: "var(--mid-gray)", fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "1rem" }}>
          Investment Utilities &amp; Infrastructure was founded on a straightforward premise: utility
          and infrastructure clients deserve a site work partner they can actually count on. Not a
          company that passes work down a chain of subcontractors. A direct operator — with trained
          crews, company-owned equipment, and the accountability that comes from having our name on
          every project.
        </p>
        <p style={{ color: "var(--mid-gray)", fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "1rem" }}>
          We handle the demanding end of utility site work: right-of-way clearing through difficult
          terrain, vegetation management across active corridors, site preparation for large-scale
          infrastructure, and storm restoration when response time is everything. Every project is
          managed professionally and documented to spec.
        </p>
        <p style={{ color: "var(--mid-gray)", fontSize: "0.93rem", lineHeight: 1.8 }}>
          As a family-owned business headquartered in North Georgia, we take the long view.
          We&apos;re not chasing volume — we&apos;re building a reputation, one project at a time.
          The clients who call us once tend to call us again.
        </p>
      </div>

      {/* Right — dark panel */}
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
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.15,
            marginBottom: "1.8rem",
          }}
        >
          The{" "}
          <span style={{ color: "var(--green)" }}>Investment UI</span> Difference
        </h3>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          {checks.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.6,
              }}
            >
              <span style={{ color: "var(--green)", fontWeight: 700, flexShrink: 0, marginTop: "0.1rem" }}>
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
