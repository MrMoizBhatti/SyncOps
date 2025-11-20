"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock, Users } from "lucide-react";
import SafeLink from "../../components/ui/SafeLink";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0A1C] text-white py-20 lg:py-24 border-b border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/10 to-[#00C4FF]/10 opacity-30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold leading-snug mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
                Let's Build Something
              </span>
              <br />
              <span className="text-white">Amazing Together</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to transform your ideas into reality? We're here to help you create innovative solutions that drive success.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SafeLink href="#contact-form">
                <button className="group bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle size={20} />
                    Start Your Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </SafeLink>
              
              <SafeLink href="tel:+923018678319">
                <button className="group border-2 border-[#00F8B4] text-[#00F8B4] font-semibold px-8 py-4 rounded-lg hover:bg-[#00F8B4] hover:text-white transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone size={20} />
                    Call Now
                  </span>
                </button>
              </SafeLink>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#00F8B4]/30 transition-all duration-300">
                <Mail size={24} className="text-[#00C4FF] mb-2" />
                <p className="text-sm text-gray-300">Email Us</p>
                <p className="text-xs text-gray-400">info@syncops.tech</p>
              </div>
              
              <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#00F8B4]/30 transition-all duration-300">
                <Phone size={24} className="text-[#00C4FF] mb-2" />
                <p className="text-sm text-gray-300">Call Us</p>
                <p className="text-xs text-gray-400">+92-301-8678-319</p>
              </div>
              
              <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-[#00F8B4]/30 transition-all duration-300">
                <MapPin size={24} className="text-[#00C4FF] mb-2" />
                <p className="text-sm text-gray-300">Visit Us</p>
                <p className="text-xs text-gray-400">Mumtaz Market,Gujranwala</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side - Contact Widget */}
          <div className="relative">
            <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl h-full w-full relative overflow-hidden">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 rounded-2xl"></div>
              
              {/* Widget Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#00F8B4] rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
                    <p className="text-gray-400 text-sm">We're here to help</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
                  <span className="text-[#00F8B4] text-sm font-medium">ONLINE</span>
                </div>
              </div>
              
              {/* Central Icon Section */}
              <div className="flex flex-col items-center justify-center mb-6 relative z-10">
                {/* Glowing orb container */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center border border-[#00F8B4]/30 shadow-lg relative">
                    {/* Contact icon */}
                    <div className="relative">
                      <MessageCircle size={48} className="text-[#00F8B4]" />
                    </div>
                  </div>
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full opacity-20 animate-pulse blur-sm"></div>
                </div>
                
                {/* Central message */}
                <h4 className="text-white font-semibold text-center mb-2">Ready to Start?</h4>
                <p className="text-gray-300 text-sm text-center leading-relaxed">
                  Let's discuss your project and bring your vision to life
                </p>
              </div>
              
              {/* Contact Highlights */}
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                    <Clock size={16} className="text-[#00F8B4]" />
                  </div>
                  <span>24/7 Support Available</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00C4FF]/20 to-[#00F8B4]/20 rounded-lg flex items-center justify-center border border-[#00C4FF]/30">
                    <Users size={16} className="text-[#00C4FF]" />
                  </div>
                  <span>Expert Team Ready</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                    <MessageCircle size={16} className="text-[#00F8B4]" />
                  </div>
                  <span>Free Consultation</span>
                </div>
              </div>
              
              {/* Floating accent elements inside widget */}
              <div className="absolute top-1/4 right-4 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-1/4 left-4 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
            </div>
            
            {/* Floating Elements Outside */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-[#00F8B4] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/2 -left-6 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactHero;
