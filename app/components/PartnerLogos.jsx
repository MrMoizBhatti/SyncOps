"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Clutch",
    logo: "/trusted/Clutch.png",
    href: "https://clutch.co/profile/syncops",
  },
  {
    name: "Tech Behemoths",
    logo: "/trusted/Techbehemoths.png",
    href: "https://techbehemoths.com/company/syncops",
  },
  {
    name: "RocketReach",
    logo: "/trusted/rocket.png",
    href: "https://rocketreach.co/syncops-profile_b6e4db2fc708a182",
  },
  {
    name: "Trustpilot",
    logo: "/trusted/Trustpilot_logo.png",
    href: "https://www.trustpilot.com/review/syncops.tech",
  },
  {
    name: "Tracxn",
    logo: "/trusted/Tracxn.png",
    href: "https://tracxn.com/d/companies/syncops/__vXEaZ6f2kBDQ2cqCCZmYfSCy6Wqxpu2TXiTaJmWn-IA",
  },
  {
    name: "Crunchbase",
    logo: "/trusted/crunchbace.png",
    href: "https://www.crunchbase.com/organization/syncops",
  },
];

// duplicate list so scrolling feels continuous
const scrollingPartners = [...partners, ...partners];

export default function PartnerLogos() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 border-y border-gray-100">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0fbab1] mb-2">
              Trusted Network
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Registered &amp; trusted with leading global platforms
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              SyncOps is listed and verified on leading platforms like Clutch, Tech Behemoths, RocketReach,
              Trustpilot, Tracxn and Crunchbase—helping customers validate our track record and reputation.
            </p>
          </div>

          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center gap-12 sm:gap-16 lg:gap-20"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {scrollingPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center justify-center flex-shrink-0"
                >
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center"
                    aria-label={`${partner.name} profile for SyncOps`}
                    title={`${partner.name} profile for SyncOps`}
                  >
                    <div className="relative w-32 h-10 sm:w-40 sm:h-12 transition-all duration-300">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        sizes="160px"
                        className="object-contain"
                        style={{ filter: "grayscale(1)" }} // uniform gray logos
                      />
                    </div>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


