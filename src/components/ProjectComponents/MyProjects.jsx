import React from "react";

import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MyProjects = ({ projects }) => {
  const navigate = useNavigate();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 px-4 gap-4">
      {projects.map((project) => (
        <div>
          <div
            onClick={() => navigate(`/projects/${project.id}`)}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
            className="w-[100%] group projects  group-hover:blur h-[400px] bg-cover bg-center transition-all ease-in-out duration-500"
          >
            <div className="w-[100%] h-[400px] group-hover:flex hidden bg-gradient-to-t from-[#5FBFF9] to-transparent  py-2 flex-col gap-4 items-center justify-center transition-all ease-in-out duration-500">
              <Link
                className="flex justify-center items-center px-2 py-4 gap-4
                bg-black text-white transition-all ease-in-out duration-500
                animate-bounce"
              >
                <h1 className="text-xl  font-bold mplus ">View Project</h1>
                <BsSearch className="text-xl  text-[#5FBFF9]" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
