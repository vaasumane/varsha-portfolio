import React from "react";
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaBoxOpen,
  FaTools,
} from "react-icons/fa";

const skillData = [
  {
    title: "Backend",
    Icon: FaServer,
    text: "text-cyan-400",
    border: "border-cyan-400",
    grad: "from-cyan-400/[.13] to-cyan-400/[.33]",
    glow: "shadow-[0_0_12px_rgba(0,229,255,0.5)]",
    dot: "bg-cyan-400 shadow-[0_0_6px_rgba(0,229,255,0.5)]",
    skills: ["PHP 8 · Laravel 10+", "CodeIgniter", "REST API Design", "MVC Architecture", "OOP"],
  },
  {
    title: "Frontend",
    Icon: FaCode,
    text: "text-violet-400",
    border: "border-violet-400",
    grad: "from-violet-400/[.13] to-violet-400/[.33]",
    glow: "shadow-[0_0_12px_rgba(167,139,250,0.5)]",
    dot: "bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.5)]",
    skills: ["React.js", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap · jQuery"],
  },
  {
    title: "Database",
    Icon: FaDatabase,
    text: "text-amber-400",
    border: "border-amber-400",
    grad: "from-amber-400/[.13] to-amber-400/[.33]",
    glow: "shadow-[0_0_12px_rgba(251,191,36,0.5)]",
    dot: "bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.5)]",
    skills: ["MySQL", "Eloquent ORM", "Query Optimisation", "Schema Design"],
  },
  {
    title: "Security",
    Icon: FaShieldAlt,
    text: "text-orange-400",
    border: "border-orange-400",
    grad: "from-orange-400/[.13] to-orange-400/[.33]",
    glow: "shadow-[0_0_12px_rgba(251,146,60,0.5)]",
    dot: "bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.5)]",
    skills: ["OpenSSL Encryption", "RBAC", "JWT Authentication", "SSO", "PII Data Protection"],
  },
  {
    title: "API Integrations",
    Icon: FaBoxOpen,
    text: "text-blue-400",
    border: "border-blue-400",
    grad: "from-blue-400/[.13] to-blue-400/[.33]",
    glow: "shadow-[0_0_12px_rgba(96,165,250,0.5)]",
    dot: "bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]",
    skills: ["Karza — PAN Verify", "CRIF — Credit Bureau", "Corpistory — Corp Data", "Stripe · PayPal", "YouTube Data API"],
  },
  {
    title: "Tools",
    Icon: FaTools,
    text: "text-purple-400",
    border: "border-purple-400",
    grad: "from-purple-400/[.13] to-purple-400/[.33]",
    glow: "shadow-[0_0_12px_rgba(192,132,252,0.5)]",
    dot: "bg-purple-400 shadow-[0_0_6px_rgba(192,132,252,0.5)]",
    skills: ["Git", "Agile / Scrum", "Postman", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_70%_60%_at_70%_30%,#0A0F1E_0%,#060B18_55%,#040810_100%)] px-[3vw] py-24 text-slate-100"
      id="skills"
    >
      <style>{`
        @keyframes skillHexGlow {
          0%,100% { filter: brightness(1); }
          50%     { filter: brightness(1.35); }
        }
        .skill-hex { animation: skillHexGlow 3s ease-in-out infinite; }
      `}</style>

      <div className="relative z-10 mx-auto">
        <div className="mb-16 text-center" data-aos="fade-up">
          <p className="mb-3.5 font-mono text-[13px] tracking-[4px] text-cyan-400">
            TECH STACK
          </p>
          <h2 className="font-['Poppins',_'Inter',_system-ui,_sans-serif] text-[clamp(26px,4vw,40px)] font-extrabold">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              tools.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {skillData.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-cyan-400/[.14] bg-white/[.03] p-[26px] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_14px_34px_rgba(0,229,255,0.08)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-[22px] flex items-center gap-3.5">
                <div
                  className={`skill-hex flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center border bg-gradient-to-br [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] ${item.grad} ${item.border} ${item.glow}`}
                >
                  <item.Icon size={16} className={item.text} />
                </div>
                <h3 className="m-0 font-['Poppins',_'Inter',_system-ui,_sans-serif] text-base font-bold">
                  {item.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {item.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 border-b border-slate-400/[.12] pb-3"
                  >
                    <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${item.dot}`} />
                    <span className="text-[13px] text-slate-400">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom expertise panel — echoes the Hero's glowing center circle */}
        <div
          data-aos="zoom-in"
          className="mt-10 rounded-3xl border-[1.5px] border-cyan-400/30 bg-gradient-to-r from-cyan-400/[.08] to-violet-400/[.06] p-[34px_clamp(20px,4vw,40px)] shadow-[0_0_40px_rgba(0,229,255,0.08),inset_0_0_30px_rgba(0,229,255,0.04)]"
        >
          <p className="mb-4 font-mono text-[13px] tracking-[3px] text-cyan-400">
            DOMAIN EXPERTISE
          </p>

          <div className="flex flex-row flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="mb-2.5 font-['Poppins',_'Inter',_system-ui,_sans-serif] text-lg font-bold">
                Fintech · NBFC · Service Based
              </h3>
              <p className="m-0 max-w-[560px] text-sm leading-8 text-slate-400">
                LOS · LMS · Credit Risk · CRISIL Ratings · Limit Exposure ·
                Invoice Factoring · Early Warning Systems
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {["SBI Factors", "NBFC Compliance", "Regulated APIs"].map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/[.08] px-4 py-2 font-mono text-xs text-sky-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
