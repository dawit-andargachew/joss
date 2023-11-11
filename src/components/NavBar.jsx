import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mb-5">
      <header className="flex gap-8 p-4 ">
        <Link to={"/"} className="flex gap-2">
          <img src="/logo.svg" alt="logo" />

          <p className="text-[40] font-bold ">XY COLLEGE</p>
        </Link>
        <nav className="text-[gray] flex w-7/12 justify-around">
          <Link to={"/courses"}> Courses</Link>
          <Link to={"/grades"}> Grades</Link>
          <Link to={"/tands"}> Teacher and Students</Link>
          <Link to={"/analytics"}> Analytics</Link>
        </nav>

        <p className="ml-auto mr-3 flex gap-1">
          EN
          <img
            className="scale-125"
            src="/drop-down.svg"
            alt="drop-down image"
          />
        </p>
      </header>
    </div>
  );
};

export default NavBar;
