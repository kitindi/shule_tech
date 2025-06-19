import React from "react";

const LessonIntro = () => {
  return (
    <div className="w-full  bg-[#38b8ad] h-screen">
      <div className="w-full">
        <div className="grid grid-cols-12 p-20  ">
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
              <p className="text-md text-white">
                In this lesson, you will learn about the binary number system and how it is used to represent data in computers. You will explore how binary is
                used to represent numbers, text, images, and sounds, and understand the significance of binary in computer science.
              </p>
            </div>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
    </div>
  );
};

export default LessonIntro;
