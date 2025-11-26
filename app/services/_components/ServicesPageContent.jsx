"use client";
import ServicesHero from "./ServicesHero";
import Services from "./Services";
import ProcessTimeline from "./ProcessTimeline";
import Testimonial from "../../components/Testimonial";

export default function ServicesPageContent() {
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

