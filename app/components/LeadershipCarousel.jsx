"use client";
import { useRef } from "react";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const team = [
  { name: "Abu Sufian", role: "Chief Executive Officer", image: "https://randomuser.me/api/portraits/men/32.jpg", linkedin: "https://www.linkedin.com/in/abu-sufian-syncops" },
  { name: "Fazal Tanveer", role: "Lead Developer", image: "https://randomuser.me/api/portraits/men/33.jpg", linkedin: "https://www.linkedin.com/in/fazal-tanveer-syncops" },
  { name: "Mohtashim Afzal", role: "Lead Developer", image: "https://randomuser.me/api/portraits/men/34.jpg", linkedin: "https://www.linkedin.com/in/mohtashim-afzal-syncops" },
  { name: "Sarah Johnson", role: "Head of Product Strategy", image: "https://randomuser.me/api/portraits/women/35.jpg", linkedin: "https://www.linkedin.com/in/sarah-johnson-syncops" },
];

const formatName = (fullName) => {
  const names = fullName.split(" ");
  const firstName = names[0];
  const lastName = names.slice(1).join(" ");
  return { firstName, lastName };
};

export default function LeadershipCarousel() {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }, // Show 3 on desktop for sliding
      }}
      spaceBetween={24}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, A11y]}
      className="overflow-hidden items-stretch"
    >
      {team.map((member) => {
        const { firstName, lastName } = formatName(member.name);
        return (
          <SwiperSlide key={member.name} className="flex h-full">
            <div className="relative flex flex-col items-center justify-between bg-black/50 backdrop-blur-xl rounded-2xl shadow-[0_4px_20px_rgba(0,244,200,0.18)] border border-[#1A1C2C] pt-10 pb-8 px-6 transition-transform hover:scale-105 group">
              {/* Avatar - now inside the card, not overflowing */}
              <div className="mt-2 mb-6 flex items-center justify-center">
                <div className="relative w-32 h-32 flex items-center justify-center group/avatar">
                  {/* Animated thin gradient border */}
                  <span className="absolute inset-0 rounded-full p-0.5 bg-[conic-gradient(from_0deg,_#00B894,_#00C4FF,_#00B894)] animate-spin-slow" style={{ filter: 'blur(0.5px)' }}></span>
                  {/* Avatar image with drop-shadow, perfect circle, and hover float/glow */}
                  <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#0B0A1C] border-2 border-transparent group-hover/avatar:shadow-[0_4px_24px_0_rgba(0,244,200,0.25)] group-hover/-translate-y-1.5 transition-all duration-500" style={{ boxShadow: '0 2px 12px 0 rgba(0,244,200,0.10)' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover rounded-full"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' fill='%2300C4FF'/%3E%3C/svg%3E"
                    />
                    {/* Thin animated gradient border overlay */}
                    <span className="absolute inset-0 rounded-full border-2 border-transparent" style={{ borderImage: 'linear-gradient(90deg, #00B894, #00C4FF) 1' }}></span>
                  </div>
                </div>
              </div>
              {/* Name and Role */}
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
                  <span>{firstName} </span>
                  <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent font-extrabold">{lastName}</span>
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#bbbbbb] mb-4 font-semibold">{member.role}</p>
              </div>
              {/* LinkedIn Button */}
              <a
                href={member.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#00B894] to-[#00C4FF] shadow-lg hover:scale-105 transition-transform duration-200 group"
                aria-label={`Connect with ${member.name} on LinkedIn`}
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-white transition-colors" />
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
} 