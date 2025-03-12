'use client';

import React from 'react';
import { FaUser, FaBookOpen, FaUsers, FaStar } from 'react-icons/fa';

const courses = [
  {
    title: 'Photography Crash Course for Photographer',
    category: 'Photography',
    image: '/images/course1.jpg',
    students: 25,
    lessons: 15,
    instructor: 'Masum Billah',
    price: '$500',
  },
  {
    title: 'Basic Fundamentals of Interior & Graphics Design',
    category: 'Graphics',
    image: '/images/course2.jpg',
    students: 25,
    lessons: 15,
    instructor: 'Masum Billah',
    price: '$500',
  },
  {
    title: 'WordPress for Beginners – Master WordPress',
    category: 'WordPress',
    image: '/images/course3.jpg',
    students: 25,
    lessons: 15,
    instructor: 'Masum Billah',
    price: '$500',
  },
  {
    title: 'Ultimate Photoshop Training: From Beginner',
    category: 'Photoshop',
    image: '/images/course1.jpg',
    students: 25,
    lessons: 15,
    instructor: 'Masum Billah',
    price: '$500',
  },
];

export default function CourseStyle2() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-xl font-bold mb-6 text-center">Showing 12 Courses of 16 result</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="flex border cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative w-1/3">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <span className="absolute top-2 left-2 bg-teal-500 text-white text-sm px-3 py-1 rounded-full">{course.category}</span>
            </div>
            <div className="p-4 w-2/3">
              <div className="flex items-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
                <span className="text-gray-500 text-sm">(21)</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <FaUsers className="mr-2" /> {course.students} Students
                <FaBookOpen className="ml-4 mr-2" /> {course.lessons} Lessons
              </div>
              <div className="flex justify-between items-center border-t pt-3">
                <div className="flex items-center text-gray-700">
                  <FaUser className="mr-2" /> {course.instructor}
                </div>
                <span className="text-teal-500 font-semibold">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
