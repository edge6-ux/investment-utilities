const stats = [
  { num: "Family", label: "Owned & Operated", smallNum: true },
  { num: "6", label: "States Covered", smallNum: false },
  { num: "24/7", label: "Emergency Response", smallNum: false },
  { num: "OSHA", label: "Certified Crews", smallNum: true },
];

export default function StatsStrip() {
  return (
    <div
      className="resp-stats"
      style={{ background: "var(--green)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
    >
      {stats.map(({ num, label, smallNum }, i) => (
        <div
          key={label}
          style={{
            padding: "0.9rem 1rem",
            textAlign: "center",
            borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.12)" : undefined,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: smallNum ? "1.6rem" : "2.2rem",
              fontWeight: 700,
              color: "var(--black-nav)",
              display: "block",
              lineHeight: 1,
            }}
          >
            {num}
          </span>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.6)",
              marginTop: "0.3rem",
              display: "block",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
