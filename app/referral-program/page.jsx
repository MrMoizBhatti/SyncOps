export const generateMetadata = () => ({
  title: "Referral Program - SyncOps",
  description:
    "Earn rewards by referring clients and talent to SyncOps. Transparent rewards, simple steps, and fast payouts.",
  openGraph: {
    title: "SyncOps Referral Program",
    description:
      "Refer clients or talent to SyncOps and earn rewards when they engage.",
    url: "https://syncops.co/referral-program",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "SyncOps Referral Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncOps Referral Program",
    description:
      "Refer clients or talent to SyncOps and earn rewards when they engage.",
    images: ["/images/logo.png"],
  },
  robots: { index: true, follow: true },
});

import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ReferralHero from "./_components/ReferralHero";
import HowItWorks from "./_components/HowItWorks";
import BenefitsSection from "./_components/BenefitsSection";
import ProgramTiers from "./_components/ProgramTiers";
import RewardsSection from "./_components/RewardsSection";
import EligibilityGuidelines from "./_components/EligibilityGuidelines";
import ReferralSocialProof from "./_components/ReferralSocialProof";

export default function ReferralProgramPage() {
  return (
    <div className="py-0">
      <ReferralHero />
      <HowItWorks />
      <BenefitsSection />
      <ProgramTiers />
      <RewardsSection />
      <EligibilityGuidelines />
      <ReferralSocialProof />

      {/* FAQs - Dark Background */}
      <section className="relative bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] py-16 overflow-hidden mt-0">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#00F8B4]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#00C4FF]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <FAQ />
        </div>
      </section>

      {/* CTA - site component */}
      <div className="mt-0">
        <CTA />
      </div>

      {/* JSON-LD Schema for Program */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProgramMembership",
            "name": "SyncOps Referral Program",
            "url": "https://syncops.co/referral-program",
            "programName": "SyncOps Referral Program",
            "description": "Refer clients or talent to SyncOps and earn rewards when they engage.",
            "memberBenefits": [
              "Transparent rewards",
              "Fast qualification",
              "Multiple referral paths"
            ]
          })
        }}
      />
    </div>
  );
}


