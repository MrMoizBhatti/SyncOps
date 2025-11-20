"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Heart, Zap, Users, Gamepad, Book } from "lucide-react";

const WhyJoinUs = () => {
  const reasons = [
    {
      icon: Briefcase,
      title: "Challenging Projects",
      description:
        "Work on cutting-edge enterprise software solutions that push the boundaries of technology. Collaborate with talented engineers to solve complex problems and deliver high-impact projects for our clients.",
    },
    {
      icon: Heart,
      title: "Inclusive Culture",
      description:
        "Join a diverse and tight-knit team that celebrates each other's unique backgrounds and perspectives. We foster a collaborative work environment built on trust, respect, and open communication where everyone can thrive.",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description:
        "Accelerate your career through continuous learning opportunities, mentorship programs, and exposure to the latest technologies and industry best practices. Our commitment to your development means you'll always have the support to reach your full potential.",
    },
    {
      icon: Users,
      title: "Team Building Activities",
      description:
        "Engage in regular team-building events, sports competitions, and social outings to bond with your colleagues. From friendly tennis matches to table tennis tournaments, we believe in creating a fun and energetic work environment.",
    },
    {
      icon: Gamepad,
      title: "On-Site Sports Facilities",
      description:
        "Stay active and healthy with our on-site sports facilities, including a tennis court and a table tennis table. Take breaks throughout the day to challenge your colleagues to friendly competitions and tournaments.",
    },
    {
      icon: Book,
      title: "Continuous Learning",
      description:
        "We invest in your growth with access to courses, certifications, and training programs, ensuring you stay ahead in your career and the evolving tech landscape.",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#0fbab1] rounded-full filter blur-3xl opacity-10"
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
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#042638] mb-6">
          Why Join SyncOps?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <reason.icon className="w-12 h-12 text-[#0fbab1] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#042638]">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
