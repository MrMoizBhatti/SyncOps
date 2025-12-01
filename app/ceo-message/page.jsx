import CEOMessage from "./_components/CEOMessage";
import QuoteHighlight from "./_components/QuoteHighlight";

export const generateMetadata = () => {
  return {
    title: "Message from CEO - Majid Ali | SyncOps Leadership Vision",
    description:
      "Read a personal message from SyncOps CEO Majid Ali about our vision, mission, and commitment to empowering businesses with AI-powered software solutions.",
    keywords: [
      "SyncOps CEO",
      "Majid Ali",
      "leadership message",
      "company vision",
      "AI software company",
      "tech leadership",
      "business transformation",
      "software development vision",
      "CEO message",
      "company mission"
    ],
    openGraph: {
      title: "Message from CEO - Majid Ali | SyncOps Leadership Vision",
      description: "Read a personal message from SyncOps CEO Majid Ali about our vision, mission, and commitment to empowering businesses with AI-powered software solutions.",
      type: "website",
      url: "https://syncops.tech/ceo-message",
      siteName: "SyncOps",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: "SyncOps CEO Message - Majid Ali"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
  title: "Message from CEO - Majid Ali | SyncOps",
      description: "Read a personal message from SyncOps CEO about our vision and mission.",
      images: ["/images/logo.png"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: "https://syncops.tech/ceo-message"
    }
  };
};

const CEOMessagePage = () => {
  // Structured data for CEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Majid Ali",
    "jobTitle": "Chief Executive Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech"
    },
    "description": "CEO of SyncOps, leading the company's vision to empower businesses with AI-powered software solutions.",
    "url": "https://syncops.tech/ceo-message",
    "sameAs": [
      "https://www.linkedin.com/in/majidali-syncops/",
      "https://majidali.tech",
      "https://twitter.com/majidali",
      "https://github.com/majidali"
    ],
    "image": "https://syncops.tech/images/ceo-majid-ali.jpg"
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section - CEO Message */}
      <CEOMessage />
      
      {/* Quote Highlight */}
      <QuoteHighlight />
      
    </main>
  );
};

export default CEOMessagePage;
