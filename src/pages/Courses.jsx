import React from "react";
import { Link } from "react-router";

const Courses = () => {
  return (
    <div className="w-full p-8">
      <div className="w-full  ">
        <div className="flex items-center gap-4 py-10">
          <div className="flex flex-auto items-center gap-2 border border-gray-300 rounded-full px-4">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#31C48D" fill="none">
                <path d="M17 17L21 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input type="text" className="flex-auto  p-3 outline-none " placeholder="Get a course that match your interests" />
          </div>{" "}
          <button className="bg-green-500 text-white px-8 py-3 rounded-full cursor-pointer hover:bg-green-600 transition-all">Search</button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Find what's right just for you</h2>
        <p className="text-gray-600 text-md py-3">
          We provide free online lessons with videos, quizzes, and more. Whatever the subject, from GCSE to NECTA carriculum, we've got you covered.
        </p>

        <div className="pt-10">
          <h2 className="py-4 text-lg text-gray-700 font-bold">Choose a subject</h2>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <Link to="/course-intro" className="bg-[#DEF7EC] rounded-lg p-6 hover:bg-[#BCF0DA] cursor-pointer transition-all">
            <h3 className="text-lg font-semibold text-gray-800">Cambridge IGCSE</h3>
            <p className="text-gray-600 mt-2">Computer Science (0478)</p>
          </Link>
          <Link to="/course-intro" className="bg-[#DEF7EC] rounded-lg p-6 hover:bg-[#BCF0DA] cursor-pointer transition-all">
            <h3 className="text-lg font-semibold text-gray-800">Cambridge IGCSE</h3>
            <p className="text-gray-600 mt-2">Information and Communication Technology (0417)</p>
          </Link>
          <Link to="/course-intro" className="bg-[#DEF7EC] rounded-lg p-6 hover:bg-[#BCF0DA] cursor-pointer transition-all">
            <h3 className="text-lg font-semibold text-gray-800">NECTA</h3>
            <p className="text-gray-600 mt-2">Computer Science Form 1 - IV</p>
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <h2 className="py-4 text-lg text-gray-700 font-bold">Choose a course</h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#DEF7EC] rounded-lg p-6 hover:bg-[#BCF0DA] cursor-pointer transition-all">
            <h3 className="text-lg font-semibold text-gray-800">Cambridge IGCSE</h3>
            <p className="text-gray-600 mt-2">Computer Science (0478)</p>
          </div>
          <div className="bg-[#DEF7EC] rounded-lg p-6 hover:bg-[#BCF0DA] cursor-pointer transition-all">
            <h3 className="text-lg font-semibold text-gray-800">Cambridge IGCSE</h3>
            <p className="text-gray-600 mt-2">Information and Communication Technology (0417)</p>
          </div>
          <div className="bg-[#DEF7EC] rounded-lg p-6 hover:bg-[#BCF0DA] cursor-pointer transition-all">
            <h3 className="text-lg font-semibold text-gray-800">NECTA</h3>
            <p className="text-gray-600 mt-2">Computer Science Form 1 - IV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
