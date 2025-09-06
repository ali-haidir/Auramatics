// import { style } from "framer-motion/client";
import React from "react";
// import { IoArrowForward } from "react-icons/io5";

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
      className={`rounded-xl flex flex-col  justify-between gap-2 h-80 py-8 px-5  ${
        isHighlighted
          ? "border-[#2596be] border-2 bg-[#FFFDF5]"
          : "border-[#E7E7E7] border bg-white"
      } transition-all duration-200`}
      style={{ backgroundColor: `${bg}` }}
    >
      <div className="h-16 w-16 text-4xl text-[#2596be]">{icon}</div>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold text-xl leading-[30px] text-[#011632]">
          {title}
        </h4>
        {subtitle && (
          <p className="text-sm font-bold text-[#3C4959] leading-[22px]">
            {subtitle}
          </p>
        )}
        <p className="text-sm  text-[#3C4959] leading-[22px]">{description}</p>
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
