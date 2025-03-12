import React from "react";
import { FaPlayCircle, FaFolder, FaLightbulb } from "react-icons/fa";

const curriculumData = [
  { title: "Introduction of Editing", duration: "10 Minutes", type: "video" },
  { title: "Overview of Editing", duration: "8 Minutes", type: "video" },
  { title: "Basic Editing Technology", duration: "7 Minutes", type: "folder" },
  { title: "Quiz", duration: "5 Minutes", type: "quiz" },
  { title: "Introduction of Editing", duration: "10 Minutes", type: "video" },
  { title: "Overview of Editing", duration: "30 Minutes", type: "quiz" },
];

const Curriculum = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <FaPlayCircle className="text-gray-600" />;
      case "folder":
        return <FaFolder className="text-gray-600" />;
      case "quiz":
        return <FaLightbulb className="text-gray-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Starting Beginners Level Course</h2>
      <ul>
        {curriculumData.map((item, index) => (
          <li key={index} className="flex justify-between items-center border-t py-3">
            <div className="flex items-center gap-3">
              {getIcon(item.type)}
              <span className="text-gray-800">{item.title}</span>
            </div>
            <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md">Preview</button>
            <span className="text-gray-500">{item.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Curriculum;
