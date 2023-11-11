import React from "react";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/course/Courses";
import Grades from "./components/Grades";
import Analytics from "./components/analytics/Analytics";
import NavBar from "./components/NavBar";
import Students from "./components/Students";
import AddCourseForm from "./components/course/AddCourse";
import AddStudentForm from "./components/students/AddStudent";

const App = () => {
  return (
    <div className="font-DM_Sans ">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* course Related */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/add-course" element={<AddCourseForm />} />

        {/* Grade Related */}
        <Route path="/grades" element={<Grades />} />

        {/* Student Related */}
        <Route path="/students" element={<Students />} />
        <Route path="/add-students" element={<AddStudentForm />} />

        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default App;
