import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GsapScrollProvider from './components/GsapScrollProvider';
import Breadcrumbs from './components/Breadcrumbs';

export const metadata = {
  title: 'SyncOps | AI-Powered Software Solutions & Enterprise Development',
  description: 'SyncOps delivers enterprise-grade AI-powered software solutions, development, and consulting. 50+ launches, 99.5% uptime. Specializing in AI, cybersecurity, cloud, and custom software development.',
  keywords: ['SyncOps', 'AI software development', 'enterprise software', 'custom software development', 'AI solutions', 'cybersecurity', 'cloud development', 'software consulting', 'Majid Ali', 'Rimsha Imran'],
  authors: [{ name: 'SyncOps Team' }],
  creator: 'SyncOps Technologies',
  publisher: 'SyncOps Technologies',
  metadataBase: new URL('https://syncops.tech'),
  alternates: {
    canonical: 'https://syncops.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://syncops.tech',
    siteName: 'SyncOps',
    title: 'SyncOps | AI-Powered Software Solutions & Enterprise Development',
    description: 'Enterprise-grade AI-powered software solutions, development, and consulting. 50+ launches, 99.5% uptime.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'SyncOps - AI-Powered Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncOps | AI-Powered Software Solutions',
    description: 'Enterprise-grade AI-powered software solutions, development, and consulting.',
    images: ['/images/logo.png'],
    creator: '@SyncOps',
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
};

// Organization structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SyncOps",
  "alternateName": "SyncOps Technologies",
  "url": "https://syncops.tech",
  "logo": "https://syncops.tech/images/logo.png",
  "description": "Enterprise-grade AI-powered software solutions, development, and consulting. Specializing in AI, cybersecurity, cloud, and custom software development.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Gujranwala",
    "addressRegion": "Punjab",
    "addressCountry": "PK",
    "streetAddress": "Mumtaz Market"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-301-8678-319",
    "contactType": "Customer Service",
    "email": "info@syncops.tech",
    "areaServed": "Worldwide",
    "availableLanguage": ["en"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/syncops",
    "https://twitter.com/syncops",
    "https://github.com/syncopstech"
  ],
  "founder": {
    "@type": "Person",
    "name": "Majid Ali",
    "jobTitle": "Chief Executive Officer",
    "url": "https://majidali.tech",
    "sameAs": [
      "https://www.linkedin.com/in/majidali-syncops/",
      "https://majidali.tech"
    ]
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Majid Ali",
      "jobTitle": "Chief Executive Officer",
      "url": "https://majidali.tech",
      "sameAs": [
        "https://www.linkedin.com/in/majidali-syncops/",
        "https://majidali.tech"
      ]
    },
    {
      "@type": "Person",
      "name": "Rimsha Imran",
      "jobTitle": "Chief Technology Officer",
      "url": "https://rimshaimran.tech",
      "sameAs": [
        "https://www.linkedin.com/in/rimshaimran-syncops/",
        "https://rimshaimran.tech"
      ]
    },
    {
      "@type": "Person",
      "name": "Nida Naeem",
      "jobTitle": "Chief Business Development Officer",
      "sameAs": [
        "https://www.linkedin.com/in/nidanaeem-syncops/"
      ]
    }
  ],
  "offers": {
    "@type": "Offer",
    "category": "Software Development Services",
    "description": "AI-powered software solutions, enterprise development, and consulting"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <GsapScrollProvider />
        <Header />
        <Breadcrumbs />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


