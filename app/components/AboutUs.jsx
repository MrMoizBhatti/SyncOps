"use client";

export default function AboutUs() {
  return (
    <section className="py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10 shadow-2xl">
          <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium">
            We empower startups, enterprises, and visionaries to build scalable digital products that{' '}
            <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent font-semibold">
              shape tomorrow.
            </span>
          </p>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10"></div>
    </section>
  );
} 