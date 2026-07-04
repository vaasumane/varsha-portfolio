import React from "react";

const skillData = [
  {
    title: "Backend",
    icon: "⚙️",
    color: "bg-cyan-400",
    skills: [
      "PHP 8 · Laravel 10+",
      "CodeIgniter",
      "REST API Design",
      "MVC Architecture",
      "OOP  ",
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "bg-indigo-400",
    skills: [
      "React.js",
      "JavaScript ",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Bootstrap · jQuery",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    color: "bg-amber-400",
    skills: [
      "MySQL",
      "Eloquent ORM",
      "Query Optimisation",
      "Schema Design",
    ],
  },
  {
    title: "Security",
    icon: "🛡️",
    color: "bg-red-400",
    skills: [
      "OpenSSL Encryption",
      "RBAC",
      "JWT Authentication",
      "SSO",
      "PII Data Protection",
    ],
  },
  {
    title: "API Integrations",
    icon: "🔗",
    color: "bg-emerald-400",
    skills: [
      "Karza — PAN Verify",
      "CRIF — Credit Bureau",
      "Corpistory — Corp Data",
      "Stripe · PayPal",
      "YouTube Data API",
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    color: "bg-slate-400",
    skills: ["Git", "Agile / Scrum", "Postman", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-[#020817] py-20 px-4 md:px-8 lg:px-14 text-white" id="skills">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-cyan-400 text-sm tracking-[4px] font-mono mb-4">
            // TECH STACK
          </p>

          <h2 className="text-2xl md:text-4xl font-bold">
            Skills & tools.
          </h2>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {skillData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-2xl border border-slate-700 bg-[#111827] p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-md">{item.icon}</span>
                <h3 className="font-bold text-md">{item.title}</h3>
              </div>

              <div className="space-y-3">
                {item.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 pb-3 border-b border-slate-700"
                  >
                    <span className={`w-2 h-2 rounded-full text-xs ${item.color}`}></span>
                    <span className="text-gray-400 text-xs">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom expertise card */}
        <div
          data-aos="zoom-in"
          className="mt-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-900/30 to-indigo-900/20 p-8"
        >
          <p className="text-cyan-400 font-mono tracking-[3px] text-sm mb-4">
            DOMAIN EXPERTISE
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">
                Fintech · NBFC · Service Based
              </h3>

              <p className="text-gray-400 leading-8 text-sm">
                LOS · LMS · Credit Risk · CRISIL Ratings · Limit Exposure ·
                Invoice Factoring · Early Warning Systems
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["SBI Factors",  "NBFC Compliance", "Regulated APIs"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}