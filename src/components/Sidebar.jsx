import React from "react";
import { Link } from "react-router";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div className="w-full border-r-2 border-gray-200 min-h-screen px-10 py-6 sticky top-0 left-0">
      <div className="flex flex-row  items-center  p-2 ">
        <Logo />
      </div>
      <div className="mt-8 py-8">
        <div className="flex flex-col gap-1">
          <Link to="/dashboard" className="text-sm flex gap-1 items-center hover:bg-gray-100 hover:p-2 p-2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9CA3AF" viewBox="0 0 256 256">
              <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
            </svg>
            <span className="ml-2 text-sm text-slate-600">Dashboard</span>
          </Link>
          <Link to="/courses" className="text-sm flex gap-1 items-center hover:bg-gray-100 hover:p-2 p-2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9CA3AF" viewBox="0 0 256 256">
              <path d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path>
            </svg>
            <span className="ml-2 text-sm text-slate-600">Courses</span>
          </Link>
          <Link to="/leaning" className="text-sm flex gap-1 items-center hover:bg-gray-100 hover:p-2 p-2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9CA3AF" viewBox="0 0 256 256">
              <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
            </svg>
            <span className="ml-2 text-sm text-slate-600">My Learning path</span>
          </Link>
          <Link to="/leaning" className="text-sm flex gap-1 items-center hover:bg-gray-100 hover:p-2 p-2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#9CA3AF" fill="none">
              <path
                d="M12 17C10.3264 17 8.86971 18.265 8.11766 20.1312C7.75846 21.0225 8.27389 22 8.95877 22H15.0412C15.7261 22 16.2415 21.0225 15.8823 20.1312C15.1303 18.265 13.6736 17 12 17Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M18.5 5H19.7022C20.9031 5 21.5035 5 21.8168 5.37736C22.13 5.75472 21.9998 6.32113 21.7393 7.45395L21.3485 9.15307C20.7609 11.7086 18.6109 13.6088 16 14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.5 5H4.29779C3.09692 5 2.49649 5 2.18324 5.37736C1.86999 5.75472 2.00024 6.32113 2.26075 7.45395L2.65148 9.15307C3.23914 11.7086 5.38912 13.6088 8 14"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 17C15.0208 17 17.565 12.3379 18.3297 5.99089C18.5412 4.23558 18.647 3.35793 18.0868 2.67896C17.5267 2 16.6223 2 14.8134 2H9.18658C7.37775 2 6.47333 2 5.91317 2.67896C5.35301 3.35793 5.45875 4.23558 5.67025 5.99089C6.435 12.3379 8.97923 17 12 17Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span className="ml-2 text-sm text-slate-600">Competitions</span>
          </Link>
          <Link to="/community" className="text-sm flex gap-1 items-center hover:bg-gray-100 hover:p-2 p-2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9CA3AF" viewBox="0 0 256 256">
              <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
            </svg>
            <span className="ml-2 text-sm text-slate-600">Community</span>
          </Link>
          <Link to="/skills" className="text-sm flex gap-1 items-center hover:bg-gray-100 hover:p-2 p-2 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#9CA3AF" viewBox="0 0 256 256">
              <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
            </svg>
            <span className="ml-2 text-sm text-slate-600">Skills</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
