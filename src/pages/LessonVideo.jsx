import React from "react";
import { Link } from "react-router";

const LessonVideo = () => {
  return (
    <div className="w-full py-8 px-16">
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
      <div className="flex gap-5 items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-tv-minimal-play-icon lucide-tv-minimal-play"
          >
            <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
            <path d="M7 21h10" />
            <rect width="20" height="14" x="2" y="3" rx="2" />
          </svg>
        </span>
        <h1 className="text-xl font-semibold text-gray-700">Lesson video</h1>
      </div>
      <div className="w-full max-4xl max-auto">
        <div className="w-full  max-w-4xl mx-auto h-[500px] bg-gray-200 rounded-lg mt-4">
          <iframe
            className="w-full  h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LessonVideo;
