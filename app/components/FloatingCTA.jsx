"use client";
import React, { useState, useEffect } from "react";
import { X, Phone, Mail, User, Building, Globe, DollarSign, MapPin } from "lucide-react";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    companyName: "",
    companyUrl: "",
    region: "",
    services: []
  });

  const budgetOptions = [
    { value: "", label: "Select Budget Range" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k+", label: "$100,000+" }
  ];

  const regionOptions = [
    { value: "", label: "Select Region" },
    { value: "north-america", label: "North America" },
    { value: "europe", label: "Europe" },
    { value: "asia-pacific", label: "Asia Pacific" },
    { value: "middle-east", label: "Middle East" },
    { value: "africa", label: "Africa" },
    { value: "latin-america", label: "Latin America" }
  ];

  const serviceOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
    { value: "ai-ml", label: "AI & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "devops", label: "DevOps & CI/CD" },
    { value: "consulting", label: "IT Consulting" },
    { value: "custom-software", label: "Custom Software" }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox changes for services
  const handleServiceChange = (serviceValue) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter(s => s !== serviceValue)
        : [...prev.services, serviceValue]
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your interest! We'll get back to you soon.");
    setIsOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      budget: "",
      companyName: "",
      companyUrl: "",
      region: "",
      services: []
    });
  };

  // Close panel on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating CTA Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-1/3 right-0 z-[9999] w-[56px] h-[160px] bg-gradient-to-b from-teal-400 to-cyan-500 rounded-l-xl shadow-lg cursor-pointer hover:brightness-110 transition duration-300 ease-in-out flex items-center justify-center"
          aria-label="Open Contact Form"
          style={{ transform: 'translateZ(0)' }}
        >
          <span className="block rotate-90 text-white font-semibold text-sm tracking-wide whitespace-nowrap pointer-events-none select-none">
            Let&apos;s Talk Business
          </span>
        </button>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-xl border-l border-gray-200 z-50 transform transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="relative p-6 pt-4 border-b border-gray-200">
            <h2 className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text text-2xl font-bold">
              Let's Talk Business
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-4 text-gray-500 hover:text-gray-800 cursor-pointer transition-colors duration-200"
              aria-label="Close panel"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 p-6 pt-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter first name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter email address"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">We'll never share your contact info.</p>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              {/* Company URL */}
              <div>
                <label htmlFor="companyUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="url"
                    id="companyUrl"
                    name="companyUrl"
                    value={formData.companyUrl}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Region */}
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    {regionOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Services You're Looking For
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map(service => (
                    <label key={service.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={service.value}
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleServiceChange(service.value)}
                        className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold px-6 py-2 rounded-lg hover:brightness-110 transition-all duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA; 