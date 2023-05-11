import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" w-[100px] h-screen text-white fixed   flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/resume">Resume</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/pricing">Pricing</Link>
      </div>
    </div>
  );
};

export default SideBar;
