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
          observer.disconnect(); // Animation sirf ek baar chalane ke liye
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
      className="flex items-center justify-between px-16 py-20 bg-white relative"
      initial={{ opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Content */}
      <div className="w-1/2">
        <h3 className="text-lg text-gray-500">Online E-Learning Courses</h3>
        <h1 className="text-6xl font-bold mt-4">
          <span className="text-teal-500">Creating</span> a Better Future through Education
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          It is a long established fact that a reader gets distracted by readable content.
        </p>
        <button className="mt-6 hover:cursor-pointer hover:bg-teal-300 hover:text-white hover:border-teal-500 bg-teal-500 text-black px-6 py-3 rounded-full text-lg font-semibold">
          All Courses
        </button>
        
        {/* Happy Students */}
        <div className="flex items-center mt-6 space-x-3">
          <div className="flex -space-x-2">
            <Image
              src="/images/rev-img.png"
              alt="User"
              width={100}
              height={60}
              className="rounded-full border-2 border-white"
            />
          </div>
          <span className="text-gray-600 text-lg">24k+ Happy Students</span>
        </div>
      </div>
      
      {/* Right Image Section */}
      <div className="relative w-1/2">
        <Image
          src="/images/hero.svg"
          alt="Classroom"
          width={800}
          height={900}
          className="rounded-3xl"
        />
        
        {/* Overlay Card 1 */}
        <motion.div
          className="absolute text-green-700 top-10 left-10 bg-white shadow-md px-6 py-4 rounded-lg flex flex-col items-center text-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaUserGraduate />
          <h2 className="text-2xl font-bold">28k</h2>
          <p className="text-green-700 text-sm">Total Students</p>
        </motion.div>

        {/* Overlay Card 2 */}
        <motion.div
          className="text-green-700 absolute right-30 top-140 bg-white shadow-md px-6 py-4 rounded-lg flex flex-col items-center text-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={show ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <FaBookOpen />
          <h2 className="text-2xl font-bold">529+</h2>
          <p className="text-green-700 text-sm">Total Courses</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
