import React, { forwardRef } from "react";
import ServiceFeatureCard from "../subComponents/serviceFeatureCard";
import { FaDatabase } from "react-icons/fa6";
import { TbBrandDatabricks } from "react-icons/tb";
import { TbAutomation } from "react-icons/tb";
import { MdOutlineWeb } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { RiAiGenerate2 } from "react-icons/ri";

const serviceFeatures = [
  {
    title: "Data Engineering",
    subtitle: "Build Reliable Data Foundations.",
    description:
      "We design and deploy modern data pipelines, warehouses, and cloud-native architectures that ensure scalability, security, and seamless integration for your business.",
    icon: <FaDatabase />,
    isHighlighted: true,
  },
  {
    title: "Data Analysis & Visualization",
    subtitle: "Turn raw data into actionable insights.",
    description:
      "Empower smarter decision-making with BI dashboards, custom reporting, and interactive visualizations tailored to your business goals.",
    icon: <TbBrandDatabricks />,
  },
  {
    title: "Data Science & AI",
    subtitle: "Harness the power of artificial intelligence.",
    description:
      "From predictive analytics to NLP and computer vision, we build AI models that help you unlock opportunities, automate workflows, and stay ahead of the competition.",
    icon: <RiAiGenerate2 />,
  },
  {
    title: "Agentic AI & Automation",
    subtitle: "Automate. Optimize. Scale.",
    description:
      "Leverage intelligent AI agents and automation tools to streamline operations, reduce costs, and improve efficiency across your workflows.",
    icon: <TbAutomation />,
  },
  {
    title: "Web Development",
    subtitle: "Design & Develop for the Web.",
    description:
      "We craft responsive websites, scalable SaaS platforms, and enterprise-grade web applications optimized for performance and user experience.",
    icon: <MdOutlineWeb />,
  },
  {
    title: "Mobile App Development",
    subtitle: "Your Business in Every Pocket.",
    description:
      "Develop robust cross-platform iOS and Android apps with seamless user experiences, powerful backends, and future-ready scalability.",
    icon: <FaMobileAlt />,
  },
];

const Services = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="our-services"
      className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-20 px-4 sm:px-6 md:px-10 space-y-6 sm:space-y-8 bg-white min-h-screen"
    >
      <div className="text-center space-y-4 sm:space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[100%] font-bold text-[#011632]">
          Services We Offer
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

      {/* <div className="flex justify-center pt-4 sm:pt-6">
        <button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold py-3 sm:py-2 px-6 sm:px-4 rounded-md shadow hover:from-blue-500 hover:to-purple-700 transition-all duration-300 text-center text-sm sm:text-base">
          See All Services
        </button>
      </div> */}
    </section>
  );
});

Services.displayName = "Services";

export default Services;
