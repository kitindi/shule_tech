import React from "react";
import { Link } from "react-router";

const Introduction = () => {
  return (
    <div className="w-full  py-8 px-16 ">
      <div className="w-full max-w-6xl mx-auto px-8 py-20 rounded-lg bg-[#dbf2f0]">
        <div className="w-full mb-5 ">
          <Link to="/course/unit/lesson/lesson-intro" className=" group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="0.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-chevron-left-icon lucide-circle-chevron-left group-hover:text-lime-600 transition-all duration-300"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m14 16-4-4 4-4" />
            </svg>
          </Link>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="fill-[#4fc9bf]" viewBox="0 0 256 256">
              <path d="M220.17,100,202.86,70a28,28,0,0,0-38.24-10.25,27.69,27.69,0,0,0-9,8.34L138.2,38a28,28,0,0,0-48.48,0A28,28,0,0,0,48.15,74l1.59,2.76A27.67,27.67,0,0,0,38,80.41a28,28,0,0,0-10.24,38.25l40,69.32a87.47,87.47,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3,88,88,0,0,0,76.06-132Zm-6.66,62.64A72,72,0,0,1,81.62,180l-40-69.32a12,12,0,0,1,20.78-12L81.63,132a8,8,0,1,0,13.85-8L62,66A12,12,0,1,1,82.78,54L114,108a8,8,0,1,0,13.85-8L103.57,58h0a12,12,0,1,1,20.78-12l33.42,57.9a48,48,0,0,0-5.54,60.6,8,8,0,0,0,13.24-9A32,32,0,0,1,172.78,112a8,8,0,0,0,2.13-10.4L168.23,90A12,12,0,1,1,189,78l17.31,30A71.56,71.56,0,0,1,213.51,162.62ZM184.25,31.71A8,8,0,0,1,194,26a59.62,59.62,0,0,1,36.53,28l.33.57a8,8,0,1,1-13.85,8l-.33-.57a43.67,43.67,0,0,0-26.8-20.5A8,8,0,0,1,184.25,31.71ZM80.89,237a8,8,0,0,1-11.23,1.33A119.56,119.56,0,0,1,40.06,204a8,8,0,0,1,13.86-8,103.67,103.67,0,0,0,25.64,29.72A8,8,0,0,1,80.89,237Z"></path>
            </svg>
          </span>
          <h1 className="text-xl font-medium text-gray-700 ">Introduction</h1>
        </div>
        <div className="mt-10">
          <p className="text-gray-600 text-lg font-medium">What will you need for this lesson?</p>
          <div className="grid grid-cols-2 py-10">
            <div className=" ">
              <div className="flex items-center gap-2 mb-4">
                {" "}
                <span className="text-gray-500">
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
                    class="lucide lucide-badge-question-mark-icon lucide-badge-question-mark"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                </span>
                <p className="text-gray-500 font-medium">Are you ready to learn?</p>
              </div>
              <p className="text-gray-500 mb-2 text-sm">Are you sitting in a quiet space away from distractions?</p>
              <p className="text-gray-500 mb-2 text-sm">Do you have all the equipment you need?</p>
              <p className="text-gray-500 mb-2 text-sm">A computer with internet access</p>
            </div>
            <div className="flex items-center gap-2 px-10">
              <div className="bg-white p-10 rounded-lg shadow-md w-full">
                <p className="text-gray-500 font-medium mb-2 flex items-center gap-2">
                  {" "}
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
                      class="lucide lucide-newspaper-icon lucide-newspaper"
                    >
                      <path d="M15 18h-5" />
                      <path d="M18 14h-8" />
                      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
                      <rect width="8" height="4" x="10" y="6" rx="1" />
                    </svg>
                  </span>
                  Worksheet
                </p>
                <p className="text-sm text-gray-500">Optional</p>

                <div className="mt-4 group">
                  <p className="text-sm text-gray-500 group-hover:underline cursor-pointer">Download worksheet (PDF)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
