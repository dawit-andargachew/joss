import React from "react";
import { students } from "../../data";
import { Link } from "react-router-dom";

const Students = () => {
  const handleUpdate = () => {
    console.log("update button clicked");
  };
  const handleDelete = () => {
    console.log("delete button clicked");
  };
  return (
    <div className="mx-1">
      <div className="flex justify-end">
        <Link
          to={"/add-students"}
          className="text-white bg-primary px-5 py-2 mr-10 rounded-md"
        >
          Add Student
        </Link>
      </div>

      <p className="text-3xl mt-2 text-gray-800 font-bold ml-5">
        List of Student
      </p>
      <div className="flex mt-10  mb-3 text-table_header_color items-center justify-around font-semibold">
        <p className="w-1/12"> Student ID</p>
        <p className="w-2/12">Name </p>
        <p className="w-2/12"> Contact Detail</p>
        <p className="w-3/12"> Academic Record</p>
        <p className="w-2/12 text-center"> Actions</p>
      </div>

      {students.map((Student, index) => (
        <div
          key={Student.id}
          className={`flex py-1 mx-1 justify-around items-center ${
            index % 2 === 0 ? "bg-table_color_alternate" : "bg-white"
          }`}
        >
          <p className="font-bold  w-1/12">{Student.unique_ID}</p>
          <p className="w-2/12">{Student.name}</p>
          <p className="w-2/12">
            <ul>
              <li> {Student.contact_details.phone}</li>
              <li> {Student.contact_details.email}</li>
              <li>{Student.contact_details.city}</li>
            </ul>
          </p>
          <p className="w-3/12">
            <ul>
              {Student.academic_record.map((record) => (
                <li key={record.subject}>
                  {record.subject} : {record.grade}
                </li>
              ))}
            </ul>
          </p>
          <p className="w-2/12 flex justify-between">
            <button
              onClick={() => handleUpdate()}
              className="px-4 rounded-sm py-1 text-white bg-danger_yellow"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete()}
              className="px-4  rounded-sm py-1 text-white bg-danger_red"
            >
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Students;
