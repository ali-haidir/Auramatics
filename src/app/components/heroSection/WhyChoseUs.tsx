import React from "react";
import { FaSearch, FaCogs, FaPaperPlane, FaPencilAlt } from "react-icons/fa";

const whyChooseUsData = [
  {
    title: "Expert Team",
    description: "10+ years combined experience",
    icon: <FaSearch className="w-6 h-6" />,
  },
  {
    title: "Custom Solutions",
    description: "Tailored to your needs.",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof designs.",
    icon: <FaPaperPlane className="w-6 h-6" />,
  },
  {
    title: "End-to-End Delivery",
    description: "From concept to deployment.",
    icon: <FaPencilAlt className="w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 px-6 md:px-10 lg:p-20 space-y-8 bg-white">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[100%] text-[#011632] font-bold">
          BUSINESS VERTICALS
        </h2>
        <p className="text-xl md:text-2xl font-bold text-[#2596be] uppercase tracking-wide">
          WE MAKE OUR CUSTOMERS HAPPY
        </p>
        <p className="text-lg md:text-xl text-[#3C4959] leading-relaxed">
          We leverage our expertise to drive innovation and deliver tailored
          solutions across diverse business verticals, ensuring digital
          excellence and transformative impact.
        </p>
      </div>

      {/* Business Verticals with Connecting Line */}
      <div className="relative">
        {/* Connecting Dotted Line */}
        <div className="absolute top-8 left-0 right-0 h-0 border-t-2 border-dashed border-[#2596be] hidden lg:block"></div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {whyChooseUsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {/* Icon Card */}
              <div className="relative z-10 bg-white border-2 border-purple-800 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                <div className="text-[#2596be]">{item.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-black uppercase text-center leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#3C4959] leading-relaxed text-center max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
