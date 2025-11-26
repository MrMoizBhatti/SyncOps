"use client";
import { FaRocket } from 'react-icons/fa';
import SafeLink from './ui/SafeLink';
import { motion } from 'framer-motion';
import { fadeUp, stagger, springSoft } from '../../lib/motionConfig';
import { useMagneticHover } from '../../hooks/useMagneticHover';

export default function Hero() {
  const primaryMag = useMagneticHover(10);

  return (
    <section className="relative overflow-hidden min-h-screen h-screen flex items-center">
      {/* Fallback Background (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-gray-900 to-brand-navy z-0"></div>

      {/* Background Video (optimized - full screen) */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[1]"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        poster="https://res.cloudinary.com/dfdzl01qj/video/upload/q_auto,w_1200/vecteezy_ai-generative-beautiful-fantasy-human-reptile-eye-with-neon_28716522_2_ovsvbo.jpg"
      >
        {/* HLS Streaming – super fast */}
        <source 
          src="https://res.cloudinary.com/dfdzl01qj/video/upload/sp_hd/f_auto,q_auto,vc_auto,w_1920/vecteezy_ai-generative-beautiful-fantasy-human-reptile-eye-with-neon_28716522_2_ovsvbo.m3u8" 
          type="application/x-mpegURL" 
        />

        {/* MP4 fallback */}
        <source 
          src="https://res.cloudinary.com/dfdzl01qj/video/upload/f_auto,q_auto:good,vc_auto,w_1920/vecteezy_ai-generative-beautiful-fantasy-human-reptile-eye-with-neon_28716522_2_ovsvbo.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(11,10,28,0.85), rgba(11,10,28,0.60))'
        }}
      />

      {/* Background Effects - removed to let video show fully */}

      {/* Soft Particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/4 w-64 h-64 bg-brand-aqua/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-float-slower" />
      </div>

      {/* Gradient Aura */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-aqua/20 via-brand-teal/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 h-full flex items-center justify-start py-12 sm:py-16 lg:py-20">
        <motion.div className="w-full max-w-3xl" {...stagger.container(0.08)}>
          {/* Content */}
          <motion.div
            className="text-white text-left max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p className="text-xs sm:text-sm text-brand-aqua mb-3 font-medium tracking-[0.2em] uppercase" variants={fadeUp(20)}>
              Enterprise Software Studio
            </motion.p>

            <motion.h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4" variants={fadeUp(22)}>
              Building Secure,<br className="hidden sm:block" />
              <span className="gradient-text">Scalable Products</span>
            </motion.h1>

            <motion.p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl leading-relaxed" variants={fadeUp(23)}>
              Pakistan-based engineers delivering enterprise-grade software, AI-powered automation, and cloud platforms for regulated teams.
            </motion.p>

            {/* Primary + secondary CTAs */}
            <motion.div className="mb-6 flex flex-col sm:flex-row items-start gap-4" variants={fadeUp(24)}>
              <motion.div
                ref={primaryMag.ref}
                onMouseMove={primaryMag.onMouseMove}
                onMouseLeave={primaryMag.onMouseLeave}
                style={{ x: primaryMag.mx, y: primaryMag.my }}
                transition={springSoft}
              >
                <SafeLink
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <FaRocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Request A Consultation
                </SafeLink>
              </motion.div>

              <SafeLink
                href="/case-studies"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Case Studies
              </SafeLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
