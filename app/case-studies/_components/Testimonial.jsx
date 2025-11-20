"use client";
import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import InViewWrapper from "../../components/InViewWrapper";

const Testimonial = ({ quote, author, role, company, image, rating = 5 }) => {
  if (!quote) return null;

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-aqua/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <InViewWrapper animation="scaleIn" className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            {/* Quote icon decoration */}
            <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-32 h-32 text-brand-teal" />
            </div>
            
            {/* Quote */}
            <blockquote className="mb-8 relative z-10">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-brand-teal flex-shrink-0 mt-1" />
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
                  {quote}
                </p>
              </div>
            </blockquote>
            
            {/* Author Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-brand-teal/20 group-hover:ring-brand-teal/40 transition-all duration-300">
                  <Image
                    src={image}
                    alt={author}
                    width={64}
                    height={64}
                    className="rounded-full object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <div className="font-bold text-xl text-brand-navy group-hover:text-brand-teal transition-colors">{author}</div>
                  <div className="text-base text-gray-600 font-medium">{role}</div>
                  <div className="text-sm text-gray-500">{company}</div>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 px-4 py-2 rounded-full">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-6 h-6 transition-all duration-300 ${
                      index < rating
                        ? "text-yellow-400 fill-current scale-100"
                        : "text-gray-300 scale-90"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-600">{rating}.0</span>
              </div>
            </div>
          </div>
        </InViewWrapper>
      </div>
    </section>
  );
};

export default Testimonial;
