"use client";

import React, { useState, useEffect } from "react";
import { IconType } from "react-icons";
import { BiUser, BiVideo, BiDollar, BiSupport } from "react-icons/bi";
import { motion } from "framer-motion";

const features = [
  { id: "01", icon: BiUser, title: "Exclusive Advisor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "02", icon: BiVideo, title: "Video Tutorial", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "03", icon: BiDollar, title: "Affordable Price", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { id: "04", icon: BiSupport, title: "Life Time Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function Features() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 text-center px-4 sm:px-6 lg:px-8">
      <h3 className="text-teal-500 font-semibold text-lg">Features</h3>
      <h2 className="text-2xl sm:text-3xl font-bold mt-2">One Platform Many Courses</h2>

      {/* Features Grid with Scroll-Down Animation */}
      <motion.div
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={show ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {features.map((feature) => {
          const Icon = feature.icon as IconType;
          return (
            <motion.div
              key={feature.id}
              className="bg-white hover:border-teal-700 rounded-xl p-6 relative text-center border border-gray-200 transition-transform duration-300 hover:scale-105 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={show ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: parseInt(feature.id) * 0.1 }}
            >
              <span className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                {feature.id}
              </span>

              <div className="text-4xl text-teal-500 bg-teal-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <Icon />
              </div>

              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
