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
      className={`rounded-xl flex flex-col items-center justify-center gap-4 h-72 py-6 px-4 text-center ${
        isHighlighted
          ? "border-[#2596be] border-2 bg-[#FFFDF5]"
          : "border-[#E7E7E7] border bg-white"
      } transition-all duration-200`}
      style={{ backgroundColor: `${bg}` }}
    >
      <motion.div
        className="rounded-xl p-4 w-16 h-16 flex items-center justify-center group-hover:border-[#2596be] group-hover:shadow-lg transition-all duration-500"
        animate={{ x: [0, +220, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 0.08,
        }}
      >
        <div className="h-12 w-12 text-5xl text-[#2596be]">{icon}</div>
      </motion.div>
      <div className="flex flex-col gap-2 items-center">
        <h4 className="font-bold text-xl leading-[30px] text-[#011632]">
          {title}
        </h4>
        {subtitle && (
          <p className="text-sm font-bold text-[#3C4959] leading-[22px]">
            {subtitle}
          </p>
        )}
        <p className="text-sm text-[#3C4959] leading-[22px]">{description}</p>
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
