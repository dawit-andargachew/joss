import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [academicRecord, setAcademicRecord] = useState([]);

  const handleAddCourse = () => {
    // Add the current course to the academic record
    if (course.trim() !== "") {
      setAcademicRecord((prevRecord) => [...prevRecord, course.trim()]);
      setCourse(""); // Clear the input field after adding a course
    }
  };
  const handleRemoveCourse = (index) => {
    setAcademicRecord((prevRecord) => {
      const updatedRecord = [...prevRecord];
      updatedRecord.splice(index, 1);
      return updatedRecord;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new student object
    console.log(name, email, phone, city, academicRecord);

    // Perform any necessary actions with the new student object (e.g., send to server)

    // Reset the form fields
    // setName("");
    // setEmail("");
    // setPhone("");
    // setCity("");
    // setCourse("");
    // setAcademicRecord([]);

    // Display a success message or perform any desired actions
  };

  return (
    <div className="p-8 w-10/12 mx-auto bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-800 font-semibold mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-8/12 px-4 py-2 border rounded focus:outline-none focus:border-primary"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Address
          </label>
          <div className="flex gap-5 w-11/12">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:border-primary"
              placeholder="Email"
              required
            />
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-2 border focus:outline-none focus:border-primary"
              placeholder="Phone"
              required
            />
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-r focus:outline-none focus:border-primary"
              placeholder="City"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="course"
            className="block text-gray-800 font-semibold mb-2"
          >
            Add Course
          </label>
          <div className="flex gap-5 w-10/12">
            <input
              id="course"
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Course Name"
            />
            <button
              onClick={handleAddCourse}
              className="bg-light-blue-600 text-white px-4 py-2 rounded-md "
            >
              Add Course
            </button>
          </div>
        </div>

        <div className="mb-4 rounded-lg px-2 py-4 m-2 shadow-lg">
          <label
            htmlFor="academicRecord"
            className="block text-gray-800 font-semibold mb-2"
          >
            Added Courses
          </label>

          <div className="flex flex-wrap gap-5">
            {academicRecord.map((course, index) => (
              <div
                key={index}
                className="relative text-white rounded-md bg-light-blue-600 px-5 py-1"
              >
                {course}
                <button
                  onClick={() => handleRemoveCourse(index)}
                  className="absolute top-0 right-0 p-1 bg-transparent text-white hover:text-red-500 focus:outline-none"
                >
                  <RiCloseLine />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary my-5 hover:bg-primary text-white font-bold py-2 px-4 rounded-md transition duration-300"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
