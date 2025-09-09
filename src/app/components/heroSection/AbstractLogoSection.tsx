"use client";
import React from "react";
import { motion } from "framer-motion";

const AbstractLogoSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-[#0a1225] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Innovation in Motion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the future of technology through our dynamic solutions
          </motion.p>
        </div>

        {/* 3D Abstract Logo Container */}
        <div className="flex justify-center items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main 3D Abstract Shape */}
            <div className="relative w-80 h-80 perspective-1000">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(236, 72, 153, 0.3), rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))",
                  borderImage:
                    "linear-gradient(45deg, #ec4899, #9333ea, #3b82f6) 1",
                }}
              ></motion.div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotateY: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-3 border-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
                }}
              ></motion.div>

              {/* Inner Core */}
              <motion.div
                animate={{
                  rotateX: 360,
                  rotateY: 360,
                  rotateZ: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-16 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-full shadow-2xl"
                style={{
                  background:
                    "linear-gradient(45deg, #f472b6, #a855f7, #3b82f6)",
                  boxShadow:
                    "0 0 50px rgba(236, 72, 153, 0.5), 0 0 100px rgba(147, 51, 234, 0.3), 0 0 150px rgba(59, 130, 246, 0.2)",
                }}
              >
                {/* Inner Glow Effect */}
                <div className="absolute inset-4 bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>

                {/* Central Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg"></div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${15 + i * 12}%`,
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Advanced AI",
              description: "Cutting-edge artificial intelligence solutions",
              icon: "🧠",
            },
            {
              title: "Data Analytics",
              description: "Transform data into actionable insights",
              icon: "📊",
            },
            {
              title: "Cloud Solutions",
              description: "Scalable and secure cloud infrastructure",
              icon: "☁️",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AbstractLogoSection;
