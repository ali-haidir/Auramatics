"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import HeroBg from "@/assets/Homepage/background.png";
import LogoImage from "@/assets/Homepage/logo_new.png";

const Hero_new = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-12 px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8 lg:pl-16">
        {/* Main Content */}
        <div className="text-white space-y-4 sm:space-y-6">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Where Data Meets Intelligence
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            We build intelligent solutions in Data Engineering, AI, Automation,
            Web & Mobile Development.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link href="/contact" passHref>
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-blue-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Get a Free Consultation
              </button>
            </Link>

            <button
              onClick={() => {
                const servicesSection = document.getElementById("our-services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
            >
              See Our Work
            </button>
          </div>
        </div>

        {/* Stats Section */}

        <StatsSection />
      </div>

      {/* Logo and Branding Section */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center -mt-8 sm:-mt-12 lg:-mt-16 -ml-8 sm:-ml-16 lg:-ml-24">
        {/* Large Graphic Logo */}
        <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-7xl">
          <Image
            src={LogoImage}
            alt="AUROMATICS Logo"
            width={3000}
            height={3000}
            className="w-full h-auto object-contain block scale-110 sm:scale-120"
            priority
          />
        </div>

        {/* Company Name */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center -mt-12 sm:-mt-16 lg:-mt-20">
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
    },
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 max-w-xl">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 w-full sm:w-40 text-center hover:bg-white/20 transition-all duration-200 hover:scale-105"
          animate={{
            y: [0, -20, 0, -20, 0],
            scale: [1, 1.05, 1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: index * 0.3, // Creates wave effect with 0.3s delay between each card
          }}
        >
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
            {stat.number}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-gray-200">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

Hero_new.displayName = "Hero_new";

export default Hero_new;
