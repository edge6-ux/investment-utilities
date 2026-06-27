const markets = [
  "Overhead Electrical",
  "Oil & Gas Pipeline",
  "Solar Energy",
  "DOT / Transportation",
  "Municipalities",
  "US Military",
  "Telecom",
  "Water & Wastewater",
  "Natural Gas Distribution",
];

export default function Markets() {
  return (
    <section
      id="markets"
      aria-label="Markets Served"
      style={{ background: "var(--white)", padding: "6rem 8%" }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
          Markets Served
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
          Who We Work With
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
          We serve a broad range of utility and infrastructure clients who need reliable,
          experienced site work crews in the field.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {markets.map((market) => (
          <div
            key={market}
            style={{
              border: "1px solid var(--light-gray)",
              padding: "0.6rem 1.4rem",
              fontSize: "0.83rem",
              fontWeight: 600,
              color: "var(--dark-gray)",
              letterSpacing: "0.04em",
              background: "var(--off-white)",
            }}
          >
            {market}
          </div>
        ))}
      </div>
    </section>
  );
}
