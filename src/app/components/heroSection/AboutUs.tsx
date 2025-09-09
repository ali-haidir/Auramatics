import Image from "next/image";
import React, { forwardRef } from "react";
import InfoCard from "../subComponents/InfoCard";
import ProductDevelopment from "@/assets/aboutus/lightbulb-outline.svg";
import CustomSolutions from "@/assets/aboutus/face-agent.svg";
import DedicatedTeams from "@/assets/aboutus/account-group-outline.svg";

const listItemsCards = [
  {
    title: "Product Development",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image
        src={ProductDevelopment}
        alt="Product Development"
        width={60}
        height={60}
      />
    ),
  },
  {
    title: "Custom Solutions",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image
        src={CustomSolutions}
        alt="Custom Solutions"
        width={60}
        height={60}
      />
    ),
  },
  {
    title: "Dedicated Teams",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: (
      <Image
        src={DedicatedTeams}
        alt="Dedicated Teams"
        width={60}
        height={60}
      />
    ),
  },
];

interface Props {
  title: string;
  description: React.ReactNode;
}

const AboutUS = forwardRef<HTMLDivElement, Props>(
  ({ title, description }, ref) => {
    return (
      <section
        ref={ref}
        className="px-4 py-16 sm:px-6 md:px-10 lg:px-20 lg:py-24"
      >
        <div className="text-center space-y-4 mb-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-[56px] leading-tight text-[#011632] font-bold">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#3C4959] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {listItemsCards.map((item, idx) => (
            <InfoCard
              key={idx}
              {...item}
              highlight={idx === listItemsCards.length - 1}
            />
          ))}
        </div>
      </section>
    );
  }
);

AboutUS.displayName = "AboutUS";

export default AboutUS;
