import AIDivisionClient from './_components/AIDivisionClient';

export const generateMetadata = () => ({
  title: "AI Division - SyncOps | Machine Learning & AI Solutions",
  description:
    "Transform your business with SyncOps AI Division. Cutting-edge machine learning solutions, predictive analytics, and intelligent automation. Custom ML models, AI strategy, and end-to-end AI implementation. 98% forecast accuracy, $2M+ fraud prevented.",
  keywords: [
    "AI solutions",
    "machine learning",
    "predictive analytics",
    "AI automation",
    "ML models",
    "deep learning",
    "NLP",
    "computer vision",
    "AI consulting",
    "MLOps",
    "TensorFlow",
    "PyTorch",
    "AI strategy",
    "business intelligence AI"
  ],
  openGraph: {
    title: "AI Division - SyncOps | Machine Learning & AI Solutions",
    description: "Cutting-edge AI solutions: machine learning, predictive analytics, and intelligent automation to transform your business.",
    type: "website",
    url: "https://syncops.tech/ai-division",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Division - SyncOps | Machine Learning & AI Solutions",
    description: "Transform your business with cutting-edge AI solutions and machine learning.",
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
    canonical: "https://syncops.tech/ai-division",
  },
});

export default function AIDivisionPage() {
  return (
    <>
      <AIDivisionClient />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SyncOps AI Division",
            "url": "https://syncops.tech/ai-division",
            "description": "Cutting-edge machine learning solutions, predictive analytics, and intelligent automation",
            "serviceType": "AI Solutions",
            "areaServed": "Worldwide",
            "offers": [
              {
                "@type": "Offer",
                "name": "Machine Learning Solutions",
                "description": "Custom ML models and algorithms tailored to your business needs"
              },
              {
                "@type": "Offer",
                "name": "AI Automation",
                "description": "Intelligent workflow automation powered by AI and RPA"
              },
              {
                "@type": "Offer",
                "name": "Predictive Analytics",
                "description": "Data-driven insights and forecasting for informed decisions"
              },
              {
                "@type": "Offer",
                "name": "AI Strategy & Consulting",
                "description": "Comprehensive AI readiness assessment and strategic roadmap development"
              }
            ]
          })
        }}
      />
    </>
  );
}