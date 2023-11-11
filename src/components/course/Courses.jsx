import React from "react";
import { courses } from "../../data";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="mx-1">
      <div className="flex justify-end">
        <Link
          to={"/add-course"}
          className="text-white bg-primary px-5 py-2  mr-4 rounded-md"
        >
          Add Course
        </Link>
      </div>

      <p className="text-4xl mt-2 text-gray-800 font-bold ml-5">
        List of Courses
      </p>
      <div className="flex text-lg mt-5  mb-3 text-table_header_color justify-evenly items-center font-semibold">
        <p className="text-center w-2/12">Title </p>
        <p className="text-center w-1/12"> Course Code</p>
        <p className="text-center w-3/12"> Description</p>
        <p className="text-center w-1/12"> Credit Hours</p>
        <p className="text-center w-1/12"> enrolled Stud</p>
        <p className="text-center w-2/12">Actions</p>
      </div>

      {courses.map((course, index) => (
        <div
          key={course.id}
          className={`flex justify-evenly py-2 my-2 mx-1 items-center ${
            index % 2 === 0 ? "bg-table_color_alternate" : "bg-white"
          }`}
        >
          <p className="text-center font-bold w-2/12">{course.title}</p>
          <p className="text-center w-1/12">{course.course_code}</p>
          <p className="text w-3/12">{course.description}</p>
          <p className="text-center w-1/12">{course.credit_hours}</p>
          <p className="text-center w-1/12"> {course.enrolled_students} </p>
          <p className="w-2/12 flex justify-between">
            <button className="px-5 rounded-sm py-1 text-white bg-danger_yellow">
              Update
            </button>
            <button className="px-4  rounded-sm py-1 text-white bg-danger_red">
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
