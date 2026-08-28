/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> deployable to GitHub Pages, Netlify, Vercel, Cloudflare Pages
  // for free, since the whole site is pre-rendered at build time.
  output: "export",
};

export default nextConfig;
