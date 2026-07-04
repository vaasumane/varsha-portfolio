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
    color: "#00E5FF",
    glow: "rgba(0,229,255,0.55)",
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
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.55)",
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
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.55)",
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
    color: "#60A5FA",
    glow: "rgba(96,165,250,0.55)",
    Icon: FaGraduationCap,
    badges: [],
    points: [
      "Built CMS using CodeIgniter and interactive UI with AJAX/jQuery.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 30% 20%, #0A0F1E 0%, #060B18 55%, #040810 100%)",
        color: "#F1F5F9",
        padding: "96px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
      id="experience"
    >
      <style>{`
        @keyframes expGlowPulse {
          0%,100% { box-shadow: 0 0 14px var(--glow), 0 0 0 rgba(0,0,0,0); }
          50%     { box-shadow: 0 0 26px var(--glow), 0 0 44px var(--glow); }
        }
        .exp-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(0,229,255,.14);
          border-radius: 18px;
          padding: 28px clamp(18px,3vw,32px);
          transition: border-color .3s, transform .25s, box-shadow .3s;
        }
        .exp-card:hover {
          border-color: rgba(0,229,255,.45);
          transform: translateY(-3px);
          box-shadow: 0 12px 34px rgba(0,229,255,.08);
        }
        .exp-badge-pill {
          font-size: 11px; font-weight: 600; padding: 5px 12px;
          border-radius: 999px; font-family: monospace;
          border: 1px solid; white-space: nowrap;
        }
        .exp-hexnode {
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center;
          animation: expGlowPulse 2.6s ease-in-out infinite;
        }
        @media (max-width: 720px) {
          .exp-meta-right { text-align: left !important; margin-top: 10px; }
        }
      `}</style>

      <div style={{ maxWidth: 1120, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div data-aos="fade-right">
          <p
            style={{
              color: "#00E5FF",
              fontFamily: "monospace",
              fontSize: 13,
              letterSpacing: "4px",
              marginBottom: 14,
            }}
          >
            // WORK HISTORY
          </p>
          <h2
            style={{
              fontSize: "clamp(30px,4vw,44px)",
              fontWeight: 800,
              marginBottom: 60,
              fontFamily: "'Poppins','Inter',system-ui,sans-serif",
              letterSpacing: "-.01em",
            }}
          >
            Where I've{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#00E5FF,#A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              shipped.
            </span>
          </h2>
        </div>

        <div
          style={{
            position: "relative",
            borderLeft: "1.5px dashed rgba(0,229,255,.25)",
            marginLeft: 22,
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{ position: "relative", paddingLeft: 44, paddingBottom: 56 }}
              data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
              data-aos-delay={index * 120}
            >
              {/* Hex timeline node */}
              <div
                className="exp-hexnode"
                style={{
                  position: "absolute",
                  left: -24,
                  top: 4,
                  width: 44,
                  height: 44,
                  background: `linear-gradient(135deg, ${exp.color}22, ${exp.color}55)`,
                  border: `1.5px solid ${exp.color}`,
                  "--glow": exp.glow,
                }}
              >
                <exp.Icon size={17} color={exp.color} />
              </div>

              <div
                className="exp-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                  }}
                >
                  <div style={{ maxWidth: 620 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, fontFamily: "'Poppins','Inter',system-ui,sans-serif" }}>
                      {exp.title}
                    </h3>

                    {exp.badge && (
                      <div
                        data-aos="zoom-in"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          marginTop: 10,
                          background: "rgba(251,191,36,.1)",
                          border: "1px solid rgba(251,191,36,.35)",
                          borderRadius: 999,
                          padding: "5px 12px",
                        }}
                      >
                        <FaTrophy size={11} color="#FBBF24" />
                        <span style={{ fontSize: 11, color: "#FBBF24", fontFamily: "monospace" }}>
                          {exp.badge}
                        </span>
                      </div>
                    )}

                    <p style={{ color: exp.color, marginTop: 8, fontSize: 14, fontWeight: 600 }}>
                      {exp.company}
                    </p>

                    {exp.badges.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                        {exp.badges.map((badge, i) => (
                          <span
                            key={i}
                            className="exp-badge-pill"
                            style={{
                              color: exp.color,
                              borderColor: `${exp.color}55`,
                              background: `${exp.color}14`,
                            }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 12, padding: 0, listStyle: "none" }}>
                      {exp.points.map((point, i) => (
                        <li key={i} style={{ display: "flex", gap: 10, color: "#94A3B8", fontSize: 14, lineHeight: 1.6 }}>
                          <span style={{ color: exp.color, flexShrink: 0 }}>▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="exp-meta-right" style={{ textAlign: "right", color: "#64748B", fontSize: 12, flexShrink: 0 }}>
                    <p style={{ margin: 0, fontWeight: 600 }}>{exp.duration}</p>
                    <p style={{ margin: "4px 0 0" }}>{exp.location}</p>
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
