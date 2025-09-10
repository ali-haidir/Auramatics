import React, { forwardRef } from "react";
import ServiceFeatureCard from "../subComponents/serviceFeatureCard";
import { FaDatabase } from "react-icons/fa6";
import { TbBrandDatabricks } from "react-icons/tb";
import { TbAutomation } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { RiAiGenerate2 } from "react-icons/ri";

// change links here

const serviceFeatures = [
  {
    title: "Data Engineering",
    subtitle: "Build Reliable Data Foundations.",
    description: "Data Pipelines, ETL, Data Warehousing, Cloud Integration.",
    icon: <FaDatabase />,
    isHighlighted: true,
  },
  {
    title: "Data Analysis & Visualization",
    subtitle: "Turn Complex Data into Actionable Insights.",
    description: "BI Dashboards, Custom Reporting, Storytelling with Data.",
    icon: <TbBrandDatabricks />,
  },
  {
    title: "Data Science & AI",
    subtitle: "Harness the Power of AI.",
    description: "AI Agents, Process Automation, Intelligent Workflows.",
    icon: <RiAiGenerate2 />,
  },
  {
    title: "Agentic AI & Automation",
    subtitle: "Automate. Optimize. Scale.",
    description:
      "Comprehensive security reports documenting all activities, incidents, and observations during each shift to keep you informed.",
    icon: <TbAutomation />,
  },
  {
    title: "Web Development",
    subtitle: "Design & Develop for the Web.",
    description: "Modern Websites, Web Apps, SaaS Platforms.",
    icon: <MdOutlineWeb />,
  },
  {
    title: "Mobile App Development",
    subtitle: "Your Business in Every Pocket.",
    description: "Cross-platform apps, iOS & Android, Scalable backend.",
    icon: <FaMobileAlt />,
  },
];

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-20 px-4 sm:px-6 md:px-10 space-y-6 sm:space-y-8 bg-white min-h-screen"
    >
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[100%] font-bold text-[#011632]">
          Service We Offer
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl leading-6 sm:leading-8 text-[#3C4959] max-w-3xl mx-auto px-4">
          Explore what we can do for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {serviceFeatures.map((service, index) => (
            <ServiceFeatureCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              icon={service.icon}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-4 sm:pt-6">
        <button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold py-3 sm:py-2 px-6 sm:px-4 rounded-md shadow hover:from-blue-500 hover:to-purple-700 transition-all duration-300 text-center text-sm sm:text-base">
          See All Services
        </button>
      </div>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
