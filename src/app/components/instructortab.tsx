import Image from "next/image";
import { FaUserGraduate, FaBook } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const InstructorCard = () => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md max-w-xl">
      <Image
        src="/images/instr1.png" // Change this to the actual image path
        alt="Instructor"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="ml-4">
        <h2 className="text-xl font-bold">Ekram Hossain</h2>
        <p className="text-teal-500">Web Designer</p>
        <p className="text-gray-600 text-sm mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="flex items-center text-gray-700 mt-3 space-x-4">
          <span className="flex items-center text-sm">
            <FaUserGraduate className="mr-1" /> 25+ Students
          </span>
          <span className="flex items-center text-sm">
            <FaBook className="mr-1" /> 32 Courses
          </span>
        </div>
        <div className="flex space-x-3 mt-3">
          <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-teal-500 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-teal-500 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-teal-500 hover:text-white">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
