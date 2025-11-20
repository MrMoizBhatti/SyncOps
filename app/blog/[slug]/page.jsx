import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "../../utils/blogUtils";
import AuthorProfile from "../_components/AuthorProfile";
import BlogNav from "../_components/BlogNav";
import RelatedPosts from "../_components/RelatedPosts";

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

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#042638] mb-6">{post.title}</h1>
      <AuthorProfile />
      <BlogNav readTime={readTime} publishDate={post.date} />
      <div className="prose prose-lg prose-blue max-w-none">
        <MDXRemote source={post.content} />
      </div>
      <RelatedPosts currentSlug={params.slug} />
      {/* <JoinDiscussion /> */}
    </article>
  );
}
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

