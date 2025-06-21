import React from "react";
import { Link } from "react-router";

const CourseUnits = () => {
  return (
    <div className="w-full px-16 py-4">
      <div className="w-full">
        <div className="w-full flex items-center justify-start py-4">
          <Link to="/courses" className="flex items-center gap-2 text-gray-600 group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-600 group-hover:text-[#4fc9bf]"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" />
              </svg>
            </span>{" "}
            <p className="text-gray-600 group-hover:underline group-hover:decoration-[#4fc9bf]">view all courses</p>
          </Link>
        </div>
        <div className="w-full flex items-center gap-4 py-4">
          <span className=" bg-[#4fc9bf] p-3 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" viewBox="0 0 256 256">
              <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path>
            </svg>
          </span>{" "}
          <div>
            <h1 className="text-xl font-semibold mb-2">Computer Science</h1>
            <p className="text-sm font-gray-500">Year 9 & 10 • Cambridge IGCSE Computer Science 0478 syllabus </p>
          </div>
        </div>
        <div className="w-full max-w-5xl py-3">
          <p className="text-gray-500 text-sm mb-3">
            This course is designed to help you understand the principles of computer science, including data representation, hardware, software, and the
            internet. It will also cover algorithm design and problem-solving techniques. By the end of this course, you will have a solid foundation in
            computer science and be able to apply your knowledge to solve real-world problems.
          </p>
          <p className="text-gray-500 text-sm mb-3">
            The course is divided into 10 units, each covering a different aspect of computer science. Each unit consists of lessons, quizzes, and practical
            exercises to help you reinforce your understanding of the concepts. You will also have access to additional resources and support to help you
            succeed in your studies.
          </p>
        </div>
        <div className="w-full  gap-4">
          <p className="text-md text-gray-500 font-semibold mb-3">Choose a unit (10)</p>
          <div className="py-4">
            <ul className=" text-gray-600 flex flex-col gap-6">
              <Link
                to="/course/unit-lessons"
                className="flex justify-between items-center p-4  rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200"
              >
                <p className="text-md text-gray-500">Unit 1: Data representation</p> <p className="text-md text-gray-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 2: Data transmission</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 3: Hardware</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 4: Software</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 5: The internet and its uses</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 6: Automated and emerging technologies</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 7: Algorithm design and problem-solving</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 8: Programming</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500">Unit 9: Databases</p> <p className="text-md text-500"> 6 Lessons</p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-500"> Unit 10: Boolean logic</p> <p className="text-md text-500">8 Lessons</p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseUnits;
