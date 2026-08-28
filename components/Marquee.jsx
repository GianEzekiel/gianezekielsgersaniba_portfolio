"use client";

import { useId } from "react";

export default function Marquee({
  children,
  speed = 30,
  gap = 10,
  pauseOnHover = true,
  direction = "left", // "left" | "right"
}) {
  const rawId = useId();
  const id = rawId.replace(/[:]/g, "");

  const from = direction === "right" ? "translateX(-50%)" : "translateX(0)";
  const to = direction === "right" ? "translateX(0)" : "translateX(-50%)";

  return (
    <div className={`marquee-viewport-${id}`} style={{ overflow: "hidden", width: "100%", minWidth: 0, maxWidth: "100%" }}>
      <style>{`
        .marquee-viewport-${id} {
          overflow: hidden;
          width: 100%;
          min-width: 0;
          max-width: 100%;
        }
        .marquee-track-${id} {
          display: flex;
          width: max-content;
          animation: marquee-${id} ${speed}s linear infinite;
        }
        .marquee-viewport-${id}:hover .marquee-track-${id} {
          animation-play-state: ${pauseOnHover ? "paused" : "running"};
        }
        @keyframes marquee-${id} {
          from { transform: ${from}; }
          to { transform: ${to}; }
        }
      `}</style>
      <div className={`marquee-track-${id}`}>
        <div style={{ display: "flex", gap, flexShrink: 0, paddingRight: gap }}>
          {children}
        </div>
        <div
          style={{ display: "flex", gap, flexShrink: 0, paddingRight: gap }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}