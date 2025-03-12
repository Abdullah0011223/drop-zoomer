"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "", remember: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    // Yahan authentication logic add karna
  };

  return (
    <div>
      {/* Banner Section */}
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Login</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            <Link href="/" className="text-blue-300 hover:underline">Home</Link> &raquo; Login
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Already A Member? Sign In:</h2>

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

            {/* Remember Password */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2"
                checked={formData.remember}
                onChange={handleChange}
              />
              <label htmlFor="remember">Remember Password</label>
            </div>

            {/* Login Button */}
            <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition">
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-teal-600 font-bold hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}
