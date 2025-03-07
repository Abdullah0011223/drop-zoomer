"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaLightbulb, FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [show, setShow] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect(); // Animation sirf ek baar chalane ke liye
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={aboutRef}
      className="py-12 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Side - Images */}
      <div className="relative flex flex-col sm:flex-row lg:flex-col gap-6 w-full lg:w-auto">
        {/* First Image */}
        <div className="relative w-full sm:w-1/2 lg:w-72 h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg">
          <img
            src="/images/about1.jpg"
            alt="Student Writing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="relative w-full sm:w-1/2 lg:w-72 h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-lg self-end">
          <img
            src="/images/about2.jpg"
            alt="Group Study"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <h3 className="text-green-600 font-semibold text-lg">About Us Education</h3>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          Go Your Skill to the Next Level
        </h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          turpis in arcu gravida faucibus euismod eget magna. Donec non justo ac
          libero pharetra congue.
        </p>

        {/* Success Mission Section */}
        <div className="mt-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <FaLightbulb size={30} color="#3b82f6" />
            <div>
              <h3 className="font-bold text-lg">Our Success Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <FaClipboardList size={30} color="#3b82f6" />
            <div>
              <h3 className="font-bold text-lg">Our Success Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
          Discover More
        </button>
      </div>
    </motion.section>
  );
}
