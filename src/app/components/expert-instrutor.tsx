import Image from 'next/image';

const instructors = [
  {
    name: 'Masum Billah',
    role: 'UI / UX Designer',
    students: '25+',
    courses: 32,
    image: '/images/instr1.png',
  },
  {
    name: 'Munaim Billah',
    role: 'UI / UX Designer',
    students: '25+',
    courses: 32,
    image: '/images/instr2.png',
  },
  {
    name: 'Motasim Billah',
    role: 'UI / UX Designer',
    students: '25+',
    courses: 32,
    image: '/images/instr3.png',
  },
  {
    name: 'Ekram Hossain',
    role: 'UI / UX Designer',
    students: '25+',
    courses: 32,
    image: '/images/instr4.png',
  },
];

export default function ExpertInstructors() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-green-600">Talented Instructors</h2>
        <h1 className="text-3xl font-bold mt-2">Our Expert Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="relative inline-block">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto"
                />
                <span className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full">+</span>
              </div>
              <h3 className="text-lg font-semibold mt-4">{instructor.name}</h3>
              <p className="text-sm text-teal-600">{instructor.role}</p>
              <div className="flex justify-center mt-2 text-gray-500 text-sm">
                <span className="mr-4">👥 {instructor.students} Students</span>
                <span>📄 {instructor.courses} Courses</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-full">View All</button>
      </div>
    </section>
  );
}
