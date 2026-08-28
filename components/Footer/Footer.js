"use client";

import { ArrowUp } from "lucide-react";


export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        marginTop: 96,
        padding: "24px 0",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--text-dim)",
        }}
      >
        <span>© {new Date().getFullYear()} Gian Ezekiel S. Gersaniba</span>
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "var(--text-dim)",
          whiteSpace: "nowrap",
        }}
        >
          Back to top
          <ArrowUp size={16} strokeWidth={2.5} />
        </span>
        
      </div>
    </footer>
  );
}
