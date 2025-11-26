 "use client";
import { ParallaxProvider } from 'react-scroll-parallax';
import ClientFloatingCTA from './components/ClientFloatingCTA';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Services from './components/Services';
import IndustriesWeServe from './components/IndustriesWeServe';
import WhyChooseUs from './components/WhyChooseUs';
import TrackRecord from './components/TrackRecord';
import Testimonial from './components/Testimonial';
import LeadershipSection from './components/LeadershipSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import CaseStudies from './components/CaseStudies';
import MobileStickyCTA from './components/MobileStickyCTA';
import ScrollToTop from './components/ScrollToTop';
import TechnologyStackCards from './components/TechnologyStackCards';

export default function Home() {
  return (
    <ParallaxProvider>
      <>
        <ClientFloatingCTA />
        <section className="bg-brand-navy text-white">
          <Hero />
        </section>

        <section data-gsap-section className="bg-white py-8">
          <div data-gsap-stagger className="max-w-6xl mx-auto">
            <MetricsBar />
          </div>
        </section>

        <section data-gsap-section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
          <div data-gsap-stagger className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-body-xl text-gray-800 font-semibold leading-relaxed">
              We partner with startups, enterprises, and visionary founders to turn bold ideas into resilient, scalable
              digital products—backed by 50+ launches and 99.5% uptime.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-aqua/5 to-transparent"></div>
        </section>

        <section data-gsap-section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent"></div>
          <div data-gsap-stagger>
            <Services />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/20 to-transparent"></div>
        </section>

        <section data-gsap-section>
          <div data-gsap-stagger>
            <CaseStudies />
          </div>
        </section>

        <section data-gsap-section className="bg-white py-20">
          <div data-gsap-stagger>
            <IndustriesWeServe />
          </div>
        </section>

        <section data-gsap-section className=" text-white">
          <div data-gsap-stagger>
            <WhyChooseUs />
          </div>
        </section>

        <section data-gsap-section className="bg-white py-20">
          <div data-gsap-stagger>
            <TrackRecord />
          </div>
        </section>

        <section data-gsap-section className=" text-white">
          <div data-gsap-stagger>
            <Testimonial />
          </div>
        </section>

        <section data-gsap-section className="bg-gray-50">
          <div data-gsap-stagger>
            <TechnologyStackCards />
          </div>
        </section>

        <section data-gsap-section>
          <div data-gsap-stagger>
            <LeadershipSection />
          </div>
        </section>

        <section data-gsap-section className="bg-gradient-to-br from-brand-navy via-gray-900 to-brand-navy py-20">
          <div data-gsap-stagger>
            <FAQ />
          </div>
        </section>

        <section data-gsap-section>
          <FinalCTA />
        </section>

        <MobileStickyCTA />
        <ScrollToTop />
      </>
    </ParallaxProvider>
  );
}
