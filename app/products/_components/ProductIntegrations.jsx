"use client";
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { 
  FaAws, FaDocker, FaSlack, FaSalesforce
} from 'react-icons/fa';
import { 
  SiGooglecloud, SiMicrosoftazure, SiCloudflare, SiPostgresql, SiRedis,
  SiSnowflake, SiHubspot, SiNotion, SiKubernetes, SiTerraform,
  SiGithub, SiMongodb, SiMysql
} from 'react-icons/si';
import { useState } from 'react';
import { CheckCircle2, Plug2, Database } from 'lucide-react';

const stacks = [
  { 
    title: 'Cloud', 
    icon: '☁️',
    description: 'Major cloud providers',
    items: [
      { name: 'AWS', icon: FaAws, color: 'text-orange-500', description: 'Amazon Web Services' },
      { name: 'GCP', icon: SiGooglecloud, color: 'text-blue-500', description: 'Google Cloud Platform' },
      { name: 'Azure', icon: SiMicrosoftazure, color: 'text-blue-600', description: 'Microsoft Azure' },
      { name: 'Cloudflare', icon: SiCloudflare, color: 'text-orange-400', description: 'Cloudflare CDN & Security' }
    ]
  },
  { 
    title: 'Data', 
    icon: '💾',
    description: 'Databases & data platforms',
    items: [
      { name: 'Postgres', icon: SiPostgresql, color: 'text-blue-600', description: 'PostgreSQL database' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-500', description: 'Redis cache & store' },
      { name: 'Snowflake', icon: SiSnowflake, color: 'text-blue-400', description: 'Snowflake data warehouse' },
      { name: 'Kafka', icon: Database, color: 'text-gray-800', description: 'Apache Kafka streaming' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', description: 'MongoDB NoSQL database' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500', description: 'MySQL relational database' }
    ]
  },
  { 
    title: 'Apps', 
    icon: '🔌',
    description: 'Business applications',
    items: [
      { name: 'Slack', icon: FaSlack, color: 'text-purple-500', description: 'Slack workspace integration' },
      { name: 'Salesforce', icon: FaSalesforce, color: 'text-blue-600', description: 'Salesforce CRM' },
      { name: 'HubSpot', icon: SiHubspot, color: 'text-orange-500', description: 'HubSpot marketing & sales' },
      { name: 'Notion', icon: SiNotion, color: 'text-gray-800', description: 'Notion workspace' }
    ]
  },
  { 
    title: 'DevOps', 
    icon: '⚙️',
    description: 'Infrastructure & CI/CD',
    items: [
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500', description: 'Docker containers' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600', description: 'Kubernetes orchestration' },
      { name: 'Terraform', icon: SiTerraform, color: 'text-purple-600', description: 'Terraform IaC' },
      { name: 'GitHub Actions', icon: SiGithub, color: 'text-gray-800', description: 'GitHub CI/CD' }
    ]
  }
];

export default function ProductIntegrations() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div className="text-center mb-16" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
        <motion.div className="flex items-center justify-center gap-3 mb-6" variants={fadeUp(16)}>
          <Plug2 className="w-8 h-8 text-brand-teal" aria-hidden="true" />
          <motion.h2 className="text-display-sm font-bold text-gray-900" variants={fadeUp(16)}>
            Built to <span className="gradient-text">Integrate</span>
          </motion.h2>
        </motion.div>
        <motion.p className="text-body-xl text-gray-600 max-w-3xl mx-auto" variants={fadeUp(20)}>
          Works with your stack—no rewrites required. Seamlessly connect with 50+ popular tools and platforms.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stacks.map((group, i) => (
          <motion.div 
            key={group.title} 
            className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-glow hover:border-brand-teal/30 transition-all duration-300 group"
            initial="initial" 
            whileInView="animate" 
            viewport={viewport} 
            variants={fadeUp(16 + i * 2)}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-aqua/20 to-brand-teal/20 rounded-lg flex items-center justify-center text-xl">
                {group.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{group.title}</h3>
                <p className="text-xs text-gray-500">{group.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {group.items.map((item) => {
                // Use Database as fallback if icon is undefined
                const IconComponent = item.icon || Database;
                const itemKey = `${group.title}-${item.name}`;
                
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(itemKey)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div 
                      className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-200 hover:border-brand-teal/40 hover:shadow-md transition-all duration-300 cursor-pointer group/item"
                      role="button"
                      tabIndex={0}
                      aria-label={`${item.name} integration`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <IconComponent 
                          className={`w-6 h-6 ${item.color} group-hover/item:scale-110 transition-transform duration-300`}
                          aria-hidden="true"
                        />
                        <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                          {item.name}
                        </span>
                      </div>
                      <CheckCircle2 
                        className="absolute -top-1 -right-1 w-4 h-4 text-brand-teal opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" 
                        aria-hidden="true"
                      />
                    </div>
                    
                    {/* Tooltip */}
                    {hoveredItem === itemKey && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg z-20 whitespace-nowrap pointer-events-none"
                      >
                        {item.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional CTA */}
      <motion.div 
        className="mt-12 text-center"
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        <p className="text-gray-600 mb-4">
          Need a custom integration? <span className="text-brand-teal font-semibold">We can build it.</span>
        </p>
      </motion.div>
    </div>
  );
}


