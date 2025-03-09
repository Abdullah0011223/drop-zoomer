"use client";


import Image from "next/image";
import Link
 from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Footer from "../components/footer";
// ✅ TypeScript Type Define Karo
interface Blog {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

// ✅ Blog Data (Replace with API later)
const blogs: Blog[] = [
  {
    id: 1,
    title: "A Student Learning with Online Programme on Computer",
    date: "27 Jan, 2024",
    category: "eLearning",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "All Students and Teachers are Happy To Back to School",
    date: "27 Jan, 2024",
    category: "Students",
    image: "/images/blog2.jpg",
  },
  {
    id: 3,
    title: "Learners are studying together in the Class Room",
    date: "27 Jan, 2024",
    category: "Education",
    image: "/images/blog3.jpg",
  },
];

// ✅ BlogCard Component
const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4">
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={250}
        className="rounded-lg w-full"
      />
      <p className="text-gray-500 text-sm mt-2">📅 {blog.date}</p>
      <h1 className="mt-3 text-lg font-semibold">{blog.title}</h1>
      <div className="mt-3">
        <span className="bg-teal-500 text-white text-sm px-3 py-1 rounded-full">
          {blog.category}
        </span>
      </div>
      <button className="mt-4 text-blue-600 font-semibold hover:underline">
        Explore More
      </button>
    </div>
  );
};

// ✅ Blog Page Component
export default function Blog() {
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Grid Blogs</h1>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        <Link href="/" className="text-blue-300 hover:underline">Home</Link> &raquo; Grid Blogs
      </p>
    </div>
  </div>
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
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
      <Footer />
    </div>
  );
}
