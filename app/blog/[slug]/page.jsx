import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CalendarDays, Clock } from "lucide-react";
import { getPostBySlug, getAllPosts } from "../../utils/blogUtils";
import AuthorProfile from "../_components/AuthorProfile";
import RelatedPosts from "../_components/RelatedPosts";
import SocialShare from "../_components/SocialShare";
import InteractiveButtons from "../_components/InteractiveButtons";
import ReadingProgress from "../_components/ReadingProgress";
import TableOfContents from "../_components/TableOfContents";

// MDX Components for custom rendering
const mdxComponents = {
  h2: (props) => {
    const id = props.children
      ?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h2 id={id} {...props} />;
  },
  h3: (props) => {
    const id = props.children
      ?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h3 id={id} {...props} />;
  },
};

// Force dynamic rendering to avoid React version mismatch during prerendering
export const dynamic = "force-dynamic";

const coverPlaceholder =
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = getPostBySlug(slug);
  const url = `https://syncops.tech/blog/${slug}`;
  const coverImage = post.coverImage || coverPlaceholder;
  const publishedTime = post.date ? new Date(post.date).toISOString() : new Date().toISOString();

  return {
    title: `${post.title} | SyncOps Blog`,
    description: post.excerpt || "Discover expert insights on software development and technology.",
    keywords: post.tags?.join(", ") || "software development, technology, AI, insights",
    authors: [{ name: post.author || "SyncOps" }],
    openGraph: {
      title: post.title,
      description: post.excerpt || "Discover expert insights on software development and technology.",
      type: "article",
      url: url,
      siteName: "SyncOps",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      publishedTime: publishedTime,
      authors: [post.author || "SyncOps"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "Discover expert insights on software development and technology.",
      images: [coverImage],
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
      "article:published_time": publishedTime,
      "article:author": post.author || "SyncOps",
      "article:section": post.category || "Technology",
    },
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = getPostBySlug(slug);
  const readTime = Math.ceil(post.content.split(" ").length / 200);
  const publishedOn = post.date ? new Date(post.date) : new Date();
  const formattedDate = publishedOn.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const coverImage = post.coverImage || coverPlaceholder;
  const excerptHighlight =
    post.excerpt ||
    "Explore expert-backed strategies, frameworks, and insights designed to keep your engineering team ahead.";
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : `https://syncops.tech/blog/${slug}`;

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: coverImage,
    datePublished: publishedOn.toISOString(),
    dateModified: publishedOn.toISOString(),
    author: {
      "@type": "Organization",
      name: post.author || "SyncOps",
      url: "https://syncops.tech",
    },
    publisher: {
      "@type": "Organization",
      name: "SyncOps",
      url: "https://syncops.tech",
      logo: {
        "@type": "ImageObject",
        url: "https://syncops.tech/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://syncops.tech/blog/${slug}`,
    },
    articleSection: post.category || "Technology",
    keywords: post.tags?.join(", ") || "software development, technology",
    timeRequired: `PT${readTime}M`,
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-10 md:pb-12">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6 sm:mb-8 mt-4">
              {post.title}
            </h1>

            {/* Author & Meta Info Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
              <AuthorProfile
                author={post.author || "SyncOps"}
                role={post.authorRole || "Tech Innovators"}
                className="mb-0"
              />
              <div className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gray-400" />
                  <span>{readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} className="text-gray-400" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>

            {/* Interactive Buttons Row */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <InteractiveButtons slug={slug} />
              <SocialShare
                title={post.title}
                url={`https://syncops.tech/blog/${slug}`}
                description={post.excerpt}
              />
            </div>

            {/* Cover Image */}
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] bg-gray-100">
                <Image
                  src={coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 960px, (min-width: 768px) 720px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content - Left Column */}
            <div className="flex-1 order-2 lg:order-1 min-w-0">
              {/* Article Content */}
              <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
                prose-h2:text-2xl sm:prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:font-bold
                prose-h3:text-xl sm:prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base sm:prose-p:text-lg
                prose-a:text-[#0fbab1] prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-ul:text-gray-700 prose-ul:my-5 prose-li:my-2 prose-li:text-base sm:prose-li:text-lg
                prose-ol:text-gray-700 prose-ol:my-5 prose-li:my-2
                prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono
                prose-blockquote:border-l-4 prose-blockquote:border-[#0fbab1] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-img:rounded-lg prose-img:shadow-md">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>

              {/* Related Posts */}
              <RelatedPosts currentSlug={slug} />

              {/* Comments Section */}
              <div id="comments-section" className="mt-12 sm:mt-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Join the Discussion</h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">Comments feature coming soon! Share your thoughts and join the discussion.</p>
              </div>
            </div>
            
            {/* Sidebar - Table of Contents - Right Column */}
            <aside className="lg:w-80 xl:w-96 flex-shrink-0 order-1 lg:order-2">
              <div className="lg:sticky lg:top-28">
                <TableOfContents content={post.content} />
              </div>
            </aside>
          </div>
        </section>
    </article>
    </>
  );
}
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

