"use client";

import React, { useState } from "react";
import { FaClock, FaBook, FaGraduationCap } from "react-icons/fa";
import Overview from "./overview";
import Curriculum from "./curiculum";
import Reviewtab from "./reviewtab";
import InstructorCard from "./instructortab";

interface Course {
  title: string;
  instructor: string;
  category: string;
  lastUpdate: string;
  review: number;
  students: number;
  lessons: number;
  duration: string;
  videoUrl: string;
  price: number;
  discountPrice?: number;
}

const CourseDetail: React.FC<{ course?: Course }> = ({ course }) => {
  const [activeTab, setActiveTab] = useState("mainmenu");

  if (!course) {
    return <div className="text-red-500 text-center">Error: Course data not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex gap-8">
      
      {/* ✅ Left Side - Video & Details (Fixed) */}
      <div className="w-2/3">
        {/* ✅ Video Box (Hamesha Dikhna Chahiye) */}
        <div className="relative">
          <iframe 
            className="w-full h-72 rounded-lg shadow-md"
            src={course.videoUrl.replace("watch?v=", "embed/")} 
            title="Course Video" 
            allowFullScreen 
          ></iframe>
        </div>

        {/* ✅ Course Basic Info (Hamesha Dikhna Chahiye) */}
        <div className="mt-6 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="https://randomuser.me/api/portraits/men/1.jpg" 
              alt="Instructor" 
              className="w-10 h-10 rounded-full border"
            />
            <span className="text-gray-600">Instructor: <strong>{course.instructor}</strong></span>
          </div>
          <span className="text-gray-600">Category: <strong>{course.category}</strong></span>
          <span className="text-gray-600">Last Update: <strong>{course.lastUpdate}</strong></span>
          <span className="text-yellow-500 flex items-center">
            ⭐ {course.review.toFixed(1)}
          </span>
        </div>

        <h2 className="text-2xl font-bold mt-4">{course.title}</h2>

        {/* ✅ Tabs (Ye Tabs Change Honge, Video Nahi) */}
        <div className="mt-4 flex border-b">
          {[
            { key: "mainmenu", label: "Main Menu" },
            { key: "overview", label: "Overview" },
            { key: "curriculum", label: "Curriculum" },
            { key: "review", label: "Review" },
            { key: "instructor", label: "Instructor" }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 font-semibold border-b-2 ${activeTab === tab.key ? "text-teal-600 border-teal-500" : "text-gray-500"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ✅ Tabs Ka Content (Sirf Ye Change Hoga) */}
        <div className="mt-4">
          {activeTab === "mainmenu" && <p></p>}
          {activeTab === "overview" && <Overview />}
          {activeTab === "curriculum" && <Curriculum />}
          {activeTab === "review" && <Reviewtab />}
          {activeTab === "instructor" && <InstructorCard />}
        </div>
      </div>

      {/* ✅ Right Side - Course Features (No Change) */}
      <div className="w-1/3 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Course Features</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="flex items-center gap-2">
              <FaClock className="text-teal-600" /> Duration
            </span>
            <span className="font-bold">{course.duration}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="flex items-center gap-2">
              <FaBook className="text-teal-600" /> Lessons
            </span>
            <span className="font-bold">{course.lessons}</span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="flex items-center gap-2">
              <FaGraduationCap className="text-teal-600" /> Students
            </span>
            <span className="font-bold">{course.students}</span>
          </div>

          <div className="text-center text-lg font-semibold mt-4">
            <span className="text-gray-500 line-through">${course.price}</span>{" "}
            <span className="text-teal-600 ml-2">${course.discountPrice}</span>
          </div>

          <div className="text-center mt-4">
            <button className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300">
              Buy Course
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CourseDetail;
