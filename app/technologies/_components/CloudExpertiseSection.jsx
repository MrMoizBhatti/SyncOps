"use client";
import React, { useState } from "react";

const CloudExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState("multi-cloud");

  const cloudProviders = [
    {
      name: "Amazon Web Services",
      shortName: "AWS",
      description: "Leading cloud platform with comprehensive services for compute, storage, and AI",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      icon: "☁️",
      platforms: ["EC2", "Lambda", "S3", "RDS", "DynamoDB", "CloudFront"]
    },
    {
      name: "Microsoft Azure",
      shortName: "Azure",
      description: "Enterprise-grade cloud platform with seamless Microsoft integration",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      icon: "🔵",
      platforms: ["VM", "Functions", "Blob", "SQL", "CosmosDB", "CDN"]
    },
    {
      name: "Google Cloud Platform",
      shortName: "GCP",
      description: "Innovative cloud services with advanced AI and machine learning capabilities",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      icon: "🌐",
      platforms: ["Compute", "Cloud Functions", "Storage", "BigQuery", "Firestore", "Load Balancer"]
    }
  ];

  const tabs = [
    { id: "multi-cloud", label: "Multi-Cloud Architecture", icon: "☁️" },
    { id: "security", label: "Cloud Security", icon: "🔒" },
    { id: "operations", label: "Cloud Operations", icon: "⚙️" }
  ];

  const renderMultiCloud = () => (
    <div>
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white mb-6">
          Multi-Cloud Strategy
        </h3>
        <p className="text-gray-300 max-w-4xl mx-auto text-lg">
          We leverage multiple cloud providers to create flexible, cost-effective, and resilient solutions that avoid vendor lock-in and optimize performance for your specific needs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {cloudProviders.map((provider, index) => (
          <div
            key={index}
            className={`group ${provider.bgColor} ${provider.borderColor} rounded-3xl p-8 border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}
          >
            {/* Glowing effect */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${provider.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${provider.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-3xl shadow-lg`}>
                  {provider.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{provider.shortName}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{provider.description}</p>
              </div>
              
              <div className="space-y-4">
                <h5 className="font-semibold text-white text-sm">Key Services:</h5>
                <div className="flex flex-wrap gap-2">
                  {provider.platforms.map((platform, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${provider.color} text-white shadow-sm`}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-6">
        Cloud Security Excellence
      </h3>
      <p className="text-gray-300 max-w-4xl mx-auto mb-12 text-lg">
        Our comprehensive security approach ensures your cloud infrastructure is protected with enterprise-grade security measures and compliance standards.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Identity & Access", desc: "IAM, SSO, MFA, Role-based access", icon: "👤" },
          { title: "Network Security", desc: "VPC, Firewalls, DDoS protection", icon: "🛡️" },
          { title: "Data Protection", desc: "Encryption, Backup, Recovery", icon: "🔐" },
          { title: "Compliance", desc: "SOC2, GDPR, HIPAA, ISO 27001", icon: "📋" }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOperations = () => (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-6">
        Cloud Operations & DevOps
      </h3>
      <p className="text-gray-300 max-w-4xl mx-auto mb-12 text-lg">
        Streamlined operations with automated deployment, monitoring, and management across all cloud platforms for optimal performance and cost efficiency.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "CI/CD Pipelines", desc: "Automated deployment and testing", icon: "🔄" },
          { title: "Monitoring", desc: "Real-time insights and alerting", icon: "📊" },
          { title: "Auto-scaling", desc: "Dynamic resource allocation", icon: "⚡" },
          { title: "Cost Optimization", desc: "Resource management and optimization", icon: "💰" }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00C4FF] to-[#00F8B4] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 border border-[#00F8B4]/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#00F8B4]">Cloud Expertise</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cloud
            <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent"> Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Harness the power of multiple cloud platforms to create scalable, secure, and cost-effective solutions that drive your business forward.
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex shadow-lg border border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === tab.id
                    ? "bg-white text-[#00C4FF] shadow-lg transform scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === "multi-cloud" && renderMultiCloud()}
          {activeTab === "security" && renderSecurity()}
          {activeTab === "operations" && renderOperations()}
        </div>

        {/* Enhanced Bottom Info */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 relative overflow-hidden shadow-xl">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Multi-Cloud Benefits
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Our multi-cloud approach provides flexibility, cost optimization, and resilience while avoiding vendor lock-in and ensuring optimal performance for your applications.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
                  Vendor Independence
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
                  Cost Optimization
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full"></div>
                  High Availability
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
                  Global Reach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudExpertiseSection; 