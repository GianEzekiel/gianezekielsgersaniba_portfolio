// Icons are plain string keys here (not component references) so this file
// stays a plain-data module and can safely be imported by a Server Component.
// ProjectCard resolves the string to a real icon on the client side.

export const projects = [
  {
    index: "01",
    image: "/projects/ulaphero.png",
    category: "Personal Project",
    title: "UlapHero",
    description:
      "Smart archiving extension that eliminates digital clutter and compresses large Google Drive files directly from your sidebar to reduce redundant storage.",
    stack: [
      { label: "Python", color: "#3776AB" },
      { label: "JavaScript", color: "#F2B84B" },
    ],
    actions: [
      { label: "View Demo", icon: "arrow-up-right", href: "https://ulaphero.vercel.app/" },
      { label: "GitHub", icon: "lock", note: "Private" },
    ],
  },
  {
    index: "02",
    image: "/projects/github.png",
    category: "Personal Project",
    title: "GH Archive",
    description:
      "An end-to-end ELT pipeline on Databricks that transforms GitHub's public event stream into a governed star schema, surfacing insights on repository activity and pull request cycle time.",
    stack: [
      { label: "Python", color: "#3776AB" },
      { label: "SQL", color: "#61DAFB" },
      { label: "Databricks", color: "#FF3621" },
    ],
    actions: [
      { label: "View Demo", icon: "arrow-up-right", href: "https://github.com/GianEzekiel/gh-archive-lakehouse" },
      { label: "GitHub", note: "Public", href: "https://github.com/GianEzekiel/gh-archive-lakehouse" },
    ],
  },
  {
    index: "03",
    image: "/projects/batseeku.png",
    category: "Academic Project",
    title: "BatSeekU",
    description:
      "Mobile campus app that connects students in need with skilled peers and provides a secure, reliable platform for everyday services, academic assistance, and peer-to-peer support.",
    stack: [
      { label: "Python", color: "#3776AB" },
      { label: "JavaScript", color: "#F2B84B" },
    ],
    actions: [
      { label: "View Demo", icon: "arrow-up-right", href: null },
      { label: "GitHub", icon: "lock", note: "Private" },
    ],
  },
  {
    index: "04",
    image: "/projects/chaincite.png",
    category: "Academic Project",
    title: "Chaincite",
    description:
      "AI-powered research tool that finds relevant academic papers and generates accurate APA citations, making it easier to organize sources and build a well-structured literature review.",
    stack: [
      { label: "Next.js", icon: "zap", color: "#B383F0" },
      { label: "Supabase", color: "#3ECF8E" },
    ],
    actions: [
      { label: "View Demo", icon: "arrow-up-right", href: "https://chaincite.vercel.app/" },
      { label: "GitHub", icon: "lock", note: "Private" },
    ],
  },
  {
    index: "05",
    status: "verified",
    image: "/projects/taxscope.png",
    category: "Academic Project",
    title: "Taxscope",
    description:
      "Modernize local government operations with a scalable property platform that integrates interactive mapping, secure citizen payments, and automated clearance verification.",
    stack: [
      { label: "Next.js", icon: "zap", color: "#B383F0" },
      { label: "Supabase", color: "#3ECF8E" },
    ],
    actions: [
      { label: "View Demo", icon: "arrow-up-right", href: null },
      { label: "GitHub", icon: "lock", note: "Private" },
    ],
  },
  {
    index: "06",
    image: "/projects/travelmate.png",
    category: "Academic Project",
    title: "TravelMate",
    description:
      "A collaborative mobile travel companion that simplifies trip management with personalized itinerary building, real-time group planning, and dynamic expense tracking.",
    stack: [
      { label: "Dart", color: "#0175C2" },
      { label: "Flutter", icon: "atom", color: "#61DAFB" },
      { label: "Firebase", icon: "flame", color: "#F2B84B" },
    ],
    actions: [
      { label: "View Demo", icon: "arrow-up-right", href: null },
      { label: "GitHub", icon: "lock", note: "Private" },
    ],
  },
];