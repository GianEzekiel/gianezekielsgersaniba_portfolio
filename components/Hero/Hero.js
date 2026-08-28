import { FileText, Github } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="dotfield"
      style={{
        padding: "96px 24px 112px",
        textAlign: "center",
        overflow: "hidden",
        height: "calc(100vh - 65px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div className="wrap" style={{ position: "relative" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            textTransform: "uppercase",
            fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
            letterSpacing: "0.01em",
            lineHeight: 1,
            margin: "0 0 24px",
          }}
        >
          Gian Ezekiel S. Gersaniba
        </h1>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
            marginBottom: 20,
          }}
        >
          Software Engineer &amp; Data Engineer
        </p>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--text-dim)",
            maxWidth: 560,
            margin: "0 auto 40px",
            fontSize: "0.95rem",
          }}
        >
          Building the infrastructure behind data-driven applications.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {/* Primary CTA — filled, pill-shaped, high contrast */}
          <a href="#projects" className="heroBtn heroBtnFilled">
            View Projects
          </a>
          {/* Secondary — ghost, pill-shaped */}
          <a href="/resume.pdf" className="heroBtn heroBtnGhost">
            <FileText size={15} strokeWidth={2} />
            Resume
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="heroBtn heroBtnGhost"
          >
            <Github size={15} strokeWidth={2} />
            GitHub
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            marginTop: 64,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "var(--dim)",
              textTransform: "uppercase",
              animation: "breathe 2.5s ease-in-out infinite",
            }}
          >
            Have a look
          </span>

          <div
            style={{
              width: 24,
              height: 38,
              border: "2px solid var(--line)",
              borderRadius: 14,
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
              animation: "mouse-bounce 2s ease-in-out infinite, breathe 2.5s ease-in-out infinite",
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                borderRadius: 2,
                background: "var(--accent)",
                boxShadow: "0 0 6px var(--accent)",
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        /* ── Apple HIG Button Base ────────────────────────────────────────────
           · Minimum touch target: 44 × 44 px
           · Stadium / pill shape (border-radius: 980px)
           · Semibold label, no all-caps
           · Spring-feel hover: subtle scale + opacity
           · Press state: slight scale-down + dim
        ─────────────────────────────────────────────────────────────────── */
        .heroBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 44px;
          padding: 0 22px;
          border-radius: 980px;           /* Apple stadium shape */
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          border: none;
          outline: none;
          transition:
            transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity   0.15s ease,
            background 0.15s ease;
          will-change: transform, opacity;
          -webkit-tap-highlight-color: transparent;
        }

        /* Hover — gentle float up */
        .heroBtn:hover {
          transform: scale(1.035);
        }

        /* Active / press — spring back in */
        .heroBtn:active {
          transform: scale(0.97);
          opacity: 0.85;
          transition-duration: 0.08s;
        }

        /* Focus ring — Apple blue tint adapted to accent */
        .heroBtn:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
        }

        /* ── Primary (Filled) ─────────────────────────────────────────────── */
        .heroBtnFilled {
          background: var(--text);        /* #f2f2ee — near-white on dark bg */
          color: var(--bg);
        }
        .heroBtnFilled:hover {
          background: #e8e8e4;
        }

        /* ── Secondary (Ghost) ────────────────────────────────────────────── */
        .heroBtnGhost {
          background: rgba(255, 255, 255, 0.07);
          color: var(--text);
          /* Thin, translucent border — Apple-style glass buttons */
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .heroBtnGhost:hover {
          background: rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}
