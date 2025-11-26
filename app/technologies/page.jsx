import React from "react";
import TechnologiesHero from "./_components/TechnologiesHero";
import TechnologyStackCards from "../components/TechnologyStackCards";
import ContinuouslyEvolvingStrip from "./_components/ContinuouslyEvolvingStrip";
import CloudExpertise from "./_components/CloudExpertise";
import MultiCloudBenefits from "./_components/MultiCloudBenefits";
import DevelopmentApproach from "./_components/DevelopmentApproach";
import ProvenMethodologyStrip from "./_components/ProvenMethodologyStrip";

export const metadata = {
  title: "Technologies - Powering Innovation Through Advanced Technology Stack | SyncOps",
  description: "Explore SyncOps' comprehensive technology stack including frontend, backend, database, and cloud expertise. Discover how we power modern software solutions.",
  keywords: "technology stack, frontend, backend, database, cloud, AWS, Azure, GCP, software development, SyncOps",
  openGraph: {
    title: "Technologies - Powering Innovation Through Advanced Technology Stack | SyncOps",
    description: "Explore SyncOps' comprehensive technology stack including frontend, backend, database, and cloud expertise.",
    type: "website",
    url: "https://syncops.com/technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies - Powering Innovation Through Advanced Technology Stack | SyncOps",
    description: "Explore SyncOps' comprehensive technology stack including frontend, backend, database, and cloud expertise.",
  },
};

const TechnologiesPage = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Hero Section - Dark */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <TechnologiesHero />
        </div>
      </section>
      
      {/* 2. Technology Stack Cards - Light */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <TechnologyStackCards />
        </div>
      </section>
      
      {/* 3. Continuously Evolving Strip - Light */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <ContinuouslyEvolvingStrip />
        </div>
      </section>
      
      {/* 4. Cloud Expertise - Dark */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <CloudExpertise />
        </div>
      </section>
      
      {/* 5. Multi-Cloud Benefits - Dark */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <MultiCloudBenefits />
        </div>
      </section>
      
      {/* 6. Our Approach to Software Development - Light */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <DevelopmentApproach />
        </div>
      </section>
      
      {/* 7. Proven Methodology Strip - Light */}
      <section data-gsap-section>
        <div data-gsap-stagger>
          <ProvenMethodologyStrip />
        </div>
      </section>
      
    
    </main>
  );
};

export default TechnologiesPage;
