"use client";

import Image from "next/image";
import Link from "next/link";
import Features from "../components/features";
import AboutUs from "../components/about";
import ExpertInstructors from "../components/expert-instrutor";


export default function Banner() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full min-h-[50vh] flex items-center justify-center text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner.jpg"
            alt="About Us Banner"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-90"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/80 to-blue-500/80"></div>

        {/* Content */}
        <div className="relative z-10 text-white w-full max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            <Link href="/" className="text-blue-300 hover:underline">
              Home
            </Link>{" "}
            &raquo; About Us
          </p>
        </div>
      </div>

      {/* Other Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
        <AboutUs />
        <ExpertInstructors />
      </div>

    </div>
  );
}
