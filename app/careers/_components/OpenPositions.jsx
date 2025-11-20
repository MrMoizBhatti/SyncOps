"use client";
import React, { useState } from "react";
import SafeLink from "../../components/ui/SafeLink";

const OpenPositions = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const positions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      description: "Lead cutting-edge AI projects and develop intelligent systems that shape the future of software development.",
      tags: ["AI/ML", "Python", "TensorFlow", "Remote"],
      featured: true
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      description: "Build beautiful, responsive user interfaces using modern technologies like React, Next.js, and TypeScript.",
      tags: ["React", "TypeScript", "Next.js", "Remote"],
      featured: false
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      type: "Full-time",
      location: "On-site",
      experience: "4+ years",
      description: "Create intuitive user experiences and beautiful interfaces for our AI-powered software solutions.",
      tags: ["UI/UX", "Figma", "Design Systems", "On-site"],
      featured: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      description: "Build and maintain scalable infrastructure and deployment pipelines for our cloud-based applications.",
      tags: ["AWS", "Docker", "Kubernetes", "Remote"],
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      description: "Analyze complex data sets and develop machine learning models to drive business insights and decisions.",
      tags: ["Python", "SQL", "Machine Learning", "Remote"],
      featured: false
    },
    {
      id: 6,
      title: "Marketing Manager",
      department: "Marketing",
      type: "Full-time",
      location: "On-site",
      experience: "5+ years",
      description: "Develop and execute marketing strategies to promote our AI-powered solutions and grow our brand presence.",
      tags: ["Digital Marketing", "Content Strategy", "Analytics", "On-site"],
      featured: false
    }
  ];

  const filters = ["All", "Engineering", "Design", "Data", "Marketing", "Remote", "On-site"];

  const filteredPositions = activeFilter === "All" 
    ? positions 
    : positions.filter(position => 
        position.department === activeFilter || 
        position.location === activeFilter
      );

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Open Positions
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Join our team and help us build the future of AI-powered software solutions.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === filter
                ? "bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-[#0B0A1C] shadow-lg shadow-[#00F8B4]/25"
                : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Positions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredPositions.map((position) => (
          <div
            key={position.id}
            className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00F8B4]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,248,180,0.15)] relative overflow-hidden ${
              position.featured ? 'ring-2 ring-[#00F8B4]/50' : ''
            }`}
          >
            {/* Featured Badge */}
            {position.featured && (
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-[#0B0A1C] px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 Featured
                </span>
              </div>
            )}

            {/* Position Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00F8B4] transition-colors duration-300">
                {position.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {position.description}
              </p>
            </div>

            {/* Position Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#00F8B4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>{position.department}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>{position.type}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#00F8B4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                <span>{position.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#00C4FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>{position.experience}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {position.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Apply Button */}
            <SafeLink href="#contact">
              <button className="group w-full bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-[#0B0A1C] font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_30px_rgba(0,248,180,0.5)] transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Apply Now
                </span>
              </button>
            </SafeLink>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredPositions.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-[#00F8B4]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
          <p className="text-gray-300">Try adjusting your filters or check back later for new opportunities.</p>
        </div>
      )}
    </div>
  );
};

export default OpenPositions;
