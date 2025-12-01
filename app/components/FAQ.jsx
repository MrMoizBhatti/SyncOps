"use client";
import { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { motionEasing, motionDurations } from '../../lib/motionConfig';
import { generateFAQSchema } from '../utils/seoUtils';

const faqs = [
  {
    question: "What makes SyncOps different from other development agencies?",
    answer: "SyncOps combines deep technical expertise with business acumen. We don't just build software—we build solutions that drive measurable business outcomes. Our AI-first approach, proven delivery methodology, and dedicated team ensure you get production-ready solutions faster than traditional agencies."
  },
  {
    question: "How quickly can you deliver a working MVP?",
    answer: "Our typical MVP delivery timeline is 4-6 weeks. We use rapid prototyping and iterative development to get your product to market quickly while maintaining quality. The exact timeline depends on complexity, but we're known for our speed without compromising on excellence."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely. We offer comprehensive support packages including 24/7 monitoring, regular updates, security patches, and feature enhancements. Our team becomes an extension of yours, ensuring your software continues to evolve with your business needs."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We're experts in modern tech stacks including React, Node.js, Python, AWS, and AI/ML technologies. We choose the right technology for your specific needs rather than pushing a one-size-fits-all solution. Our team stays current with emerging technologies to future-proof your solutions."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "Security is built into every layer of our development process. We follow industry best practices, implement OWASP security guidelines, and ensure compliance with GDPR, SOC2, and other relevant standards. All our solutions include enterprise-grade security features."
  },
  {
    question: "Can you help with existing software that needs improvement?",
    answer: "Yes, we specialize in modernizing legacy systems and improving existing software. We conduct thorough audits, identify bottlenecks, and implement improvements that enhance performance, security, and user experience while minimizing disruption to your operations."
  },
  {
    question: "What's your approach to project management and communication?",
    answer: "We use agile methodologies with transparent communication channels. You'll have a dedicated project manager, regular progress updates, and direct access to the development team. We believe in over-communication to ensure you're always informed and confident about project progress."
  },
  {
    question: "Do you offer training for our team on the solutions you build?",
    answer: "Yes, we provide comprehensive training and documentation for your team. This includes technical training, user guides, admin documentation, and ongoing support to ensure your team can effectively use and maintain the solutions we deliver."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Add FAQ structured data for SEO
  useEffect(() => {
    const faqSchema = generateFAQSchema(faqs);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-structured-data';
    
    if (!document.getElementById('faq-structured-data')) {
      document.head.appendChild(script);
    }
    
    return () => {
      const existing = document.getElementById('faq-structured-data');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-6">
          <HelpCircle className="w-8 h-8 text-brand-aqua" />
          <h2 className="text-display-sm font-bold text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <p className="text-body-xl text-gray-300 max-w-2xl mx-auto">
          Get answers to the most common questions about our services, process, and what makes SyncOps your ideal technology partner.
        </p>
        </div>
        
      <div className="space-y-4">
          {faqs.map((faq, index) => (
          <div
              key={index}
            className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
          >
            <button
              className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/5 transition-colors duration-300 text-left"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-panel-${index}`}
            >
              <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
              <ChevronDown 
                className={`w-5 h-5 text-brand-aqua transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-panel-${index}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: motionDurations.short, ease: motionEasing.bounce }}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
              </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="glass-dark rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team is here to help. Get in touch for personalized answers and expert guidance on your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get Expert Consultation
            </a>
            <a
              href="mailto:hello@syncops.com"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Email Our Team
            </a>
            </div>
        </div>
      </div>

      {/* Schema.org FAQ markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
} 