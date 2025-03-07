import Image from "next/image";

const instructors = [
  {
    name: "Masum Billah",
    role: "UI / UX Designer",
    students: "25+",
    courses: 32,
    image: "/images/instr1.png",
  },
  {
    name: "Munaim Billah",
    role: "UI / UX Designer",
    students: "25+",
    courses: 32,
    image: "/images/instr2.png",
  },
  {
    name: "Motasim Billah",
    role: "UI / UX Designer",
    students: "25+",
    courses: 32,
    image: "/images/instr3.png",
  },
  {
    name: "Ekram Hossain",
    role: "UI / UX Designer",
    students: "25+",
    courses: 32,
    image: "/images/instr4.png",
  },
];

export default function ExpertInstructors() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-lg font-semibold text-teal-600">Talented Instructors</h2>
        <h1 className="text-3xl font-bold mt-2">Our Expert Instructors</h1>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative inline-block">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto border-4 border-teal-500"
                />
                <span className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full text-sm font-bold shadow-lg">
                  +
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-4">{instructor.name}</h3>
              <p className="text-sm text-gray-600">{instructor.role}</p>

              {/* Student & Course Stats */}
              <div className="flex justify-center mt-2 text-gray-500 text-sm gap-4">
                <span>👥 {instructor.students} Students</span>
                <span>📄 {instructor.courses} Courses</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-full shadow-md hover:bg-teal-700 transition">
          View All
        </button>
      </div>
    </section>
  );
}
