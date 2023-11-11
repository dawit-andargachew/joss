import React, { useState } from "react";

const Grades = () => {
  const [courseId, setCourseId] = useState("");
  const [studentId, setStudentId] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs if needed
    // Call the onSubmit prop with the entered data
    console.log("courseId", courseId);
    console.log("studentId", studentId);
    console.log("grade", grade);
    // Clear the form fields
    setCourseId("");
    setStudentId("");
    setGrade("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg w-10/12 shadow-md p-6"
    >
      <div className="font-bold text-xl my-3">Enter Grade</div>
      <div className="mb-4">
        <label
          htmlFor="courseId"
          className="block text-gray-800 font-semibold mb-2"
        >
          Course ID:
        </label>
        <input
          type="text"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="studentId"
          className="block text-gray-800 font-semibold mb-2"
        >
          Student ID:
        </label>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="grade"
          className="block text-gray-800 font-semibold mb-2"
        >
          Grade:
        </label>
        <input
          type="text"
          id="grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary text-white font-bold py-2 px-6 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Grades;
