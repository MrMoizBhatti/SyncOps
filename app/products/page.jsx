import ProductsClient from './_components/ProductsClient';

export const generateMetadata = () => ({
  title: "Products - SyncOps | SaaS Building Blocks for Modern Teams",
  description: "Discover SyncOps productized SaaS building blocks: SyncFlow (AI workflow automation), DataSync Pro (real-time data sync), and CloudGuard (cloud security). Production-ready modules that integrate seamlessly with your stack. 50+ integrations, 99.8% uptime, enterprise-grade security.",
  keywords: [
    "SaaS building blocks",
    "workflow automation",
    "data synchronization",
    "cloud security",
    "productized SaaS",
    "SyncFlow",
    "DataSync Pro",
    "CloudGuard",
    "enterprise software",
    "API integration"
  ],
  openGraph: {
    title: "Products - SyncOps | SaaS Building Blocks",
    description: "Production-ready modules for workflows, data sync, and cloud security. Launch faster with our prebuilt SaaS building blocks.",
    type: "website",
    url: "https://syncops.tech/products",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products - SyncOps | SaaS Building Blocks",
    description: "Production-ready modules for workflows, data sync, and cloud security.",
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://syncops.tech/products",
  },
});

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "SyncOps Products",
            "description": "Productized SaaS building blocks for modern teams",
            "url": "https://syncops.tech/products",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "SyncFlow",
                  "description": "AI-powered workflow automation platform",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "DataSync Pro",
                  "description": "Real-time data synchronization solution",
                  "applicationCategory": "BusinessApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "CloudGuard",
                  "description": "Cloud security and compliance platform",
                  "applicationCategory": "SecurityApplication",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                  }
                }
              ]
            }
          })
        }}
      />
      <ProductsClient />
    </>
  );
}

