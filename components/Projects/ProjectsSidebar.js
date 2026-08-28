"use client";

const palette = {
  line: "#2a2c31",
  text: "#f5f4ef",
  dim: "#8c8e94",
  dimmer: "#4a4c52",
  accent: "#c9ff5c",
};

// Numbered project list with hairline dividers between entries.
// Active item is bold and full-brightness; inactive items sit dimmed
// until hovered. Drop-in replacement for LineSidebar.
export default function ProjectsSidebar({ items, activeIndex, onItemClick }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, width: 200 }}>
      {items.map((title, i) => {
        const isActive = i === activeIndex;
        return (
          <li key={title}>
            <button
              onClick={() => onItemClick(i)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 0",
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontSize: 17,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? palette.text : palette.dimmer,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = palette.dim;
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = palette.dimmer;
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: isActive ? palette.accent : palette.dimmer,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {title}
            </button>
            {i < items.length - 1 && (
              <div style={{ height: 1, background: palette.line, width: "100%" }} />
            )}
          </li>
        );
      })}
    </ul>
  );
}