"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

interface Review {
  name: string;
  image: string;
  title: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    name: "Robert Max",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    title: "Outstanding Course",
    rating: 5,
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Reviewtab: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Student&apos;s Reviews</h2>

      {/* ⭐ Rating Box */}
      <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-6">
        <div className="text-4xl font-bold">5.0</div>
        <div>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-gray-600">Total 3 Ratings</p>
        </div>
      </div>

      {/* ✅ Reviews List */}
      <div className="mt-6 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-4 border-b pb-4">
            <img
              src={review.image}
              alt={review.name}
              className="w-12 h-12 rounded-full border"
            />
            <div>
              <h3 className="font-bold">{review.name}</h3>
              <p className="text-gray-500 text-sm">{review.title}</p>
              <div className="flex text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 mt-2">&quot;{review.comment}&quot;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviewtab;
