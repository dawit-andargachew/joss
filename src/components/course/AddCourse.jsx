import React, { useState } from "react";

const AddCourseForm = () => {
  const [course, setCourse] = useState({
    title: "",
    course_code: "",
    description: "",
    credit_hours: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the logic to add the course (e.g., send it to a server or update state)
    console.log("Course submitted:", course);
  };

  return (
    <div className="w-9/12 mx-auto my-5 p-5 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={course.title}
            onChange={handleChange}
            placeholder="Introduction to Programming"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="course_code"
            className="block text-gray-700 font-medium mb-2"
          >
            Course Code
          </label>
          <input
            type="text"
            id="course_code"
            name="course_code"
            value={course.course_code}
            onChange={handleChange}
            placeholder="CS101"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            placeholder="An introductory course to programming concepts and problem-solving."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="credit_hours"
            className="block text-gray-700 font-medium mb-2"
          >
            Credit Hours
          </label>
          <input
            type="number"
            id="credit_hours"
            name="credit_hours"
            value={course.credit_hours}
            onChange={handleChange}
            placeholder="3"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary transition duration-300"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
