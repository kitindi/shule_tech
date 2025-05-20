import React from "react";
import { Link } from "react-router";
const Profile = () => {
  return (
    <div className="w-full p-8">
      <div className="w-full max-w-3xl mx-auto bg-white py-10 px-16">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Complete your profile</h2>{" "}
          <Link to="/dashboard" className="p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#9b9b9b" fill="none">
              <path d="M14.9994 15L9 9M9.00064 15L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
        <p className="text-gray-500 text-sm mb-3">People in Shule will get to know you with the info</p>
        <div>
          <form action="">
            <div>
              <label htmlFor="" className="text-sm font-gray-500">
                Photo
              </label>
              <div>
                <span className="p-3 rounded-full bg-[#D1D5DB] text-black font-lg flex justify-center items-center w-12 h-12">N</span>
                <span></span>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-5">
                <input type="text" className="py-2 px-4 outline-none border border-gray-300 rounded-full text-sm col-span-2" placeholder="First name" />

                <input type="text" className="py-2 px-4 outline-none border border-gray-300 rounded-full text-sm col-span-2" placeholder="Last name" />
              </div>
              <div className="grid grid-cols-4 gap-3 mt-5">
                <input type="text" className="py-2 px-4 outline-none border border-gray-300 rounded-full text-sm col-span-4" placeholder="Display name" />
              </div>
              <div className="flex flex-col pt-4 ">
                <label htmlFor="" className="text-sm text-gray-500 pb-2">
                  About you
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Write a little bit about who yourself are here.."
                  className="py-2 px-4 outline-none border border-gray-300 rounded-lg text-sm col-span-4"
                ></textarea>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-5">
                <input
                  type="text"
                  className="py-2 px-4 outline-none border border-gray-300 rounded-full text-sm col-span-4"
                  placeholder="Location : Dar es Salaam, TZ"
                />
              </div>
              <div className="mt-3">
                <button className="p-2.5 bg-green-500 text-white font-semibold w-full rounded-full cursor-pointer">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
