"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Server,
  Shield,
  Smartphone,
  Brain,
  Layers,
} from "lucide-react";
import SafeLink from "../../components/ui/SafeLink";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Innovative AI-driven solutions that automate processes, enhance user experiences, and provide predictive insights.",
    slug: "ai-solutions",
  },

  {
    icon: Smartphone,
    title: "Custom Software Development",
    description:
      "Tailored software solutions that meet unique business requirements, improving efficiency and scalability.",
    slug: "custom-software-development",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications tailored to your unique business needs.",
    slug: "web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Engage your audience with intuitive and powerful mobile applications.",
    slug: "mobile-app-development",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights for informed decision-making.",
    slug: "data-analytics",
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to power your digital operations.",
    slug: "cloud-computing",
  },
  {
    icon: Server,
    title: "DevOps",
    description:
      "Streamline your development and operations for faster, more reliable deployments.",
    slug: "devops-and-automation",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive security solutions.",
    slug: "cybersecurity",
  },

  {
    icon: Layers,
    title: "Blockchain Solutions",
    description:
      "Secure and transparent blockchain solutions, including smart contracts and decentralized applications.",
    slug: "blockchain-solutions",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0fbab1] to-white opacity-5" /> */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0fbab1] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-[#042638]">
            Services We Provide
          </h2>
          <p className="text-xl text-gray-700 mb-10 text-center max-w-3xl mx-auto text-balance leading-relaxed">
            At SyncOps, we are dedicated to delivering top-notch solutions that
            empower businesses to thrive in the digital landscape. Explore our
            wide range of services designed to meet your specific needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <SafeLink href={`/services/${service.slug || "default"}`} className="h-full" key={index}>
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:bg-[rgba(0,196,255,0.08)] hover:shadow-xl"
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient top border */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] absolute top-0 left-0 rounded-t-lg" />
                    {/* Icon with gradient background and white overlay for glow */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] shadow-md relative">
                      <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                      <div className="absolute inset-0 rounded-full bg-white opacity-10 pointer-events-none" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#042638]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {service.description}
                    </p>
                  </motion.div>
                </SafeLink>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
