import React from "react";
import {
  FaTrophy,
  FaCog,
  FaShieldAlt,
  FaLaptop,
  FaUsers,
} from "react-icons/fa";

const badges = [
  "CRISIL Rating Logic",
  "RBAC Architecture",
  "OpenSSL Encryption",
  "Early Warning System",
  "EOD/EOM Pipelines",
];

const cards = [
  {
    icon: <FaCog />,
    title: "Backend-first",
    desc: "Laravel architecture, API design, DB optimisation",
    text: "text-cyan-400",
    iconBg: "bg-cyan-400/10",
    iconBorder: "border-cyan-400/30",
    hoverBorder: "hover:border-cyan-400/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(0,229,255,0.15)]",
    hoverGlow: "group-hover:shadow-[0_0_16px_rgba(0,229,255,0.55)]",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security-focused",
    desc: "OpenSSL, RBAC, JWT, SSO — built in, not bolted on",
    text: "text-amber-400",
    iconBg: "bg-amber-400/10",
    iconBorder: "border-amber-400/30",
    hoverBorder: "hover:border-amber-400/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(251,191,36,0.15)]",
    hoverGlow: "group-hover:shadow-[0_0_16px_rgba(251,191,36,0.55)]",
  },
  {
    icon: <FaLaptop />,
    title: "Full-stack",
    desc: "React frontends, REST APIs, and everything between",
    text: "text-violet-400",
    iconBg: "bg-violet-400/10",
    iconBorder: "border-violet-400/30",
    hoverBorder: "hover:border-violet-400/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(167,139,250,0.15)]",
    hoverGlow: "group-hover:shadow-[0_0_16px_rgba(167,139,250,0.55)]",
  },
  {
    icon: <FaUsers />,
    title: "Team lead",
    desc: "Sprints, code reviews, stakeholder communication",
    text: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    iconBorder: "border-emerald-400/30",
    hoverBorder: "hover:border-emerald-400/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(52,211,153,0.15)]",
    hoverGlow: "group-hover:shadow-[0_0_16px_rgba(52,211,153,0.55)]",
  },
];

const links = [
  { href: "https://varshamane.vercel.app", target: "_blank", label: "🌐 Portfolio" },
  { href: "https://github.com/vaasumane", target: "_blank", label: "🐙 GitHub" },
  { href: "mailto:varshamane2002@gmail.com", target: undefined, label: "✉️ Email" },
  { href: undefined, target: undefined, label: "📍 Mumbai" },
];

export default function SecondSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#060B18] via-[#090E1A] to-[#060B18] px-6 py-20 text-white md:px-12 lg:px-20"
      id="about"
    >
      {/* ambient glow behind heading */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(0,229,255,0.06)_0%,transparent_70%)]" />

      <div
        className="relative mx-auto grid max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-2"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        {/* ── LEFT ── */}
        <div>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-400">
            about me
          </p>

          <h2 className="font-['Poppins',system-ui,sans-serif] text-[clamp(26px,4vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-slate-100">
            I build financial systems
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              that move real money.
            </span>
          </h2>

          <p className="mt-5 text-[15px] leading-8 text-slate-400">
            With 3.5+ years in full-stack development, I've specialised in
            fintech infrastructure — building back-end engines that power loan
            origination, invoice management, and credit-risk visibility for
            NBFC and banking clients.
          </p>

          <p className="mt-5 text-[15px] leading-8 text-slate-400">
            I care about code that's{" "}
            <span className="font-bold text-slate-100">secure by design</span>.
            OpenSSL encryption, RBAC access control, and regulated API
            integrations are part of my daily vocabulary — not afterthoughts.
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="150">
            {badges.map((b, i) => (
              <span
                key={i}
                className="inline-block rounded-full border border-cyan-400/35 bg-cyan-400/[.08] px-[13px] py-[5px] font-mono text-[11px] tracking-[0.03em] text-cyan-400 transition-colors duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/[.16]"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-6" data-aos="fade-up" data-aos-delay="200">
            {links.map((l, i) =>
              l.href ? (
                <a
                  key={i}
                  href={l.href}
                  target={l.target}
                  rel={l.target === "_blank" ? "noreferrer" : undefined}
                  className="inline-flex cursor-pointer items-center gap-[5px] text-[13px] text-slate-500 transition-colors duration-200 hover:text-cyan-400"
                >
                  {l.label}
                </a>
              ) : (
                <span
                  key={i}
                  className="inline-flex items-center gap-[5px] text-[13px] text-slate-500"
                >
                  {l.label}
                </span>
              )
            )}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="900">
          {/* Award card */}
          <div className="mb-5 rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-slate-900/90 p-6 shadow-[0_0_32px_rgba(0,229,255,0.07)] transition-all duration-300 hover:border-cyan-400/55 hover:shadow-[0_0_48px_rgba(0,229,255,0.14)]">
            <div className="flex items-center gap-3 font-['Poppins',system-ui,sans-serif] text-base font-bold text-slate-100">
              <FaTrophy className="text-xl text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
              Spot Award — SBI Factors Client
            </div>
            <p className="mt-3.5 text-sm leading-[1.7] text-slate-400">
              Recognised by SBI for a critical contribution to the successful
              go-live of the Loan Origination System — a high-stakes
              enterprise delivery milestone.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`group cursor-default rounded-2xl border border-white/[.06] bg-[#111827] p-5 transition-all duration-300 hover:-translate-y-[3px] ${card.hoverBorder} ${card.hoverShadow}`}
                data-aos="fade-up"
                data-aos-delay={100 + i * 80}
              >
                <div
                  className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-[10px] border text-lg transition-shadow duration-300 ${card.iconBg} ${card.iconBorder} ${card.text} ${card.hoverGlow}`}
                >
                  {card.icon}
                </div>
                <h3 className="mb-1.5 font-['Poppins',system-ui,sans-serif] text-[15px] font-bold text-slate-100">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-[1.55] text-slate-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
