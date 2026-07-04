import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaTrophy,
  FaCog,
  FaShieldAlt,
  FaLaptop,
  FaUsers,
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const badges = [
  "CRISIL Rating Logic",
  "RBAC Architecture",
  "OpenSSL Encryption",
  "Early Warning System",
];

const cards = [
  {
    icon: <FaCog />,
    title: "Backend-first",
    desc: "Laravel architecture, API design, DB optimisation",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security-focused",
    desc: "OpenSSL, RBAC, JWT, SSO — built in, not bolted on",
  },
  {
    icon: <FaLaptop />,
    title: "Full-stack",
    desc: "React frontends, REST APIs, and everything between",
  },
  {
    icon: <FaUsers />,
    title: "Team lead",
    desc: "Sprints, code reviews, stakeholder communication",
  },
];

export default function SecondSection() {
  return (
    <section className="bg-[#071327] text-white  px-6 md:px-12 lg:px-20 py-16" id="about" 
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        {/* Left Side */}
        <div  >
          <p className="text-cyan-400 font-mono tracking-widest text-sm mb-6">
            // ABOUT ME
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            I build financial systems
            <br />
            that move real money.
          </h2>

          <p className="mt-10 text-gray-400 text-sm leading-6">
            With 3.5+ years in full-stack development, I've specialised in
            fintech infrastructure — building back-end engines that power loan
            origination, invoice management, and credit-risk visibility for NBFC
            and banking clients.
          </p>

          <p className="mt-8 text-gray-400 text-sm leading-6">
            I care about code that's{" "}
            <span className="text-white font-bold">secure by design</span>.
            OpenSSL encryption, RBAC access control, and regulated API
            integrations are part of my daily vocabulary — not afterthoughts.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-10" >
            {badges.map((badge, i) => (
              <span
                key={i}
                className="px-2 py-1 jetben rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-400 text-xs"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 mt-10 text-gray-400 text-xs">
            <a
              href="https://varshamane.vercel.app"
              target="_blank"
              class="ilink"
            >
              🌐 Portfolio
            </a>
            <a
              href="https://github.com/vaasumane"
              target="_blank"
              class="ilink"
            >
              🐙 GitHub
            </a>
            <a href="mailto:manevarsharani2005@gmail.com" class="ilink">
              ✉️ Email
            </a>
            <span class="ilink">📍 Mumbai</span>
          </div>
        </div>

        {/* Right Side */}
        <div >
          {/* Award Card */}
          <div className="rounded-3xl border border-cyan-400 bg-gradient-to-r from-cyan-400/10 to-transparent p-4 mb-6">
            <div className="flex items-center gap-3 text-lg font-bold">
              <FaTrophy className="text-yellow-400" />
              Spot Award — SBI Factors Client
            </div>

            <p className="mt-5 text-gray-400 text-sm leading-6">
              Recognised by SBI for critical contribution to the successful
              go-live of the Loan Origination System — a high-stakes enterprise
              delivery milestone.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-800 bg-[#0b1831] p-4 hover:border-cyan-700 transition"
              >
                <div className="text-xl mb-4 text-cyan-200">{card.icon}</div>

                <h3 className="text-md font-bold mb-2">{card.title}</h3>

                <p className="text-gray-400 leading-4 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
