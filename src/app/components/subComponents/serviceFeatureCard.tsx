"use client";
// import { style } from "framer-motion/client";
import React from "react";
// import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
interface ServiceFeatureCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon?: React.ReactNode;
  isHighlighted?: boolean;
  bg?: string;
}

const ServiceFeatureCard = ({
  title,
  subtitle,
  description,
  icon,
  isHighlighted = false,
  bg = "#FAFAFA",
}: ServiceFeatureCardProps) => {
  return (
    <div
      className={`rounded-xl flex flex-col items-center justify-center gap-3 sm:gap-4 h-64 sm:h-72 py-4 sm:py-6 px-3 sm:px-4 text-center hover:scale-105 ${
        isHighlighted
          ? "border-[#2596be] border-2 bg-[#FFFDF5]"
          : "border-[#E7E7E7] border bg-white"
      } transition-all duration-200`}
      style={{ backgroundColor: `${bg}` }}
    >
      <div className="h-8 w-8 sm:h-12 sm:w-12 text-3xl sm:text-5xl text-[#2596be]">
        {icon}
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 items-center">
        <h4 className="font-bold text-lg sm:text-xl leading-[24px] sm:leading-[30px] text-[#011632]">
          {title}
        </h4>
        {subtitle && (
          <p className="text-xs sm:text-sm font-bold text-[#3C4959] leading-[18px] sm:leading-[22px]">
            {subtitle}
          </p>
        )}
        <p className="text-xs sm:text-sm text-[#3C4959] leading-[18px] sm:leading-[22px]">
          {description}
        </p>
      </div>
      <button className="text-mustard-yellow font-bold text-sm flex items-center gap-1 hover:underline mt-2">
        {/* Learn more
        <span>
          <IoArrowForward />
        </span> */}
      </button>
    </div>
  );
};

export default ServiceFeatureCard;
