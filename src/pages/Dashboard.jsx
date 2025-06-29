import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-xl font-medium text-gray-600">Welcome!</h1>
          <p className="mt-4 text-gray-600 text-sm">You're on a roll! Jump back in, or start something new.</p>
        </div>
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </div>
      <div className="mt-4 grid md:grid-cols-12 gap-4 border-gray-200 py-10 border-b-2 w-full">
        <div className="col-span-3 flex flex-col  ">
          <p className="flex items-center text-gray-500 gap-2">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4fc9bf" fill="none">
                <path
                  d="M2 8C2 9.34178 10.0949 13 11.9861 13C13.8772 13 21.9722 9.34178 21.9722 8C21.9722 6.65822 13.8772 3 11.9861 3C10.0949 3 2 6.65822 2 8Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.99414 11L6.23925 16.6299C6.24415 16.7426 6.25634 16.8555 6.28901 16.9635C6.38998 17.2973 6.57608 17.6006 6.86 17.8044C9.08146 19.3985 14.8901 19.3985 17.1115 17.8044C17.3956 17.6006 17.5816 17.2973 17.6826 16.9635C17.7152 16.8555 17.7274 16.7426 17.7324 16.6299L17.9774 11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4734 9.5V16.5M20.4734 16.5C19.6814 17.9463 19.3312 18.7212 18.9755 20C18.8983 20.455 18.9596 20.6843 19.2732 20.8879C19.4006 20.9706 19.5537 21 19.7055 21H21.2259C21.3876 21 21.5507 20.9663 21.6838 20.8745C21.9753 20.6735 22.0503 20.453 21.9713 20C21.6595 18.8126 21.2623 18.0008 20.4734 16.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Courses
          </p>
          <p className="text-lg font-bold text-gray-700 my-3">0</p>
          <p className="text-gray-500 text-xs">Courses in progress</p>
        </div>
        <div className="col-span-3 flex flex-col  ">
          <p className="flex items-center text-gray-500 gap-2">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4fc9bf" fill="none">
                <path d="M16 2V4M11 2V4M6 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M19.5 10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H12.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M17.5 14L17.5 22M21.5 18L13.5 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 15H11M7 10H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </span>
            Notebooks
          </p>
          <p className="text-lg font-bold text-gray-700 my-3">0</p>
          <p className="text-gray-500 text-xs">Total created</p>
        </div>
        <div className="col-span-3 flex flex-col  ">
          <p className="flex items-center text-gray-500 gap-2">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#4fc9bf" viewBox="0 0 256 256">
                <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-29,64.64-64,64.9a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"></path>
              </svg>
            </span>
            Competitions
          </p>
          <p className="text-lg font-bold text-gray-700 my-3">0</p>
          <p className="text-gray-500 text-xs">Total joined</p>
        </div>
        <div className="col-span-3 flex flex-col  ">
          <p className="flex items-center text-gray-500 gap-2">
            {" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4fc9bf" fill="none">
                <path
                  d="M6.99994 6V5C6.99994 3.58579 6.99994 2.87868 7.43928 2.43934C7.87862 2 8.58573 2 9.99994 2H13.9999C15.4142 2 16.1213 2 16.5606 2.43934C16.9999 2.87868 16.9999 3.58579 16.9999 5V6C16.9999 7.41421 16.9999 8.12132 16.5606 8.56066C16.1213 9 15.4142 9 13.9999 9H12.9999L9.99994 11V9C8.58573 9 7.87862 9 7.43928 8.56066C6.99994 8.12132 6.99994 7.41421 6.99994 6Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.59 18.7408C2.96122 19.162 1.31258 20.0221 2.31671 21.0983C2.80722 21.624 3.35352 22 4.04036 22H5.99997H7.95958C8.64642 22 9.19272 21.624 9.68323 21.0983C10.6874 20.0221 9.03872 19.162 8.40994 18.7408C6.93544 17.7531 5.0645 17.7531 3.59 18.7408Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M15.59 18.7408C14.9612 19.162 13.3126 20.0221 14.3167 21.0983C14.8072 21.624 15.3535 22 16.0404 22H18H19.9596C20.6464 22 21.1927 21.624 21.6832 21.0983C22.6874 20.0221 21.0387 19.162 20.4099 18.7408C18.9354 17.7531 17.0645 17.7531 15.59 18.7408Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M7.99997 13.5C7.99997 14.6046 7.10454 15.5 5.99997 15.5C4.8954 15.5 3.99997 14.6046 3.99997 13.5C3.99997 12.3954 4.8954 11.5 5.99997 11.5C7.10454 11.5 7.99997 12.3954 7.99997 13.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M20 13.5C20 14.6046 19.1045 15.5 18 15.5C16.8954 15.5 16 14.6046 16 13.5C16 12.3954 16.8954 11.5 18 11.5C19.1045 11.5 20 12.3954 20 13.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            Discussions
          </p>
          <p className="text-lg font-bold text-gray-700 my-3">0</p>
          <p className="text-gray-500 text-xs">Total posted</p>
        </div>
      </div>
      <div className="mt-8  w-full">
        <p className="text-lg font-medium text-gray-700 mb-3">Choose your focus for today</p>
        <p className=" text-gray-600 text-sm">Help us make relevant suggestions for you</p>
        <div className="py-5">
          <div className="w-full grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2 grid grid-cols-2 gap-5">
              <Link to="/dashboard" className=" col-span-1 border border-gray-200 rounded-md">
                <div className="w-full ">
                  <span className="flex items-center justify-center h-20 w-20 bg-[#4fc9bf] rounded-md mt-5 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#fff" fill="none">
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
                  </span>
                </div>
                <div className="py-10 px-4">
                  <p className="text-sm text-gray-600 text-center">Join competitions and improve your tech skills</p>
                </div>
              </Link>
              <Link to="/courses" className=" col-span-1 border border-gray-200 rounded-md">
                <div className="w-full ">
                  <span className="flex items-center justify-center h-20 w-20 bg-[#4fc9bf] rounded-md mt-5 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#ffffff" fill="none">
                      <path
                        d="M2 8C2 9.34178 10.0949 13 11.9861 13C13.8772 13 21.9722 9.34178 21.9722 8C21.9722 6.65822 13.8772 3 11.9861 3C10.0949 3 2 6.65822 2 8Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.99414 11L6.23925 16.6299C6.24415 16.7426 6.25634 16.8555 6.28901 16.9635C6.38998 17.2973 6.57608 17.6006 6.86 17.8044C9.08146 19.3985 14.8901 19.3985 17.1115 17.8044C17.3956 17.6006 17.5816 17.2973 17.6826 16.9635C17.7152 16.8555 17.7274 16.7426 17.7324 16.6299L17.9774 11"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M20.4734 9.5V16.5M20.4734 16.5C19.6814 17.9463 19.3312 18.7212 18.9755 20C18.8983 20.455 18.9596 20.6843 19.2732 20.8879C19.4006 20.9706 19.5537 21 19.7055 21H21.2259C21.3876 21 21.5507 20.9663 21.6838 20.8745C21.9753 20.6735 22.0503 20.453 21.9713 20C21.6595 18.8126 21.2623 18.0008 20.4734 16.5Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="py-10 px-8">
                  <p className="text-sm text-gray-600 text-center">Continue learning </p>
                </div>
              </Link>
            </div>
            {/* <div className="col-span-1 bg-green-500 rounded-md px-8">
              <div className="py-4 flex flex-row items-center  gap-3">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                    <path
                      d="M7 4.5C5.34315 4.5 4 5.84315 4 7.5C4 8.06866 4.15822 8.60037 4.43304 9.0535C3.04727 9.31855 2 10.537 2 12C2 13.463 3.04727 14.6814 4.43304 14.9465M7 4.5C7 3.11929 8.11929 2 9.5 2C10.8807 2 12 3.11929 12 4.5V19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C5.34315 19.5 4 18.1569 4 16.5C4 15.9313 4.15822 15.3996 4.43304 14.9465M7 4.5C7 5.31791 7.39278 6.04408 8 6.50018M4.43304 14.9465C4.78948 14.3588 5.34207 13.9032 6 13.6707"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 19.4999C18.6569 19.4999 20 18.1567 20 16.4999C20 15.9312 19.8418 15.3995 19.567 14.9464C20.9527 14.6813 22 13.4629 22 11.9999C22 10.5369 20.9527 9.31843 19.567 9.05338M17 19.4999C17 20.8806 15.8807 21.9999 14.5 21.9999C13.1193 21.9999 12 20.8806 12 19.4999L12 4.49988C12 3.11917 13.1193 1.99988 14.5 1.99988C15.8807 1.99988 17 3.11917 17 4.49988C18.6569 4.49988 20 5.84302 20 7.49988C20 8.06854 19.8418 8.60024 19.567 9.05338M17 19.4999C17 18.682 16.6072 17.9558 16 17.4997M19.567 9.05338C19.2105 9.64109 18.6579 10.0966 18 10.3292"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-md text-white font-medium"> AI Study Assistant</p>
              </div>
              <div className="bg-green-400 p-5 rounded-lg">
                <p className="text-sm text-white">Get personalized study recommendations and resources based on your learning style and preferences.</p>
              </div>
              <button className="w-full flex gap-2 items-center justify-center font-medium py-2.5 px-8 rounded-full bg-green-400 my-3 text-white text-md cursor-pointer hover:bg-green-600">
                {" "}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                    <path d="M12 4V2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M19 22C19 18.134 15.866 15 12 15C8.13401 15 5 18.134 5 22"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path d="M9.5 7.5H9.50998M14.49 7.5H14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M5.5 6.66667C5.5 6.04669 5.5 5.73669 5.56815 5.48236C5.75308 4.79218 6.29218 4.25308 6.98236 4.06815C7.23669 4 7.54669 4 8.16667 4H15.8333C16.4533 4 16.7633 4 17.0176 4.06815C17.7078 4.25308 18.2469 4.79218 18.4319 5.48236C18.5 5.73669 18.5 6.04669 18.5 6.66667C18.5 7.90663 18.5 8.52661 18.3637 9.03528C17.9938 10.4156 16.9156 11.4938 15.5353 11.8637C15.0266 12 14.4066 12 13.1667 12H10.8333C9.59337 12 8.97339 12 8.46472 11.8637C7.08436 11.4938 6.00617 10.4156 5.6363 9.03528C5.5 8.52661 5.5 7.90663 5.5 6.66667Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                Continue
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
