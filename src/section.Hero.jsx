"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// slides
const SLIDES = [
  {
    title: "Upgrade Your Skills Today ",
    desc: "Learn modern skills with practical courses and real projects.",
    img: "/hero-1.png",
  },
  {
    title: "Learn from Industry Experts",
    desc: "Get real-world knowledge from professionals who build products.",
    img: "/hero-2.png",
  },
  {
    title: "Build Real Projects",
    desc: "Practice with hands-on coding and grow your portfolio.",
    img: "/hero-3.png",
  },
];


//   Hero slider
 
const HeroSection = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        className="h-[100vh]"
      >
        {SLIDES.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[70vh] flex items-center">
              {/* image */}
              <Image
                width={800}
                height={800}
                src={item.img}
                alt="slide"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* content */}
              <div className="relative z-10 max-w-3xl px-6 md:px-16 text-white">
                {/* title */}
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {item.title}
                </h1>

                {/* desc */}
                <p className="mt-3 text-sm md:text-base opacity-80 max-w-md">
                  {item.desc}
                </p>

                {/* button */}
                <div className="mt-6">
                  <Link
                    href="/courses"
                    className="btn btn-primary bg-pink-500 border-none hover:bg-pink-600"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
