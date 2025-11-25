import React from 'react';
import SafeLink from "../../components/ui/SafeLink";

function BlogCard({ post, featured = false, viewMode = "grid" }) {
  return (
    <div className="h-full group">
      <SafeLink href={`/blog/${post.slug || "default"}`} className="h-full">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 h-full flex flex-col border border-white/10 hover:border-[#00B894]/30 hover:shadow-2xl relative">
          {/* Content */}
          <div className="p-6 flex-grow flex flex-col">
            {/* Title */}
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00B894] transition-colors duration-300 line-clamp-2">
              {post.title}
            </h2>
            
            {/* Excerpt */}
            <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* Read More Button */}
            <div className="flex items-center justify-between">
              <span className="text-[#00B894] text-sm font-medium group-hover:text-[#00C4FF] transition-colors duration-300">
                Read Article
              </span>
            </div>
          </div>
        </div>
      </SafeLink>
    </div>
  );
}

export default BlogCard; 