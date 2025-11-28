import { ChevronRight, Home } from "lucide-react";
import SafeLink from "../../components/ui/SafeLink";

export default function Breadcrumbs({ title }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <SafeLink
        href="/"
        className="hover:text-[#0fbab1] transition-colors"
      >
        Home
      </SafeLink>
      <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
      <SafeLink
        href="/blog"
        className="hover:text-[#0fbab1] transition-colors"
      >
        Blog
      </SafeLink>
      <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />
      <span className="text-gray-600 truncate max-w-[200px] sm:max-w-md">{title}</span>
    </nav>
  );
}

