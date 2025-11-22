import React from "react";
import ServicesHero from "./_components/ServicesHero";
import Services from "./_components/Services";
import ProcessTimeline from "./_components/ProcessTimeline";
import Testimonial from "../components/Testimonial";

import InViewWrapper from "../components/InViewWrapper";

export const generateMetadata = () => {
  return {
    title: "Services - SyncOps",
    description: "Empowering your digital transformation with smart solutions",
    robots: {
      index: true,
      follow: true,
    },
  };
};

const page = () => {
  return (
    <>
      <ServicesHero />
      <InViewWrapper>
        <Services />
      </InViewWrapper>
      <InViewWrapper>
        <ProcessTimeline />
      </InViewWrapper>
      <InViewWrapper>
        <Testimonial />
      </InViewWrapper>
    </>
  );
};

export default page;
