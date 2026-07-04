import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    title: "Lead Full-Stack Engineer",
    company: "SBI Factors Limited",
    duration: "Dec 2025 — Present",
    location: "Full-time · Mumbai",
    color: "bg-cyan-400",
    badges: ["Laravel", "PHP 8", "MySQL", "React.js", "AJAX"],
    points: [
      "Architected the Loan Management System (LMS) — invoice booking, limit exposure & multi-user disbursement.",
      "Led dev team: sprint planning, code reviews, stakeholder alignment & on-time delivery.",
      "Designed EOD/EOM financial calculation pipelines with zero tolerance for drift.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Kritva Technologies · Client: SBI Factors Limited",
    duration: "Jun 2024 — Nov 2025",
    location: "Full-time · Mumbai",
    color: "bg-indigo-400",
    badges: ["Laravel", "OpenSSL", "CRIF API", "Karza API", "RBAC"],
    points: [
      "Built CRISIL formula-based rating engine for LOS.",
      "Integrated third-party APIs (Karza, PAN verification, CRIF).",
      "Implemented OpenSSL-based PII encryption + RBAC access control.",
    ],
  },
  {
    title: "Web Developer",
    company: "Noitavonne",
    duration: "May 2022 — May 2024",
    location: "Full-time · Kolhapur",
    color: "bg-yellow-400",
    badges: ["Laravel", "React.js", "REST APIs", "SSO", "Stripe"],
    points: [
      "Designed REST APIs consumed by React SPAs.",
      "Implemented authentication for ERP & multi-product systems.",
      "Delivered multiple CMS and e-commerce products.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Noitavonne",
    duration: "Nov 2021 — May 2022",
    location: "Internship · Kolhapur",
    color: "bg-blue-400",
    badges: [],
    points: [
      "Built CMS using CodeIgniter and interactive UI with AJAX/jQuery.",
    ],
  },
];

export default function ThirdSection() {
  return (
    <section className="bg-[#020817] text-white px-6 md:px-10 lg:px-16 py-16" id="experience">
      <div className=" mx-auto" >
        <div data-aos="fade-right">
        <p className="text-cyan-400 font-mono text-sm tracking-widest mb-4">
          // WORK HISTORY
        </p>

        <h2 className="text-4xl md:text-3xl font-bold mb-14">
          Where I’ve shipped.
        </h2>
            </div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10 pb-14" data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-delay={index * 150}>
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ${exp.color}`}
              />

              {/* Main Row */}
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                {/* Left Content */}
                <div className="max-w-4xl">
                  <h3 className="text-md md:text-lg font-bold">{exp.title}</h3>
                  {index === 1 && (
                    <div
                        data-aos="zoom-in"
                      data-aos-delay="200"
                     className="inline-flex items-center mt-2 gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1 mb-3">
                      <span className="text-xs">⭐</span>
                      <span className="text-[10px] text-amber-500 font-mono">
                        Spot Award · LOS Delivery
                      </span>
                    </div>
                  )}

                  <p className="text-cyan-400 mt-1 text-sm">{exp.company}</p>

                  {/* Badges */}
                  {exp.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.badges.map((badge, i) => (
                        <span
                          key={i}
                           data-aos="fade-up"
                        data-aos-delay={i * 100}
                          className="px-3 py-1 rounded-full border border-cyan-700 bg-cyan-500/10 text-cyan-200 text-xs"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bullet Points */}
                  <ul className="mt-5 space-y-3 text-gray-400 text-xs md:text-base">
                    {exp.points.map((point, i) => (
                      <li key={i}  data-aos="fade-left"
                        data-aos-delay={i * 100} className="flex gap-3">
                        <span className="text-cyan-200 mt-0">▸</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Meta */}
                <div className="lg:text-right shrink-0 text-gray-500 text-xs">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
