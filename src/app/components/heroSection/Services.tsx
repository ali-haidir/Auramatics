import React, { forwardRef } from "react";
import ServiceFeatureCard from "../subComponents/serviceFeatureCard";
import { FaDatabase } from "react-icons/fa6";
import { TbBrandDatabricks } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
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
      className="pt-16 pb-10 px-6 md:px-10 lg:pt-20 lg:pb-20 space-y-6 bg-white min-h-screen"
    >
      <h2 className="text-4xl md:text-5xl lg:text-[64px]  leading-[100%] font-bold text-center text-[#011632]">
        Service We Offer
      </h2>
      <p className="text-center text-2xl leading-8  text-[#3C4959]">
        Explore what we can do for you.
      </p>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <button
        // onClick={(e) => {
        //   e.preventDefault();
        //   scrollToSection("contact");
        // }}
       
        className="mx-auto block bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:from-blue-500 hover:to-purple-700 transition text-center"
        
      >
        See All Services
      </button>
    </section>
  );
});

Services.displayName = "Services";

export default Services;
