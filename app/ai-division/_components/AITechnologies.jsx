"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Brain, Zap, TrendingUp, MessageSquare, Eye, Database, Cloud, Settings, Sparkles } from 'lucide-react';

const technologies = [
  {
    category: "Machine Learning Frameworks",
    icon: Brain,
    color: "from-brand-aqua to-brand-teal",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "MLflow"]
  },
  {
    category: "Deep Learning",
    icon: Zap,
    color: "from-brand-teal to-brand-aqua",
    items: ["Neural Networks", "CNNs", "RNNs", "Transformers", "GANs"]
  },
  {
    category: "NLP & Language Models",
    icon: MessageSquare,
    color: "from-brand-aqua to-brand-teal",
    items: ["OpenAI GPT", "BERT", "spaCy", "NLTK", "Hugging Face"]
  },
  {
    category: "Computer Vision",
    icon: Eye,
    color: "from-brand-teal to-brand-aqua",
    items: ["OpenCV", "TensorFlow Lite", "MediaPipe", "YOLO", "Object Detection"]
  },
  {
    category: "Data & Analytics",
    icon: Database,
    color: "from-brand-aqua to-brand-teal",
    items: ["Apache Spark", "Pandas", "NumPy", "Polars", "DataBricks"]
  },
  {
    category: "Cloud AI Platforms",
    icon: Cloud,
    color: "from-brand-teal to-brand-aqua",
    items: ["AWS SageMaker", "Google Vertex AI", "Azure ML", "Cloud TPUs"]
  },
  {
    category: "MLOps & Deployment",
    icon: Settings,
    color: "from-brand-aqua to-brand-teal",
    items: ["Kubeflow", "MLflow", "Docker", "Kubernetes", "CI/CD Pipelines"]
  },
  {
    category: "Specialized AI",
    icon: Sparkles,
    color: "from-brand-teal to-brand-aqua",
    items: ["Reinforcement Learning", "AutoML", "Edge AI", "Federated Learning"]
  }
];

export default function AITechnologies() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6" aria-label="AI technologies section">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.h2 className="text-display-sm font-bold text-gray-900 mb-6" variants={fadeUp(16)}>
          AI <span className="gradient-text">Technologies</span> We Use
        </motion.h2>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Cutting-edge tools and frameworks powering our AI solutions for maximum performance and scalability.
        </motion.p>
      </motion.div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.category}
              className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-glow hover:border-brand-teal/30 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              variants={fadeUp(16 + index * 2)}
              whileHover={{ y: -3 }}
              onMouseEnter={() => setHoveredTech(tech.category)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-brand-teal transition-colors duration-300">
                  {tech.category}
                </h3>
                <ul className="space-y-2" role="list">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${tech.color} rounded-full mr-2 flex-shrink-0`} aria-hidden="true"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
