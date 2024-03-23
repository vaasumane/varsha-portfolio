import React from "react";
const Header = () => {
  return (
    <>
      <header className="py-8" id="home">
        <div className="container mx-auto">
          <div className="flex justify-between item-center">
            <div className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
              {/* <h1 className="text-4xl font-bold">VARSHA MANE</h1> */}
              <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="700"
              className=" lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto"
            >
              <img
                src="./vm_logo.png"
                alt="logo"
                className=" h-20 w-20  lg:h-24 lg:w-24 object-top object-cover"
              />
            </div>
            </div>
            <a href="#contact"><button className="btn btn-sm">Work with me</button></a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
