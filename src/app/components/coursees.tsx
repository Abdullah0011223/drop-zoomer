"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const courses = [
  {
    id: 1,
    title: "Financial Security Thinking and Principles Theory",
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "WordPress",
    price: "$50.00",
    image: "/images/course1.jpg",
  },
  {
    id: 2,
    title: "Professional Ceramic Moulding for Beginners",
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "JavaScript",
    price: "$50.00",
    image: "/images/course2.jpg",
  },
  {
    id: 3,
    title: "Basic Fundamentals of Interior & Graphics Design",
    students: 25,
    lessons: 15,
    hours: 1.5,
    instructor: "Masum Billah",
    category: "Laravel",
    price: "$50.00",
    image: "/images/course3.jpg",
  },
];

export default function CourseCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Adjust scroll step
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto text-center py-8">
      <h2 className="text-2xl font-bold mb-6">Most Popular Courses</h2>
      <div className="flex items-center">
        <Button variant="outline" size="icon" onClick={() => scroll("left")}>
          <ChevronLeft size={20} />
        </Button>
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 px-4 scrollbar-hide w-full"
        >
          {courses.map((course) => (
            <Card
              key={course.id}
              className="w-72 flex-shrink-0 snap-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={320}
                height={180}
                className="rounded-t-lg"
              />
              <CardContent className="p-4 cursor-pointer">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">{course.price}</span>
                <h3 className="font-semibold mt-2">{course.title}</h3>
                <p className="text-sm text-gray-500">
                  {course.students} Students • {course.lessons} Lessons • {course.hours} Hours
                </p>
                <p className="text-sm mt-2">Instructor: {course.instructor}</p>
                <span className="text-blue-500 text-sm font-semibold">{course.category}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={() => scroll("right")}>
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}
