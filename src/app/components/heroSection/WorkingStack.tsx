"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaUbuntu,
  FaDocker,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaGitAlt,
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGraphql,
  SiTailwindcss,
  SiExpress,
  SiNginx,
} from "react-icons/si";

const technologyStack = [
  {
    name: "Ubuntu",
    icon: <FaUbuntu className="w-8 h-8" />,
    color: "text-orange-500",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-8 h-8" />,
    color: "text-gray-800",
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: <FaReact className="w-8 h-8" />,
    color: "text-blue-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-8 h-8" />,
    color: "text-green-600",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Python",
    icon: <FaPython className="w-8 h-8" />,
    color: "text-yellow-500",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-8 h-8" />,
    color: "text-yellow-400",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-8 h-8" />,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-8 h-8" />,
    color: "text-blue-700",
  },
  {
    name: "Redis",
    icon: <SiRedis className="w-8 h-8" />,
    color: "text-red-500",
  },
  {
    name: "AWS",
    icon: <FaAws className="w-8 h-8" />,
    color: "text-orange-400",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes className="w-8 h-8" />,
    color: "text-blue-600",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="w-8 h-8" />,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-8 h-8" />,
    color: "text-gray-800",
  },
  {
    name: "Linux",
    icon: <FaLinux className="w-8 h-8" />,
    color: "text-yellow-600",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="w-8 h-8" />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-8 h-8" />,
    color: "text-cyan-500",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="w-8 h-8" />,
    color: "text-purple-600",
  },
  {
    name: "Express",
    icon: <SiExpress className="w-8 h-8" />,
    color: "text-gray-600",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="w-8 h-8" />,
    color: "text-pink-600",
  },
  {
    name: "Terraform",
    icon: <SiTerraform className="w-8 h-8" />,
    color: "text-purple-500",
  },
  {
    name: "Jenkins",
    icon: <SiJenkins className="w-8 h-8" />,
    color: "text-red-600",
  },
  {
    name: "Nginx",
    icon: <SiNginx className="w-8 h-8" />,
    color: "text-green-600",
  },
  {
    name: "Google Cloud",
    icon: <FaGoogle className="w-8 h-8" />,
    color: "text-blue-500",
  },
  {
    name: "Microsoft Azure",
    icon: <FaMicrosoft className="w-8 h-8" />,
    color: "text-blue-600",
  },
];

export default function WorkingStack() {
  return (
    <section className="py-10 px-6 md:px-10 lg:p-20 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[100%] text-[#011632] font-bold">
          Working Stack
        </h2>
        <p className="text-xl md:text-2xl font-bold text-[#2596be] uppercase tracking-wide">
          Stack We Trust
        </p>
        <p className="text-lg md:text-xl text-[#3C4959] leading-relaxed">
          We leverage cutting-edge technologies and proven frameworks to deliver
          robust, scalable, and innovative solutions that drive digital
          transformation.
        </p>
      </div>

      {/* Technology Icons Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-6 lg:gap-8">
          {technologyStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-3 group cursor-pointer"
            >
              {/* Technology Icon */}
              <div className="relative">
                <motion.div
                  className="bg-white  rounded-xl p-4 w-16 h-16 flex items-center justify-center group-hover:border-[#2596be] group-hover:shadow-lg transition-all duration-300"
                  animate={{ y: [0, -22, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    delay: index * 0.08,
                  }}
                >
                  <div
                    className={`${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {tech.icon}
                  </div>
                </motion.div>
              </div>

              {/* Technology Name */}
              <span className="text-xs sm:text-sm font-medium text-[#3C4959] text-center group-hover:text-[#2596be] transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Description */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-base md:text-lg text-[#3C4959] leading-relaxed">
          Our technology stack is carefully curated to ensure optimal
          performance, security, and scalability for every project we undertake.
        </p>
      </div>
    </section>
  );
}
