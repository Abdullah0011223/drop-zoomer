import CourseDetail from "../components/coursedetails";
import Link from "next/link";
import Image from "next/image";

export default function CourseDetails() {
  const courseData = {
    title: "The Complete Web Developer Guideline 2024",
    instructor: "Tony Stark",
    category: "Web Development",
    lastUpdate: "13 March, 2024",
    review: 5.0,
    students: 150,
    lessons: 15,
    duration: "24 Hours",
    videoUrl: "https://www.youtube.com/watch?v=AnQ7XZHnxvk",
    price: 400,
    discountPrice: 350,
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
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Course Detail</h1>
      <p className="mt-2 text-sm sm:text-base md:text-lg">
        <Link href="/" className="text-blue-300 hover:underline">Home</Link> &raquo; Course Detail
      </p>
    </div>
  </div>
    <div className="flex justify-end items-end h-screen bg-gray-100">
      <CourseDetail course={courseData} />
    </div>
    </div>
  );
}
