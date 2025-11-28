import { getAllPosts, getPostBySlug } from "../../utils/blogUtils";
import SafeLink from "../../components/ui/SafeLink";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import Image from "next/image";

function RelatedPosts({ currentSlug }) {
  const currentPost = getPostBySlug(currentSlug);
  const allPosts = getAllPosts();
  
  // Find related posts based on category and tags
  const relatedPosts = allPosts
    .filter((post) => {
      if (post.slug === currentSlug) return false;
      
      // Score posts based on similarity
      let score = 0;
      
      // Same category = high priority
      if (post.category && currentPost.category && post.category === currentPost.category) {
        score += 10;
      }
      
      // Matching tags = medium priority
      if (post.tags && currentPost.tags && Array.isArray(post.tags) && Array.isArray(currentPost.tags)) {
        const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
        score += commonTags.length * 5;
      }
      
      // Similar title words = low priority
      if (post.title && currentPost.title) {
        const currentWords = currentPost.title.toLowerCase().split(/\s+/);
        const postWords = post.title.toLowerCase().split(/\s+/);
        const commonWords = currentWords.filter(word => postWords.includes(word) && word.length > 3);
        score += commonWords.length;
      }
      
      return score > 0;
    })
    .sort((a, b) => {
      // Sort by score (calculated above) and then by date
      let scoreA = 0;
      let scoreB = 0;
      
      if (a.category && currentPost.category && a.category === currentPost.category) scoreA += 10;
      if (b.category && currentPost.category && b.category === currentPost.category) scoreB += 10;
      
      if (scoreA !== scoreB) return scoreB - scoreA;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 3);

  // If no related posts found, show latest posts
  const displayPosts = relatedPosts.length > 0 
    ? relatedPosts 
    : allPosts.filter((post) => post.slug !== currentSlug).slice(0, 3);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const calculateReadingTime = (content) => {
    if (!content) return 0;
    const wordsPerMinute = 200;
    const wordCount = content.split(" ").length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <section className="mt-16 sm:mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
      {displayPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden flex flex-col transition-all duration-300 group"
            >
              {post.coverImage && (
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-[#0fbab1] transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <SafeLink
                  href={`/blog/${post.slug || "default"}`}
                  className="text-[#0fbab1] hover:text-[#00C4FF] font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
                >
                  Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </SafeLink>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-600">No related posts found.</p>
        </div>
      )}
    </section>
  );
}

export default RelatedPosts;
