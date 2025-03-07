'use client';

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { title: 'Web Development', count: 58, icon: '💻', color: 'text-red-500' },
  { title: 'UI / UX Design', count: 87, icon: '🖥️', color: 'text-green-500' },
  { title: 'Finance Account', count: 130, icon: '💵', color: 'text-yellow-500' },
  { title: 'Marketing', count: 65, icon: '📣', color: 'text-purple-500' },
  { title: 'Personal Development', count: 36, icon: '💼', color: 'text-blue-500' },
  { title: 'Data Science', count: 19, icon: '🖥️', color: 'text-pink-500' },
  { title: 'Management', count: 42, icon: '📃', color: 'text-cyan-500' },
  { title: 'Health and Fitness', count: 52, icon: '💪', color: 'text-orange-500' },
];

const ExploreCourses = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-teal-500 text-sm uppercase">Browse Categories</h2>
      <h1 className="text-3xl font-bold mb-8">Explore Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`text-5xl ${category.color} mb-4`}>{category.icon}</div>
            <h3 className="text-lg font-semibold">{category.title}</h3>
            <p className="text-gray-500">{category.count} Courses</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCourses;
