import { Link } from "react-router";

const UnitLessons = () => {
  return (
    <div className="w-full px-16 bg-white h-screen">
      <div className="w-full">
        <div className="w-full flex items-center justify-start py-4">
          <Link to="/courses/course-units" className="flex items-center gap-2 text-gray-600 group">
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
            <p className="text-gray-600 group-hover:underline group-hover:decoration-[#4fc9bf]">view all units</p>
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
        <div className="w-full  gap-4">
          <p className="text-md text-gray-600 font-semibold">Choose a lessons (5)</p>
          <div className="py-6">
            <ul className=" text-gray-600 flex flex-col gap-6">
              <Link
                to="/course/unit/lesson/lesson-intro"
                className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200"
              >
                <p className="text-md text-gray-500">Lesson 1: Understand how and why computers use binary to represent all forms of data</p>{" "}
                <p className="text-md text-gray-500">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-gray-500">
                  Lesson 2: Understand denary, binary and hexadecimal number systems. Convert positive integers between these number systems.{" "}
                </p>{" "}
                <p className="text-md text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-gray-500">Lesson 3: Understand how and why hexadecimal is used as a beneficial method of data representation.</p>{" "}
                <p className="text-md text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-gray-500">
                  Lesson 4: Add two positive 8-bit binary integers. Understand the concept of overflow and why it occurs in binary addition.{" "}
                </p>{" "}
                <p className="text-md text-gray-500">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </Link>
              <Link className="flex justify-between items-center p-4 rounded-md border-2 border-gray-200 hover:bg-gray-100 transition-all duration-200">
                <p className="text-md text-gray-500">
                  Lesson 5: Perform logical binary shifts on positive 8-bit binary integers and understand the effect this has on the positive binary{" "}
                </p>{" "}
                <p className="text-md text-gray-500">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitLessons;
