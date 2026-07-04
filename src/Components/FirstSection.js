import React, { useEffect,useState } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
const stats = [
  { icon: "⚡", value: "3.5+", label: "Years" },
//   { icon: "🖥️", value: "5+", label: "Systems" },
//   { icon: "🔒", value: "3", label: "Reg. APIs" },
  { icon: "🏆", value: "1", label: "Spot Award" },
];

export default function FirstSection() {
 
    const [activeMenuItem, setActiveMenuItem] = useState("home");
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveMenuItem(sectionId);
  };
  return (
    <div className="min-h-screen bg-[#020817] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:70px_70px]" />

    

      {/* Main */}
      <section className="grid lg:grid-cols-2 min-h-[calc(100vh-90px)] items-center px-8 lg:px-16 relative z-10">
        {/* Left */}
        <div data-aos="zoom-in" data-aos-duration="2000">
          <div className="inline-flex items-center text-sm gap-2 mt-4 px-5 py-2 rounded-full border border-cyan-600 bg-cyan-500/10 text-cyan-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Available • Mumbai & Remote
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-none">
            Varsharani
            <br />
            <span className="text-cyan-400">Mane</span>
          </h1>

          <p className="text-md text-gray-400 mt-6">
            <span className="text-cyan-400 mr-4">$</span> 
            <span className="jetben mr-4">Full-Stack Engineer </span> 
            <span className="jetben mr-4">• Fintech & NBFC</span> 
            <span className="jetben mr-4">• Laravel</span> 
            <span className="jetben mr-4">• PHP</span> 
            <span className="jetben mr-4">• React.js</span> 
             
          </p>

          <p className="mt-6 text-gray-400 text-md max-w-2xl leading-8">
            I build production-grade financial systems — Loan Origination, Loan
            Management, credit risk engines — for NBFC and banking clients.
            Currently leading dev at{" "}
            <b className="text-white">SBI Factors Limited.</b>
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <button className="bg-cyan-400 text-black px-8 py-2 rounded-xl font-semibold hover:scale-105 transition" onClick={() => scrollToSection('projects')}>
              View my work →
            </button>

            <button className="border border-slate-700 px-8 py-2 rounded-xl font-semibold hover:border-cyan-400 transition" onClick={() => scrollToSection('contact')}>
              Get in touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-2"
              >
                <div className="text-lg mb-3">{item.icon}</div>
                <div className="text-xl font-bold">{item.value}</div>
                <div className="text-gray-500 text-xs mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Network */}
        <div className="hidden lg:flex justify-center items-center relative h-full" data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in"
          data-aos-duration="1000">
          <svg
            className="absolute w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 400"
          >
            <line
              x1="180"
              y1="90"
              x2="240"
              y2="180"
              stroke="#00C9A7"
              stroke-width=".8"
              stroke-dasharray="4 4"
              stroke-opacity=".4"
            ></line>
            <line
              x1="240"
              y1="180"
              x2="170"
              y2="260"
              stroke="#818CF8"
              stroke-width=".8"
              stroke-dasharray="4 4"
              stroke-opacity=".4"
            ></line>
            <line
              x1="240"
              y1="180"
              x2="260"
              y2="290"
              stroke="#00C9A7"
              stroke-width=".8"
              stroke-dasharray="4 4"
              stroke-opacity=".4"
            ></line>
            <line
              x1="170"
              y1="260"
              x2="260"
              y2="290"
              stroke="#F59E0B"
              stroke-width=".8"
              stroke-dasharray="4 4"
              stroke-opacity=".4"
            ></line>
            <circle
              cx="180"
              cy="90"
              r="22"
              fill="rgba(0,201,167,.12)"
              stroke="#00C9A7"
              stroke-width="1"
            ></circle>
            <text
              x="180"
              y="90"
              text-anchor="middle"
              dominant-baseline="middle"
              fill="#00C9A7"
              font-family="JetBrains Mono,monospace"
              font-size="10"
            >
              LOS
            </text>
            <circle
              cx="240"
              cy="180"
              r="22"
              fill="rgba(129,140,248,.12)"
              stroke="#818CF8"
              stroke-width="1"
            ></circle>
            <text
              x="240"
              y="180"
              text-anchor="middle"
              dominant-baseline="middle"
              fill="#818CF8"
              font-family="JetBrains Mono,monospace"
              font-size="10"
            >
              LMS
            </text>
            <circle
              cx="170"
              cy="260"
              r="22"
              fill="rgba(245,158,11,.12)"
              stroke="#F59E0B"
              stroke-width="1"
            ></circle>
            <text
              x="170"
              y="260"
              text-anchor="middle"
              dominant-baseline="middle"
              fill="#F59E0B"
              font-family="JetBrains Mono,monospace"
              font-size="10"
            >
              API
            </text>
            <circle
              cx="260"
              cy="290"
              r="22"
              fill="rgba(0,201,167,.12)"
              stroke="#00C9A7"
              stroke-width="1"
            ></circle>
            <text
              x="260"
              y="290"
              text-anchor="middle"
              dominant-baseline="middle"
              fill="#00C9A7"
              font-family="JetBrains Mono,monospace"
              font-size="10"
            >
              SBIFL
            </text>
          </svg>
        </div>
      </section>
    </div>
  );
}
