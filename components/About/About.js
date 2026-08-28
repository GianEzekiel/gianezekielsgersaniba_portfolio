import {
  SiPython,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiNextdotjs,
  SiJavascript,
  SiDatabricks,
  SiGit,
  SiGithub,
  SiGoogle,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";
import Image from "next/image";
import Marquee from "@/components/Marquee"; // adjust to wherever Marquee.jsx landed

const SKILL_ICONS = {
  Python: { icon: SiPython, color: "#3776AB" },
  SQL: { icon: TbDatabase, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  Javascript: { icon: SiJavascript, color: "#F7DF1E" },
  Databricks: { icon: SiDatabricks, color: "#FF3621" },
  Git: { icon: SiGit, color: "#F05032" },
  Github: { icon: SiGithub, color: "#ffffff" },
  "Google Workspace": { icon: SiGoogle, color: "#4285F4" },
  "Microsoft 365": { icon: FaMicrosoft, color: "#00A4EF" },
};

const STACK_SKILLS = ["Python", "SQL", "PostgreSQL", "Redis", "Docker", "Next.js", "Javascript"];
const TOOLS = ["Databricks", "Git", "Github", "Google Workspace", "Microsoft 365"];

export default function About() {
  return (
    <section id="about" className="wrap" style={{ padding: "40px 24px"}}>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          fontSize: "clamp(2.25rem, 4vw, 3rem)",
          color: "#f5f4ef",
          marginBottom: 48,
        }}
      >
        About Me
      </h1>

      {/* Top row: photo + main info card */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 24,
          marginBottom: 24,
        }}
      >
        {/* Photo placeholder */}
        <div
          style={{
            border: "1px solid var(--border, #2a2a2a)",
            borderRadius: 8,
            aspectRatio: "3 / 4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--surface, #111)",
          }}
        >
          <img
            src="about/aboutme.png"
            alt="Gian"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Main info card */}
        <div
          style={{
            border: "1px solid var(--border, #2a2a2a)",
            borderRadius: 8,
            padding: 18,
            background: "var(--surface)"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text-dim)",
              textTransform: "lowercase",
              marginBottom: 20,
            }}
          >
            [ quick intro ]
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 32px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              marginBottom: 24,
              paddingBottom: 24,
              borderBottom: "1px solid var(--border, #2a2a2a)",
            }}
          >
            <div>
              <span style={{ color: "var(--text-dim)" }}>&gt; Name </span>
              <strong>Gian Ezekiel S. Gersaniba</strong>
            </div>
            <div>
              <span style={{ color: "var(--text-dim)" }}>&gt; Location </span>
              <strong>San Juan, Batangas</strong>
            </div>
            
          </div>

          <p style={{ color: "var(--text-dim)", marginBottom: 16, fontSize: "0.74rem", }}>
            I&apos;m a backend developer who builds the software that powers modern applications—from resilient APIs and backend services to well-designed databases. I care about writing reliable, maintainable code and designing systems that remain correct, performant, and easy to evolve as products grow.
          </p>
          <p style={{ color: "var(--text-dim)", fontSize: "0.74rem", }}>
            As a data engineer, I design scalable data pipelines and architectures that transform raw data into reliable, accessible information. I focus on building data platforms that handle increasing data volumes and user traffic, ensuring data flows efficiently, remains trustworthy, and supports data-driven decision making.
          </p>
        </div>
      </div>

      {/* Middle row: skills + current focus */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 24,
          marginBottom: 24,
          
        }}
      >
        <div
          style={{
            border: "1px solid var(--border, #2a2a2a)",
            borderRadius: 8,
            padding: 18,
            minWidth: 0,
            background: "var(--surface)"
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text-dim)",
              marginBottom: 8,
            }}
          >
            [core skills]
          </p>
          <h2
            style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
          >
            Stack
          </h2>

          <div style={{ marginBottom: 28 }}>
            <Marquee speed={25} direction="left">
              {STACK_SKILLS.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </Marquee>
          </div>

         
          <h2
            style={{
                  fontFamily: "var(--font-mono)",
                  ffontSize: "0.74rem",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
          >
            Tools
          </h2>

          <Marquee speed={22} direction="right">
            {TOOLS.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </Marquee>
        </div>

        <div
          style={{
            border: "1px solid var(--border, #2a2a2a)",
            borderRadius: 8,
            padding: 18,
            background: "var(--surface)"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
            }}
          >
            
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.05em",
                color: "var(--text-dim)",
                margin: 0,
              }}
            >
              [ more about me ]
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Role
              </p>
              <p
                style={{
                  fontSize: "0.74rem",
                  margin: 0,
                }}
              >
                Backend Developer & Data Engineer
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Learning
              </p>
              <p
                style={{
                  fontSize: "0.74rem",
                  margin: 0,
                }}
              >
                Data Engineering, AI Automation
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.05em",
                  fontWeight: 600,
                  color: "var(--text-dim)",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Hobbies
              </p>
              <p
                style={{
                  fontSize: "0.74rem",
                  margin: 0,
                }}
              >
                Breaking things to understand how they work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section: Background — Education / Experience timeline */}
      <div
        style={{
          padding: "40px 0",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            fontSize: "clamp(2.25rem, 4vw, 3rem)",
            color: "#f5f4ef",
            marginBottom: 48,
        }}
        >
          Background
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          {/* Education column */}
          <div
            style={{
              borderRight: "1px solid var(--border, #2a2a2a)",
              paddingRight: 48,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                textTransform: "uppercase",
                fontSize: "1.3rem",
                marginBottom: 24,
              }}
            >
              Education
            </h3>

            <TimelineItem
              title="Batangas State University"
              lines={["Bachelor of Science in Computer Science", "Cum Laude - 1.4231 GWA"]}
              dates="2020 – 2026"
            />
            <TimelineItem
              title="Batangas Eastern Colleges"
              lines={["Science, Technology, Engineering, and Mathematics", "With Honors"]}
              dates="2020 – 2022"
              last
            />
          </div>

          {/* Experience column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                textTransform: "uppercase",
                fontSize: "1.3rem",
                marginBottom: 24,
              }}
            >
              Experience
            </h3>

            <TimelineItem
              title="Virtual Reality Developer Intern"
              lines={["DEV-OPS Office, Science, Technology, Engineering, and Environment Research Hub"]}
              dates="June 2025 – July 2025"
              last
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, lines, dates, last }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        marginBottom: last ? 0 : 28,
        position: "relative",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          border: "2px solid var(--text-dim)",
          marginTop: 4,
          position: "relative",
        }}
      >
        {!last && (
          <span
            style={{
              position: "absolute",
              top: 14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 1,
              height: 48,
              background: "var(--border, #2a2a2a)",
            }}
          />
        )}
      </div>
      <div>
        <p style={{ fontWeight: 700, marginBottom: 4 }}>{title}</p>
        {lines.map((line) => (
          <p
            key={line}
            style={{
              color: "var(--text-dim)",
              fontSize: "0.9rem",
              marginBottom: 2,
            }}
          >
            {line}
          </p>
        ))}
        <p
          style={{
            color: "var(--text-dim)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.85rem",
            marginTop: 6,
          }}
        >
          {dates}
        </p>
      </div>
    </div>
  );
}

function TagBadge({ tag }) {
  const entry = SKILL_ICONS[tag];
  const Icon = entry?.icon;

  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.85rem",
        padding: "6px 12px",
        border: "1px solid var(--border, #2a2a2a)",
        borderRadius: 6,
        color: "var(--text-dim)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        whiteSpace: "nowrap",
      }}
    >
      {Icon && <Icon size={14} color={entry.color} />}
      {tag}
    </span>
  );
}