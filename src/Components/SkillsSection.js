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
    color: "#00E5FF",
    glow: "rgba(0,229,255,0.5)",
    skills: ["PHP 8 · Laravel 10+", "CodeIgniter", "REST API Design", "MVC Architecture", "OOP"],
  },
  {
    title: "Frontend",
    Icon: FaCode,
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.5)",
    skills: ["React.js", "JavaScript", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap · jQuery"],
  },
  {
    title: "Database",
    Icon: FaDatabase,
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.5)",
    skills: ["MySQL", "Eloquent ORM", "Query Optimisation", "Schema Design"],
  },
  {
    title: "Security",
    Icon: FaShieldAlt,
    color: "#FB923C",
    glow: "rgba(251,146,60,0.5)",
    skills: ["OpenSSL Encryption", "RBAC", "JWT Authentication", "SSO", "PII Data Protection"],
  },
  {
    title: "API Integrations",
    Icon: FaBoxOpen,
    color: "#60A5FA",
    glow: "rgba(96,165,250,0.5)",
    skills: ["Karza — PAN Verify", "CRIF — Credit Bureau", "Corpistory — Corp Data", "Stripe · PayPal", "YouTube Data API"],
  },
  {
    title: "Tools",
    Icon: FaTools,
    color: "#C084FC",
    glow: "rgba(192,132,252,0.5)",
    skills: ["Git", "Agile / Scrum", "Postman", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
   <>
    <section
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 70% 30%, #0A0F1E 0%, #060B18 55%, #040810 100%)",
        color: "#F1F5F9",
        padding: "96px 3vw",
        position: "relative",
        overflow: "hidden",
      }}
      id="skills"
    >
      <style>{`
        @keyframes skillHexGlow {
          0%,100% { box-shadow: 0 0 12px var(--glow); }
          50%     { box-shadow: 0 0 22px var(--glow); }
        }
        .skill-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(0,229,255,.14);
          border-radius: 18px;
          padding: 26px;
          transition: border-color .3s, transform .25s, box-shadow .3s;
        }
        .skill-card:hover {
          border-color: rgba(0,229,255,.45);
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(0,229,255,.08);
        }
        .skill-hex {
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center;
          animation: skillHexGlow 3s ease-in-out infinite;
        }
      `}</style>

      <div style={{ margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }} data-aos="fade-up">
          <p style={{ color: "#00E5FF", fontFamily: "monospace", fontSize: 13, letterSpacing: "4px", marginBottom: 14 }}>
            // TECH STACK
          </p>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,40px)",
              fontWeight: 800,
              fontFamily: "'Poppins','Inter',system-ui,sans-serif",
            }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#00E5FF,#A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              tools.
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 18,
          }}
        >
          {skillData.map((item, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
                <div
                  className="skill-hex"
                  style={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}55)`,
                    border: `1.5px solid ${item.color}`,
                    "--glow": item.glow,
                  }}
                >
                  <item.Icon size={16} color={item.color} />
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 16, margin: 0, fontFamily: "'Poppins','Inter',system-ui,sans-serif" }}>
                  {item.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {item.skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      paddingBottom: 12,
                      borderBottom: "1px solid rgba(148,163,184,.12)",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: item.color,
                        boxShadow: `0 0 6px ${item.glow}`,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: "#94A3B8", fontSize: 13 }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom expertise panel — echoes the Hero's glowing center circle */}
        <div
          data-aos="zoom-in"
          style={{
            marginTop: 40,
            borderRadius: 24,
            border: "1.5px solid rgba(0,229,255,.3)",
            background: "linear-gradient(120deg, rgba(0,229,255,.08), rgba(167,139,250,.06))",
            boxShadow: "0 0 40px rgba(0,229,255,.08), inset 0 0 30px rgba(0,229,255,.04)",
            padding: "34px clamp(20px,4vw,40px)",
          }}
        >
          <p style={{ color: "#00E5FF", fontFamily: "monospace", letterSpacing: "3px", fontSize: 13, marginBottom: 16 }}>
            DOMAIN EXPERTISE
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, fontFamily: "'Poppins','Inter',system-ui,sans-serif" }}>
                Fintech · NBFC · Service Based
              </h3>
              <p style={{ color: "#94A3B8", lineHeight: 1.8, fontSize: 14, margin: 0, maxWidth: 560 }}>
                LOS · LMS · Credit Risk · CRISIL Ratings · Limit Exposure ·
                Invoice Factoring · Early Warning Systems
              </p>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["SBI Factors", "NBFC Compliance", "Regulated APIs"].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(0,229,255,.3)",
                    background: "rgba(0,229,255,.08)",
                    color: "#38BDF8",
                    fontSize: 12,
                    fontFamily: "monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="section-line" />

   </>
  );
}
