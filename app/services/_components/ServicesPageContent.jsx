"use client";
import { useEffect } from "react";
import ServicesHero from "./ServicesHero";
import Services from "./Services";
import ProcessTimeline from "./ProcessTimeline";
import Testimonial from "../../components/Testimonial";

export default function ServicesPageContent() {
  useEffect(() => {
    let ctx;
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const sections = gsap.utils.toArray("[data-gsap-section]");
        gsap.set(sections, { autoAlpha: 0, y: 60 });

        sections.forEach((section) => {
          gsap.to(section, {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          });
        });

        ScrollTrigger.batch("[data-gsap-stagger]", {
          start: "top 90%",
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              stagger: 0.12,
              duration: 0.9,
              ease: "power3.out",
            }),
        });
      });
    };

    initGSAP();
    return () => ctx?.revert();
  }, []);

  return (
    <>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <ServicesHero />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <Services />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <ProcessTimeline />
        </div>
      </section>
      <section data-gsap-section>
        <div data-gsap-stagger>
          <Testimonial />
        </div>
      </section>
    </>
  );
}

