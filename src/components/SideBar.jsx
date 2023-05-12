import React from "react";
import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";
import { FiSend } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="  text-white fixed   flex flex-row justify-center items-center">
      <div className="flex h-[200px] flex-col gap-4">
        <div className="flex w-[50px] h-[100px] items-center justify-center bg-black flex-col py-2 ">
          <h1 className="font-bold">
            <BsFillMoonStarsFill className="text-2xl cursor-pointer" />
          </h1>
        </div>
        <div className="flex items-center justify-center w-[50px] h-[200px] bg-[#5FBFF9] flex-col gap-8 py-4">
          <Link to="/">
            <FaUserAlt className="text-2xl  cursor-pointer" />
          </Link>

          <Link to="/resume">
            <MdLibraryBooks className="text-2xl  cursor-pointer" />
          </Link>

          <Link to="/contact">
            <FiSend className="text-2xl  cursor-pointer" />
          </Link>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${profile})` }}
        className="w-[500px] h-[90vh] flex justify-center p-8 items-end bg-cover bg-center "
      >

        ybn
      </div>
    </div>
  );
};

export default SideBar;
