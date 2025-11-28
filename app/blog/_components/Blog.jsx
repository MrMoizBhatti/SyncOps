"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SafeLink from "../../components/ui/SafeLink";
import { FaSearch, FaBookmark, FaClock, FaFire, FaStar, FaFilter, FaSort, FaEye, FaBookOpen, FaArrowRight, FaMagic } from 'react-icons/fa';

// Shimmer Loading Component
const ShimmerCard = () => (
  <div className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 relative">
    <div className="p-6">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      {/* Category Tag Shimmer */}
      <div className="mb-4">
        <div className="h-6 w-20 bg-white/10 rounded-full animate-pulse"></div>
      </div>
      
      {/* Title Shimmer */}
      <div className="mb-3">
        <div className="h-6 w-3/4 bg-white/10 rounded animate-pulse mb-2"></div>
        <div className="h-6 w-1/2 bg-white/10 rounded animate-pulse"></div>
      </div>
      
      {/* Excerpt Shimmer */}
      <div className="mb-4 space-y-2">
        <div className="h-4 w-full bg-white/10 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-white/10 rounded animate-pulse"></div>
        <div className="h-4 w-4/6 bg-white/10 rounded animate-pulse"></div>
      </div>
      
      {/* Meta Shimmer */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          <div className="h-4 w-16 bg-white/10 rounded animate-pulse"></div>
          <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
        </div>
        <div className="h-4 w-20 bg-white/10 rounded animate-pulse"></div>
      </div>
      
      {/* Read More Shimmer */}
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 bg-white/10 rounded animate-pulse"></div>
        <div className="h-4 w-4 bg-white/10 rounded animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default function Blog({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Categories for filtering
  const categories = ["all", "AI", "DevOps", "Cloud", "Development", "Technology", "Tutorials"];

  // Trending tags
  const trendingTags = ["#AI", "#DevOps", "#Cloud", "#NextJS", "#React", "#AWS"];

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "popular") {
        return (b.views || 0) - (a.views || 0);
      }
      return new Date(a.date) - new Date(b.date);
    });

  // Pagination logic
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy, searchQuery]);

  // Load more function
  const loadMore = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  // Calculate reading time
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Toggle bookmark
  const toggleBookmark = (postSlug) => {
    setBookmarkedPosts(prev => 
      prev.includes(postSlug) 
        ? prev.filter(slug => slug !== postSlug)
        : [...prev, postSlug]
    );
  };

  // AI Surprise Me function
  const surpriseMe = () => {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    // In a real app, this would use AI to recommend content
    alert(`AI recommends: ${randomPost.title}`);
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SyncOps Blog",
            "description": "Latest insights on AI, software development & technology",
            "url": "https://syncops.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "SyncOps",
              "logo": {
                "@type": "ImageObject",
                "url": "https://syncops.com/logo.png"
              }
            },
            "blogPost": posts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author || "SyncOps Team"
              }
            }))
          })
        }}
      />

             <div className="min-h-screen">
         {/* Section 1: Blog Articles - White Background for Better Contrast */}
        <section className="bg-white py-20 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-aqua/3 to-brand-teal/3 opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Latest <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover insights, tutorials, and industry trends from our expert team.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters - White Card Style */}
              <div className="lg:w-80 flex-shrink-0">
                <motion.div 
                  className="card sticky top-8 relative overflow-hidden"
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(0, 248, 180, 0.1)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-aqua/5 to-brand-teal/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="p-6 relative z-10">
                    <motion.h3 
                      className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <FaFilter className="w-4 h-4 text-brand-aqua" />
                      </motion.div>
                      Filters
                    </motion.h3>

                    {/* Category Filter */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className="text-sm font-medium text-gray-600 mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category, index) => (
                          <motion.label 
                            key={category} 
                            className="flex items-center gap-3 cursor-pointer group relative"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ 
                              x: 5,
                              scale: 1.02
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.input
                              type="radio"
                              name="category"
                              value={category}
                              checked={selectedCategory === category}
                              onChange={(e) => setSelectedCategory(e.target.value)}
                              className="w-4 h-4 text-brand-aqua bg-white border-gray-300 focus:ring-brand-aqua focus:ring-2"
                              whileHover={{ scale: 1.1 }}
                            />
                            <motion.span 
                              className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200 relative z-10"
                              whileHover={{ color: "#00B894" }}
                            >
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.span>
                          </motion.label>
                        ))}
                      </div>
                    </motion.div>

                    {/* Sort Options */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-sm font-medium text-gray-600 mb-3 flex items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 180 }}
                          transition={{ duration: 0.6 }}
                        >
                          <FaSort className="w-4 h-4 text-brand-teal" />
                        </motion.div>
                        Sort By
                      </h4>
                      <motion.select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <option value="latest">Latest First</option>
                        <option value="popular">Most Popular</option>
                        <option value="oldest">Oldest First</option>
                      </motion.select>
                    </motion.div>

                    {/* Results Count */}
                    <motion.div 
                      className="text-sm text-gray-500"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {totalPosts} articles found
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Articles Grid - 3 Column Layout */}
              <div className="flex-1">
                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -4,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <SafeLink href={`/blog/${post.slug || "default"}`} className="block h-full relative z-10 flex flex-col">
                        {/* Cover Image */}
                        {post.coverImage && (
                          <div className="relative h-48 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              loading={index < 6 ? "eager" : "lazy"}
                            />
                          </div>
                        )}
                        
                        <div className="p-5 sm:p-6 h-full flex flex-col flex-grow">
                          {/* Category Tag */}
                          <motion.div 
                            className="mb-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                          >
                            <motion.span 
                              className="inline-block bg-[#0fbab1]/10 text-[#0fbab1] text-xs font-semibold px-3 py-1 rounded-full border border-[#0fbab1]/20"
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 5px 15px rgba(15, 186, 177, 0.2)"
                              }}
                            >
                              {post.category || "Technology"}
                            </motion.span>
                          </motion.div>

                          {/* Title */}
                          <motion.h2 
                            className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0fbab1] transition-colors duration-300 line-clamp-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            {post.title}
                          </motion.h2>
                          
                          {/* Excerpt */}
                          <motion.p 
                            className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.4 }}
                          >
                            {post.excerpt}
                          </motion.p>

                          {/* Meta Information */}
                          <motion.div 
                            className="flex items-center justify-between text-xs text-gray-500 mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                          >
                            <div className="flex items-center gap-4">
                              <motion.div 
                                className="flex items-center gap-1.5"
                                whileHover={{ scale: 1.05 }}
                              >
                                <FaClock className="w-3 h-3 text-gray-400" />
                                <span>{calculateReadingTime(post.content || post.excerpt)} min read</span>
                              </motion.div>
                              <motion.div 
                                className="flex items-center gap-1.5"
                                whileHover={{ scale: 1.05 }}
                              >
                                <FaEye className="w-3 h-3 text-gray-400" />
                                <span>{post.views || Math.floor((post.slug?.length || 0) * 50) + 100} views</span>
                              </motion.div>
                            </div>
                            <span className="text-gray-400">{formatDate(post.date)}</span>
                          </motion.div>

                          {/* Read More Button */}
                          <motion.div 
                            className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                          >
                            <motion.span 
                              className="text-[#0fbab1] text-sm font-medium group-hover:text-[#00C4FF] transition-colors duration-300"
                            >
                              Read Article
                            </motion.span>
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaArrowRight className="w-4 h-4 text-[#0fbab1] group-hover:text-[#00C4FF] transition-colors duration-300" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </SafeLink>
                    </motion.article>
                  ))}
                </div>

                {/* Enhanced No Posts Message with Shimmer Placeholders */}
                {totalPosts === 0 && (
                  <motion.div 
                    className="py-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {/* Sample Cards Placeholder */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                      {[1, 2, 3].map((index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                          <ShimmerCard />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* No Results Message */}
                    <div className="text-center">
                      <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full blur-sm"></div>
                        <FaBookOpen className="w-12 h-12 text-[#00B894] relative z-10" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">No Articles Found</h3>
                      <p className="text-gray-300 mb-8 max-w-md mx-auto">
                        No articles match your current filter. Try adjusting your search criteria or explore our sample content above.
                      </p>
                      
                      <motion.button
                        onClick={() => {
                          setSelectedCategory("all");
                          setSearchQuery("");
                        }}
                        className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00B894]/20 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <FaBookOpen className="w-5 h-5" />
                          View All Articles
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00B894] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                 {/* Pagination Controls */}
                 {totalPosts > postsPerPage && (
                   <div className="mt-12 text-center">
                     <div className="flex items-center justify-center gap-4 mb-6">
                       <span className="text-sm text-gray-400">
                         Showing {startIndex + 1}-{Math.min(endIndex, totalPosts)} of {totalPosts} articles
                       </span>
                     </div>
                     
                     {currentPage < totalPages && (
                       <button
                         onClick={loadMore}
                         className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00B894]/20 flex items-center gap-2 mx-auto"
                       >
                         <span>Load More Articles</span>
                         <FaArrowRight className="w-4 h-4" />
                       </button>
                     )}
                     
                     {currentPage === totalPages && totalPosts > postsPerPage && (
                       <div className="text-sm text-gray-400">
                         You've reached the end of all articles
                       </div>
                     )}
                   </div>
                 )}
               </div>
             </div>
           </div>
         </section>

                 {/* Section 2: Newsletter - Light Gray Background for Contrast */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Enhanced Floating Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-brand-aqua/5 to-brand-teal/5 opacity-30"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          />
          
          {/* Floating Gradient Orbs */}
          <motion.div 
            className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-aqua to-brand-teal rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-brand-teal to-brand-aqua rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.1, 0.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Stay Ahead with{" "}
                <motion.span 
                  className="gradient-text"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  AI Insights
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Subscribe to our newsletter and get weekly AI insights, tech trends, and exclusive content delivered to your inbox.
              </motion.p>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card max-w-4xl mx-auto relative overflow-hidden py-6"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(0, 248, 180, 0.1)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-aqua/5 to-brand-teal/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                
                {/* Newsletter Input */}
                <motion.div 
                  className="max-w-md mx-auto mb-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex gap-3">
                    <motion.div
                      className="flex-1 relative"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-white border border-gray-300 rounded-xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-aqua focus:border-brand-aqua transition-all duration-300 relative z-10"
                        aria-label="Email address for newsletter"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-aqua/10 to-brand-teal/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300"
                        whileFocus={{ scale: 1.05 }}
                      />
                    </motion.div>
                    <motion.button 
                      className="bg-gradient-brand text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-brand-aqua/20 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 15px 30px rgba(0, 248, 180, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                      <span className="relative z-10">Subscribe</span>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Testimonial Quote */}
                <motion.div 
                  className="border-t border-gray-200 pt-8 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaStar className="text-2xl text-white relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto italic"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    "SyncOps insights help me stay ahead in tech. Their AI-powered recommendations are spot-on!"
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
                        whileHover={{ scale: 1.2 }}
                      />
                      <span className="text-white font-semibold text-sm relative z-10">SC</span>
                    </motion.div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-lg">Sarah Chen</div>
                      <div className="text-gray-600 text-sm">Senior Developer at TechCorp</div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
