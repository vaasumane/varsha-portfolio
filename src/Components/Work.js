import React from "react";
import { TypeAnimation } from "react-type-animation";
import { php_projects, skills_data } from "../Constant";

const Work = () => {
  return (
    <>
      <div className="section pt-20 " id="work">
        <div className="container mx-auto">
          <div className="flex item-center justify-center">
            <div className="text-center font-secondary ">
              <h1
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="700"
                className="text-gradient text-4xl mb-5"
              >
                MY SKILLS
              </h1>
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="700"
                className=" text-4xl "
              >
                <TypeAnimation
                  style={{
                    whiteSpace: "pre-line",
                    height: "150px",
                    display: "block",
                  }}
                  sequence={[
                    "The skills,tools and technologies\nI am really good at:",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-4xl"
                  wrapper="span"
                />
              </div>
              <div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-easing="ease-in"
                  data-aos-duration="700"
                  className="flex flex-wrap gap-4 item-center justify-center mt-10 lg:mt-0" 
                >
                  {skills_data.map((skill, index) => {
                    return (
                      <div key={index}>
                        <img src={skill.image} className="h-16" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap  gap-7 pt-10 pb-10 justify-center">
            {php_projects.map((project,index) => (
              <div key={index}
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in"
                data-aos-duration="700"
                className="mb-5 group relative overflow-hidden border-2 border-white/50 rounded-xl w-[350px]"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="group-hove:scale-125 transition-all duration-500 "
                />
                <div className="absolute -bottom-full left-8 group-hover:bottom-8 transition-all duration-500 z-50">
                  <span className="text-3xl font-semibold">
                    {project.title}{" "}
                  </span>
                  {/* <p className="ml-2 text-fuchsia-500 ">{project.description} </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
