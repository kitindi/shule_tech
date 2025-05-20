import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import CourseIntro from "./pages/CourseIntro";
function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-intro" element={<CourseIntro />} />
        </Route>
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
