"use client";
import React, { useState, useEffect } from "react";

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  resume: "",
  coverLetter: "",
};

const OpenPositions = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isDrawerOpen]);

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setFormData(initialFormState);
    setFormMessage("");
    setIsDrawerOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setFormMessage("Your application has been submitted. Our team will reach out soon!");
      setFormData(initialFormState);
    }, 1200);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedPosition(null);
    setFormMessage("");
  };

  return (
    <div id="open-positions" className="max-w-7xl mx-auto px-6 lg:px-8">
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
                ? "bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-[#0B0A1C] shadow-lg shadow-[#00B894]/25"
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
            className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00B894]/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,184,148,0.15)] relative overflow-hidden ${
              position.featured ? 'ring-2 ring-[#00B894]/50' : ''
            }`}
          >
            {/* Featured Badge */}
            {position.featured && (
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-[#0B0A1C] px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 Featured
                </span>
              </div>
            )}

            {/* Position Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00B894] transition-colors duration-300">
                {position.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {position.description}
              </p>
            </div>

            {/* Position Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-4 h-4 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
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
            <button
              onClick={() => handleApplyClick(position)}
              className="group w-full bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-6 py-3 rounded-lg hover:shadow-[0_0_30px_rgba(0,184,148,0.5)] transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Apply Now
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredPositions.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
          <p className="text-gray-300">Try adjusting your filters or check back later for new opportunities.</p>
        </div>
      )}

      {/* Application Drawer */}
      {isDrawerOpen && selectedPosition && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/60 backdrop-blur-sm"
            onClick={closeDrawer}
          ></div>
          <div className="w-full max-w-xl h-full bg-gradient-to-b from-white via-gray-50 to-white shadow-[0_10px_50px_rgba(0,0,0,0.25)] border-l border-gray-200 flex flex-col">
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-200 px-6 py-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Apply for
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedPosition.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedPosition.location} · {selectedPosition.type} ·{" "}
                  {selectedPosition.experience}
                </p>
              </div>
              <button
                onClick={closeDrawer}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close application drawer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <p className="text-gray-600 mb-6">
                Tell us a little about yourself and why you'd be a great fit for{" "}
                <span className="font-semibold text-gray-900">
                  {selectedPosition.title}
                </span>
                . We'll follow up with next steps shortly.
              </p>

              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00B894]/30 focus:border-[#00B894]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00B894]/30 focus:border-[#00B894]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00B894]/30 focus:border-[#00B894]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleFormChange}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00B894]/30 focus:border-[#00B894]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Portfolio / GitHub
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleFormChange}
                      placeholder="https://github.com/username"
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00B894]/30 focus:border-[#00B894]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume / CV (URL)
                  </label>
                  <input
                    type="url"
                    name="resume"
                    value={formData.resume}
                    onChange={handleFormChange}
                    placeholder="Link to your resume"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00B894]/30 focus:border-[#00B894]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter / Notes
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00B894]/30 focus:border-[#00B894]"
                    placeholder={`Tell us why you'd be a great ${selectedPosition.title}`}
                  ></textarea>
                </div>

                {formMessage && (
                  <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm border border-green-200">
                    {formMessage}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={closeDrawer}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3.5-3.5L12 1v4a7 7 0 107 7h4a11 11 0 11-11-11v4l-3.5-3.5L12 1v4a8 8 0 00-8 8z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenPositions;
