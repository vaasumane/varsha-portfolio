import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    category: ["Fintech • NBFC", "🏆 Spot Award"],
    title: "LOS — Loan Origination System",
    description:
      "End-to-end loan approval platform for India's NBFC sector. Handles KYC, CRISIL-based financial rating, RBAC, and OpenSSL-encrypted PII storage.",
    tags: ["Laravel", "RBAC", "OpenSSL", "CRISIL"],
    text: "text-cyan-400",
    tagBorder: "border-cyan-400/[.33]",
    tagBg: "bg-cyan-400/[.08]",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Fintech • NBFC"],
    title: "LMS — Loan Management System",
    description:
      "Factoring platform with invoice booking, limit exposure management, and Early Warning System to proactively flag overdue invoices.",
    tags: ["Laravel", "EWS", "MySQL"],
    text: "text-violet-400",
    tagBorder: "border-violet-400/[.33]",
    tagBg: "bg-violet-400/[.08]",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Enterprise SaaS"],
    title: "SiloCloud & Silo ERP",
    description:
      "Multi-product enterprise suite — CMS, ERP, e-commerce, and calendar apps with unified SSO authentication.",
    tags: ["Laravel", "React.js", "SSO"],
    text: "text-amber-400",
    tagBorder: "border-amber-400/[.33]",
    tagBg: "bg-amber-400/[.08]",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Frontend"],
    title: "YouTube Clone",
    description:
      "Responsive video platform with React.js and YouTube Data API — search, channel browsing, and playback.",
    tags: ["React.js", "Tailwind", "YouTube API"],
    text: "text-orange-400",
    tagBorder: "border-orange-400/[.33]",
    tagBg: "bg-orange-400/[.08]",
    live: "Live",
    URL: "https://youtubex-clone.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Thar Trek",
    description:
      "Interactive travel UI for the Thar desert trek with smooth animations and responsive design.",
    tags: ["React.js", "Tailwind", "JavaScript"],
    text: "text-blue-400",
    tagBorder: "border-blue-400/[.33]",
    tagBg: "bg-blue-400/[.08]",
    live: "Live",
    URL: "https://thartrek.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Github Login",
    description:
      "Built a GitHub-style authentication interface using React.js with responsive design, real-time form validation, error handling, and interactive user feedback for seamless login and registration.",
    tags: ["React.js", "JavaScript"],
    text: "text-cyan-400",
    tagBorder: "border-cyan-400/[.33]",
    tagBg: "bg-cyan-400/[.08]",
    live: "Live",
    URL: "https://github-form.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Food Villa",
    description:
      "Created a React.js food application with restaurant browsing, search, and responsive UI, inspired by Swiggy and Zomato.",
    tags: ["React.js", "JavaScript"],
    text: "text-violet-400",
    tagBorder: "border-violet-400/[.33]",
    tagBg: "bg-violet-400/[.08]",
    live: "Live",
    URL: "https://github.com/vaasumane/food-villa",
  },
];

export default function FourthSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_75%_60%_at_30%_70%,#0A0F1E_0%,#060B18_55%,#040810_100%)] px-[6vw] py-24 text-slate-100"
      id="projects"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div data-aos="fade-right">
          <p className="mb-3.5 font-mono text-[13px] tracking-[4px] text-cyan-400">
            SELECTED WORK
          </p>
          <h2 className="mb-[60px] font-['Poppins',_'Inter',_system-ui,_sans-serif] text-[clamp(26px,4vw,40px)] font-extrabold">
            Things I've{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              built.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[22px] border border-cyan-400/[.14] bg-white/[.03] p-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_16px_36px_rgba(0,229,255,0.1)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 flex flex-wrap gap-2">
                {project.category.map((cat, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-400/25 px-3.5 py-[7px] text-[10px] text-slate-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 font-['Poppins',_'Inter',_system-ui,_sans-serif] text-base font-bold">
                {project.title}
              </h3>

              <p className="m-0 min-h-[130px] text-[13px] leading-[1.8] text-slate-400">
                {project.description}
              </p>

              <div className="mt-[18px] flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`rounded-full border px-3 py-[5px] text-[10px] ${project.text} ${project.tagBorder} ${project.tagBg}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-[22px] flex justify-between border-t border-slate-400/[.14] pt-4">
                <span className="flex items-center gap-2">
                  {![0, 1, 2].includes(index) && (
                    <a
                      className="flex items-center gap-2 text-[13px] text-slate-400 no-underline transition-colors duration-200 hover:text-cyan-400"
                      href="https://github.com/vaasumane/"
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                </span>

                <span className="flex items-center gap-2">
                  {project.URL !== "#" ? (
                    <a
                      className="flex items-center gap-2 text-[13px] text-slate-400 no-underline transition-colors duration-200 hover:text-cyan-400"
                      href={project.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> {project.live}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-[13px] text-slate-400 opacity-60">
                      <FaLink /> {project.live}
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center" data-aos="zoom-in">
          <a
            className="inline-flex items-center gap-2.5 rounded-2xl border border-cyan-400/25 bg-white/[.02] px-7 py-3.5 text-sm text-slate-200 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-400/[.08]"
            href="https://github.com/vaasumane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
