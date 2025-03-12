"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaUserGraduate, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const [show, setShow] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={heroRef}
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white relative"
      initial={{ opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-lg text-gray-500">Online E-Learning Courses</h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          <span className="text-teal-500">Creating</span> a Better Future through Education
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          It is a long-established fact that a reader gets distracted by readable content.
        </p>
        <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition">
          All Courses
        </button>
        
        {/* Happy Students */}
        <div className="flex items-center justify-center md:justify-start mt-6 space-x-3">
          <div className="flex -space-x-2">
            <Image
              src="/images/rev-img.png"
              alt="User"
              width={50}
              height={50}
              className="rounded-full border-2 border-white"
            />
          </div>
          <span className="text-gray-600 text-lg">24k+ Happy Students</span>
        </div>
      </div>
      
      {/* Right Image Section */}
      <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/images/hero.svg"
          alt="Classroom"
          width={600}
          height={600}
          className="rounded-3xl w-full max-w-sm md:max-w-lg"
        />
        
        {/* Overlay Cards Wrapper */}
        <div className="absolute flex flex-col md:flex-row w-full justify-between px-6 md:px-12 -bottom-10 md:-bottom-16">
          
          {/* Overlay Card 1 */}
          <motion.div
            className="bg-white shadow-md px-6 py-4 rounded-lg flex flex-col items-center text-2xl text-green-700 w-32 md:w-40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaUserGraduate />
            <h2 className="text-2xl font-bold">28k</h2>
            <p className="text-green-700 text-sm text-center">Total Students</p>
          </motion.div>

          {/* Overlay Card 2 */}
          <motion.div
            className="bg-white shadow-md px-6 py-4 rounded-lg flex flex-col items-center text-2xl text-green-700 w-32 md:w-40 mt-4 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={show ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaBookOpen />
            <h2 className="text-2xl text-green-700 font-bold">529+</h2>
            <p className="text-green-700 text-sm text-center">Total Courses</p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
