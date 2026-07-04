import React from "react";
import { FaGithub, FaLink, FaEnvelope, FaArrowRight } from "react-icons/fa";

const contacts = [
  {
    Icon: FaEnvelope,
    text: "text-pink-400",
    grad: "from-pink-400/[.13] to-pink-400/[.33]",
    border: "border-pink-400",
    glow: "shadow-[0_0_12px_rgba(244,114,182,0.5)]",
    label: "Email",
    value: "manevarsharani2005@gmail.com",
    link: "mailto:manevarsharani2005@gmail.com",
  },
  {
    Icon: FaLink,
    text: "text-cyan-400",
    grad: "from-cyan-400/[.13] to-cyan-400/[.33]",
    border: "border-cyan-400",
    glow: "shadow-[0_0_12px_rgba(0,229,255,0.5)]",
    label: "Portfolio",
    value: "varshamane.vercel.app",
    link: "https://varshamane.vercel.app",
  },
  {
    Icon: FaGithub,
    text: "text-amber-400",
    grad: "from-amber-400/[.13] to-amber-400/[.33]",
    border: "border-amber-400",
    glow: "shadow-[0_0_12px_rgba(251,191,36,0.5)]",
    label: "GitHub",
    value: "github.com/vaasumane",
    link: "https://github.com/vaasumane",
  },
];

export default function ContactSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_75%_60%_at_50%_30%,#0A0F1E_0%,#060B18_55%,#040810_100%)] px-[6vw] py-24 text-slate-100"
      id="contact"
    >
      <style>{`
        @keyframes contactHexGlow {
          0%,100% { filter: brightness(1); }
          50%     { filter: brightness(1.35); }
        }
        .contact-hex { animation: contactHexGlow 3s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[880px] text-center">
        <p
          className="mb-3.5 font-mono text-[13px] tracking-[4px] text-cyan-400"
          data-aos="fade-up"
        >
          // GET IN TOUCH
        </p>

        <h2
          className="mb-5 font-['Poppins',_'Inter',_system-ui,_sans-serif] text-[clamp(26px,4vw,40px)] font-extrabold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let's work{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            together.
          </span>
        </h2>

        <p
          className="mx-auto max-w-[560px] text-sm leading-8 text-slate-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm open to full-stack, fintech, and backend engineering roles.
          Let's build secure and scalable systems together.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-[18px] text-left sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="flex items-center gap-4 rounded-2xl border border-cyan-400/[.14] bg-white/[.03] p-[22px] no-underline transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_14px_34px_rgba(0,229,255,0.08)]"
            >
              <div
                className={`contact-hex flex h-11 w-11 flex-shrink-0 items-center justify-center border bg-gradient-to-br [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] ${item.grad} ${item.border} ${item.glow}`}
              >
                <item.Icon size={17} className={item.text} />
              </div>

              <div className="min-w-0">
                <p className="m-0 text-xs text-slate-500">{item.label}</p>
                <p className="mt-1 break-all text-[13px] font-semibold text-slate-200">
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="mailto:manevarsharani2005@gmail.com"
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 inline-flex items-center gap-2.5 rounded-xl border-none bg-gradient-to-br from-cyan-400 to-[#0098B8] px-8 py-[15px] text-[15px] font-bold text-black no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,229,255,0.4)]"
        >
          Send me a message <FaArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
