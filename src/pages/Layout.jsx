import { Link } from "react-router";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
function Layout() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 ">
          <Topnav />
          <div className="bg-gray-50 min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
