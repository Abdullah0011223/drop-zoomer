"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string>(""); // 'any' hata kar 'string' use kiya
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  let timeout: NodeJS.Timeout; // 'any' hata kar correct type de di

  const handleMouseEnter = (menu: string) => { // 'any' hata kar 'string' use kiya
    clearTimeout(timeout);
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setDropdown("");
    }, 300);
  };

  return (
    <nav className="fixed left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={140} height={45} />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${
          mobileMenuOpen ? "block shadow-lg" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 text-lg text-black">
          {["Home", "Courses", "Pages"].map((title, index) => (
            <li
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="flex items-center py-3 md:py-0 px-4 md:px-0">
                {title} <span className="ml-1">⌄</span>
              </span>
              <ul
                className={`absolute left-0 top-full mt-2 w-40 bg-white border shadow-lg rounded-md transition-opacity duration-200 ${
                  dropdown === title ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {title === "Home" &&
                  ["Home One", "Home Two"].map((name, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-200">
                      <Link href="/home">{name}</Link>
                    </li>
                  ))}
                {title === "Courses" &&
                  ["Course Style 1", "Course Style 2", "Course Detail"].map((name, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-200">
                    <Link href={`/${name.toLowerCase().replace(" ", "")}`}>{name}</Link>
                    </li>
                  ))}
                {title === "Pages" &&
                  ["Grid Blog", "Standard Blog", "Blog Detail", "Cart", "Checkout", "Login", "Register", "About", "Instructor", "404"].map((name, i) => (
                    <li key={i} className="px-4 py-2 hover:bg-gray-200">
                      <Link href={`/${name.toLowerCase().replace(" ", "")}`}>{name}</Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
          <li className="py-3 md:py-0 px-4 md:px-0">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="py-3 md:py-0 px-4 md:px-0">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="text-black hover:text-gray-700 text-2xl cursor-pointer">
          <CiSearch />
        </button>
        <div className="relative">
          <button className="text-black hover:text-gray-700 text-xl cursor-pointer mt-1">
            <LuMessageSquare />
          </button>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </div>
        <Link
          href="/login"
          className="bg-teal-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-teal-400 ml-5 mb-3"
        >
          Login / Register
        </Link>
      </div>
    </nav>
  );
}
