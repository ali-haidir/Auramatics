"use client";

import Navbar from "./components/baselayout/navbar";
import { useRef } from "react";
import Hero_new from "./components/heroSection/Hero_new";
import AboutUS from "./components/heroSection/AboutUs";
import Services from "./components/heroSection/Services";
import Floating3DObject from "./components/subComponents/Floating3DObject";
import IndustrySection from "./components/heroSection/ServedIndustries";
import WhyChoseUs from "./components/heroSection/WhyChoseUs";
import WorkingStack from "./components/heroSection/WorkingStack";
import Footer from "./components/baselayout/footer";
// import Hero from "./components/heroSection/Hero";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  // const officesRef = useRef<HTMLDivElement>(null);
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
      {/* <Hero ref={heroRef} /> */}
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
      {/* <AbstractLogoSection /> */}
      <Footer />
    </div>
  );
}
