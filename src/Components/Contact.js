import React,{useRef, useState} from "react";
import emailjs from '@emailjs/browser';
// import '../EmailForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();
  const [loading, setloading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setloading(true);
        const email_address = e.target.elements.email.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_address);
        if (!isValid) {
          toast.error('Please enter valid email');
          setloading(false);

          return false;
        }

        emailjs.sendForm('service_a2zhdt8', 'template_5znuywi', form.current, 'GaXUvmiV-Rr0AfR1p')
            .then((result) => {
              setloading(false);

              toast.success("message sent successfully!");
                console.log(result.text);
            }, (error) => {
              setloading(false);

              toast.error("error sending message, try again!")
                console.log(error.text);
            });
        };
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
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-22 p-6 items-start" ref={form} onSubmit={sendEmail}>
              <input type="text" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder="Your name" name="name" required />
              <input type="text" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder="Your email" required name="email"/>
              <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12" placeholder="Your message" required name="message"></textarea>
              <button className={loading ? 'btn btn-lg disabled' : 'btn btn-lg'} > {loading ? 'Loading...' : 'Send message'}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
