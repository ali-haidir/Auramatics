// components/Hero.tsx
import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
// import HeroBg from "@/public/images/Homepage/image.png";

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative h-[776px] flex items-end px-6 py-20 md:p-16 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={"/images/Homepage/image.png"}
        alt="Hero background"
        fill
        className="object-cover"
        priority
        // height={776}
        // width={1920}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white space-y-6">
        {/* <h1 className="text-4xl md:text-[56px] font-bold leading-16">
          <span className="text-sk-orange">Professional</span> Security
          Services,
          <br className="hidden md:block" />
          <span className="text-sk-orange">Tailored</span> to Your Needs
        </h1> */}
        <p className=" text-xl leading-7">Safety, with a smile!</p>
        <div className="flex gap-4">
          <Link href="/" passHref>
            <button className="bg-[#2596be] cursor-pointer text-black font-semibold px-6 py-3 rounded ">
              View our services
            </button>
          </Link>
          {/* change link here  */}
          <Link href="/" passHref>
            <button className="border border-sk-orange text-sk-orange font-semibold px-6 py-3 cursor-pointer rounded hover:text-black hover:bg-[#2596be]">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
