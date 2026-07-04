import React from "react";
import {
  FaServer,
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";

const experiences = [
  {
    title: "Lead Full-Stack Engineer",
    company: "SBI Factors Limited",
    duration: "Dec 2025 — Present",
    location: "Full-time · Mumbai",
    text: "text-cyan-400",
    border: "border-cyan-400",
    tagBorder: "border-cyan-400/[.33]",
    tagBg: "bg-cyan-400/[.08]",
    grad: "from-cyan-400/[.13] to-cyan-400/[.33]",
    glow: "shadow-[0_0_14px_rgba(0,229,255,0.55)]",
    Icon: FaServer,
    current: true,
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
    text: "text-violet-400",
    border: "border-violet-400",
    tagBorder: "border-violet-400/[.33]",
    tagBg: "bg-violet-400/[.08]",
    grad: "from-violet-400/[.13] to-violet-400/[.33]",
    glow: "shadow-[0_0_14px_rgba(167,139,250,0.55)]",
    Icon: FaCode,
    badge: "Spot Award · LOS Delivery",
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
    text: "text-amber-400",
    border: "border-amber-400",
    tagBorder: "border-amber-400/[.33]",
    tagBg: "bg-amber-400/[.08]",
    grad: "from-amber-400/[.13] to-amber-400/[.33]",
    glow: "shadow-[0_0_14px_rgba(251,191,36,0.55)]",
    Icon: FaLaptopCode,
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
    text: "text-blue-400",
    border: "border-blue-400",
    tagBorder: "border-blue-400/[.33]",
    tagBg: "bg-blue-400/[.08]",
    grad: "from-blue-400/[.13] to-blue-400/[.33]",
    glow: "shadow-[0_0_14px_rgba(96,165,250,0.55)]",
    Icon: FaGraduationCap,
    badges: [],
    points: ["Built CMS using CodeIgniter and interactive UI with AJAX/jQuery."],
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,#0A0F1E_0%,#060B18_55%,#040810_100%)] px-[6vw] py-24 text-slate-100"
      id="experience"
    >
      <style>{`
        @keyframes expGlowPulse {
          0%,100% { filter: brightness(1); }
          50%     { filter: brightness(1.35); }
        }
        .exp-hexnode { animation: expGlowPulse 2.6s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <div data-aos="fade-right">
          <p className="mb-3.5 font-mono text-[13px] tracking-[4px] text-cyan-400">
            WORK HISTORY
          </p>
          <h2 className="mb-16 font-['Poppins',_'Inter',_system-ui,_sans-serif] text-[clamp(30px,4vw,44px)] font-extrabold tracking-[-0.01em]">
            Where I've{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              shipped.
            </span>
          </h2>
        </div>

        <div className="relative ml-[22px] border-l-[1.5px] border-dashed border-cyan-400/25">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pb-14 pl-11"
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-delay={index * 120}
            >
              {/* Hex timeline node */}
              <div
                className={`exp-hexnode absolute -left-6 top-1 flex h-11 w-11 items-center justify-center border bg-gradient-to-br [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] ${exp.grad} ${exp.border} ${exp.glow}`}
              >
                <exp.Icon size={17} className={exp.text} />
              </div>

              <div className="flex flex-col gap-[18px] rounded-2xl border border-cyan-400/[.14] bg-white/[.03] p-7 transition-all duration-300 hover:-translate-y-[3px] hover:border-cyan-400/45 hover:shadow-[0_12px_34px_rgba(0,229,255,0.08)]">
                <div className="flex flex-row flex-wrap justify-between gap-3">
                  <div className="max-w-[620px]">
                    <h3 className="m-0 font-['Poppins',_'Inter',_system-ui,_sans-serif] text-lg font-bold">
                      {exp.title}
                    </h3>

                    {exp.badge && (
                      <div
                        data-aos="zoom-in"
                        className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-amber-400/35 bg-amber-400/10 px-3 py-[5px]"
                      >
                        <FaTrophy size={11} className="text-amber-400" />
                        <span className="font-mono text-[11px] text-amber-400">
                          {exp.badge}
                        </span>
                      </div>
                    )}

                    <p className={`mt-2 text-sm font-semibold ${exp.text}`}>{exp.company}</p>

                    {exp.badges.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.badges.map((badge, i) => (
                          <span
                            key={i}
                            className={`whitespace-nowrap rounded-full border px-3 py-[5px] font-mono text-[11px] font-semibold ${exp.text} ${exp.tagBorder} ${exp.tagBg}`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="mt-[18px] flex list-none flex-col gap-3 p-0">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-[1.6] text-slate-400">
                          <span className={`flex-shrink-0 ${exp.text}`}>▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-shrink-0 text-right text-xs text-slate-500 max-[720px]:mt-2.5 max-[720px]:text-left">
                    <p className="m-0 font-semibold">{exp.duration}</p>
                    <p className="mt-1">{exp.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
