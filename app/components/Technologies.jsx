"use client";

import React, { useState } from "react";

const techTabs = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React", icon: "/images/tech/react.svg", tag: "Frontend" },
      { name: "Next.js", icon: "/images/tech/nextjs.svg", tag: "Frontend" },
      { name: "TypeScript", icon: "/images/tech/typescript.svg", tag: "Frontend" },
      { name: "Vue.js", icon: "/images/tech/vue.svg", tag: "Frontend" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "/images/tech/nodejs.svg", tag: "Backend" },
      { name: ".NET", icon: "/images/tech/dotnet.svg", tag: "Backend" },
      { name: "Express", icon: "/images/tech/express.svg", tag: "Backend" },
      { name: "Django", icon: "/images/tech/django.svg", tag: "Backend" },
    ],
  },
  {
    key: "ai",
    label: "AI/ML",
    items: [
      { name: "Python", icon: "/images/tech/python.svg", tag: "AI/ML" },
      { name: "TensorFlow", icon: "/images/tech/tensorflow.svg", tag: "AI/ML" },
      { name: "PyTorch", icon: "/images/tech/pytorch.svg", tag: "AI/ML" },
      { name: "OpenCV", icon: "/images/tech/opencv.svg", tag: "AI/ML" },
    ],
  },
  {
    key: "devops",
    label: "DevOps",
    items: [
      { name: "Docker", icon: "/images/tech/docker.svg", tag: "DevOps" },
      { name: "Kubernetes", icon: "/images/tech/kubernetes.svg", tag: "DevOps" },
      { name: "GitHub Actions", icon: "/images/tech/githubactions.svg", tag: "DevOps" },
      { name: "Jenkins", icon: "/images/tech/jenkins.svg", tag: "DevOps" },
    ],
  },
  {
    key: "database",
    label: "Database",
    items: [
      { name: "MongoDB", icon: "/images/tech/mongodb.svg", tag: "Database" },
      { name: "PostgreSQL", icon: "/images/tech/postgresql.svg", tag: "Database" },
      { name: "MySQL", icon: "/images/tech/mysql.svg", tag: "Database" },
      { name: "Redis", icon: "/images/tech/redis.svg", tag: "Database" },
    ],
  },
  {
    key: "cloud",
    label: "Cloud",
    items: [
      { name: "AWS", icon: "/images/tech/aws.svg", tag: "Cloud" },
      { name: "Azure", icon: "/images/tech/azure.svg", tag: "Cloud" },
      { name: "GCP", icon: "/images/tech/gcp.svg", tag: "Cloud" },
    ],
  },
  {
    key: "api",
    label: "API",
    items: [
      { name: "GraphQL", icon: "/images/tech/graphql.svg", tag: "API" },
      { name: "REST", icon: "/images/tech/rest.svg", tag: "API" },
      { name: "gRPC", icon: "/images/tech/grpc.svg", tag: "API" },
    ],
  },
];

function TechCard({ name, icon, tag }) {
  return (
    <div
      className="bg-white rounded-xl shadow-md text-center p-4 transition hover:scale-105 hover:shadow-xl group cursor-pointer relative"
      tabIndex={0}
      aria-label={name}
    >
      <div className="flex justify-center items-center h-12">
        <img
          src={icon}
          alt={name}
          className="h-10 w-10 object-contain mx-auto"
          loading="lazy"
        />
      </div>
      <div className="font-semibold text-gray-800 mt-2">{name}</div>
      {tag && (
        <div className="text-sm text-teal-500 mt-1 font-medium">{tag}</div>
      )}
    </div>
  );
}

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(techTabs[0].key);
  const activeTabObj = techTabs.find((tab) => tab.key === activeTab);

  return (
    <section className="w-full bg-white py-20 px-4 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          Technologies We Use
        </h2>
        <div className="text-gray-600 text-center mt-2">
          Cutting-edge tech stack for modern, scalable solutions
        </div>
        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mt-6 mb-10"
          role="tablist"
          aria-label="Technology categories"
        >
          {techTabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`tabpanel-${tab.key}`}
              id={`tab-${tab.key}`}
              tabIndex={activeTab === tab.key ? 0 : -1}
              className={
                activeTab === tab.key
                  ? "bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold shadow"
                  : "bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
              }
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Content Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          data-aos="fade-up"
        >
          {activeTabObj.items.map((item) => (
            <TechCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
} 