"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, delay = 0.1, y = 40 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // animation starts when el's top hits 85% down the viewport
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert(); // cleanup on unmount
  }, [delay, y]);

  return <div ref={ref}>{children}</div>;
}