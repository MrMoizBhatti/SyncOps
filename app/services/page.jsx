import React from "react";
import ServicesPageContent from "./_components/ServicesPageContent";

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
  return <ServicesPageContent />;
};

export default page;
