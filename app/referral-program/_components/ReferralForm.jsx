"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '../../../lib/motionConfig';
import { Send, User, Building2, Mail, Phone, Briefcase, Users, FileText, CheckCircle2 } from 'lucide-react';

export default function ReferralForm() {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    referralType: 'client',
    referralName: '',
    referralCompany: '',
    referralRole: '',
    referralEmail: '',
    referralPhone: '',
    context: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to an API
    const mailtoLink = `mailto:referrals@syncops.co?subject=Referral Submission - ${formData.referralType === 'client' ? 'Client' : 'Talent'}&body=Referrer Details:%0A- Name: ${formData.referrerName}%0A- Email: ${formData.referrerEmail}%0A- Phone: ${formData.referrerPhone}%0A%0AReferral Details:%0A- Type: ${formData.referralType === 'client' ? 'Client' : 'Talent'}%0A- Name: ${formData.referralName}%0A- Company: ${formData.referralCompany}%0A- Role: ${formData.referralRole}%0A- Email: ${formData.referralEmail}%0A- Phone: ${formData.referralPhone}%0A%0AContext:%0A${formData.context}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (submitted) {
    return (
      <motion.section 
        id="referral-form"
        className="relative bg-white py-20 overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <CheckCircle2 className="w-20 h-20 text-brand-teal mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 text-lg mb-8">
            Your referral has been submitted. Our team will review it and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary"
          >
            Submit Another Referral
          </button>
        </div>
      </motion.section>
    );
  }

  return (
    <section id="referral-form" className="relative bg-white py-20 overflow-hidden" aria-label="Referral submission form">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-aqua/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={stagger.container(0.06)}
        >
          <motion.h2 className="text-display-sm font-bold text-gray-900 mb-4" variants={fadeUp(16)}>
            Submit a <span className="gradient-text">Referral</span>
          </motion.h2>
          <motion.p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUp(20)}>
            Share a client lead or talented professional with us. Fill out the form below and we'll take it from there.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 border border-gray-200 shadow-soft"
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          variants={fadeUp(20)}
        >
          {/* Referral Type */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Referral Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 ${
                formData.referralType === 'client' 
                  ? 'border-brand-teal bg-brand-teal/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="radio"
                  name="referralType"
                  value="client"
                  checked={formData.referralType === 'client'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <Building2 className={`w-6 h-6 mb-2 ${formData.referralType === 'client' ? 'text-brand-teal' : 'text-gray-400'}`} />
                <div className={`font-semibold ${formData.referralType === 'client' ? 'text-brand-teal' : 'text-gray-700'}`}>
                  Client Referral
                </div>
              </label>
              <label className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 ${
                formData.referralType === 'talent' 
                  ? 'border-brand-teal bg-brand-teal/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="radio"
                  name="referralType"
                  value="talent"
                  checked={formData.referralType === 'talent'}
                  onChange={handleChange}
                  className="sr-only"
                />
                <Users className={`w-6 h-6 mb-2 ${formData.referralType === 'talent' ? 'text-brand-teal' : 'text-gray-400'}`} />
                <div className={`font-semibold ${formData.referralType === 'talent' ? 'text-brand-teal' : 'text-gray-700'}`}>
                  Talent Referral
                </div>
              </label>
            </div>
          </div>

          {/* Referrer Details */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-brand-teal" />
              Your Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  required
                  value={formData.referrerName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                  placeholder="John Doe"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="referrerEmail"
                  name="referrerEmail"
                  required
                  value={formData.referrerEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                  placeholder="john@example.com"
                  aria-required="true"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone
                </label>
                <input
                  type="tel"
                  id="referrerPhone"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Referral Details */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              {formData.referralType === 'client' ? (
                <Building2 className="w-5 h-5 text-brand-teal" />
              ) : (
                <Users className="w-5 h-5 text-brand-teal" />
              )}
              Referral Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="referralName" className="block text-sm font-medium text-gray-700 mb-2">
                  {formData.referralType === 'client' ? 'Contact Name' : 'Candidate Name'} *
                </label>
                <input
                  type="text"
                  id="referralName"
                  name="referralName"
                  required
                  value={formData.referralName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                  placeholder="Jane Smith"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="referralCompany" className="block text-sm font-medium text-gray-700 mb-2">
                  {formData.referralType === 'client' ? 'Company Name' : 'Current Company'} *
                </label>
                <input
                  type="text"
                  id="referralCompany"
                  name="referralCompany"
                  required
                  value={formData.referralCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                  placeholder="Acme Inc."
                  aria-required="true"
                />
              </div>
              {formData.referralType === 'talent' && (
                <div className="md:col-span-2">
                  <label htmlFor="referralRole" className="block text-sm font-medium text-gray-700 mb-2">
                    Role/Position
                  </label>
                  <input
                    type="text"
                    id="referralRole"
                    name="referralRole"
                    value={formData.referralRole}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                    placeholder="Senior Developer"
                  />
                </div>
              )}
              <div>
                <label htmlFor="referralEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="referralEmail"
                  name="referralEmail"
                  required
                  value={formData.referralEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                  placeholder="jane@example.com"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="referralPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="referralPhone"
                  name="referralPhone"
                  value={formData.referralPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
          </div>

          {/* Additional Context */}
          <div className="mb-8">
            <label htmlFor="context" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Context
            </label>
            <textarea
              id="context"
              name="context"
              rows={4}
              value={formData.context}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal outline-none transition-all resize-none"
              placeholder="Any helpful information about the referral..."
            />
          </div>

          {/* Consent */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-teal focus:ring-brand-teal/50"
              />
              <span className="text-sm text-gray-600">
                I consent to SyncOps contacting both parties to facilitate this referral. *
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="btn-primary w-full inline-flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-5 h-5 mr-2" aria-hidden="true" />
            Submit Referral
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

