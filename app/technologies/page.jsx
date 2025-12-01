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
  description: "Explore SyncOps' comprehensive technology stack including React, Node.js, Python, AWS, Azure, GCP, and more. Discover our expertise in frontend, backend, database, cloud, AI/ML, and DevOps technologies.",
  keywords: [
    "technology stack",
    "frontend technologies",
    "backend technologies",
    "cloud technologies",
    "AWS Azure GCP",
    "React Node.js Python",
    "database technologies",
    "AI ML technologies",
    "DevOps tools",
    "software development stack",
    "SyncOps technologies"
  ],
  authors: [{ name: "SyncOps Team" }],
  creator: "SyncOps Technologies",
  publisher: "SyncOps Technologies",
  metadataBase: new URL("https://syncops.tech"),
  alternates: {
    canonical: "https://syncops.tech/technologies",
  },
  openGraph: {
    title: "Technologies - Powering Innovation Through Advanced Technology Stack | SyncOps",
    description: "Explore SyncOps' comprehensive technology stack including frontend, backend, database, and cloud expertise. React, Node.js, Python, AWS, Azure, GCP and more.",
    type: "website",
    url: "https://syncops.tech/technologies",
    siteName: "SyncOps",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "SyncOps Technology Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies - Powering Innovation Through Advanced Technology Stack | SyncOps",
    description: "Explore SyncOps' comprehensive technology stack including frontend, backend, database, and cloud expertise.",
    images: ["/images/logo.png"],
    creator: "@SyncOps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
