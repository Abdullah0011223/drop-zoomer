'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const reviews = [
  {
    name: 'Ekram Hossain',
    image: '/images/review1.jpg',
    rating: 5.0,
    review: 'Donec viverra posuere nibh in dapibus. Pellentesque finibus libero vel tempus.',
  },
  {
    name: 'Motasim Billah',
    image: '/images/review2.jpg',
    rating: 5.0,
    review: 'Donec viverra posuere nibh in dapibus. Pellentesque finibus libero vel tempus.',
  },
  {
    name: 'Masum Billah',
    image: '/images/review3.jpg',
    rating: 5.0,
    review: 'Donec viverra posuere nibh in dapibus. Pellentesque finibus libero vel tempus.',
  },
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 px-5 md:px-20 text-center">
      <h2 className="text-lg font-semibold mb-2">Our Students Review</h2>
      <h1 className="text-3xl font-bold mb-6">What Our Students Are Saying</h1>

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
        >
          <FiChevronLeft size={24} />
        </button>

        <div className="bg-white text-black rounded-lg p-6 w-80 text-center shadow-lg">
          <div className="flex justify-center relative">
            <Image
              src={reviews[current].image}
              alt={reviews[current].name}
              width={80}
              height={80}
              className="rounded-full border-4 border-blue-500"
            />
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
              {reviews[current].rating}
            </span>
          </div>
          <h3 className="text-xl font-bold mt-4">{reviews[current].name}</h3>
          <p className="text-gray-600 mt-2">{reviews[current].review}</p>
          <div className="flex justify-center mt-3 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 p-3 bg-white/20 rounded-full hover:bg-white/30 transition"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
