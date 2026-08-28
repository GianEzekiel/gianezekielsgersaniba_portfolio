"use client";

import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const infoRows = [
  { icon: Mail, label: "gianezekielsgersaniba@gmail.com", href: "mailto:gian@example.dev" },
  { icon: Phone, label: "+63 916 140 5416", href: "tel:+639162224481" },
  { icon: MapPin, label: "San Juan, Batangas", href: null },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/GianEzekiel" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gianezekielgersaniba" },
];

export default function Contact() {
  return (
    <section id="contact" className="wrap" style={{ padding: "40px 24px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
        }}
        className="contactGrid"
      >
        {/* Left: headline + info + socials */}
        <div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              lineHeight: 1.05,
              margin: "0 0 32px",
            }}
          >
            LOOKING FOR A
            <br />
            DEVELOPER? Let&apos;s CONNECT.
          </h1>

          <div style={{ marginBottom: 40 }}>
            {infoRows.map(({ icon: Icon, label, href }) => {
              const Tag = href ? "a" : "div";
              return (
                <Tag
                  key={label}
                  href={href || undefined}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--line)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.92rem",
                  }}
                >
                  <Icon size={16} strokeWidth={2} color="var(--text-dim)" />
                  {label}
                </Tag>
              );
            })}
          </div>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "var(--text-dim)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Elsewhere
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  border: "1px solid var(--line)",
                  borderRadius: 999,
                  padding: "8px 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                <Icon size={15} strokeWidth={2} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: terminal-window form */}
        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 10,
            background: "var(--surface)",
            overflow: "hidden",
          }}
        >
          {/* title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <span style={dot} />
            <span style={dot} />
            <span style={dot} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--text-dim)",
                marginLeft: 8,
              }}
            >
            </span>
          </div>

          <form
            style={{ padding: "24px 24px 28px", display: "grid", gap: 22 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="first name" placeholder="Jane" name="firstName" />
              <Field label="last name" placeholder="Doe" name="lastName" />
            </div>

            <Field label="email" placeholder="you@domain.com" name="email" type="email" />

            <div>
              <FieldLabel text="message" />
              <textarea
                name="message"
                placeholder="What are you building?"
                rows={4}
                style={inputStyle}
              />
            </div>

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "var(--text)",
                color: "var(--bg)",
                border: "none",
                borderRadius: 999,
                padding: "13px 24px",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              Send message
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .contactGrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function Field({ label, placeholder, name, type = "text" }) {
  return (
    <div>
      <FieldLabel text={label} />
      <input type={type} name={name} placeholder={placeholder} style={inputStyle} />
    </div>
  );
}

function FieldLabel({ text }) {
  return (
    <label
      style={{
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
        color: "var(--text-dim)",
        marginBottom: 8,
      }}
    >
      <span style={{ color: "var(--accent)" }}>{">"}</span> {text}
    </label>
  );
}

const dot = {
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "var(--line)",
  display: "inline-block",
};

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: "1px solid var(--line)",
  borderRadius: 6,
  color: "var(--text)",
  fontFamily: "var(--font-mono)",
  fontSize: "0.9rem",
  padding: "10px 12px",
  outline: "none",
  resize: "vertical",
};