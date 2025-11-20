import { format } from "date-fns";
import { Clock, MessageCircle, Heart, Bookmark, Share2 } from "lucide-react";
import ShareButton from "./ShareButton";
function BlogNav({ readTime, publishDate }) {
  return (
    <div className="my-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <Clock size={16} className="mr-1" />
            {readTime} min read
          </span>
          <span>{format(new Date(publishDate), "MMMM d, yyyy")}</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-600 hover:text-[#0fbab1] transition-colors"
            aria-label="Comment"
          >
            <MessageCircle size={20} />
          </button>
          <button
            className="text-gray-600 hover:text-[#0fbab1] transition-colors"
            aria-label="Like"
          >
            <Heart size={20} />
          </button>
          <ShareButton />
          <button
            className="text-gray-600 hover:text-[#0fbab1] transition-colors"
            aria-label="Bookmark"
          >
            <Bookmark size={20} />
          </button>
        </div>

      </div>
      <hr className="border-t border-gray-200" />
    </div>
  );
}
export default BlogNav;
