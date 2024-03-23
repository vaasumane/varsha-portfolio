import React from "react";
import { react_projects } from "../Constant";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className="section pt-0" id="projects">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2  gap-5 justify-center">
            <div
              className="mb-5"
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in"
            >
              <div className="text-left mb-5">
                <h1 className="text-gradient text-4xl mb-5 uppercase">
                  My Latest<br></br> Work using React
                </h1>
                <p className="text-md font-secondary">
                  I've developed several websites using React.js, a powerful
                  JavaScript library for building user interfaces.With React.js,
                  I've been able to create seamless user experiences that
                  enhance engagement and satisfaction.{" "}
                </p>
              </div>
            </div>
            {react_projects.map((project,index) => (  
              <div key={index}  data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in" className=" group relative overflow-hidden border-2 border-white/50 rounded-xl ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="group-hove:scale-125 transition-all duration-500"
                />
                <div className="absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <FaLink />
                    <span className="ml-2 text-fuchsia-500 text-3xl font-semibold">
                      {project.title}{" "}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
