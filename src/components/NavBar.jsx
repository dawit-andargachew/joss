import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="mb-2">
      <header className="flex gap-8 p-4 ">
        <Link to={"/"} className="flex gap-2">
          <img src="/logo.svg" alt="logo" />
          <p className="text-[40] font-bold ">XY COLLEGE</p>
        </Link>
        <nav className="text-[gray] flex w-6/12 justify-around">
          <Link
            to={"/courses"}
            onClick={() => handleLinkClick("/courses")}
            className={
              activeLink === "/courses"
                ? "text-primary font-bold border-b-2 border-primary"
                : ""
            }
          >
            Courses
          </Link>
          <Link
            to={"/grades"}
            onClick={() => handleLinkClick("/grades")}
            className={
              activeLink === "/grades"
                ? "text-primary font-bold border-b-2 border-primary"
                : ""
            }
          >
            Grades
          </Link>
          <Link
            to={"/students"}
            onClick={() => handleLinkClick("/students")}
            className={
              activeLink === "/students"
                ? "text-primary font-bold border-b-2 border-primary"
                : ""
            }
          >
            Students
          </Link>
          <Link
            to={"/analytics"}
            onClick={() => handleLinkClick("/analytics")}
            className={
              activeLink === "/analytics"
                ? "text-primary font-bold border-b-2 border-primary"
                : ""
            }
          >
            Analytics
          </Link>
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
