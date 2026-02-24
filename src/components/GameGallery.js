"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/effect-fade";

export default function GameGallery() {
  const images = [
    "/image/screenshots/1.jpg",
    "/image/screenshots/2.jpg",
    "/image/screenshots/3.jpg",
    "/image/screenshots/4.jpg",
    "/image/screenshots/5.jpg",
    "/image/screenshots/6.jpg",
    "/image/screenshots/7.jpg",
    "/image/screenshots/8.jpg",
    "/image/screenshots/9.jpg",
    "/image/screenshots/10.jpg",
    "/image/screenshots/11.jpg",
    "/image/screenshots/12.jpg",
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto my-12 group overflow-hidden shadow-lg shadow-black/20 border border-mist-800">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1400}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        className="relative h-[700px]"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div className="relative w-full h-[700px] overflow-hidden">
                <Image
                  src={src}
                  alt="game screenshot"
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  quality={80}
                  className={`object-cover transition-transform ease-out duration-[6000ms] 
                  ${isActive ? "scale-105" : "scale-110"}`}
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <button
        data-magnetic
        className="prev-btn absolute z-30 left-6 top-1/2 -translate-y-1/2
        backdrop-blur-md bg-white/10
        border border-white/20
        rounded-2xl p-4 text-white text-3xl
        hover:bg-white/20
        transition-all duration-300
        opacity-0 group-hover:opacity-100"
      >
        <FiChevronLeft />
      </button>

      <button
        data-magnetic
        className="next-btn absolute z-30 right-6 top-1/2 -translate-y-1/2
        backdrop-blur-md bg-white/10
        border border-white/20
        rounded-2xl p-4 text-white text-3xl
        hover:bg-white/20
        transition-all duration-300
        opacity-0 group-hover:opacity-100"
      >
        <FiChevronRight />
      </button>

      {/* Edge Fade */}
      <div className="pointer-events-none z-20 absolute inset-y-0 left-0 w-40 bg-linear-to-r  from-mist-950/95 to-transparent" />
      <div className="pointer-events-none z-20 absolute inset-y-0 right-0 w-40 bg-linear-to-l  from-mist-950/95 to-transparent" />
    </section>
  );
}
