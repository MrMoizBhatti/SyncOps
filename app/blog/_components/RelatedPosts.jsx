import { getAllPosts } from "@/app/utils/blogUtils";
import SafeLink from "../../components/ui/SafeLink";
import { ArrowRight } from "lucide-react";

function RelatedPosts({ currentSlug }) {
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-[#042638] mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
            <div className="px-4 py-3 mt-auto">
              <SafeLink
                href={`/blog/${post.slug || "default"}`}
                className="text-[#0fbab1] hover:underline flex items-center justify-between"
              >
                Read More <ArrowRight size={16} />
              </SafeLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedPosts;
