import React from "react";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import Grades from "./components/Grades";
import Analytics from "./components/Analytics/Analytics";
import NavBar from "./components/NavBar";
import TandS from "./components/Teacher_and_Students";

const App = () => {
  return (
    <div className="font-DM_Sans">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/tands" element={<TandS />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default App;
