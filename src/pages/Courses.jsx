import React from "react";
import { Link } from "react-router";

const Courses = () => {
  return (
    <div className="w-full p-8">
      <div className="w-full  ">
        {/* <div className="flex items-center gap-4 py-10">
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
          <button className="bg-[#4fc9bf] text-white px-8 py-3 rounded-full cursor-pointer hover:bg-[#36b0a5] transition-all">Search</button>
        </div> */}
      </div>
      <div>
        <h2 className="text-lg font-medium text-gray-700 mb-3">Find what's right just for you</h2>
        <p className="text-gray-500 text-sm py-3">
          We provide free online lessons with videos, quizzes, and more. Whatever the subject, from GCSE to NECTA carriculum, we've got you covered.
        </p>

        <div className="pt-10">
          <h2 className="py-4 text-lg text-gray-700 font-medium">Choose a subject</h2>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <Link to="/courses/course-units" className="bg-[#c4edea] rounded-lg p-6 hover:bg-[#9de1db] cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                  <path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z"></path>
                </svg>
              </span>
              <h3 className="text-md font-medium text-gray-800">Cambridge IGCSE</h3>
            </div>

            <p className="text-gray-600 mt-2 text-sm pl-10">Computer Science (0478)</p>
          </Link>
          <Link to="/courses/course-units" className="bg-[#c4edea] rounded-lg p-6 hover:bg-[#9de1db] cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                  <path d="M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z"></path>
                </svg>
              </span>
              <h3 className="text-md fontmediumd text-gray-800">Cambridge IGCSE</h3>
            </div>

            <p className="text-gray-600 mt-2 text-sm pl-10">Information and Communication Technology (0417)</p>
          </Link>
          <Link to="/courses/course-intro" className="bg-[#c4edea] rounded-lg p-6 hover:bg-[#9de1db] cursor-pointer transition-all">
            <h3 className="text-md font-medium text-gray-800">NECTA</h3>
            <p className="text-gray-600 mt-2 text-sm">Computer Science Form 1 - IV</p>
          </Link>
        </div>
      </div>
      <div className="pt-10">
        <h2 className="py-4 text-lg text-gray-700 font-medium">Join a career-changing bootcamp to build demanding tech skills</h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="bg-[#c4edea] rounded-lg p-6 hover:bg-[#9de1db] cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000" viewBox="0 0 256 256">
                  <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H168a8,8,0,0,0,0,16h32a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM64,144H48a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40H56V160h8a12,12,0,0,1,0,24Zm90.78-27.76-18.78,30V208a8,8,0,0,1-16,0V186.29l-18.78-30a8,8,0,1,1,13.56-8.48L128,168.91l13.22-21.15a8,8,0,1,1,13.56,8.48Z"></path>
                </svg>
              </span>{" "}
              <h3 className="text-md font-medium text-gray-800">Python for Beginners</h3>
            </div>

            <p className="text-gray-600 mt-2 text-sm">Learn python 3, one of the most powerful, versatile and in-demand programming language today</p>
          </div>
          <div className="bg-[#c4edea] rounded-lg p-6 hover:bg-[#9de1db] cursor-pointer transition-all">
            <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM80,84A12,12,0,1,1,68,72,12,12,0,0,1,80,84Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,120,84Z"></path>
                </svg>
              </span>
              <h3 className="text-md font-medium text-gray-800">Web Development</h3>
            </div>

            <p className="text-gray-600 mt-2 text-sm">Learn how to develop websites and web apps that live on the internet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
