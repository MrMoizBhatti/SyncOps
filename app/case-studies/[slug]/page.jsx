import { notFound } from "next/navigation";
import CaseStudyHero from "../_components/Hero";
import ChallengeSection from "../_components/Challenges";
import SolutionSection from "../_components/Solutions";
import TimelineSection from "../_components/Timeline";
import RelatedCaseStudies from "../_components/RelatedStudies";
import CaseStudyCTA from "../_components/CTA";
import { caseStudiesData } from "../_data/caseStudies";

// Generate SEO metadata for each case study
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudyData = caseStudiesData[slug];

  if (!caseStudyData) {
    return {
      title: "Case Study Not Found | SyncOps",
      description: "The requested case study could not be found.",
    };
  }

  // Generate keywords based on case study content
  const keywords = [
    caseStudyData.industry.toLowerCase(),
    "case study",
    "software development",
    "AI solutions",
    "SyncOps",
    caseStudyData.title.toLowerCase(),
    ...(caseStudyData.solutions?.flatMap(s => s.features || []) || []),
  ].filter(Boolean);

  // Generate description
  const description = `${caseStudyData.subtitle} Learn how SyncOps delivered ${caseStudyData.title} in ${caseStudyData.duration} with ${caseStudyData.team}. Discover the challenges, solutions, and results.`;

  const url = `https://syncops.tech/case-studies/${slug}`;
  const imageUrl = caseStudyData.image?.startsWith('http') 
    ? caseStudyData.image 
    : `https://syncops.tech${caseStudyData.image}`;

  return {
    title: `${caseStudyData.title} | SyncOps Case Study`,
    description: description,
    keywords: keywords.join(", "),
    authors: [{ name: "SyncOps" }],
    openGraph: {
      title: `${caseStudyData.title} | SyncOps Case Study`,
      description: description,
      type: "article",
      url: url,
      siteName: "SyncOps",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${caseStudyData.title} - ${caseStudyData.industry} Case Study`,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudyData.title} | SyncOps Case Study`,
      description: description,
      images: [imageUrl],
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
      canonical: url,
    },
    other: {
      "article:published_time": new Date().toISOString(),
      "article:author": "SyncOps",
      "article:section": caseStudyData.industry,
    },
  };
}

// Generate structured data (JSON-LD) for SEO
function generateStructuredData(caseStudyData, slug) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudyData.title,
    "description": caseStudyData.subtitle,
    "url": `https://syncops.tech/case-studies/${slug}`,
    "image": caseStudyData.image?.startsWith('http') 
      ? caseStudyData.image 
      : `https://syncops.tech${caseStudyData.image}`,
    "author": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech",
    },
    "publisher": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": "https://syncops.tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://syncops.tech/images/logo.png",
      },
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://syncops.tech/case-studies/${slug}`,
    },
    "about": {
      "@type": "Thing",
      "name": caseStudyData.industry,
    },
  };

  // Add duration if available
  if (caseStudyData.duration) {
    structuredData.timeRequired = caseStudyData.duration;
  }

  // Add challenges
  if (caseStudyData.challenges && caseStudyData.challenges.length > 0) {
    structuredData.problem = caseStudyData.challenges.map(challenge => ({
      "@type": "Thing",
      "name": challenge.title,
      "description": challenge.description,
    }));
  }

  // Add solutions
  if (caseStudyData.solutions && caseStudyData.solutions.length > 0) {
    structuredData.solution = caseStudyData.solutions.map(solution => ({
      "@type": "Thing",
      "name": solution.title,
      "description": solution.description,
    }));
  }

  // Add testimonial
  if (caseStudyData.testimonial) {
    structuredData.review = {
      "@type": "Review",
      "reviewBody": caseStudyData.testimonial.quote,
      "author": {
        "@type": "Person",
        "name": caseStudyData.testimonial.author,
        "jobTitle": caseStudyData.testimonial.role,
        "worksFor": {
          "@type": "Organization",
          "name": caseStudyData.testimonial.company,
        },
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": caseStudyData.testimonial.rating,
        "bestRating": 5,
      },
    };
  }

  return structuredData;
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const caseStudyData = caseStudiesData[slug];

  if (!caseStudyData) {
    notFound();
  }

  const structuredData = generateStructuredData(caseStudyData, slug);

  return (
    <>
      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article className="bg-white min-h-screen relative" itemScope itemType="https://schema.org/Article" style={{ paddingTop: '0', marginTop: '0' }}>
        <CaseStudyHero
          title={caseStudyData.title}
          subtitle={caseStudyData.subtitle}
          image={caseStudyData.image}
          industry={caseStudyData.industry}
          duration={caseStudyData.duration}
          team={caseStudyData.team}
        />
        <ChallengeSection challenges={caseStudyData.challenges} />
        <SolutionSection solutions={caseStudyData.solutions} />
        <TimelineSection duration={caseStudyData.duration} team={caseStudyData.team} />
        <CaseStudyCTA title={caseStudyData.title} industry={caseStudyData.industry} />
        <RelatedCaseStudies caseStudies={caseStudyData.relatedCaseStudies} />
      </article>
    </>
  );
}
