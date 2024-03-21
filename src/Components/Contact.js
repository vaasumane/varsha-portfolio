import React from "react";

const Contact = () => {
  return (
    <>
      <div className="section py-20" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in"
              data-aos-duration="700"
              className="flex-1 flex justify-start items-center "
            >
              <div>
                <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's work <br/> together!</h2>
              </div>
            </div>
            <form
             data-aos="fade-left"
             data-aos-offset="200"
             data-aos-easing="ease-in"
             data-aos-duration="700"
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-22 p-6 items-start">
              <input type="text" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder="Your name" />
              <input type="text" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder="Your email" />
              <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12" placeholder="Your message"></textarea>
              <button className="btn btn-lg">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
