"use client";
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

const metrics = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Successfully completed projects across various industries",
    icon: TrendingUp,
    color: "from-[#00B894] to-[#00C4FF]"
  },
  {
    value: "99.5%",
    label: "Uptime Guarantee",
    description: "Reliable infrastructure with enterprise-grade SLA",
    icon: Clock,
    color: "from-[#00C4FF] to-[#00B894]"
  },
  {
    value: "25+",
    label: "Expert Team",
    description: "Senior developers and architects with proven track records",
    icon: Users,
    color: "from-[#00B894] to-[#00C4FF]"
  },
  {
    value: "9.8",
    label: "Average NPS",
    description: "Client satisfaction score from hundreds of projects",
    icon: Star,
    color: "from-[#00C4FF] to-[#00B894]"
  }
];

export default function TrackRecord() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Proven <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
              Track Record
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for themselves. We've consistently delivered exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.label}
                className="text-center group"
                aria-label={`${metric.label}: ${metric.value}`}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-2" aria-label={metric.value}>
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-[#00C4FF] mb-2" aria-label={metric.label}>
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed" aria-label={metric.description}>
                    {metric.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              ISO 27001 Certified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
              SOC 2 Type II Compliant
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              GDPR Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 