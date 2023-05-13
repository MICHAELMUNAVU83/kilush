import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BiArrowFromLeft } from "react-icons/bi";

const MyProject = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  return (
    <div>
      <div
        className="md:ml-[550px] p-8 bg-[#0B0612] h-[80vh] md:my-[4vh] overflow-y-scroll"
        style={{
          boxShadow: "0px 0px 10px 0px #5FBFF9",
        }}
      >
        <Link to="/projects">
          <BsArrowLeft className="text-2xl text-white cursor-pointer" />
        </Link>
        <div className="flex flex-col w-[90%] mx-auto gap-4">
          <img
            src={project.image}
            alt=""
            className="w-[100%] h-[400px] object-cover"
          />
          <h1 className="text-4xl font-bold libre text-start my-4 text-white">
            {project.title}
          </h1>
          <p className="h-[1px] bg-white w-[100%]  my-2" />
          <p className="text-gray-400 text-xl mplus">{project.description}</p>
          <h1 className="text-2xl font-bold libre text-start my-4 text-white">
            Technologies Used
          </h1>

          {project.technologies.map((technology) => (
            <div className="flex items-center group">
              <span className="w-4 h-4 mr-2 text-green-500 fill-current">
                <svg viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                  ></path>
                </svg>
              </span>
              <p className="text-gray-400 p-2 text-xl  group-hover:scale-110 transition-all ease-in-out duration-500  mplus">
                {technology}
              </p>
            </div>
          ))}
          <a
            className="text-[#5FBFF9] my-4 libre uppercase md:text-xl text-sm font-bold animate-pulse  cursor-pointer items-center gap-2 flex"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View Project on Github
            <BiArrowFromLeft className=" text-xl " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
