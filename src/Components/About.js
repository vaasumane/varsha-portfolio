import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
       <section className="section " id="about">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="700"
              className=" lg:flex flex-1  mx-auto "
            >
              <img
                src="./profile-img.jpeg"
                alt="logo"
                className="rounded-full h-72 w-72  lg:h-96 lg:w-96 object-top object-cover mx-auto"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="700"
              className="flex-1 text-center font-secondary lg:text-left mx-auto"
            >
              <h1 className="text-gradient text-4xl mb-5">
              ABOUT ME
              </h1>
              <div className="mb-6 text-3xl lg:text-4xl leading-[1]">               
              <span>
              I am a exerienced Web Developer with 2 Years of Expertise
              </span>
              </div>
              <div>
                <p className="text-md pb-5">With over two years of experience in PHP (Codeigniter), JavaScript, HTML, and CSS, I specialize in crafting intuitive web solutions. Proficient in Bootstrap and equipped with knowledge of React, I am dedicated to exceeding client expectations through visually appealing designs</p>
              </div>
              <div className="flex max-w-max gap-x-6 item-center mb-12 mx-auto lg:mx-0">
                <a href="#contact"><button className="btn btn-sm lg:btn-lg ">Contact me</button></a>

                <a href="./Varsharani_Mane_Resume.pdf" download="./Varsharani_Mane_Resume.pdf" className="text-gradient text-2xl py-3 ">
                  My portfolio
                </a>
              </div>
              
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
