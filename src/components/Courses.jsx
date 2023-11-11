import React from "react";
import { courses } from "../data";

const Courses = () => {
  return (
    <div className="mx-1">
      <div className="flex justify-end">
        <button className="text-white bg-primary px-5 py-2 mr-10 rounded-md">
          Add Course
        </button>
      </div>
      <div className="flex mt-10  mb-3 text-table_header_color items-center font-semibold">
        <p className="text-center w-3/12">Title </p>
        <p className="text-center w-1/12"> Course Code</p>
        <p className="text-center w-5/12"> Description</p>
        <p className="text-center w-1/12"> Credit Hours</p>
        <p className="text-center w-2/12"> enrolled Stud</p>
      </div>

      {courses.map((course, index) => (
        <div
          key={course.id}
          className={`flex py-2 my-2 mx-1 items-center ${
            index % 2 === 0 ? "bg-table_color_alternate" : "bg-white"
          }`}
        >
          <p className="font-bold w-3/12">{course.title}</p>
          <p className="text-center w-1/12">{course.course_code}</p>
          <p className="text-center w-5/12">{course.description}</p>
          <p className="text-center w-1/12 px-1">{course.credit_hours}</p>
          <p className="text-center w-2/12 px-1">{course.enrolled_students}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
