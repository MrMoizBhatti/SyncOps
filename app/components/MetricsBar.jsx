"use client";
import { Rocket, Shield, Zap, Star } from 'lucide-react';

const metrics = [
  {
    value: "50+",
    label: "Projects",
    icon: Rocket,
    color: "from-brand-aqua to-brand-teal"
  },
  {
    value: "99.5%",
    label: "Uptime",
    icon: Shield,
    color: "from-brand-teal to-brand-aqua"
  },
  {
    value: "50+",
    label: "Integrations",
    icon: Zap,
    color: "from-brand-aqua to-brand-teal"
  },
  {
    value: "9.8/10",
    label: "Client Rating",
    icon: Star,
    color: "from-brand-teal to-brand-aqua"
  }
];

export default function MetricsBar() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.label}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft group-hover:shadow-glow`}>
                  {IconComponent && <IconComponent size={24} className="text-white" />}
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-brand-teal transition-colors duration-300">
                  {metric.value}
                </div>
                
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
