"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const demoCards = [
  {
    id: 1,
    type: "Case Study",
    title: "AI-Powered Automation for FinTech",
    image: "/images/case1.jpg",
    description: "How SyncOps helped a FinTech company automate workflows and reduce costs by 40%.",
    link: "#",
  },
  {
    id: 2,
    type: "Blog",
    title: "The Future of SaaS: Trends for 2024",
    image: "/images/blog1.jpg",
    description: "Key SaaS trends and how SyncOps is leading the way in innovation.",
    link: "#",
  },
  {
    id: 3,
    type: "Case Study",
    title: "Scaling E-Commerce with Cloud Solutions",
    image: "/images/case2.jpg",
    description: "A retail transformation story: from legacy to cloud-native with SyncOps.",
    link: "#",
  },
  {
    id: 4,
    type: "Blog",
    title: "Why UI/UX Matters in Enterprise Apps",
    image: "/images/blog2.jpg",
    description: "Design principles that drive engagement and retention.",
    link: "#",
  },
  {
    id: 5,
    type: "Case Study",
    title: "Healthcare Data Security at Scale",
    image: "/images/case3.jpg",
    description: "SyncOps delivers HIPAA-compliant, scalable data solutions for healthcare.",
    link: "#",
  },
  {
    id: 6,
    type: "Blog",
    title: "Building Resilient Cloud Architectures",
    image: "/images/blog3.jpg",
    description: "Best practices for uptime, security, and cost optimization.",
    link: "#",
  },
];

export default function FeaturedInsights() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#e9fefb] py-20 px-4 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left Column: Text Block */}
        <div className="flex flex-col justify-center max-w-md w-full mx-auto md:mx-0">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Stories of our <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-transparent bg-clip-text">transformations</span> across Services and Industries
          </h2>
          <div className="text-teal-500 font-semibold text-lg mt-2">From Concept to Completion</div>
          <p className="text-gray-600 mt-4 leading-relaxed text-base">
            Explore how SyncOps partners with clients to deliver real-world impact, from initial idea to successful launch and beyond.
          </p>
          <a
            href="#"
            className="mt-6 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 font-semibold shadow-md hover:scale-105 transition w-max focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Explore More Stories"
          >
            Explore More &rarr;
          </a>
        </div>
        {/* Right Column: Card Grid */}
        <div className="w-full flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {demoCards.map((card) => (
              <a
                key={card.id}
                href={card.link || "#"}
                className="relative bg-cover bg-center h-[260px] rounded-xl overflow-hidden shadow-md group focus:outline-none focus:ring-2 focus:ring-teal-400 hover:scale-[1.02] transition-transform duration-300 flex"
                style={{ backgroundImage: `url(${card.image})` }}
                tabIndex={0}
                aria-label={`Read more about ${card.title}`}
                data-aos="fade-up"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition z-0" />
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-teal-500 text-white text-xs px-2 py-1 rounded-full z-10">
                  {card.type}
                </span>
                {/* Title */}
                <div className="absolute bottom-14 left-4 right-4 text-white font-bold text-lg leading-snug line-clamp-2 z-10">
                  {card.title}
                </div>
                {/* Description */}
                <div className="absolute bottom-10 left-4 right-4 text-white/90 text-sm line-clamp-2 z-10 hidden sm:block">
                  {card.description}
                </div>
                {/* CTA */}
                <span className="absolute bottom-4 left-4 text-teal-300 font-medium text-sm hover:underline z-10">
                  Read More &rarr;
                </span>
                {/* Fallback: If image fails, show a placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 z-0 opacity-0 group-hover:opacity-10 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 