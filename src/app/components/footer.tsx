"use client";

import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLocationSharp, IoCallSharp, IoMailSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Footer() {
  const [show, setShow] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect(); // Sirf ek baar trigger karne ke liye observer remove
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className="bg-[#0c192c] text-white py-10 px-4 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-lg">for Latest Update</p>
          <div className="mt-4 flex justify-center">
            <input type="email" placeholder="Email Address" className="px-4 py-3 rounded-l-full w-80 text-black bg-white" />
            <button className="bg-teal-500 px-6 py-3 rounded-r-full text-white font-bold">Subscribe</button>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">📖 EduMon</h3>
            <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit varius congue Morbi</p>
            <div className="flex gap-4 mt-4">
              <span className="text-xl cursor-pointer"><FaFacebookF /></span>
              <span className="text-xl cursor-pointer"><FaTwitter /></span>
              <span className="text-xl cursor-pointer"><FaLinkedinIn /></span>
              <span className="text-xl cursor-pointer"><FaYoutube /></span>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold border-b-2 border-teal-500 pb-2 inline-block">Useful Links</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Categories</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold border-b-2 border-teal-500 pb-2 inline-block">Resources</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li>Community</li>
              <li>Support</li>
              <li>Video Guides</li>
              <li>Terms and Conditions</li>
              <li>Blog</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold border-b-2 border-teal-500 pb-2 inline-block">Contact Us</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li className="flex items-center gap-2"><IoLocationSharp /> 15 Rose Street, Harvey, IL 60426 USA</li>
              <li className="flex items-center gap-2"><IoCallSharp /> 708-210-9101</li>
              <li className="flex items-center gap-2"><IoMailSharp /> [email protected]</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8">
        Copyright &copy; 2024 EduMon. All rights reserved.
      </div>
    </motion.footer>
  );
}
