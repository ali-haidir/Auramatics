// components/Hero_new.tsx
import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

import HeroBg from "@/assets/Homepage/background.png";
import LogoImage from "@/assets/Homepage/logo_new.png";

const Hero_new = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-6 py-20 lg:px-16 lg:py-24 "
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center space-y-8 lg:pl-16">
        {/* Main Content */}
        <div className="text-white space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Where Data Meets Intelligence
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            We build intelligent solutions in Data Engineering, AI, Automation,
            Web & Mobile Development.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" passHref>
              <button className="bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get a Free Consultation
              </button>
            </Link>
            <Link href="/portfolio" passHref>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                See Our Work
              </button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />
      </div>

      {/* Logo and Branding Section */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center -mt-12 lg:-mt-16 -ml-16 lg:-ml-24">
        {/* Large Graphic Logo */}
        <div className="w-full max-w-7xl">
          <Image
            src={LogoImage}
            alt="AUROMATICS Logo"
            width={3000}
            height={3000}
            className="w-full h-auto object-contain block scale-120"
            priority
          />
        </div>

        {/* Company Name */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center -mt-20">
          AUROMATICS
        </h2>
      </div>
    </section>
  );
});

// Stats Section Component
const StatsSection = () => {
  const stats = [
    {
      number: "120+",
      label: "Projects Delivered",
      delay: "0ms",
    },
    {
      number: "10+",
      label: "Years Experience",
      delay: "200ms",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      delay: "400ms",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-8 max-w-xl">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 w-40 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          style={{
            animation: `fadeInUp 0.6s ease-out ${stat.delay} both`,
          }}
        >
          <div className="text-2xl md:text-3xl font-bold text-white mb-1">
            {stat.number}
          </div>
          <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

Hero_new.displayName = "Hero_new";

export default Hero_new;
