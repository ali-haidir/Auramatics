import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";
import Logo from "@/assets/Homepage/logo_new.png";
import Image from "next/image";
// import AbstractLogo from "@/assets/Homepage/abstract_logo.png";

const footerLinks = [
  {
    title: "Services",
    listClass: "space-y-2",
    items: [
      {
        name: "Data Engineering",
        url: "#our-services",
      },
      { name: "Data Analysis & Visualization", url: "#our-services" },
      {
        name: "Data Science & AI",
        url: "#our-services",
      },
      {
        name: "Agentic AI & Automation",
        url: "#our-services",
      },
      {
        name: "Web Development",
        url: "#our-services",
      },
      {
        name: "Mobile App Development",
        url: "#our-services",
      },
    ],
  },
  {
    title: "Contact",
    listClass: "space-y-2",
    items: [
      {
        name: "Get in Touch",
        url: "/",
      },
      { name: "contact@auramatics.com", url: "/" },
      { name: "Schedule a Consultation", url: "/" },
    ],
  },
];

const socialIcons = [
  { icon: FaFacebookF, href: "https://facebook.com" },
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaLinkedinIn, href: "https://linkedin.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="relative pt-12 px-6 w-full md:px-20 bg-[#0a1225] text-quaternary-gray text-center overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6 flex flex-col items-center">
          <div className="flex items-center justify-center">
            <Image
              src={Logo}
              alt="AURAMATICS Logo"
              className="h-24 w-24"
              style={{
                animation: "stepRotate 7s infinite linear",
                transformOrigin: "center center",
              }}
              height={96}
              width={96}
            />
          </div>
          <p className="text-base font-bold leading-6 text-center">
            AURAMATICS | Data & AI Solutions
            <br />
            Transforming businesses with intelligent technology
          </p>
          <div className="flex space-x-4 justify-center">
            {socialIcons.map(({ icon: Icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                className="rounded-md bg-[#3D3D3D] hover:bg-sk-orange transition-colors duration-300 w-10 h-10 flex items-center justify-center"
              >
                <Icon className="text-lg text-quaternary-gray hover:text-primary-gray" />
              </Link>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-6 flex flex-col items-center mt-4">
          <h4 className="text-sk-orange font-semibold text-lg">
            {footerLinks[0].title}
          </h4>
          <ul
            className={`text-sm font-bold ${footerLinks[0].listClass} text-center`}
          >
            {footerLinks[0].items.map((item, i) => (
              <li key={i} className="mb-2">
                <Link href={item.url} className="hover:text-sk-orange">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-6 flex flex-col items-center mt-12">
          <h4 className="text-sk-orange font-semibold text-lg">
            {footerLinks[1].title}
          </h4>
          <ul
            className={`text-sm font-bold ${footerLinks[1].listClass} text-center`}
          >
            {footerLinks[1].items.map((item, i) => (
              <li key={i} className="mb-2">
                <Link href={item.url} className="hover:text-sk-orange">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center py-8 text-xs md:text-sm font-bold text-quaternary-gray max-w-7xl mx-auto">
        © 2025 AURAMATICS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
