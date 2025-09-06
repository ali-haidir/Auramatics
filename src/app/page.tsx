"use client";

import Navbar from "./components/baselayout/navbar";
import { useRef } from "react";
import Hero from "./components/heroSection/Hero";
import AboutUS from "./components/heroSection/AboutUs";
import Services from "./components/heroSection/Services";
import IndustrySection from "./components/heroSection/ServedIndustries";
import WhyChoseUs from "./components/heroSection/WhyChoseUs";
import WorkingStack from "./components/heroSection/WorkingStack";
import Footer from "./components/baselayout/footer";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // #2596be   nav background colour

  // #EBF5FB highlight colour about us
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar
        aboutRef={aboutRef as React.RefObject<HTMLDivElement>}
        servicesRef={servicesRef as React.RefObject<HTMLDivElement>}
        contactRef={contactRef as React.RefObject<HTMLDivElement>}
        heroRef={heroRef as React.RefObject<HTMLDivElement>}
      />
      <Hero ref={heroRef} />

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

      <Services ref={servicesRef} />

      <IndustrySection />
      <WhyChoseUs />
      <WorkingStack />
      <Footer />
    </div>
  );
}
