import BlogHero from "./_components/BlogHero";
import { getAllPosts } from "../utils/blogUtils";
import Blog from "./_components/Blog";
import FinalCTA from "../components/FinalCTA";

export const metadata = {
  title: "Blog - Latest Insights on AI, Software Development & Technology | SyncOps",
  description: "Discover expert insights, tutorials, and industry trends from SyncOps. Stay updated with the latest in AI, software development, cloud technologies, and more.",
  keywords: "blog, AI, software development, technology, cloud, insights, tutorials, SyncOps",
  openGraph: {
    title: "Blog - Latest Insights on AI, Software Development & Technology | SyncOps",
    description: "Discover expert insights, tutorials, and industry trends from SyncOps.",
    type: "website",
    url: "https://syncops.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Latest Insights on AI, Software Development & Technology | SyncOps",
    description: "Discover expert insights, tutorials, and industry trends from SyncOps.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <BlogHero />
      
      {/* Blog Posts Section */}
      <Blog posts={posts} />
      
      {/* CTA Section */}
      <FinalCTA />
      
    </main>
  );
}
