import React from "react";
import ContactForm from "./_components/ContactForm";
import ContactHero from "./_components/ContactHero";
import Testimonial from "../components/Testimonial";
import FinalCTA from "../components/FinalCTA";

export const generateMetadata = () => {
  return {
    title: "Contact SyncOps",
    description:
      "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
    robots: {
      index: true,
      follow: true,
    },
  };
};

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Testimonial />
      <FinalCTA/>
    </div>
  );
};

export default page;
