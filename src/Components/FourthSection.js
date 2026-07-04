import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    category: ["Fintech • BFSI", "🏆 Spot Award"],
    title: "LOS — Loan Origination System",
    description:
      "End-to-end loan approval platform for India's NBFC sector. Handles KYC, CRISIL-based financial rating, RBAC, and OpenSSL-encrypted PII storage.",
    tags: ["Laravel", "RBAC", "OpenSSL", "CRISIL"],
    border: "border-slate-700",
    tagColor: "text-cyan-400 border-cyan-700 bg-cyan-500/10",
    live: "Laravel ",
    URL: "#",
  },
  {
    category: ["Fintech • NBFC"],
    title: "LMS — Loan Management System",
    description:
      "Factoring platform with invoice booking, limit exposure management, and Early Warning System to proactively flag overdue invoices.",
    tags: ["Laravel", "EWS", "MySQL"],
    border: "border-slate-700",
    tagColor: "text-indigo-400 border-indigo-700 bg-indigo-500/10",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Enterprise SaaS"],
    title: "SiloCloud & Silo ERP",
    description:
      "Multi-product enterprise suite — CMS, ERP, e-commerce, and calendar apps with unified SSO authentication.",
    tags: ["Laravel", "React.js", "SSO"],
    border: "border-slate-700",
    tagColor: "text-amber-400 border-amber-700 bg-amber-500/10",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Frontend"],
    title: "YouTube Clone",
    description:
      "Responsive video platform with React.js and YouTube Data API — search, channel browsing, and playback.",
    tags: ["React.js", "Tailwind", "YouTube API"],
    border: "border-slate-700",
    tagColor: "text-red-400 border-red-700 bg-red-500/10",
    live: "Live",
    URL: "https://youtubex-clone.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Thar Trek",
    description:
      "Interactive travel UI for the Thar desert trek with smooth animations and responsive design.",
    tags: ["React.js", "Tailwind", "JavaScript"],
    border: "border-slate-700",
    tagColor: "text-orange-400 border-orange-700 bg-orange-500/10",
    live: "Live",
    URL: "https://thartrek.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Github Login",
    description:
      "Built a GitHub-style authentication interface using React.js with responsive design, real-time form validation, error handling, and interactive user feedback for seamless login and registration.",
    tags: ["React.js", "JavaScript"],
    border: "border-slate-700",
    tagColor: "text-cyan-400 border-cyan-700 bg-cyan-500/10",
    live: "Live",
    URL: "https://github-form.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Food Villa",
    description:
      "Created a React.js food  application with restaurant browsing, search, and responsive UI, inspired by Swiggy and Zomato..",
    tags: ["React.js", "JavaScript"],
    border: "border-slate-700",
    tagColor: "text-indigo-400 border-indigo-700 bg-indigo-500/10",
    live: "Live",
    URL: "https://github.com/vaasumane/food-villa",
  },
];

export default function FourthSection() {
  return (
    <section
      className="bg-[#071327] text-white py-20  px-6 md:px-12 lg:px-20 "
      id="projects"
    >
      <div className=" mx-auto">
        {/* Header */}
        <div data-aos="fade-right">
          <p className="text-cyan-400 font-mono text-sm tracking-[4px] mb-4">
            // SELECTED WORK
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-16">
            Things I’ve built.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6 ">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-3xl border border-slate-700 bg-[#111827] p-4 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,201,167,0.12)]"
            >
              {/* Category badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.category.map((cat, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full text-[10px] border border-slate-700  text-gray-300 ${project.tagColor}`}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-4 leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-8 min-h-[170px] text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    className={`px-3 py-1 rounded-full text-[10px] border ${project.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-slate-700 mt-8 pt-5 flex justify-between text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <FaGithub />
                  <a href="https://github.com/vaasumane/">Source</a>
                </span>

                <span className="flex items-center gap-2">
                  <FaLink />
                  {project.URL !== "#" ? (
                    <a
                      href={project.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.live}
                    </a>
                  ) : (
                    <span>{project.live}</span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14" data-aos="zoom-in">
          <a href="https://github.com/vaasumane/" target="_blank">
            <button className="px-8 py-4 rounded-2xl border border-slate-700 bg-[#0b1831] hover:border-cyan-500 transition flex items-center gap-3 text-sm">
              <FaGithub />
              More on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
