'use client';

import React from 'react';
import { FaCode, FaPaintBrush, FaMoneyBillWave, FaBullhorn, FaUserGraduate, FaBrain, FaChartBar, FaDumbbell } from 'react-icons/fa';

const courses = [
  { title: 'Web Development', count: 58, icon: <FaCode />, color: 'text-red-500' },
  { title: 'UI / UX Design', count: 87, icon: <FaPaintBrush />, color: 'text-green-500' },
  { title: 'Finance Account', count: 130, icon: <FaMoneyBillWave />, color: 'text-yellow-500' },
  { title: 'Marketing', count: 65, icon: <FaBullhorn />, color: 'text-purple-500' },
  { title: 'Personal Development', count: 36, icon: <FaUserGraduate />, color: 'text-blue-500' },
  { title: 'Data Science', count: 19, icon: <FaBrain />, color: 'text-pink-500' },
  { title: 'Management', count: 42, icon: <FaChartBar />, color: 'text-cyan-500' },
  { title: 'Health and Fitness', count: 52, icon: <FaDumbbell />, color: 'text-orange-500' },
];

export default function Explore() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Explore Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border cursor-pointer border-dashed rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all transform hover:scale-105 duration-300"
          >
            <div className={`text-4xl mb-3 ${course.color} transition-transform duration-300 hover:rotate-6`}>{course.icon}</div>
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-gray-500">{course.count} Courses</p>
          </div>
        ))}
      </div>
    </div>
  );
}
