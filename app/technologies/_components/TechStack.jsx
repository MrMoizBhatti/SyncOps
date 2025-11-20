"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "devicon/devicon.min.css";
import { CheckCircle, Info } from "lucide-react";

const techStacks = {
  frontend: [
    {
      name: "React",
      icon: "devicon-react-original",
      description:
        "Building dynamic and responsive user interfaces with modern React and its ecosystem",
    },
    {
      name: "Next.js",
      icon: "devicon-nextjs-plain",
      description:
        "Leveraging server-side rendering and static generation for optimal performance",
    },
    {
      name: "Angular",
      icon: "devicon-angularjs-plain",
      description:
        "Building scalable and maintainable web applications with Angular",
    },
    {
      name: "Vue.js",
      icon: "devicon-vuejs-plain",
      description:
        "Developing versatile and performant user interfaces with Vue.js",
    },
    {
      name: "React Native",
      icon: "devicon-react-plain",
      description:
        "Building cross-platform mobile applications with React Native",
    },
    {
      name: "Knockout.js",
      icon: "devicon-knockout-plain-wordmark",
      description:
        "Simplifying dynamic JavaScript UIs by applying the MVVM pattern",
    },
    {
      name: "jQuery",
      icon: "devicon-jquery-plain",
      description:
        "Simplifying HTML document traversal and manipulation with jQuery",
    },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      description:
        "Ensuring type safety and enhanced developer experience in large-scale applications",
    },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      description:
        "Creating beautiful, responsive designs with utility-first CSS framework",
    },
  ],
  backend: [
    {
      name: "Python",
      icon: "devicon-python-plain",
      description:
        "Building robust backends and data processing pipelines with Python",
    },
    {
      name: ".NET",
      icon: "devicon-dotnetcore-plain",
      description:
        "Building scalable and high-performance applications with .NET framework",
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain",
      description:
        "Developing scalable server-side applications with event-driven architecture",
    },
    {
      name: "Java",
      icon: "devicon-java-plain",
      description:
        "Creating enterprise-grade applications with strong type safety and performance",
    },
    {
      name: "Go",
      icon: "devicon-go-plain",
      description:
        "Implementing high-performance microservices and concurrent systems",
    },
    {
      name: "Ruby on Rails",
      icon: "devicon-rails-plain",
      description:
        "Building full-stack web applications rapidly with convention over configuration",
    },
    {
      name: "PHP",
      icon: "devicon-php-plain",
      description:
        "Creating dynamic and interactive server-side applications with PHP",
    },
    {
      name: "Elixir",
      icon: "devicon-elixir-plain",
      description:
        "Building scalable and maintainable applications with a focus on concurrency",
    },
    {
      name: "Rust",
      icon: "devicon-rust-plain",
      description:
        "Creating high-performance and memory-safe applications with Rust",
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "devicon-mysql-plain",
      description:
        "Providing a reliable and scalable relational database management system",
    },
    {
      name: "MSSQL",
      icon: "devicon-microsoftsqlserver-plain",
      description:
        "Enabling robust and secure relational database management with SQL Server",
    },
    {
      name: "PostgreSQL",
      icon: "devicon-postgresql-plain",
      description:
        "Managing complex relational data with advanced SQL features",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
      description: "Handling flexible, schema-less data with high scalability",
    },
    {
      name: "Redis",
      icon: "devicon-redis-plain",
      description:
        "Implementing high-speed caching and real-time data structures",
    },
    {
      name: "Oracle",
      icon: "devicon-oracle-plain",
      description:
        "Delivering enterprise-grade database solutions with advanced features",
    },
    {
      name: "DynamoDB",
      icon: "devicon-amazonwebservices-plain",
      description:
        "Offering a fully managed NoSQL database service with seamless scalability",
    },
    {
      name: "SQLite",
      icon: "devicon-sqlite-plain",
      description:
        "Providing a lightweight, disk-based database that doesn’t require a separate server process",
    },
    {
      name: "Cassandra",
      icon: "devicon-cassandra-plain",
      description:
        "Handling large amounts of data across many commodity servers with no single point of failure",
    },
  ],
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="py-16 bg-white relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#042638] mb-6 text-center">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed text-balance">
            Explore our comprehensive suite of technologies that power modern
            software solutions.
          </p>

          <div className="mb-8">
            <div className="flex border-b border-gray-200 justify-center">
              {Object.keys(techStacks).map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 font-bold text-sm sm:text-lg focus:outline-none ${
                    activeTab === category
                      ? "text-[#0fbab1] border-b-2 border-[#0fbab1]"
                      : "text-gray-700 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {Object.entries(techStacks).map(([category, technologies]) => (
            <div
              key={category}
              className={`bg-white rounded-lg shadow-lg p-6 mb-8 ${
                activeTab === category ? "block" : "hidden"
              }`}
            >
              <h3 className="text-2xl font-semibold text-[#042638] mb-6 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group hover:bg-[#0fbab1] hover:bg-opacity-10 p-4 rounded-lg transition-colors"
                  >
                    <div className="flex items-center mb-2">
                      <span
                        className={`${tech.icon} text-3xl text-[#0fbab1] mr-4`}
                      />
                      <span className="font-semibold text-[#042638] text-lg">
                        {tech.name}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </div>
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
                  Why Choose Our Tech Stack?
                </h3>
                <p className="text-gray-600">
                  Our carefully curated technology stack represents the
                  best-in-class tools and frameworks in the industry. We
                  leverage these technologies to build robust, scalable, and
                  efficient solutions that meet the unique needs of our clients.
                  Our expertise across this diverse range of technologies allows
                  us to choose the right tools for each project, ensuring
                  optimal performance, maintainability, and future-readiness.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
