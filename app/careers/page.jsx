import React from "react";
import CareersHero from "./_components/CareersHero";
import WhyJoinSyncOps from "./_components/WhyJoinSyncOps";
import OpenPositions from "./_components/OpenPositions";
import TalentPool from "./_components/TalentPool";
import HiringProcess from "./_components/HiringProcess";
import FinalCTA from "./_components/FinalCTA";

export const metadata = {
  title: "Careers at SyncOps - Join the Minds Behind Tomorrow's AI-Powered Innovations",
  description: "Join SyncOps and be part of a team that's shaping the future of AI-powered software solutions. Explore challenging projects, inclusive culture, and continuous learning opportunities.",
  keywords: "careers, jobs, employment, SyncOps, AI, software development, technology, remote work, on-site positions",
  openGraph: {
    title: "Careers at SyncOps - Join the Minds Behind Tomorrow's AI-Powered Innovations",
    description: "Join SyncOps and be part of a team that's shaping the future of AI-powered software solutions. Explore challenging projects, inclusive culture, and continuous learning opportunities.",
    type: "website",
    url: "https://syncops.com/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at SyncOps - Join the Minds Behind Tomorrow's AI-Powered Innovations",
    description: "Join SyncOps and be part of a team that's shaping the future of AI-powered software solutions.",
  },
};

const CareersPage = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section - Dark */}
      <section data-gsap-section className="bg-[#0B0A1C] text-white">
        <div data-gsap-stagger>
          <CareersHero />
        </div>
      </section>
      
      {/* 2. Why Join SyncOps - Light */}
      <section data-gsap-section className="bg-gradient-to-br from-[#F9FCFE] to-white py-20">
        <div data-gsap-stagger>
          <WhyJoinSyncOps />
        </div>
      </section>
      
      {/* 3. Open Positions - Dark */}
      <section data-gsap-section className="bg-gradient-to-br from-[#0B0A1C] to-[#1A1A2E] text-white py-20">
        <div data-gsap-stagger>
          <OpenPositions />
        </div>
      </section>
      
      {/* 4. Talent Pool - Light */}
      <section data-gsap-section className="bg-gradient-to-br from-white to-[#F0FCFF] py-20">
        <div data-gsap-stagger>
          <TalentPool />
        </div>
      </section>
      
      {/* 5. How We Hire - Dark */}
      <section data-gsap-section className="bg-[#0B0A1C] text-white py-20">
        <div data-gsap-stagger>
          <HiringProcess />
        </div>
      </section>
      
      {/* 6. Final CTA - Dark with Glow */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <FinalCTA />
        </div>
      </section>

    </main>
  );
};

export default CareersPage;
