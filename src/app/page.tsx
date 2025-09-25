"use client";

import { useRef } from "react";
import Navbar from "./components/baselayout/navbar";
import Hero_new from "./components/heroSection/Hero_new";
import AboutUS from "./components/heroSection/AboutUs";
import Services from "./components/heroSection/Services";
import Floating3DObject from "./components/subComponents/Floating3DObject";
import IndustrySection from "./components/heroSection/ServedIndustries";
import WhyChoseUs from "./components/heroSection/WhyChoseUs";
import WorkingStack from "./components/heroSection/WorkingStack";
import Footer from "./components/baselayout/footer";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <Hero_new ref={heroRef} />
      <AboutUS
        ref={aboutRef}
        title="About Us"
        description={
          <>
            We don’t just create technology <br /> we create intelligent
            ecosystems that drive growth.
          </>
        }
      />

      <Floating3DObject />

      <Services ref={servicesRef} />

      <IndustrySection />
      <WhyChoseUs />
      <WorkingStack />
      <Footer />
    </div>
  );
}
