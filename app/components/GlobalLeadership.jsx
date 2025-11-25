"use client";
import { Linkedin, Twitter, Globe, Mail } from 'lucide-react';

export default function GlobalLeadership() {
  return (
    <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          SyncOps <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">Leadership & Management</span>
          </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving innovation and excellence across our global operations, 
            shaping the future of enterprise software solutions.
          </p>
        </div>

      {/* C-Suite Leadership */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          C-Suite Executives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-[#00C4FF] mb-2">Majid Ali</h4>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Founder & Chief Executive Officer
              </p>
              <p className="text-xs text-gray-500 mb-2">SyncOps Technologies</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 text-center">
              Overall visionary and leader of SyncOps, responsible for strategy, innovation, and company direction.
                  </p>
                </div>
                </div>
        </div>
      </div>
  );
} 