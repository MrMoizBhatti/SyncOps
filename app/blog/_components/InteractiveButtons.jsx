"use client";
import { Heart, Bookmark, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function InteractiveButtons({ slug }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    // Load saved state from localStorage
    const savedLikes = JSON.parse(localStorage.getItem("blogLikes") || "{}");
    const savedBookmarks = JSON.parse(localStorage.getItem("blogBookmarks") || "{}");
    const savedLikeCounts = JSON.parse(localStorage.getItem("blogLikeCounts") || "{}");

    setIsLiked(savedLikes[slug] || false);
    setIsBookmarked(savedBookmarks[slug] || false);
    setLikeCount(savedLikeCounts[slug] || 0);
  }, [slug]);

  const handleLike = () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    
    const savedLikes = JSON.parse(localStorage.getItem("blogLikes") || "{}");
    savedLikes[slug] = newLiked;
    localStorage.setItem("blogLikes", JSON.stringify(savedLikes));

    const savedLikeCounts = JSON.parse(localStorage.getItem("blogLikeCounts") || "{}");
    const currentCount = savedLikeCounts[slug] || 0;
    savedLikeCounts[slug] = newLiked ? currentCount + 1 : Math.max(0, currentCount - 1);
    localStorage.setItem("blogLikeCounts", JSON.stringify(savedLikeCounts));
    setLikeCount(savedLikeCounts[slug]);
  };

  const handleBookmark = () => {
    const newBookmarked = !isBookmarked;
    setIsBookmarked(newBookmarked);
    
    const savedBookmarks = JSON.parse(localStorage.getItem("blogBookmarks") || "{}");
    savedBookmarks[slug] = newBookmarked;
    localStorage.setItem("blogBookmarks", JSON.stringify(savedBookmarks));
  };

  const handleComment = () => {
    // Scroll to comments section or open comment modal
    const commentsSection = document.getElementById("comments-section");
    if (commentsSection) {
      commentsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If no comments section, could open a modal or redirect
      alert("Comments feature coming soon!");
    }
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <button
        type="button"
        onClick={handleComment}
        className="p-2.5 sm:p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all relative group touch-manipulation border border-gray-200 hover:border-gray-300"
        aria-label="Join the discussion"
      >
        <MessageCircle size={18} className="text-gray-600 group-hover:text-[#0fbab1] transition-colors" />
      </button>
      
      <button
        type="button"
        onClick={handleLike}
        className={`p-2.5 sm:p-3 rounded-xl transition-all relative touch-manipulation border ${
          isLiked 
            ? "text-red-500 bg-red-50 border-red-200 hover:bg-red-100 active:bg-red-200" 
            : "text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300 active:bg-gray-200"
        }`}
        aria-label={isLiked ? "Unlike article" : "Like article"}
      >
        <Heart size={18} className={isLiked ? "fill-current" : ""} />
        {likeCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-[#0fbab1] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
            {likeCount}
          </span>
        )}
      </button>
      
      <button
        type="button"
        onClick={handleBookmark}
        className={`p-2.5 sm:p-3 rounded-xl transition-all touch-manipulation border ${
          isBookmarked 
            ? "text-[#0fbab1] bg-[#0fbab1]/10 border-[#0fbab1]/30 hover:bg-[#0fbab1]/20 active:bg-[#0fbab1]/30" 
            : "text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300 active:bg-gray-200"
        }`}
        aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
      >
        <Bookmark size={18} className={isBookmarked ? "fill-current" : ""} />
      </button>
    </div>
  );
}

