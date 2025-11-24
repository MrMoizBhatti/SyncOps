import React from "react";
import TechnologiesHero from "./_components/TechnologiesHero";
import TechnologyStackCards from "./_components/TechnologyStackCards";
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
      <TechnologiesHero />
      
      {/* 2. Technology Stack Cards - Light */}
      <TechnologyStackCards />
      
      {/* 3. Continuously Evolving Strip - Light */}
      <ContinuouslyEvolvingStrip />
      
      {/* 4. Cloud Expertise - Dark */}
      <CloudExpertise />
      
      {/* 5. Multi-Cloud Benefits - Dark */}
      <MultiCloudBenefits />
      
      {/* 6. Our Approach to Software Development - Light */}
      <DevelopmentApproach />
      
      {/* 7. Proven Methodology Strip - Light */}
      <ProvenMethodologyStrip />
      
    
    </main>
  );
};

export default TechnologiesPage;
