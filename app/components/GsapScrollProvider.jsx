"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global GSAP + ScrollTrigger setup.
 * Applies fade-in + upward motion to any element with `data-gsap-section`
 * and staggered entrance to children with `data-gsap-stagger`.
 */
export default function GsapScrollProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray("[data-gsap-section]");

        gsap.set(sections, { autoAlpha: 0, y: 80 });

        sections.forEach((section) => {
          const delay = Number(section.getAttribute("data-gsap-delay")) || 0;
          gsap.to(section, {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay,
            scrollTrigger: {
              trigger: section,
              start: "top 95%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });
        });

        ScrollTrigger.batch("[data-gsap-stagger]", {
          start: "top 95%",
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              stagger: 0.12,
              duration: 0.9,
              ease: "power3.out",
            }),
          onLeaveBack: (batch) =>
            gsap.to(batch, {
              autoAlpha: 0,
              y: 40,
              stagger: 0.08,
              duration: 0.6,
              ease: "power3.in",
            }),
        });
      });

      return () => ctx.revert();
    };

    let cleanup;

    initGSAP().then((revert) => {
      cleanup = revert;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return null;
}


