"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <section className="bg-[#0B0A1C] text-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo + Rights */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img
                src="/images/logo-footer.png"
                alt="SyncOps"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-[#F3F4F6] mb-6 leading-relaxed">
              Empowering businesses with innovative AI-powered SaaS solutions that drive growth and success.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/company/syncops" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#F3F4F6] hover:bg-[#00B894] hover:text-[#0B0A1C] transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#F3F4F6] hover:bg-[#00B894] hover:text-[#0B0A1C] transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#F3F4F6] hover:bg-[#00B894] hover:text-[#0B0A1C] transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="text-left">
            <h3 className="text-xl font-bold text-[#F3F4F6] mb-6">Quick Links</h3>
            <div className="space-y-3 text-left">
              <a href="/services" className="block text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                Services
              </a>
              <a href="/about" className="block text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                About Us
              </a>
              <a href="/careers" className="block text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                Careers
              </a>
              <a href="/technologies" className="block text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                Technologies
              </a>
              <a href="/blog" className="block text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                Blog
              </a>
              <a href="/contact" className="block text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="text-left md:text-left">
            <h3 className="text-xl font-bold text-[#F3F4F6] mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-start md:justify-start gap-3">
                <Mail className="w-6 h-6 text-[#00B894]" />
                <a href="mailto:info@syncops.tech" className="text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                  info@syncops.tech
                </a>
              </div>
              <div className="flex items-center justify-start md:justify-start gap-3">
                <Phone className="w-6 h-6 text-[#00B894]" />
                <a href="tel:+923018678319" className="text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">
                  +92-301-8678-319
                </a>
              </div>
              <div className="flex items-center justify-start md:justify-start gap-3">
                <MapPin className="w-6 h-6 text-[#00B894]" />
                <a href="https://maps.app.goo.gl/tTdayYQH3rmzoNEv5" target="_blank" rel="noopener noreferrer" className="text-[#F3F4F6] hover:text-[#00B894] transition-colors duration-300">

                  Mumtaz Market, Gujranwala, Pakistan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00B894]/30 to-transparent my-4"></div>

        {/* Copyright */}
        <div className="text-center pb-4">
          <p className="text-[#F3F4F6]">
            © 2024 SyncOps. All rights reserved. |
            <a href="/privacy-policy" className="text-[#00B894] hover:text-[#00C4FF] transition-colors duration-300 ml-2">
              Privacy Policy
            </a> |
            <a href="/terms-of-service" className="text-[#00B894] hover:text-[#00C4FF] transition-colors duration-300 ml-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
