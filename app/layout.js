import "./globals.css";
import Nav from "@/components/Nav/Nav";
import FooterWrapper from "@/components/FooterWrapper/FooterWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const metadata = {
  title: "Gian Ezekiel S. Gersaniba — Backend Developer",
  description:
    "Portfolio of Gian Ezekiel S. Gersaniba, backend developer and systems researcher.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
