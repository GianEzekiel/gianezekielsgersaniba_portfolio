"use client";

import { useState } from "react";
import { Atom, Zap, Flame, Mail, ArrowUpRight, Lock, VideoOff, FileText } from "lucide-react";

// String key -> icon component. Lives here (client component) so the data
// file that feeds this component can stay plain, serializable data.
const ICONS = {
  atom: Atom,
  zap: Zap,
  flame: Flame,
  mail: Mail,
  "arrow-up-right": ArrowUpRight,
  lock: Lock,
  "video-off": VideoOff,
  "file-text": FileText,
};

const palette = {
  bg: "#17181c",
  bgHover: "#1b1c21",
  line: "#2a2c31",
  lineStrong: "#3a3c42",
  text: "#f5f4ef",
  dim: "#8c8e94",
  live: "#c9ff5c",
  wip: "#ff8a5c",
  archived: "#8c8e94",
};

const statusColor = {
  verified: palette.live,
  "in progress": palette.wip,
  archived: palette.archived,
};

export default function ProjectCard({ project }) {
  const {
    index = "01",
    status = "verified",
    image,
    category,
    title,
    description,
    stack = [],
    actions = [],
  } = project;

  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: hovered ? palette.bgHover : palette.bg,
        border: `1px solid ${hovered ? palette.lineStrong : palette.line}`,
        borderRadius: 12,
        overflow: "hidden",
        transition: "background 0.15s ease, border-color 0.15s ease",
        animation: "fadeIn 0.4s ease-out forwards",
        maxWidth: 520,
        width: "100%",
        marginBottom: 24,
        background: "var(--surface)"
      }}
    >
      {/* Browser-window chrome: traffic lights + proj id + status */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 16px",
          borderBottom: `1px dashed ${palette.line}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <TrafficDot color="var(--line)" />
            <TrafficDot color="var(--line)" />
            <TrafficDot color="var(--line)"/>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: palette.dim,
            }}
          >
          </span>
        </div>
        
      </div>

      {/* Preview pane */}
      <div
        style={{
          margin: 16,
          borderRadius: 8,
          overflow: "hidden",
          border: `1px solid ${palette.line}`,
          aspectRatio: "16 / 9",
          background: image
            ? `#0e0f11 center / contain no-repeat url(${image})`
            : "#0e0f11",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!image && (
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: palette.dim,
            }}
          >
            no preview yet
          </span>
        )}
      </div>

      <div style={{ padding: "0 20px 24px" }}>
        {category && (
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: palette.dim,
              margin: "0 0 8px",
            }}
          >
            {category}
          </p>
        )}
        <h3
          style={{
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            margin: "0 0 12px",
            color: palette.text,
          }}
        >
          {title}
        </h3>
        {description && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 14, lineHeight: 1.65, color: palette.dim, margin: "0 0 20px" }}>
            {description}
          </p>
        )}

        {stack.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {stack.map(({ label, icon, color }) => {
              const Icon = ICONS[icon];
              return (
                <span
                  key={label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    border: `1px solid ${palette.line}`,
                    borderRadius: 999,
                    padding: "5px 10px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    color: palette.text,
                  }}
                >
                  {Icon ? (
                    <Icon size={13} strokeWidth={2} color={color || palette.dim} />
                  ) : (
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: color || palette.dim,
                        display: "inline-block",
                      }}
                    />
                  )}
                  {label}
                </span>
              );
            })}
          </div>
        )}

        {actions.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {actions.map((action) => (
              <ActionCell key={action.label} action={action} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TrafficDot({ color }) {
  return (
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: color,
        display: "inline-block",
      }}
    />
  );
}

function ActionCell({ action }) {
  const { label, icon, href, note } = action;
  const Icon = ICONS[icon];
  const disabled = !href;

  const base = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    borderRadius: 8,
    padding: "11px 12px",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    fontWeight: 600,
    textDecoration: "none",
    textAlign: "center",
  };

  const content = (
    <>
      {Icon && <Icon size={14} strokeWidth={2} />}
      {label}
      {note && <span style={{ color: palette.dim }}>{" — " + note}</span>}
    </>
  );

  if (disabled) {
    return (
      <div style={{ ...base, border: `1px solid ${palette.line}`, color: palette.dim, opacity: 0.55 }}>
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ ...base, border: `1px solid ${palette.line}`, color: palette.text }}
    >
      {content}
    </a>
  );
}