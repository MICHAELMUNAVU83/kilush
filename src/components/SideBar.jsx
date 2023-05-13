import React from "react";
import { Link } from "react-router-dom";
import profile from "./images/profile.jpg";
import { FaUserAlt } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { SiFiles } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import Typewriter from "typewriter-effect";

const SideBar = () => {
  const icons = [
    {
      id: 1,
      icon: (
        <IoIosCall className="text-2xl text-gray-500 cursor-pointer hover:scale-105 transition-all duration-500" />
      ),
      link: "tel:+254 729 000 000",
    },
    {
      id: 2,
      icon: (
        <FaLinkedinIn className="text-2xl text-gray-500 cursor-pointer hover:scale-105 transition-all duration-500" />
      ),
      link: "https://www.linkedin.com/in/amos-kibet-9b0b3b1b2/",
    },
    {
      id: 3,
      icon: (
        <IoLogoWhatsapp className="text-2xl text-gray-500 cursor-pointer hover:scale-105 transition-all duration-500" />
      ),
      link: "https://wa.me/+254729000000",
    },
    {
      id: 4,
      icon: (
        <ImGithub className="text-2xl text-gray-500 cursor-pointer hover:scale-105 transition-all duration-500" />
      ),
      link: "",
    },
    {
      id: 5,
      icon: (
        <GrMail className="text-2xl text-gray-500 cursor-pointer hover:scale-105 transition-all duration-500" />
      ),
      link: "mailto:",
    },
  ];

  return (
    <div className="  text-white fixed   flex flex-row justify-center items-center">
      <div className="flex h-[200px] flex-col gap-4">
        <div className="flex items-center justify-center w-[50px]  text-black h-[200px] bg-[#5FBFF9] flex-col gap-8 py-4">
          <Link to="/" className="flex gap-4 relative  group">
            <FaUserAlt className="text-2xl  cursor-pointer  " />
            <p className="text-sm mplus px-2 z-10 absolute ml-8  bg-white  text-black group-hover:block hidden transition-all ease-in-out uppercase duration-500">
              About
            </p>
          </Link>

          <Link to="/resume" className="flex gap-4 relative  group">
            <MdLibraryBooks className="text-2xl  cursor-pointer  " />
            <p className="text-sm px-2 mplus z-10 absolute ml-8  bg-white  text-black group-hover:block hidden transition-all ease-in-out uppercase duration-500">
              Resume
            </p>
          </Link>

          <Link to="/projects" className="flex gap-4 relative  group">
            <SiFiles className="text-2xl  cursor-pointer  " />
            <p className="text-sm px-2 mplus z-10 absolute ml-8  bg-white  text-black group-hover:block hidden transition-all ease-in-out uppercase duration-500">
              Projects
            </p>
          </Link>

          <Link to="/contact" className="flex gap-4 relative  group">
            <FiSend className="text-2xl  cursor-pointer  " />
            <p className="text-sm mplus px-2 z-10 absolute ml-8  bg-white  text-black group-hover:block hidden transition-all ease-in-out uppercase duration-500">
              Contact
            </p>
          </Link>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${profile})` }}
        className="w-[500px] h-[90vh] bg-cover bg-center "
      >
        <div className="w-[100%] h-[90vh] bg-gradient-to-t from-black to-transparent  py-2 flex flex-col gap-4 items-center justify-end">
          <div>
            <h1 className="text-4xl font-bold text-white">Amos Kibet</h1>
          </div>
          <p className="text-[#5FBFF9] text-">
            <Typewriter
              options={{
                strings: [
                  "Data Scientist",
                  "Machine Learning Engineer",
                  "Data Analyst",
                  "Web Scrapping Expert",
                  "Database Manager",
                ],
                autoStart: true,
                loop: true,

                backDelay: 1000,
                speed: 100,
              }}
            />
          </p>
          <div className="flex gap-4">
            {icons.map((icon) => (
              <a href={icon.link}>{icon.icon}</a>
            ))}
          </div>
          <p className=" h-[2px] w-[100%] bg-[#5FBFF9]" />
          <div className="">
            <p className="text-white cursor-pointer uppercase text-gray-500 font-bold   text-center">
              Download my resume
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
