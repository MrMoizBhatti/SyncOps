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
  Building,
  Globe,
  DollarSign,
  MapPin,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Toast from "../../components/Toast";

const ContactForm = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyUrl: "",
    budget: "",
    region: "",
    services: [],
  });
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const budgetOptions = [
    { value: "", label: "Select Budget Range" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k+", label: "$100,000+" }
  ];

  const regionOptions = [
    { value: "", label: "Select Region" },
    { value: "north-america", label: "North America" },
    { value: "europe", label: "Europe" },
    { value: "asia-pacific", label: "Asia Pacific" },
    { value: "middle-east", label: "Middle East" },
    { value: "africa", label: "Africa" },
    { value: "latin-america", label: "Latin America" }
  ];

  const serviceOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
    { value: "ai-ml", label: "AI & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "devops", label: "DevOps & CI/CD" },
    { value: "consulting", label: "IT Consulting" },
    { value: "custom-software", label: "Custom Software" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (serviceValue) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter(s => s !== serviceValue)
        : [...prev.services, serviceValue]
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
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_email: formData.email,
      phone_number: formData.phone,
      company_name: formData.companyName,
      company_url: formData.companyUrl,
      budget: formData.budget,
      region: formData.region,
      services: formData.services.join(", "),
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
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            companyName: "",
            companyUrl: "",
            budget: "",
            region: "",
            services: [],
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
    <section id="contact-form" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
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
        className="hidden sm:block absolute top-20 left-5 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10"
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
        className="hidden sm:block absolute bottom-20 right-5 sm:right-20 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10"
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
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-4 h-4 bg-[#00F8B4] rounded-full animate-bounce opacity-60"></div>
      <div className="hidden sm:block absolute top-1/2 right-20 w-3 h-3 bg-[#00C4FF] rounded-full animate-pulse opacity-50"></div>
      <div className="hidden sm:block absolute bottom-1/4 left-20 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse delay-1000 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side - Enhanced Info */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                Let's Start Your
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent"> Project</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
                Share your vision with us and let's transform your ideas into reality. We're here to help you succeed.
              </p>
            </div>
            
            {/* Enhanced Features */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Free Consultation</h3>
                  <p className="text-sm sm:text-base text-gray-600">Get expert advice on your project at no cost</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Quick Response</h3>
                  <p className="text-sm sm:text-base text-gray-600">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Secure & Private</h3>
                  <p className="text-sm sm:text-base text-gray-600">Your information is protected and confidential</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side - Enhanced Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center">
                <Sparkles size={16} className="sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Send us a Message</h3>
            </div>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      required
                      disabled={loading}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      required
                      disabled={loading}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    required
                    disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">We'll never share your contact info.</p>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    required
                    disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Company URL */}
              <div>
                <label htmlFor="companyUrl" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Company Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <input
                    type="url"
                    id="companyUrl"
                    name="companyUrl"
                    value={formData.companyUrl}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                    disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" size={20} />
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 text-sm sm:text-base appearance-none"
                  >
                    {budgetOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Region */}
              <div>
                <label htmlFor="region" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" size={20} />
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#00F8B4]/20 focus:border-[#00F8B4] transition-all duration-300 hover:border-[#00C4FF]/50 text-gray-900 text-sm sm:text-base appearance-none"
                  >
                    {regionOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-3">
                  Services You're Looking For
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map(service => (
                    <label key={service.value} className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={service.value}
                        checked={formData.services.includes(service.value)}
                        onChange={() => handleServiceChange(service.value)}
                        disabled={loading}
                        className="w-4 h-4 text-[#00F8B4] border-gray-300 rounded focus:ring-[#00F8B4]"
                      />
                      <span className="text-xs sm:text-sm text-gray-700">{service.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-center overflow-hidden">
                <div className="scale-75 sm:scale-100 origin-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                    ref={recaptchaRef}
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading || !captchaVerified}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {loading ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 sm:mr-3"></div>
                    <span className="relative z-10">Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 sm:mr-3 relative z-10" size={18} />
                    <span className="relative z-10">Submit Request</span>
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
