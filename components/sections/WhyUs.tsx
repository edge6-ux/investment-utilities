const reasons = [
  {
    num: "01",
    title: "Family-Owned, Locally Accountable",
    body: "We're not a national franchise. We're a North Georgia family business with our name, our reputation, and our community on the line with every project.",
  },
  {
    num: "02",
    title: "Safety Is Our Culture",
    body: "Every crew member arrives trained, certified, and accountable. OSHA-certified leadership and crew-wide safety training on every site.",
  },
  {
    num: "03",
    title: "No Subcontracting Core Work",
    body: "Our own equipment. Our own crews. We don't outsource the work you hired us to do — what you see is what you get, every time.",
  },
  {
    num: "04",
    title: "On Time. On Budget.",
    body: "We build lasting relationships by delivering exactly what we promise — professionally managed projects from first day to final cleanup.",
  },
];

const certs = [
  { name: "OSHA 10", desc: "Federal Safety" },
  { name: "OSHA 30", desc: "Supervisory" },
  { name: "CPR / First Aid", desc: "Crew-Wide" },
  { name: "Traffic Safety", desc: "DOT / ROW" },
  { name: "Electrical Hazard", desc: "High Voltage" },
  { name: "Flagging", desc: "Traffic Control" },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      aria-label="Why Choose Us"
      className="resp-pad"
      style={{ background: "var(--off-white)", padding: "6rem 8%" }}
    >
      <div
        className="resp-2col-gap"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Left — numbered list */}
        <div>
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
              marginBottom: "0.9rem",
            }}
          >
            Excellence Beyond
            <br />
            the Work Itself
          </h2>
          <p
            style={{
              color: "var(--mid-gray)",
              fontSize: "0.93rem",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Our commitment to quality extends beyond what we clear and build. Infrastructure
            projects carry real stakes — for utilities, for communities, and for the people who
            depend on them.
          </p>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "2rem" }}>
            {reasons.map(({ num, title, body }) => (
              <li key={num} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--green)",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "0.1rem",
                  }}
                >
                  {num}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-barlow-condensed), sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text-dark)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {title}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--mid-gray)", lineHeight: 1.7 }}>
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — certifications panel */}
        <div
          style={{
            background: "var(--black-nav)",
            padding: "2.5rem",
            borderTop: "4px solid var(--green)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: "0.9rem",
            }}
          >
            Our Certifications
          </h3>
          <p
            style={{
              fontSize: "0.87rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Every IUI crew member arrives trained, certified, and accountable. Our
            safety culture isn&apos;t a checkbox — it&apos;s the foundation we&apos;re built on.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {certs.map(({ name, desc }) => (
              <div
                key={name}
                style={{
                  border: "1px solid rgba(95,214,30,0.25)",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--green)",
                    display: "block",
                    marginBottom: "0.25rem",
                  }}
                >
                  {name}
                </span>
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {desc}
                </span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            Ready to discuss your project?{" "}
            <strong style={{ color: "var(--white)" }}>Call us or submit a quote request</strong> —
            we respond within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}
