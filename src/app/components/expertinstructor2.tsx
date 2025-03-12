"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const instructors = [
  {
    name: "Masum Billah",
    role: "UI / UX Designer",
    students: "25+",
    courses: 32,
    image: "/images/instr1.png",
  },
  {
    name: "Munaim Billah",
    role: "Graphic Designer",
    students: "25+",
    courses: 32,
    image: "/images/instr2.png",
  },
  {
    name: "Motasim Billah",
    role: "Web Developer",
    students: "25+",
    courses: 32,
    image: "/images/instr3.png",
  },
  {
    name: "Ekram Hossain",
    role: "Wordpress Developer",
    students: "25+",
    courses: 32,
    image: "/images/instr4.png",
  },
];

export default function ExpertInstructors2() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-lg font-semibold text-teal-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Talented Instructors
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Expert Instructors Style 2
        </motion.h1>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl text-center relative transition-all duration-300 hover:shadow-2xl backdrop-blur-md bg-opacity-80"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            >
              {/* Animated Circular Border */}
              <motion.div
                className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-teal-500 opacity-60"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              ></motion.div>

              <div className="relative inline-block group">
                {/* Instructor Image */}
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-teal-500"
                />

                {/* Social Icons (Hidden by Default, Shown on Hover) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <a href="#" className="text-white bg-blue-600 p-2 rounded-full">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="#" className="text-white bg-green-500 p-2 rounded-full">
                    <FaWhatsapp size={18} />
                  </a>
                  <a href="#" className="text-white bg-blue-400 p-2 rounded-full">
                    <FaTwitter size={18} />
                  </a>
                </motion.div>
              </div>

              <h3 className="text-lg font-semibold mt-4">{instructor.name}</h3>
              <p className="text-sm text-gray-600">{instructor.role}</p>

              {/* Student & Course Stats */}
              <div className="flex justify-center mt-2 text-gray-500 text-sm gap-4">
                <span>👥 {instructor.students} Students</span>
                <span>📄 {instructor.courses} Courses</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button with Animation */}
        <motion.button
          className="mt-10 px-8 py-3 bg-teal-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View All
        </motion.button>
      </div>
    </section>
  );
}
