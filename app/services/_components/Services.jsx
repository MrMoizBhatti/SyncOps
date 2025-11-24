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
    tags: ["GenAI", "Automation"],
  },

  {
    icon: Smartphone,
    title: "Custom Software Development",
    description:
      "Tailored software solutions that meet unique business requirements, improving efficiency and scalability.",
    slug: "custom-software-development",
    tags: ["Product Strategy", "SaaS"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications tailored to your unique business needs.",
    slug: "web-development",
    tags: ["Next.js", "Headless CMS"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Engage your audience with intuitive and powerful mobile applications.",
    slug: "mobile-app-development",
    tags: ["iOS", "Android"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights for informed decision-making.",
    slug: "data-analytics",
    tags: ["BI Dashboards", "Data Lakes"],
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to power your digital operations.",
    slug: "cloud-computing",
    tags: ["AWS", "Azure"],
  },
  {
    icon: Server,
    title: "DevOps",
    description:
      "Streamline your development and operations for faster, more reliable deployments.",
    slug: "devops-and-automation",
    tags: ["CI/CD", "Observability"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your digital assets with our comprehensive security solutions.",
    slug: "cybersecurity",
    tags: ["Threat Modeling", "Compliance"],
  },

  {
    icon: Layers,
    title: "Blockchain Solutions",
    description:
      "Secure and transparent blockchain solutions, including smart contracts and decentralized applications.",
    slug: "blockchain-solutions",
    tags: ["Smart Contracts", "DeFi"],
  },
];

const serviceStats = [
  { label: "Engagements", value: "500+" },
  { label: "Industries Served", value: "15" },
  { label: "Specialists", value: "120+" },
  { label: "Avg. NPS", value: "9.6/10" },
];

const Services = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-[#F5FFFD] to-white overflow-hidden">
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 bg-[#00C4FF]/15 blur-3xl rounded-full"
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-24 w-96 h-96 bg-[#00F8B4]/15 blur-3xl rounded-full"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F8B4]/10 border border-[#00F8B4]/30 text-sm font-semibold text-[#00A18F] mb-6">
            <span className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse" />
            Comprehensive Service Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#031728] mb-4">
            Services We Provide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From rapid prototyping to enterprise modernization, we assemble cross-functional teams who understand your goals and ship measurable impact at every stage.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {["Product Strategy", "Experience Design", "Full-Stack Engineering", "Cloud & DevOps"].map((label) => (
              <span
                key={label}
                className="px-4 py-1.5 text-sm rounded-full border border-gray-200 bg-white/70 text-gray-600"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <SafeLink href={`/services/${service.slug || "default"}`} key={index} className="h-full">
                <motion.div
                  className="relative h-full rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_30px_60px_rgba(10,37,64,0.08)] p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00F8B4]/0 via-[#00C4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00F8B4] to-[#00C4FF] flex items-center justify-center text-white shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold tracking-[0.3em] text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#031728] mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags?.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-[#F1FFFE] text-[#00A8E8] border border-[#00C4FF]/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-[#00A8E8] text-sm font-semibold">
                      Discover more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </SafeLink>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceStats.map((stat) => (
            <div key={stat.label} className="text-center bg-white/70 border border-white/60 rounded-2xl py-6 shadow-sm">
              <div className="text-3xl font-bold text-[#00A8E8] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
