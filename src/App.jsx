import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";
import CourseUnits from "./pages/CourseUnits";
import UnitLessons from "./pages/UnitLessons";
import LessonIntro from "./pages/LessonIntro";
import Introduction from "./pages/Introduction";
import LessonQuiz from "./pages/LessonQuiz";
import LessonVideo from "./pages/LessonVideo";
import LessonWorksheet from "./pages/LessonWorksheet";
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
          <Route path="/courses/course-units" element={<CourseUnits />} />
          <Route path="/course/unit-lessons" element={<UnitLessons />} />
          <Route path="/course/unit/lesson/lesson-intro" element={<LessonIntro />} />
          <Route path="/course/unit/lesson/introduction" element={<Introduction />} />
          <Route path="/course/unit/lesson/lesson-quiz" element={<LessonQuiz />} />
          <Route path="/course/unit/lesson/lesson-video" element={<LessonVideo />} />
          <Route path="/course/unit/lesson/lesson-worksheet" element={<LessonWorksheet />} />
        </Route>
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
