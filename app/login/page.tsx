// TODO: Connect to auth provider in Phase 2

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid var(--light-gray)",
  borderRadius: "2px",
  padding: "0.8rem 1rem",
  fontSize: "0.9rem",
  color: "var(--text-dark)",
  background: "var(--off-white)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--mid-gray)",
  marginBottom: "0.4rem",
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--black-nav)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
      }}
    >
      <div
        style={{
          background: "var(--white)",
          width: "100%",
          maxWidth: "420px",
          padding: "2.5rem 2rem",
          borderTop: "4px solid var(--green)",
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
          <Image
            src="/IUI_logo.jpg"
            alt="Investment Utilities & Infrastructure"
            width={200}
            height={64}
            style={{ maxWidth: "200px", height: "auto", margin: "0 auto", display: "block" }}
          />
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "1.7rem",
            fontWeight: 700,
            color: "var(--text-dark)",
            textAlign: "center",
            marginBottom: "0.4rem",
          }}
        >
          Account Login
        </h1>
        <p
          style={{
            fontSize: "0.87rem",
            color: "var(--mid-gray)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Customer portal coming soon.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          {submitted && (
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--dark-gray)",
                background: "var(--off-white)",
                border: "1px solid var(--light-gray)",
                borderLeft: "3px solid var(--green)",
                padding: "0.75rem 1rem",
                lineHeight: 1.6,
              }}
            >
              This feature is coming soon. Please contact us directly.
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              background: "var(--green)",
              color: "var(--black-nav)",
              border: "none",
              padding: "0.9rem 1rem",
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        {/* Footer note */}
        <p style={{ fontSize: "0.82rem", color: "var(--mid-gray)", textAlign: "center", marginTop: "1.4rem" }}>
          Don&apos;t have an account?{" "}
          <Link
            href="/#contact"
            style={{ color: "var(--green)", fontWeight: 600, textDecoration: "none" }}
          >
            Contact us to get started.
          </Link>
        </p>
      </div>
    </div>
  );
}
