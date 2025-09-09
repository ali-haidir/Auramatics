"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "@/assets/Homepage/logo_new.png";

type NavbarProps = {
  heroRef: React.RefObject<HTMLDivElement> | null;
  servicesRef: React.RefObject<HTMLDivElement> | null;
  aboutRef: React.RefObject<HTMLDivElement> | null;
  contactRef: React.RefObject<HTMLDivElement> | null;
};

export default function Navbar({
  heroRef,
  servicesRef,
  aboutRef,
  contactRef,
}: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  // Map section ids to their corresponding refs
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement> | null> = {
    home: heroRef,
    "our-services": servicesRef,
    about: aboutRef,
    contact: contactRef,
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to a particular ref
  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      const offset = 60;
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { href: "#home", id: "home", label: "Home" },
    { href: "#our-services", id: "our-services", label: "Services" },
    { href: "#about", id: "about", label: "About" },
    // { href: "#contact", id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-6 py-2 flex justify-between items-center shadow-sm rounded-md transition-colors duration-300 ${
        isScrolled ? "bg-white backdrop-blur-md text-black" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={60} height={60} priority />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-900">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
              setActiveSection(item.id);
            }}
            className={`relative font-bold bg-transparent border-none outline-none cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } ${
              activeSection === item.id
                ? "after:absolute after:left-1/2 after:bottom-[-9px] after:w-2 after:h-2 after:-translate-x-1/2 after:rounded-full after:bg-[#5c5ccd]"
                : ""
            }`}
            style={{ background: "none" }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Call to Action Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
        className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-purple-900 text-white font-semibold py-2 px-4 rounded-md shadow hover:from-blue-500 hover:to-purple-700 transition-all duration-300"
      >
        Get in Touch
      </button>

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden flex items-center justify-center p-2 rounded-md text-[#011632] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white backdrop-blur-md shadow-md rounded-b-md py-4 px-6 flex flex-col items-start gap-4 md:hidden`}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className="w-full text-left font-bold bg-transparent border-none outline-none cursor-pointer text-[#011632]"
              style={{ background: "none" }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="w-full bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:from-blue-500 hover:to-purple-700 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
}
