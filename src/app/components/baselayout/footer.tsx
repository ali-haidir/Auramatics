import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

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
    <footer className="pt-12 px-6 w-full md:px-20 bg-[#0a1225] text-quaternary-gray text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6 flex flex-col items-center">
          <img
            src="/images/NavBar/AURAMATICS_Nofil.jpeg"
            alt="AURAMATICS Logo"
            className="h-16"
          />
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

        {footerLinks.map((section, idx) => (
          <div key={idx} className="space-y-6 flex flex-col items-center">
            <h4 className="text-sk-orange font-semibold text-lg">
              {section.title}
            </h4>
            <ul
              className={`text-sm font-bold ${section.listClass} text-center`}
            >
              {section.items.map((item, i) => (
                <li key={i} className="mb-2">
                  <Link href={item.url} className="hover:text-sk-orange">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center py-8 text-xs md:text-sm font-bold text-quaternary-gray max-w-7xl mx-auto">
        © 2025 AURAMATICS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
