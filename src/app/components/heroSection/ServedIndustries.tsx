import { CiBadgeDollar } from "react-icons/ci";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { IoPower } from "react-icons/io5";
import { CiAirportSign1 } from "react-icons/ci";
import { MdPrecisionManufacturing } from "react-icons/md";

import IndustryCard from "../subComponents/IndustryCard";

const industries = [
  {
    title: "Finance & Banking ",
    description: "lorem ipsum",
    icon: <CiBadgeDollar />,
    isHighlighted: true,
  },
  {
    title: "Healthcare & Pharma ",
    description: "lorem ipsum",
    icon: <MdOutlineHealthAndSafety />,
  },
  {
    title: "Retail & eCommerce ",
    description: "lorem ipsum d",
    icon: <CiShoppingTag />,
  },
  {
    title: "Power and Telecom",
    description: "lorem ipsum d",
    icon: <IoPower />,
  },
  {
    title: "Aviation",
    description: "lorem ipsum d",
    icon: <CiAirportSign1 />,
  },
  {
    title: "Manufacturing & Logistics ",
    description: "lorem ipsum d",
    icon: <MdPrecisionManufacturing />,
  },
];

export default function IndustrySection() {
  return (
    <section className="py-10 px-6 md:px-10 lg:p-20 space-y-6">
      <h2 className="text-4xl md:5xl lg:text-[64px] leading-[100%] text-[#011632] font-bold text-center">
        Industries We Serve
      </h2>
      <p className="text-center text-2xl leading-8 font-bold text-[#3C4959]">
        Our services are tailored to meet the unique needs of various industries
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {industries.map((industry, idx) => (
          <IndustryCard key={idx} {...industry} />
        ))}
      </div>
    </section>
  );
}
