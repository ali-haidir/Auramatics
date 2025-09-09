"use client";
import React from "react";
import { motion } from "framer-motion";

const Floating3DObject = () => {
  return (
    <div className="relative w-full h-0 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50"
        style={{ marginTop: "-80px" }}
      >
        {/* Simple AI Bot */}
        <div className="relative w-32 h-40 flex flex-col items-center">
          {/* Head */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-sky-200 rounded-full shadow-lg relative"
            style={{
              background: "linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Antenna */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-700 rounded-full">
              <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            </div>

            {/* Side panels */}
            <div className="absolute top-2 -left-1.5 w-2 h-4 bg-gray-700 rounded-full"></div>
            <div className="absolute top-2 -right-1.5 w-2 h-4 bg-gray-700 rounded-full"></div>

            {/* Face */}
            <div className="absolute inset-2 bg-gray-800 rounded-lg">
              {/* Eyes */}
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-2 left-3 w-0.5 h-3 bg-blue-400 rounded-full"
                style={{ boxShadow: "0 0 6px rgba(59, 130, 246, 0.8)" }}
              ></motion.div>
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-2 right-3 w-0.5 h-3 bg-blue-400 rounded-full"
                style={{ boxShadow: "0 0 6px rgba(59, 130, 246, 0.8)" }}
              ></motion.div>

              {/* Smile */}
              <motion.div
                animate={{ scaleX: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b border-blue-400 rounded-full"
                style={{ boxShadow: "0 0 4px rgba(59, 130, 246, 0.6)" }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Neck */}
          <div className="w-1.5 h-2 bg-gray-700 rounded-full"></div>

          {/* Body */}
          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="w-20 h-24 bg-sky-200 rounded-full shadow-lg relative"
            style={{
              background: "linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Band */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>

            {/* Arms */}
            {/* Left arm - waving */}
            <motion.div
              animate={{ rotate: [0, -20, 20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-3 -left-2 w-2 h-6 bg-sky-200 rounded-full"
              style={{
                background: "linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            </motion.div>

            {/* Right arm - hanging */}
            <motion.div
              animate={{ rotate: [0, 1, -1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-3 -right-2 w-2 h-6 bg-sky-200 rounded-full"
              style={{
                background: "linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Shadow */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-black/10 rounded-full blur-sm"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Floating3DObject;
