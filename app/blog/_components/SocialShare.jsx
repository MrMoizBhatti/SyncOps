"use client";
import { Twitter, Linkedin, Facebook, Share2 } from "lucide-react";
import { useState } from "react";

export default function SocialShare({ title, url, description }) {
  const [showMenu, setShowMenu] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const handleShare = (platform) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=400");
    setShowMenu(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="p-2.5 sm:p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-all touch-manipulation border border-gray-200 hover:border-gray-300"
        aria-label="Share on social media"
      >
        <Share2 size={18} className="text-gray-600" />
      </button>

      {showMenu && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50 min-w-[160px]">
          <button
            onClick={() => handleShare("twitter")}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
          >
            <Twitter size={18} className="text-[#1DA1F2]" />
            <span>Twitter</span>
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
          >
            <Linkedin size={18} className="text-[#0077B5]" />
            <span>LinkedIn</span>
          </button>
          <button
            onClick={() => handleShare("facebook")}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
          >
            <Facebook size={18} className="text-[#1877F2]" />
            <span>Facebook</span>
          </button>
        </div>
      )}

      {showMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}

