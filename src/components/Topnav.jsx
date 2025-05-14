import React from "react";
import { useAuth } from "../context/authcontext";

const Topnav = () => {
  const { signOutUser, currentUser } = useAuth();
  return (
    <div className="p-2 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white z-10">
      <div></div>
      <div className="pr-8 flex items-center gap-4">
        {currentUser.displayName ? (
          <p className="flex items-center justify-center bg-green-500 p-4 rounded-full w-5 h-5 text-lg text-white"> {currentUser.displayName[0]}</p>
        ) : (
          <p className="flex items-center justify-center bg-green-500 p-4 rounded-full w-5 h-5 text-lg text-white">N</p>
        )}{" "}
        <span className="cursor-pointer  rounded-full hover:bg-[#b7decf] transition duration-300 ease-in-out p-2" onClick={signOutUser}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#9b9b9b" fill="none">
            <path
              d="M6 6.50006C4.15875 8.14802 3 10.3345 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 10.3345 19.8412 8.14802 18 6.50006"
              stroke="#9b9b9b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 2V11M12 2C11.2998 2 9.99153 3.9943 9.5 4.5M12 2C12.7002 2 14.0085 3.9943 14.5 4.5"
              stroke="#9b9b9b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Topnav;
