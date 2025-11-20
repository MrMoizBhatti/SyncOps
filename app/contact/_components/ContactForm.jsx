"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Briefcase,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Toast from "../../components/Toast";

const ContactForm = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setToast({
        show: true,
        message: "Please verify the CAPTCHA",
        type: "error",
      });
      return;
    }

    setLoading(true);

    const emailData = {
      full_name: formData.fullName,
      company_name: formData.companyName,
      user_email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
    };

    emailjs
      .send(
        "service_xxwpgv9",
        "template_upbtwqk",
        emailData,
        "gQDkveoFh37NYebva"
      )
      .then(
        () => {
          setToast({
            show: true,
            message: "Email sent successfully!",
            type: "success",
          });
          // Reset form after successful submission
          setFormData({
            fullName: "",
            email: "",
            companyName: "",
            phoneNumber: "",
            message: "",
          });
          recaptchaRef.current.reset();
          setCaptchaVerified(false);
        },
        (error) => {
          setToast({
            show: true,
            message: "Failed to send email: " + error.text,
            type: "error",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: "", type: "" })}
        />
      )}
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 via-transparent to-[#00C4FF]/5"></div>
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#00F8B4] rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#00C4FF] rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse delay-1000 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Enhanced Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let's Start Your
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent"> Project</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Share your vision with us and let's transform your ideas into reality. We're here to help you succeed.
              </p>
            </div>
            
            {/* Enhanced Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h3>
                  <p className="text-gray-600">Get expert advice on your project at no cost</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
                  <p className="text-gray-600">Your information is protected and confidential</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Enhanced Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-500 group-focus-within:text-[#00F8B4] transition-colors duration-300 pointer-events-none">
                  <User size={20} className="stroke-current" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-500 group-focus-within:text-[#00F8B4] transition-colors duration-300 pointer-events-none">
                  <Mail size={20} className="stroke-current" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-500 group-focus-within:text-[#00F8B4] transition-colors duration-300 pointer-events-none">
                  <Briefcase size={20} className="stroke-current" />
                </div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name (Optional)"
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-500 group-focus-within:text-[#00F8B4] transition-colors duration-300 pointer-events-none">
                  <Phone size={20} className="stroke-current" />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500"
                />
              </div>
              
              <div className="relative group">
                <div className="absolute left-4 top-4 z-10 text-gray-500 group-focus-within:text-[#00F8B4] transition-colors duration-300 pointer-events-none">
                  <MessageSquare size={20} className="stroke-current" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500 resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  ref={recaptchaRef}
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading || !captchaVerified}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    <span className="relative z-10">Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-3 relative z-10" size={20} />
                    <span className="relative z-10">Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
