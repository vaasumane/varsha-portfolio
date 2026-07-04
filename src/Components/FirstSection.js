import React from "react";
import OrbitAnimation from "./OrbitAnimation";
import { FaReact, FaLaravel, FaGithub } from "react-icons/fa";
import { SiPhp, SiJavascript, SiMysql, SiTailwindcss } from "react-icons/si";

export default function FirstSection() {
  return (
    <section className="min-h-screen bg-[#020817] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/3 top-1/3 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div>
          <div className="inline-flex border border-cyan-600 rounded-full px-4 py-2 text-cyan-400 text-sm">
            ● Available • Mumbai & Remote
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mt-8">
            Hi, I'm <br />
            <span className="text-cyan-400">Varsharani Mane</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Full Stack Engineer | Fintech & NBFC
          </p>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            I build scalable financial systems, LOS/LMS platforms,
            secure APIs and enterprise-grade fintech solutions.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              View My Work
            </button>

            <button className="border border-slate-700 px-6 py-3 rounded-xl hover:border-cyan-400 transition">
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              ["3.5+", "Years"],
              ["1", "Award"],
              ["10+", "Projects"],
              ["100%", "Delivery"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-slate-900/70 border border-slate-800 rounded-xl p-4"
              >
                <div className="text-cyan-400 text-2xl font-bold">{value}</div>
                <div className="text-gray-500 text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <OrbitAnimation />
      </div>

      {/* Tech Stack */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="border border-slate-800 rounded-2xl bg-slate-900/50 px-6 py-4 flex flex-wrap gap-8 items-center">
          <SiPhp size={28} />
          <FaLaravel size={28} />
          <FaReact size={28} />
          <SiJavascript size={28} />
          <SiMysql size={28} />
          <FaGithub size={28} />
          <SiTailwindcss size={28} />
        </div>
      </div>
    </section>
  );
}