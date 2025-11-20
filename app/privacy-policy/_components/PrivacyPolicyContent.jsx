"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Calendar } from "lucide-react";
import { fadeUp } from "../../../lib/motionConfig";

const PrivacyPolicyContent = () => {
  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative overflow-hidden bg-[#0B0A1C] text-white py-20 lg:py-24 border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 to-[#00C4FF]/5 opacity-30"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-full flex items-center justify-center border border-[#00F8B4]/30">
                <Shield className="w-10 h-10 text-[#00F8B4]" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Privacy </span>
              <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-400">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - White */}
      <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            {...fadeUp(0)}
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              At <span className="font-semibold text-gray-900">SyncOps</span> ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <span className="text-[#00F8B4] font-semibold">syncops.tech</span> or use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections - Alternating Dark and Light */}
      <div className="space-y-0">
        {/* Section 1 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                  <FileText className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">1. Information We </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Collect</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#00F8B4] mb-3">Personal Information</h3>
                  <p className="leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>Register for an account or use our services</li>
                    <li>Contact us through our website, email, or phone</li>
                    <li>Subscribe to our newsletter or marketing communications</li>
                    <li>Fill out forms or surveys on our website</li>
                    <li>Participate in our referral programs or events</li>
                  </ul>
                  <p className="mt-4 leading-relaxed">
                    This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold text-[#00F8B4] mb-3">Automatically Collected Information</h3>
                  <p className="leading-relaxed mb-3">
                    When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - White */}
        <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                  <Eye className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>2. How We Use Your </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Information</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your requests and transactions</li>
                  <li>To communicate with you about our services, updates, and promotional offers</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To detect, prevent, and address technical issues and security threats</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                  <li>To conduct research and analytics to improve our business operations</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                  <Lock className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">3. Information Sharing and </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Disclosure</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-3 text-gray-300">
                  <li><strong className="text-[#00F8B4]">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</li>
                  <li><strong className="text-[#00F8B4]">Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests, such as court orders or government regulations.</li>
                  <li><strong className="text-[#00F8B4]">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                  <li><strong className="text-[#00F8B4]">With Your Consent:</strong> We may share your information with your explicit consent or at your direction.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - White */}
        <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                  <Shield className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>4. Data </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Security</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure hosting infrastructure</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-4 leading-relaxed text-gray-600">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                  <Calendar className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">5. Data </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Retention</span>
                </h2>
              </div>
              <div className="text-gray-300">
                <p className="leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6 - White */}
        <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                <span>6. Your Rights and </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Choices</span>
              </h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li><strong className="text-[#00F8B4]">Access:</strong> Request access to your personal information</li>
                  <li><strong className="text-[#00F8B4]">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="text-[#00F8B4]">Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-[#00F8B4]">Objection:</strong> Object to processing of your personal information</li>
                  <li><strong className="text-[#00F8B4]">Portability:</strong> Request transfer of your information to another service</li>
                  <li><strong className="text-[#00F8B4]">Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sections 7-10 - Compact Dark Section */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">7. Cookies and Tracking </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Technologies</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to collect and store information about your preferences and browsing behavior. You can control cookies through your browser settings, but disabling cookies may affect the functionality of our website.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">8. Third-Party </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Links</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">9. Children's </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Privacy</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">10. Changes to This Privacy </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Policy</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section - White with Gradient Accent */}
        <section className="bg-gradient-to-br from-white to-[#FAFAFF] py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-2xl p-8 border-2 border-[#00F8B4]/30 shadow-lg"
              {...fadeUp(0)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                  <Mail className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>11. Contact </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Us</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 space-y-3 border border-gray-200">
                  <p className="text-gray-900 font-semibold text-lg">SyncOps</p>
                  <p className="text-gray-700">
                    <strong className="text-[#00F8B4]">Email:</strong>{" "}
                    <a href="mailto:info@syncops.tech" className="text-[#00F8B4] hover:text-[#00C4FF] transition-colors font-medium">
                      info@syncops.tech
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-[#00F8B4]">Phone:</strong>{" "}
                    <a href="tel:+923018678319" className="text-[#00F8B4] hover:text-[#00C4FF] transition-colors font-medium">
                      +92-301-8678-319
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong className="text-[#00F8B4]">Address:</strong> Mumtaz Market, GT Rd, opposite Chaseup Shopping Mall, Civil Lines, Gujranwala, 52250
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyContent;
