import React from "react";
import ContactForm from "./_components/ContactForm";
import ContactHero from "./_components/ContactHero";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";
import { generateMetadata as generateSEO } from "../utils/seoUtils";

export const generateMetadata = () => {
  return generateSEO({
    title: "Contact Us - Get in Touch with SyncOps | Software Development Experts",
    description: "Contact SyncOps for AI-powered software solutions, custom development, and consulting. Email: info@syncops.tech | Phone: +92-301-8678-319 | Located in Gujranwala, Pakistan. Get a free consultation today.",
    keywords: [
      "contact SyncOps",
      "software development contact",
      "AI solutions contact",
      "SyncOps email",
      "SyncOps phone",
      "software consulting contact",
      "get quote",
      "free consultation"
    ],
    url: "/contact",
    type: "website"
  });
};

const page = () => {
  // Contact page structured data
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SyncOps",
    "description": "Contact SyncOps for AI-powered software solutions and consulting",
    "url": "https://syncops.tech/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-301-8678-319",
        "contactType": "Customer Service",
        "email": "info@syncops.tech",
        "areaServed": "Worldwide",
        "availableLanguage": ["en"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gujranwala",
        "addressRegion": "Punjab",
        "addressCountry": "PK",
        "streetAddress": "Mumtaz Market"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div>
        <ContactHero />
        <ContactForm />
        <Testimonial />
        <FinalCTA/>
      </div>
    </>
  );
};

export default page;
