export const metadata = {
  title: "Case Studies - Success Stories | SyncOps Software Development",
  description:
    "Explore SyncOps case studies showcasing successful AI-powered software solutions across healthcare, HR management, real estate, and more. See how we've helped businesses transform their operations with cutting-edge technology.",
  keywords: [
    "case studies",
    "software development case studies",
    "AI solutions case studies",
    "healthcare software",
    "HR management software",
    "real estate technology",
    "SyncOps success stories",
    "software development portfolio",
    "enterprise software solutions",
    "digital transformation",
  ].join(", "),
  openGraph: {
    title: "Case Studies - Success Stories | SyncOps",
    description:
      "Explore SyncOps case studies showcasing successful AI-powered software solutions. See how we've helped businesses transform their operations.",
    type: "website",
    url: "https://syncops.tech/case-studies",
    siteName: "SyncOps",
    images: [
      {
        url: "https://syncops.tech/images/GeoPluse.png",
        width: 1200,
        height: 630,
        alt: "SyncOps Case Studies - Success Stories",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies - Success Stories | SyncOps",
    description:
      "Explore SyncOps case studies showcasing successful AI-powered software solutions.",
    images: ["https://syncops.tech/images/GeoPluse.png"],
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
  alternates: {
    canonical: "https://syncops.tech/case-studies",
  },
};

export default function CaseStudiesLayout({ children }) {
  return <>{children}</>;
}

