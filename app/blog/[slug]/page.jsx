import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CalendarDays, Clock, Bookmark, MessageCircle, Heart } from "lucide-react";
import { getPostBySlug, getAllPosts } from "../../utils/blogUtils";
import AuthorProfile from "../_components/AuthorProfile";
import RelatedPosts from "../_components/RelatedPosts";
import ShareButton from "../_components/ShareButton";

// Force dynamic rendering to avoid React version mismatch during prerendering
export const dynamic = "force-dynamic";

const coverPlaceholder =
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80";

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post.title} | SyncOps Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
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

  return (
    <article className="bg-[#f4f8fb] min-h-screen">
      <section className="bg-white/90 border-b border-gray-100 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0fbab1]">
              SyncOps • Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#042638] leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <AuthorProfile
              author={post.author || "SyncOps"}
              role={post.authorRole || "Tech Innovators"}
              className="mb-0"
            />
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{readTime} min read</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/40">
            <div className="relative h-64 md:h-96">
              <Image
                src={coverImage}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031a28]/80 via-[#031a28]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-wide text-white/70 mb-1">
                  {formattedDate}
                </p>
                <p className="text-lg font-semibold leading-snug">{excerptHighlight}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-500">
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Join the discussion"
              >
                <MessageCircle size={18} />
              </button>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Appreciate article"
              >
                <Heart size={18} />
              </button>
              <ShareButton
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                iconSize={18}
              />
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Bookmark article"
              >
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/40 p-6 md:p-10">
          <div className="prose prose-lg prose-slate max-w-none text-[#052637]">
            <MDXRemote source={post.content} />
          </div>
        </div>
        <RelatedPosts currentSlug={params.slug} />
      </section>
    </article>
  );
}
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

