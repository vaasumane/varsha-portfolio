import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    category: ["Fintech • NBFC", "🏆 Spot Award"],
    title: "LOS — Loan Origination System",
    description:
      "End-to-end loan approval platform for India's NBFC sector. Handles KYC, CRISIL-based financial rating, RBAC, and OpenSSL-encrypted PII storage.",
    tags: ["Laravel", "RBAC", "OpenSSL", "CRISIL"],
    color: "#00E5FF",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Fintech • NBFC"],
    title: "LMS — Loan Management System",
    description:
      "Factoring platform with invoice booking, limit exposure management, and Early Warning System to proactively flag overdue invoices.",
    tags: ["Laravel", "EWS", "MySQL"],
    color: "#A78BFA",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Enterprise SaaS"],
    title: "SiloCloud & Silo ERP",
    description:
      "Multi-product enterprise suite — CMS, ERP, e-commerce, and calendar apps with unified SSO authentication.",
    tags: ["Laravel", "React.js", "SSO"],
    color: "#FBBF24",
    live: "Laravel",
    URL: "#",
  },
  {
    category: ["Frontend"],
    title: "YouTube Clone",
    description:
      "Responsive video platform with React.js and YouTube Data API — search, channel browsing, and playback.",
    tags: ["React.js", "Tailwind", "YouTube API"],
    color: "#FB923C",
    live: "Live",
    URL: "https://youtubex-clone.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Thar Trek",
    description:
      "Interactive travel UI for the Thar desert trek with smooth animations and responsive design.",
    tags: ["React.js", "Tailwind", "JavaScript"],
    color: "#60A5FA",
    live: "Live",
    URL: "https://thartrek.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Github Login",
    description:
      "Built a GitHub-style authentication interface using React.js with responsive design, real-time form validation, error handling, and interactive user feedback for seamless login and registration.",
    tags: ["React.js", "JavaScript"],
    color: "#00E5FF",
    live: "Live",
    URL: "https://github-form.netlify.app/",
  },
  {
    category: ["Frontend"],
    title: "Food Villa",
    description:
      "Created a React.js food application with restaurant browsing, search, and responsive UI, inspired by Swiggy and Zomato.",
    tags: ["React.js", "JavaScript"],
    color: "#A78BFA",
    live: "Live",
    URL: "https://github.com/vaasumane/food-villa",
  },
];

export default function FourthSection() {
  return (
    <>
    <section
      style={{
        background:
          "radial-gradient(ellipse 75% 60% at 30% 70%, #0A0F1E 0%, #060B18 55%, #040810 100%)",
        color: "#F1F5F9",
        padding: "96px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
      id="projects"
    >
      <style>{`
        .proj-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(0,229,255,.14);
          border-radius: 22px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          transition: border-color .3s, transform .25s, box-shadow .3s;
        }
        .proj-card:hover {
          border-color: rgba(0,229,255,.45);
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0,229,255,.1);
        }
        .proj-cat-badge {
          font-size: 10px; padding: 7px 14px; border-radius: 999px;
          border: 1px solid rgba(148,163,184,.25); color: #CBD5E1;
        }
        .proj-tag {
          font-size: 10px; padding: 5px 12px; border-radius: 999px; border: 1px solid;
        }
        .proj-link {
          color: #94A3B8; text-decoration: none; display: flex; align-items: center; gap: 8px;
          font-size: 13px; transition: color .2s;
        }
        .proj-link:hover { color: #00E5FF; }
        .proj-more-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; border-radius: 14px;
          border: 1px solid rgba(0,229,255,.25); background: rgba(255,255,255,.02);
          color: #E2E8F0; font-size: 14px; text-decoration: none;
          transition: border-color .2s, background .2s, transform .2s;
        }
        .proj-more-btn:hover {
          border-color: #00E5FF; background: rgba(0,229,255,.08); transform: translateY(-2px);
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div data-aos="fade-right">
          <p style={{ color: "#00E5FF", fontFamily: "monospace", fontSize: 13, letterSpacing: "4px", marginBottom: 14 }}>
            // SELECTED WORK
          </p>
          <h2
            style={{
              fontSize: "clamp(26px,4vw,40px)",
              fontWeight: 800,
              marginBottom: 60,
              fontFamily: "'Poppins','Inter',system-ui,sans-serif",
            }}
          >
            Things I've{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#00E5FF,#A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              built.
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="proj-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {project.category.map((cat, i) => (
                  <span key={i} className="proj-cat-badge">
                    {cat}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, fontFamily: "'Poppins','Inter',system-ui,sans-serif" }}>
                {project.title}
              </h3>

              <p style={{ color: "#94A3B8", fontSize: 13, lineHeight: 1.8, minHeight: 130, margin: 0 }}>
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="proj-tag"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}55`,
                      background: `${project.color}14`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(148,163,184,.14)",
                  marginTop: 22,
                  paddingTop: 16,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {![0, 1, 2].includes(index) && (
                    <a className="proj-link" href="https://github.com/vaasumane/">
                      <FaGithub /> Source
                    </a>
                  )}
                </span>

                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {project.URL !== "#" ? (
                    <a
                      className="proj-link"
                      href={project.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink /> {project.live}
                    </a>
                  ) : (
                    <span className="proj-link" style={{ opacity: 0.6 }}>
                      <FaLink /> {project.live}
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }} data-aos="zoom-in">
          <a className="proj-more-btn" href="https://github.com/vaasumane/" target="_blank" rel="noopener noreferrer">
            <FaGithub /> More on GitHub
          </a>
        </div>
      </div>

    </section>
            <div className="section-line" />
    </>
  );
}
