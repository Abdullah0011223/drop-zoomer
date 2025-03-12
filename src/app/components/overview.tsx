"use client";

import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 flex gap-8">
      {/* Left Side - Image */}
      <div className="w-1/2">
        <Image
          src="/images/instr2.png" // Isko apni image ke path se replace karo
          alt="Overview"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4">Why you want to learn PHP?</h2>
        <ul className="space-y-2 text-gray-700">
          {[
            "Neque sodales ut etiam sit auctor",
            "Tristique nulla aliquet enim urna.",
            "Nam libero justo laoreet sit amet.",
            "Tempus imperdiet nulla malesuada.",
            "Perspiciatis unde omnis iste natus.",
            "Consequat duis aute reprehenderit.",
            "Suspendisse ultrices gravida Risus.",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <FaCheckCircle className="text-teal-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
