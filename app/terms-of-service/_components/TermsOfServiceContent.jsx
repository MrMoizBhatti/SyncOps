"use client";

import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, Shield, Users, Mail, Ban, CheckCircle } from "lucide-react";
import { fadeUp } from "../../../lib/motionConfig";

const TermsOfServiceContent = () => {
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
                <Scale className="w-10 h-10 text-[#00F8B4]" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Terms of </span>
              <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Service</span>
            </h1>
          
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
              Welcome to <span className="font-semibold text-gray-900">SyncOps</span>. These Terms of Service ("Terms") govern your access to and use of our website located at <span className="text-[#00F8B4] font-semibold">syncops.tech</span> and our services. By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
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
                  <span className="text-white">1. Acceptance of </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Terms</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  By accessing or using SyncOps' website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                </p>
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
                  <Users className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>2. Description of </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Services</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  SyncOps provides AI-powered SaaS solutions, software development, cloud services, and related technology services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.
                </p>
                <p className="leading-relaxed">
                  Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li>AI Development and Machine Learning Solutions</li>
                  <li>Web and Mobile Application Development</li>
                  <li>Cloud Computing and DevOps Services</li>
                  <li>Cybersecurity Solutions</li>
                  <li>Business Process Automation</li>
                  <li>IT Consulting and Support</li>
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
                  <CheckCircle className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">3. User </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Obligations</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                  <li>Provide accurate, current, and complete information when required</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                  <li>Not attempt to gain unauthorized access to our systems or networks</li>
                  <li>Not interfere with or disrupt the integrity or performance of our services</li>
                  <li>Not use our services to transmit any malicious code, viruses, or harmful data</li>
                  <li>Respect intellectual property rights and not infringe upon the rights of others</li>
                  <li>Comply with all applicable laws and regulations</li>
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
                  <Ban className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>4. Prohibited </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Activities</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  You are expressly prohibited from:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li>Using our services for any illegal or unauthorized purpose</li>
                  <li>Violating any laws, regulations, or third-party rights</li>
                  <li>Reverse engineering, decompiling, or disassembling our software</li>
                  <li>Removing or altering any copyright, trademark, or proprietary notices</li>
                  <li>Collecting or harvesting information about other users without consent</li>
                  <li>Impersonating any person or entity or falsely stating your affiliation</li>
                  <li>Engaging in any activity that could harm, disable, or impair our services</li>
                  <li>Using automated systems to access our services without authorization</li>
                </ul>
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
                  <Shield className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">
                  <span className="text-white">5. Intellectual </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Property</span>
                </h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, software, and code, are the exclusive property of SyncOps and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="leading-relaxed">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our proprietary materials without our prior written consent. Any unauthorized use may result in legal action.
                </p>
                <p className="leading-relaxed">
                  If you provide us with feedback, suggestions, or ideas about our services, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and incorporate such feedback into our services.
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-lg flex items-center justify-center border border-[#00F8B4]/30">
                  <AlertCircle className="w-6 h-6 text-[#00F8B4]" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  <span>6. Disclaimer of </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Warranties</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. To the fullest extent permitted by law, SyncOps disclaims all warranties, including but not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Accuracy, completeness, or reliability of information</li>
                  <li>Security or freedom from viruses or other harmful components</li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  We do not guarantee that our services will meet your requirements or that the results obtained will be accurate or reliable.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                <span className="text-white">7. Limitation of </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Liability</span>
              </h2>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, SyncOps shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Cost of substitute services</li>
                  <li>Business interruption or loss of goodwill</li>
                  <li>Damages resulting from use or inability to use our services</li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  Our total liability for any claims arising from or related to our services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 8 - White */}
        <section className="bg-gradient-to-br from-[#FAFAFF] to-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                <span>8. Indemnification</span>
              </h2>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless SyncOps, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-600">
                  <li>Your use or misuse of our services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Any content you submit, post, or transmit through our services</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 9 - Dark */}
        <section className="bg-[#0B0A1C] text-white py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">
            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">9. Termination</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, for any reason, including but not limited to breach of these Terms. Upon termination, your right to use our services will immediately cease, and we may delete your account and data.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">10. Governing Law and </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Jurisdiction</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in Gujranwala, Pakistan.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">11. Changes to </span>
                <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Terms</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using our services.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              {...fadeUp(0)}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">12. Severability</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced with a valid provision that most closely approximates the intent of the original provision.
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
                  <span>13. Contact </span>
                  <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Us</span>
                </h2>
              </div>
              <div className="text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfServiceContent;

