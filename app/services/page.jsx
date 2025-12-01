import React from "react";
import ServicesPageContent from "./_components/ServicesPageContent";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Services - AI Solutions, Software Development & Consulting | SyncOps",
    description: "Comprehensive software development services by SyncOps: AI solutions, custom software development, web & mobile apps, cloud services, cybersecurity, and data analytics. 50+ successful projects, 99.5% uptime.",
    keywords: [
      "software development services",
      "AI solutions",
      "custom software development",
      "web development",
      "mobile app development",
      "cloud services",
      "cybersecurity services",
      "data analytics",
      "software consulting",
      "enterprise software",
      "SyncOps services"
    ],
    url: "/services",
    type: "website"
  });
};

const page = () => {
  return <ServicesPageContent />;
};

export default page;
