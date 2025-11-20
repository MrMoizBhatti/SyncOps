"use client";
import React from "react";
import { FaServer, FaDatabase, FaShieldAlt, FaGlobe, FaCogs, FaChartLine, FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";

const CloudExpertise = () => {
  const cloudProviders = [
    {
      name: "Amazon Web Services",
      shortName: "AWS",
      icon: <FaAws className="w-12 h-12" />,
      description: "Comprehensive cloud computing platform with global infrastructure and advanced services",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      services: ["EC2", "Lambda", "S3", "RDS", "CloudFront", "ECS"]
    },
    {
      name: "Microsoft Azure",
      shortName: "Azure",
      icon: <FaMicrosoft className="w-12 h-12" />,
      description: "Microsoft's cloud platform for building, testing, and deploying applications with enterprise integration",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20",
      services: ["VM", "Functions", "Blob Storage", "CosmosDB", "CDN", "AKS"]
    },
    {
      name: "Google Cloud Platform",
      shortName: "GCP",
      icon: <FaGoogle className="w-12 h-12" />,
      description: "Google's cloud platform with advanced AI and machine learning capabilities",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      services: ["Compute Engine", "Cloud Functions", "Cloud Storage", "Firestore", "Cloud CDN", "GKE"]
    }
  ];

  const features = [
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Multi-Cloud Architecture",
      description: "Distributed workloads across multiple cloud providers for optimal performance and reliability"
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "Managed Services",
      description: "Leverage fully managed database, storage, and compute services for reduced operational overhead"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Advanced security features including encryption, IAM, and compliance certifications"
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Global Infrastructure",
      description: "Worldwide data centers ensuring low latency and high availability for global applications"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 border border-[#00F8B4]/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#00F8B4]">Cloud Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Multi-Cloud Excellence
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Harness the power of multiple cloud providers to create resilient, scalable, and cost-effective solutions that drive your business forward.
          </p>
        </div>

        {/* Cloud Provider Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cloudProviders.map((provider, index) => (
            <div
              key={index}
              className={`group ${provider.bgColor} ${provider.borderColor} rounded-2xl p-8 border backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden`}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${provider.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-${provider.color.split('-')[1]}-500 group-hover:scale-110 transition-transform duration-300`}>
                    {provider.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{provider.shortName}</h3>
                    <p className="text-gray-400 text-sm">{provider.name}</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {provider.description}
                </p>
                
                {/* Services Badges */}
                <div className="flex flex-wrap gap-2">
                  {provider.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors duration-300`}
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-[#00F8B4] transition-colors duration-300">
                {feature.title}
              </h4>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudExpertise; 