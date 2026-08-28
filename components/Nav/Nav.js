import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav()
{
  return (
    <header
      style={{
        borderBottom: "1px solid var(--line)",
        position: "sticky",
        top: 0,
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(6px)",
        zIndex: 10,
      }}
    >
      <nav
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 600 }}>
          Gian Ezekiel S. Gersaniba
        </Link>
        <div style={{ display: "flex", gap: 24 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--text-dim)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
