import React from "react";
import { notFound } from "next/navigation";
import KeyFeatures from "../_components/KeyFeatures";
import Process from "../_components/Process";
import { servicesData } from "../../utils/servicesUtils";
import CallToAction from "../_components/CallToAction";
import Image from "next/image";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} | Our Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="py-10 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl text-balance leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
              <Image
                src={service.image}
                alt={`${service.title} illustration`}
                width={500}
                height={300}
                objectFit="cover"
                className="w-[500px] h-[300px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {service.processTitle}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl text-balance leading-relaxed">
            {service.processDescription}
          </p>
          <Process
            process={service.process}
            accentColor={service.accentColor}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Key Features
          </h2>
          <KeyFeatures
            features={service.features}
            accentColor={service.accentColor}
          />
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
