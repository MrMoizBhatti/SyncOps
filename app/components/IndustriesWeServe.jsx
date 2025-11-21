"use client";
import { FaHeartbeat, FaCreditCard, FaGraduationCap, FaShoppingCart, FaTruck } from 'react-icons/fa';

const industries = [
  { name: "Healthcare", icon: <FaHeartbeat size={24} />, color: "from-red-400 to-pink-500" },
  { name: "FinTech", icon: <FaCreditCard size={24} />, color: "from-green-400 to-blue-500" },
  { name: "EdTech", icon: <FaGraduationCap size={24} />, color: "from-purple-400 to-indigo-500" },
  { name: "Retail", icon: <FaShoppingCart size={24} />, color: "from-orange-400 to-red-500" },
  { name: "Logistics", icon: <FaTruck size={24} />, color: "from-blue-400 to-cyan-500" },
];

export default function IndustriesWeServe() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
          Industries We <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
            Serve
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We deliver innovative solutions across diverse industries, helping businesses thrive in the digital age.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 justify-items-center">
        {industries.map((industry, idx) => (
          <div
            key={industry.name}
            className={`group bg-white rounded-md shadow-sm p-4 border border-gray-100 hover:border-[#00F8B4]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full max-w-[200px] text-center ${
              idx === industries.length - 1 && industries.length % 2 !== 0 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''
            }`}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${industry.color} text-white shadow-md mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
              {industry.icon}
            </div>
            <h3 className="text-sm font-medium text-[#222222] group-hover:text-[#00F8B4] transition-colors duration-300">
              {industry.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
} 