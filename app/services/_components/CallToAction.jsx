"use client";

import React from "react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#00B894] to-[#00C4FF] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-white/80">
          Ready to build
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Let’s turn your product vision into a scalable, resilient solution.
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Partner with our cross-functional team for strategy, design,
          engineering, and launch support tailored to your roadmap.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-xl bg-white text-[#00A07D] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Call
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 rounded-xl border border-white/60 text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

