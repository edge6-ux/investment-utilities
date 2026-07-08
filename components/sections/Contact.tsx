"use client";

import { useState, FormEvent } from "react";

const serviceOptions = [
  "Right-of-Way Clearing",
  "Vegetation Management",
  "Site Preparation",
  "Wetland Mitigation",
  "Storm Restoration",
  "High Voltage / Transmission",
  "Solar Site Work",
  "DOT / Road Corridor Work",
  "Mat Laying / Line Support",
  "Other",
];

const stateOptions = [
  "Georgia",
  "Florida",
  "Tennessee",
  "North Carolina",
  "South Carolina",
  "Alabama",
];

const contactDetails = [
  { label: "Phone", value: "(770) 529-7181", href: "tel:+17705297181" },
  { label: "Email", value: "info@investmentutilities.com", href: "mailto:info@investmentutilities.com" },
  { label: "Based In", value: "North Georgia — Serving the Southeast", href: null },
  { label: "Availability", value: "24/7 for Emergency Response", href: null },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "var(--white)",
  padding: "0.85rem 1rem",
  fontSize: "0.88rem",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.5)",
  marginBottom: "0.4rem",
};

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    state: "",
    details: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-label="Contact and Quote Request"
      className="resp-2col"
      style={{
        background: "var(--black-nav)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      {/* Left — contact info */}
      <div
        className="resp-pad resp-no-border-r"
        style={{
          padding: "6rem 8%",
          borderRight: "1px solid rgba(255,255,255,0.07)",
        }}
      >
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
          Get In Touch
        </div>
        <h2
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Let&apos;s Talk About
          <br />
          Your Project
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.9rem",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
          }}
        >
          Talk to our team about your site work, clearing, or vegetation management project. We
          respond within one business day.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {contactDetails.map(({ label, value, href }) => (
            <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--green)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {value}
                  </a>
                ) : (
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", fontWeight: 600 }}>
                    {value}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div className="resp-pad" style={{ padding: "6rem 8%" }}>
        {status === "success" ? (
          <div
            style={{
              border: "1px solid var(--green)",
              padding: "2rem",
              color: "var(--green)",
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "1.2rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Thank you! We&apos;ll be in touch within one business day.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {/* First / Last */}
            <div className="resp-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label htmlFor="firstName" style={labelStyle}>First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="lastName" style={labelStyle}>Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" style={labelStyle}>Company</label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* Phone / Email */}
            <div className="resp-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label htmlFor="phone" style={labelStyle}>Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" style={labelStyle}>Service Needed *</label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="form-select"
                style={{ ...inputStyle, appearance: "none" }}
              >
                <option value="">Select a Service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Project State */}
            <div>
              <label htmlFor="state" style={labelStyle}>Project State *</label>
              <select
                id="state"
                name="state"
                required
                value={form.state}
                onChange={handleChange}
                className="form-select"
                style={{ ...inputStyle, appearance: "none" }}
              >
                <option value="">Select a State</option>
                {stateOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" style={labelStyle}>Project Details</label>
              <textarea
                id="details"
                name="details"
                rows={5}
                value={form.details}
                onChange={handleChange}
                placeholder="Describe your project, acreage, timeline, or any other details..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {status === "error" && (
              <p style={{ color: "#ff4444", fontSize: "0.85rem" }}>
                Something went wrong. Please call us at (770) 529-7181.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                background: "var(--green)",
                color: "var(--black-nav)",
                border: "none",
                padding: "1rem 2rem",
                fontFamily: "var(--font-barlow-condensed), sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
                transition: "background 0.2s",
                alignSelf: "flex-start",
              }}
            >
              {status === "sending" ? "Sending…" : "Request Free Quote"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
