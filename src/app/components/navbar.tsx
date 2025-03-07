"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";

export default function Navbar() {
  const [dropdown, setDropdown] = useState("");
  let timeout: NodeJS.Timeout | null = null; // Correct type

  const handleMouseEnter = (menu: string) => {
    if (timeout) clearTimeout(timeout); // Agar timeout exist kare to usko hata do
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setDropdown("");
    }, 300);
  };

  return (
    <nav className="fixed left-0 w-full z-50 flex items-center justify-between px-16 py-4 bg-white shadow-md">
      {/* Left Section: Logo */}
      <div>
        <Image src="/images/logo.svg" alt="Logo" width={160} height={50} />
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex space-x-10 text-2xl text-black">
        {[
          { title: "Home", links: [{ name: "Home One", path: "/home" }, { name: "Home Two", path: "/home" }] },
          { title: "Courses", links: [{ name: "Course A", path: "/courses/a" }, { name: "Course B", path: "/courses/b" }, { name: "Course C", path: "/courses/c" }] },
          { title: "Pages", links: [{ name: "About Us", path: "/about" }, { name: "FAQ", path: "/faq" }, { name: "Contact", path: "/contact" }] },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="flex items-center">
              {item.title} <span className="ml-1">⌄</span>
            </span>

            {/* Dropdown Menu */}
            {dropdown === item.title && (
              <div
                className="absolute left-0 top-full mt-2 w-40 bg-white border shadow-lg rounded-md"
                onMouseEnter={() => timeout && clearTimeout(timeout)} // Cursor le jane pe timeout hatao
                onMouseLeave={handleMouseLeave} // Jab user bahar jaye to close karo
              >
                {item.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.path}
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link href="/blog" className="cursor-pointer">Blog</Link>
        <Link href="/contact" className="cursor-pointer">Contact</Link>
      </div>

      {/* Right Section: Blue Background with Search, Cart, and Login */}
      <div className="relative flex">
        {/* Blue Background */}
        <div className="absolute top-0 right-0 left-10 w-[800px] h-[77px] bg-blue-600 clip-triangle"></div>

        {/* Icons & Button */}
        <div className="flex items-center space-x-6 relative z-10 pr-6 mt-4">
          <button className="text-white hover:text-gray-200 text-3xl ml-40">
            <CiSearch />
          </button>

          <div className="relative">
            <button className="text-white hover:text-gray-200 text-2xl mt-2">
              <LuMessageSquare />
            </button>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          </div>

          <Link href="/login" className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold cursor-pointer">
            Login / Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
