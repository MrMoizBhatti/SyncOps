import React from "react";
import AboutHero from "./_components/AboutHero";
import MissionVision from "./_components/MissionVision";
import WhatWeStandFor from "./_components/WhatWeStandFor";
import LeadershipTeam from "./_components/LeadershipTeam";
import HowWeWork from "./_components/HowWeWork";
import WhatDrivesUs from "./_components/WhatDrivesUs";
import TrustedMetrics from "./_components/TrustedMetrics";

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
      <section className="bg-[#0B0A1C] text-white" id="about-hero">
        <AboutHero />
      </section>
      
      {/* 2. Mission & Vision - Light */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20" id="mission-vision">
        <MissionVision />
      </section>
      
      {/* 3. What We Stand For - Light */}
      <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20" id="what-we-stand-for">
        <WhatWeStandFor />
      </section>
      
      {/* 4. Leadership Team - Dark */}
      <section className="bg-[#0B0A1C] text-white py-20" id="leadership-team">
        <LeadershipTeam />
      </section>
      
      {/* 5. How We Work - Light */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-20" id="how-we-work">
        <HowWeWork />
      </section>
      
      {/* 6. What Drives Us - Light */}
      <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20" id="what-drives-us">
        <WhatDrivesUs />
      </section>
      
      {/* 7. Trusted Metrics - Light */}
      <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-20" id="trusted-metrics">
        <TrustedMetrics />
      </section>
      
    </main>
  );
};

export default AboutPage;
