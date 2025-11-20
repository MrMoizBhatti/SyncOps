"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Info } from "lucide-react";

const cloudFeatures = [
  {
    title: "Multi-Cloud Architecture",
    description: "Leverage the best of all cloud providers with our expertise.",
    longDescription:
      "Our multi-cloud architecture allows you to harness the unique strengths of each cloud provider, ensuring optimal performance, cost-efficiency, and reliability for your applications.",
    platforms: [
      {
        name: "AWS",
        services: ["EC2", "S3", "Lambda", "RDS"],
        description:
          "Amazon Web Services offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications.",
      },
      {
        name: "Azure",
        services: ["VM", "Blob Storage", "Functions", "CosmosDB"],
        description:
          "Microsoft Azure is a cloud computing service for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
      },
      {
        name: "Google Cloud",
        services: [
          "Compute Engine",
          "Cloud Storage",
          "Cloud Functions",
          "BigQuery",
        ],
        description:
          "Google Cloud Platform provides a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube.",
      },
    ],
  },
  {
    title: "Cloud Security",
    description:
      "Protect your data and applications with our comprehensive security measures.",
    longDescription:
      "Our cloud security solutions provide robust protection for your data and applications, ensuring compliance with industry standards and regulations while maintaining the flexibility and scalability of cloud environments.",
    features: [
      {
        name: "Identity and Access Management",
        description:
          "Implement fine-grained access controls and multi-factor authentication to secure your cloud resources.",
      },
      {
        name: "Data Encryption",
        description:
          "Protect your data at rest and in transit with state-of-the-art encryption technologies.",
      },
      {
        name: "Network Security",
        description:
          "Secure your cloud network with firewalls, intrusion detection, and virtual private networks.",
      },
      {
        name: "Compliance Management",
        description:
          "Meet regulatory requirements with our compliance management tools and best practices.",
      },
    ],
  },
  {
    title: "Cloud Operations",
    description:
      "Optimize your cloud infrastructure with our advanced operational tools and practices.",
    longDescription:
      "Our cloud operations services help you streamline your workflows, automate deployments, monitor performance, and optimize costs, ensuring your cloud infrastructure runs smoothly and efficiently.",
    features: [
      {
        name: "Infrastructure as Code",
        description:
          "Manage and provision your cloud resources using code, improving consistency and reducing errors.",
      },
      {
        name: "Automated Deployments",
        description:
          "Implement CI/CD pipelines for faster, more reliable application deployments.",
      },
      {
        name: "Performance Monitoring",
        description:
          "Gain real-time insights into your application and infrastructure performance.",
      },
      {
        name: "Cost Optimization",
        description:
          "Identify cost-saving opportunities and implement best practices for cloud resource management.",
      },
    ],
  },
];

const CloudTech = () => {
  const [activeTab, setActiveTab] = useState("multi-cloud-architecture");

  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#042638] mb-6 text-center">
            Cloud Expertise
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto text-balance leading-relaxed">
            Harness the power of the cloud with our comprehensive suite of
            services and expertise across multiple platforms.
          </p>

          <div className="mb-8">
            <div className="flex border-b border-gray-200">
              {cloudFeatures.map((feature) => (
                <button
                  key={feature.title.toLowerCase().replace(" ", "-")}
                  className={`px-4 py-2 font-bold text-sm sm:text-lg focus:outline-none ${
                    activeTab === feature.title.toLowerCase().replace(" ", "-")
                      ? "text-[#0fbab1] border-b-2 border-[#0fbab1]"
                      : "text-gray-700 hover:text-gray-700"
                  }`}
                  onClick={() =>
                    setActiveTab(feature.title.toLowerCase().replace(" ", "-"))
                  }
                >
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          {cloudFeatures.map((feature) => (
            <div
              key={feature.title.toLowerCase().replace(" ", "-")}
              className={`bg-white rounded-lg shadow-lg p-6 mb-8 ${
                activeTab === feature.title.toLowerCase().replace(" ", "-")
                  ? "block"
                  : "hidden"
              }`}
            >
              <h3 className="text-2xl font-semibold text-[#042638] mb-4">
                {feature.title}
              </h3>
              <p className="mb-6 text-gray-600 max-w-4xl">
                {feature.longDescription}
              </p>
              {feature.platforms ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {feature.platforms.map((platform, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0fbab1] bg-opacity-10 rounded-lg p-4"
                    >
                      <h4 className="text-lg font-semibold text-[#042638] mb-2">
                        {platform.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {platform.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {platform.services.map((service, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-[#0fbab1] bg-opacity-20 text-[#042638] px-2 py-1 rounded-full text-xs"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-4">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#0fbab1] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#042638]">
                          {item.name}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 bg-[#0fbab1] bg-opacity-10 rounded-lg p-6"
          >
            <div className="flex items-start space-x-4">
              <Info className="w-6 h-6 text-[#0fbab1] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#042638] mb-2">
                  Why Choose Our Cloud Expertise?
                </h3>
                <p className="text-gray-600">
                  Our team of certified cloud experts brings years of experience
                  in designing, implementing, and managing complex cloud
                  solutions. We stay at the forefront of cloud technology,
                  ensuring that your business benefits from the latest
                  innovations and best practices in the industry.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudTech;
