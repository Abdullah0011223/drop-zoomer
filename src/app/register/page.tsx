"use client";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering with:", formData);
    // Yahan backend integration ya API request add karo
  };

  return (
    <div><div className="relative w-full min-h-[50vh] flex items-center justify-center text-center px-4">
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Register</h1>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        <Link href="/" className="text-blue-300 hover:underline">Home</Link> &raquo; Register
      </p>
    </div>
  </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create A New Account:</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block font-semibold mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              className="border w-full p-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-teal-500 outline-none"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className="border w-full p-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-teal-500 outline-none"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className="border w-full p-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-teal-500 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="border w-full p-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-teal-500 outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Signup Button */}
          <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition">
            Signup now
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-600 font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  
    </div>
  );
}
