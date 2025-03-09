"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ArrowUp } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Standardblog() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Fully Responsive */}
      <div className="relative w-full min-h-[50vh] flex items-center justify-center text-center px-4">
        <Image
          src="/images/banner.jpg"
          alt="Standard Blog Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/80 to-blue-500/80"></div>
        <div className="relative z-10 text-white w-full max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Standard Blog</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            <Link href="/" className="text-blue-300 hover:underline">Home</Link> &raquo; Standard Blog
          </p>
        </div>
      </div>

      {/* Blog Layout */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-10">
          {[1, 2].map((post) => (
            <div key={post} className="relative">
              <Image
                src={`/images/blog${post}.jpg`}
                width={800}
                height={450}
                alt="Blog Image"
                className="rounded-lg w-full"
                quality={100}
              />
              <span className="absolute bottom-4 right-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                eLearning
              </span>
              <p className="text-gray-500 mt-4">📅 {post === 1 ? "27 Jan, 2024" : "15 Feb, 2024"}</p>
              <h1 className="mt-5 font-bold text-2xl md:text-3xl hover:text-teal-400 cursor-pointer">
                {post === 1 ? "A Student Learning With Online Program On Computer." : "Enhancing Digital Skills Through Online Courses."}
              </h1>
              <p className="mt-5 font-mono text-lg md:text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum.
                Mauris ac augue eu ex elementum dictum Quisque fermentum augue.
              </p>
              <button className="font-semibold text-black mt-4 text-lg md:text-xl cursor-pointer hover:text-teal-200">
                Explore More
              </button>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div>
          <div className="relative">
            <input type="text" placeholder="Search Query" className="w-full px-4 py-2 border rounded-full" />
            <Search className="absolute right-3 top-3 text-gray-500" size={20} />
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-lg mb-3">Category</h2>
            <ul className="space-y-2">
              {["UI / UX Design", "Web Design", "App Development", "Branding and Printing"].map((category, index) => (
                <li key={index} className="text-green-600 cursor-pointer hover:underline">{category}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-lg mb-3">Popular Posts</h2>
            <ul className="space-y-3">
              {[1, 2, 3].map((post) => (
                <li key={post} className="flex items-center space-x-3">
                  <Image
                    src="/images/blog2.jpg"
                    width={60}
                    height={40}
                    alt="Post Thumbnail"
                    className="rounded"
                  />
                  <div>
                    <p className="font-medium">Lorem Ipsum is simply dummy</p>
                    <p className="text-sm text-gray-500">📅 10 Jan, 2024</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Pagination */}
      <div className="flex justify-center py-10 space-x-3">
        <div className="border border-gray-300 text-center px-4 py-2 rounded-md text-2xl hover:border-gray-800 hover:cursor-pointer">
          <FaArrowLeft className="mt-2" />
        </div>
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`border px-4 py-2 rounded-md text-3xl hover:cursor-pointer ${
              num === 2 ? "border-gray-800" : "border-gray-300 hover:border-gray-800"
            }`}
          >
            <h1 className="mb-1">{num}</h1>
          </div>
        ))}
        <div className="border border-gray-300 text-center px-4 py-2 rounded-md text-2xl hover:border-gray-800 hover:cursor-pointer">
          <FaArrowRight className="mt-2" />
        </div>
      </div>
    </div>
  );
}
