import React from "react";
import AboutHero from "./_components/AboutHero";
import MissionVision from "./_components/MissionVision";
import WhatWeStandFor from "./_components/WhatWeStandFor";
import LeadershipTeam from "./_components/LeadershipTeam";
import JoinTeamCTA from "./_components/JoinTeamCTA";
import HowWeWork from "./_components/HowWeWork";
import WhatDrivesUs from "./_components/WhatDrivesUs";
import ClientTestimonial from "./_components/ClientTestimonial";
import TrustedMetrics from "./_components/TrustedMetrics";
import FinalCTA from "./_components/FinalCTA";

export const metadata = {
  title: "About SyncOps - Empowering the Future with Purpose-Driven Innovation",
  description: "Discover SyncOps' mission to transform businesses through technology, people, and purpose. Meet our team of innovators and learn about our values.",
  keywords: "about us, mission, vision, team, values, SyncOps, innovation, technology, leadership",
  openGraph: {
    title: "About SyncOps - Empowering the Future with Purpose-Driven Innovation",
    description: "Discover SyncOps' mission to transform businesses through technology, people, and purpose.",
    type: "website",
    url: "https://syncops.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SyncOps - Empowering the Future with Purpose-Driven Innovation",
    description: "Discover SyncOps' mission to transform businesses through technology, people, and purpose.",
  },
};

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section - Dark */}
      <section className="bg-[#0B0A1C] text-white">
        <AboutHero />
      </section>
      
      {/* 2. Mission & Vision - Light */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20">
        <MissionVision />
      </section>
      
      {/* 3. What We Stand For - Light */}
      <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20">
        <WhatWeStandFor />
      </section>
      
      {/* 4. Leadership Team - Dark */}
      <section className="bg-[#0B0A1C] text-white py-20">
        <LeadershipTeam />
      </section>
      
      {/* 5. Join Our Team CTA - Dark Gradient */}
      <section className="bg-gradient-to-br from-[#0B0A1C] to-[#1A1A2E] text-white py-16">
        <JoinTeamCTA />
      </section>
      
      {/* 6. How We Work - Light */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20">
        <HowWeWork />
      </section>
      
      {/* 7. What Drives Us - Light */}
      <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20">
        <WhatDrivesUs />
      </section>
      
      {/* 8. Client Testimonial - Light */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20">
        <ClientTestimonial />
      </section>
      
      {/* 9. Trusted Metrics - Light */}
      <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20">
        <TrustedMetrics />
      </section>
      
      {/* 10. Final CTA - Dark */}
      <section className="bg-[#0B0A1C] text-white">
        <FinalCTA />
      </section>
      
    </main>
  );
};

export default AboutPage;
