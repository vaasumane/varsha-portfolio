import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="py-10" >
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="700"
              className="flex-1 text-center font-secondary lg:text-left"
            >
              <h1 className="text-[35px] font-bold leading-[0.8] lg:text-[78px] mb-5">
            VARSHA <span>MANE</span>
              </h1>
              <div className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white mr-4">I am a </span>
                <TypeAnimation
                  sequence={["Full Stack Developer", 2000]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </div>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-md font-secondary">
                Generate Lorem Ipsum placeholder text for use in your graphic,
                print and web layout.{" "}
              </p>
              <div className="flex max-w-max gap-x-6 item-center mb-12 mx-auto lg:mx-0">
                <a href="#contact"><button className="btn btn-sm lg:btn-lg ">Contact me</button></a>
                <a href="./Varsharani_Mane_Resume.pdf" download="./Varsharani_Mane_Resume.pdf" className="text-gradient text-2xl py-3 ">
                  My portfolio
                </a>
              </div>
              <div className="flex text=[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="https://github.com/vaasumane" target="_blank" className="text-3xl">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/varsharani-mane-a3b48821a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-3xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
            {/* <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="700"
              className=" lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
            >
              <img
                src="./logo-img.jpg"
                alt="logo"
                className="rounded-full h-72 w-72  lg:h-96 lg:w-96 object-top object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
