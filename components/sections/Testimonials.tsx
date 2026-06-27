const testimonials = [
  {
    quote:
      "Investment Utilities showed up on time, communicated clearly throughout the entire ROW clearing project, and left the site cleaner than they found it. We'll be calling them first on our next job.",
    name: "Project Manager",
    company: "Electric Utility, Northeast Georgia",
  },
  {
    quote:
      "When the storm hit, we needed crews mobilized fast. Investment U&I had boots on the ground within 24 hours and worked through the weekend to restore our corridor. Exactly what you need in a crisis.",
    name: "Operations Director",
    company: "Municipal Utility District",
  },
  {
    quote:
      "Family-owned, professional, and they actually care about doing the job right — not just doing it fast. That combination is rare. Highly recommend for any utility site work in the Southeast.",
    name: "Site Superintendent",
    company: "Pipeline Infrastructure Project",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials"
      style={{ background: "var(--black)", padding: "6rem 8%" }}
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
          Client Feedback
        </div>
        <h2
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.1,
          }}
        >
          What Our Clients Say
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
        className="flex-col lg:grid"
      >
        {testimonials.map(({ quote, name, company }) => (
          <div
            key={name}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "2.2rem",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "3.5rem",
                color: "var(--green)",
                lineHeight: 0.6,
                display: "block",
                marginBottom: "1rem",
                opacity: 0.7,
              }}
            >
              &ldquo;
            </span>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              {quote}
            </p>
            <div>
              <strong
                style={{
                  display: "block",
                  color: "var(--white)",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                }}
              >
                {name}
              </strong>
              <span style={{ fontSize: "0.8rem", color: "var(--mid-gray)" }}>{company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
