import React from "react";
import { FaGithub, FaLink, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="text-pink-400 text-xl" />,
      label: "Email",
      value: "manevarsharani2005@gmail.com",
      link: "mailto:manevarsharani2005@gmail.com",
    },
    {
      icon: <FaLink className="text-cyan-400 text-xl" />,
      label: "Portfolio",
      value: "varshamane.vercel.app",
      link: "https://varshamane.vercel.app",
    },
    {
      icon: <FaGithub className="text-yellow-400 text-xl" />,
      label: "GitHub",
      value: "github.com/vaasumane",
      link: "https://github.com/vaasumane",
    },
  ];

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="bg-[#071327] px-6 md:px-12 py-20 text-white" id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4"
            data-aos="fade-up"
          >
            // Get In Touch
          </p>

          <h2
            className="text-2xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let’s work together.
          </h2>

          <p
            className="text-slate-400 max-w-3xl mx-auto text-sm leading-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I’m open to full-stack, fintech, and backend engineering roles.
            Let’s build secure and scalable systems together.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="group border border-slate-700 rounded-2xl p-5 flex items-center gap-4 bg-slate-900/40 hover:border-cyan-500 hover:-translate-y-1 transition duration-300"
              >
                {item.icon}

                <div className="text-left">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="font-semibold text-xs md:text-base break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
<a
                href="mailto:manevarsharani2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
          <button
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-12 text-sm px-6 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-xl font-semibold text-black transition"
          >
            Send me a message
          </button>
          </a>
        </div>
      </section>

    </>
  );
};

export default ContactSection;