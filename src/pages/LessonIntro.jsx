import React from "react";
import { Link } from "react-router";

const LessonIntro = () => {
  return (
    <div className="w-full  ">
      <div className="w-full">
        <div className="w-full bg-[#38b8ad] flex items-center justify-start px-16 py-4">
          <Link to="/course/unit-lessons" className="flex items-center gap-2 text-white group">
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
                className="text-white group-hover:text-lime-300"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 12H8" />
                <path d="m12 8-4 4 4 4" />
              </svg>
            </span>{" "}
            <p className="text-white group-hover:underline group-hover:decoration-lime-300">view all lessons</p>
          </Link>
        </div>
        <div className="grid grid-cols-12 px-16 py-10 bg-[#38b8ad]">
          <div className="col-span-6 ">
            <div className="w-32 h-32 p-5 bg-white rounded-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#76d5cd" viewBox="0 0 256 256">
                <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path>
              </svg>
            </div>
            <div className="mt-4">
              <p className="text-sm text-white">Year 9 & 10 • Computer Science 0478 </p>
              <p className="text-2xl font-medium py-8 text-white">Understand how and why computers use binary to represent all forms of data</p>
            </div>
            <div>
              <p className="text-lg text-white mb-3 font-bold">Lesson Overview</p>
              <p className="text-md text-white">
                In this lesson, you will learn about the binary number system and how it is used to represent data in computers. You will explore how binary is
                used to represent numbers, text, images, and sounds, and understand the significance of binary in computer science.
              </p>
            </div>
          </div>
          <div className="col-span-6 pl-44 flex flex-col gap-5">
            <Link to="/course/lesson/introduction" className="w-full h-24 py-5 px-16 bg-white rounded-md flex items-center gap-5 group">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-[#4fc9bf]" viewBox="0 0 256 256">
                  <path d="M220.17,100,202.86,70a28,28,0,0,0-38.24-10.25,27.69,27.69,0,0,0-9,8.34L138.2,38a28,28,0,0,0-48.48,0A28,28,0,0,0,48.15,74l1.59,2.76A27.67,27.67,0,0,0,38,80.41a28,28,0,0,0-10.24,38.25l40,69.32a87.47,87.47,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3,88,88,0,0,0,76.06-132Zm-6.66,62.64A72,72,0,0,1,81.62,180l-40-69.32a12,12,0,0,1,20.78-12L81.63,132a8,8,0,1,0,13.85-8L62,66A12,12,0,1,1,82.78,54L114,108a8,8,0,1,0,13.85-8L103.57,58h0a12,12,0,1,1,20.78-12l33.42,57.9a48,48,0,0,0-5.54,60.6,8,8,0,0,0,13.24-9A32,32,0,0,1,172.78,112a8,8,0,0,0,2.13-10.4L168.23,90A12,12,0,1,1,189,78l17.31,30A71.56,71.56,0,0,1,213.51,162.62ZM184.25,31.71A8,8,0,0,1,194,26a59.62,59.62,0,0,1,36.53,28l.33.57a8,8,0,1,1-13.85,8l-.33-.57a43.67,43.67,0,0,0-26.8-20.5A8,8,0,0,1,184.25,31.71ZM80.89,237a8,8,0,0,1-11.23,1.33A119.56,119.56,0,0,1,40.06,204a8,8,0,0,1,13.86-8,103.67,103.67,0,0,0,25.64,29.72A8,8,0,0,1,80.89,237Z"></path>
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between gap-2">
                {" "}
                <h3 className="text-gray-500 text-md font-medium">Introduction</h3>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-[#4fc9bf] group-hover:fill-lime-300" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </div>
            </Link>
            <Link to="/course/lesson/lesson-quiz" className="w-full h-24 py-5 px-16 bg-white rounded-md flex items-center gap-5 group">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#4fc9bf" fill="none">
                  <path
                    d="M4 3H3C2.44772 3 2 3.44772 2 4V18L3.5 21L5 18V4C5 3.44772 4.55228 3 4 3Z"
                    stroke="#4fc9bf"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M21 12.0013V8.00072C21 5.64336 21 4.46468 20.2678 3.73234C19.5355 3 18.357 3 16 3H13C10.643 3 9.46447 3 8.73223 3.73234C8 4.46468 8 5.64336 8 8.00072V16.0019C8 18.3592 8 19.5379 8.73223 20.2703C9.35264 20.8908 10.2934 20.9855 12 21"
                    stroke="#4fc9bf"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M12 7H17" stroke="#4fc9bf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12 11H17" stroke="#4fc9bf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M14 19C14 19 15.5 19.5 16.5 21C16.5 21 18 17 22 15"
                    stroke="#4fc9bf"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M2 7H5" stroke="#4fc9bf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between gap-2">
                {" "}
                <h3 className="text-gray-500 text-md font-medium">Starter Quiz</h3>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-[#4fc9bf] group-hover:fill-lime-300" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </div>
            </Link>
            <Link to="/course/lesson/lesson-video" className="w-full h-24 py-5 px-16 bg-white rounded-md flex items-center gap-5 group">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4fc9bf" viewBox="0 0 256 256">
                  <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between gap-2">
                {" "}
                <h3 className="text-gray-500 text-md font-medium">Lesson Video</h3>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-[#4fc9bf] group-hover:fill-lime-300" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </div>
            </Link>
            <Link to="/course/lesson/lesson-worksheet" className="w-full h-24 py-5 px-16 bg-white rounded-md flex items-center gap-5 group">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#4fc9bf" fill="none">
                  <path
                    d="M4 3H3C2.44772 3 2 3.44772 2 4V18L3.5 21L5 18V4C5 3.44772 4.55228 3 4 3Z"
                    stroke="#4fc9bf"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M21 12.0013V8.00072C21 5.64336 21 4.46468 20.2678 3.73234C19.5355 3 18.357 3 16 3H13C10.643 3 9.46447 3 8.73223 3.73234C8 4.46468 8 5.64336 8 8.00072V16.0019C8 18.3592 8 19.5379 8.73223 20.2703C9.35264 20.8908 10.2934 20.9855 12 21"
                    stroke="#4fc9bf"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M12 7H17" stroke="#4fc9bf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12 11H17" stroke="#4fc9bf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M14 19C14 19 15.5 19.5 16.5 21C16.5 21 18 17 22 15"
                    stroke="#4fc9bf"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M2 7H5" stroke="#4fc9bf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="flex-1 flex items-center justify-between gap-2">
                {" "}
                <h3 className="text-gray-500 text-md font-medium">Worksheet</h3>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-[#4fc9bf] group-hover:fill-lime-300" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="w-full h-16 bg-white flex items-center justify-end px-16 py-4">
            <Link to="/course/lesson/lesson-video" className="bg-gray-800 text-white px-8 py-2 rounded-md">
              Continue to Lesson
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonIntro;
