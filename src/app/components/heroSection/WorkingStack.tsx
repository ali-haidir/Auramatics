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
  SiSnowflake,
  SiDatabricks,
  SiApachespark,
  SiApacheairflow,
  SiFlutter,
  SiReact,
  SiAngular,
  SiDjango,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,
  SiLangchain,
  SiUipath,
  SiOpenai,
  SiMlflow,
} from "react-icons/si";

// Technology categories organized into three cards
const technologyCategories = [
  {
    title: "Cloud & Data Engineering",
    technologies: [
      {
        name: "Azure",
        icon: <FaMicrosoft className="w-8 h-8" />,
        color: "text-blue-600",
      },
      {
        name: "AWS",
        icon: <FaAws className="w-8 h-8" />,
        color: "text-orange-400",
      },
      {
        name: "GCP",
        icon: <FaGoogle className="w-8 h-8" />,
        color: "text-blue-500",
      },
      {
        name: "Snowflake",
        icon: <SiSnowflake className="w-8 h-8" />,
        color: "text-blue-400",
      },
      {
        name: "Databricks",
        icon: <SiDatabricks className="w-8 h-8" />,
        color: "text-orange-500",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-8 h-8" />,
        color: "text-blue-700",
      },
      {
        name: "Power BI",
        icon: <FaMicrosoft className="w-8 h-8" />,
        color: "text-yellow-500",
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes className="w-8 h-8" />,
        color: "text-blue-600",
      },
      {
        name: "Docker",
        icon: <FaDocker className="w-8 h-8" />,
        color: "text-blue-500",
      },
      {
        name: "Apache Spark",
        icon: <SiApachespark className="w-8 h-8" />,
        color: "text-red-500",
      },
      {
        name: "Airflow",
        icon: <SiApacheairflow className="w-8 h-8" />,
        color: "text-cyan-500",
      },
    ],
  },
  {
    title: "Web and mobile app developement ",
    technologies: [
      {
        name: "React",
        icon: <FaReact className="w-8 h-8" />,
        color: "text-blue-400",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-8 h-8" />,
        color: "text-gray-800",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-8 h-8" />,
        color: "text-green-600",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-8 h-8" />,
        color: "text-gray-600",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-8 h-8" />,
        color: "text-cyan-500",
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="w-8 h-8" />,
        color: "text-blue-400",
      },
      {
        name: "React Native",
        icon: <SiReact className="w-8 h-8" />,
        color: "text-blue-500",
      },
      {
        name: "Angular",
        icon: <SiAngular className="w-8 h-8" />,
        color: "text-red-500",
      },
      {
        name: "Django",
        icon: <SiDjango className="w-8 h-8" />,
        color: "text-green-600",
      },
      {
        name: "FastAPI",
        icon: <SiFastapi className="w-8 h-8" />,
        color: "text-green-500",
      },
    ],
  },
  {
    title: "AI, ML & Automation",
    technologies: [
      {
        name: "Python",
        icon: <FaPython className="w-8 h-8" />,
        color: "text-yellow-500",
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="w-8 h-8" />,
        color: "text-orange-500",
      },
      {
        name: "PyTorch",
        icon: <SiPytorch className="w-8 h-8" />,
        color: "text-red-500",
      },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="w-8 h-8" />,
        color: "text-orange-600",
      },
      {
        name: "Hugging Face",
        icon: <SiHuggingface className="w-8 h-8" />,
        color: "text-yellow-500",
      },
      {
        name: "LangChain",
        icon: <SiLangchain className="w-8 h-8" />,
        color: "text-blue-500",
      },
      {
        name: "UIPath",
        icon: <SiUipath className="w-8 h-8" />,
        color: "text-blue-600",
      },
      {
        name: "XLM",
        icon: <FaJs className="w-8 h-8" />,
        color: "text-purple-500",
      },
      {
        name: "OpenAI",
        icon: <SiOpenai className="w-8 h-8" />,
        color: "text-green-500",
      },
      {
        name: "MLflow",
        icon: <SiMlflow className="w-8 h-8" />,
        color: "text-blue-500",
      },
    ],
  },
];

export default function WorkingStack() {
  return (
    <section className="py-10 px-6 md:px-10 lg:p-20 space-y-8 bg-gray-50 min-h-screen">
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

      {/* Technology Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {technologyCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              {/* Card Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#011632] mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-[#2596be] mx-auto rounded-full"></div>
              </div>

              {/* Technology Icons Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center space-y-3 group cursor-pointer"
                  >
                    {/* Technology Icon */}
                    <div className="relative">
                      <motion.div
                        className="bg-gray-50 rounded-xl p-3 w-14 h-14 flex items-center justify-center group-hover:border-[#2596be] group-hover:shadow-lg transition-all duration-250"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          ease: "easeInOut",
                          delay: categoryIndex * 0.5 + techIndex * 0.1,
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
                    <span className="text-xs font-medium text-[#3C4959] text-center group-hover:text-[#2596be] transition-colors duration-300 leading-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
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
