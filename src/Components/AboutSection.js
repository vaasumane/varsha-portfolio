import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    color: "#00E5FF",
    glow: "rgba(0,229,255,0.12)",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security-focused",
    desc: "OpenSSL, RBAC, JWT, SSO — built in, not bolted on",
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.12)",
  },
  {
    icon: <FaLaptop />,
    title: "Full-stack",
    desc: "React frontends, REST APIs, and everything between",
    color: "#A78BFA",
    glow: "rgba(167,139,250,0.12)",
  },
  {
    icon: <FaUsers />,
    title: "Team lead",
    desc: "Sprints, code reviews, stakeholder communication",
    color: "#34D399",
    glow: "rgba(52,211,153,0.12)",
  },
];

const links = [
  { href: "https://varshamane.vercel.app", target: "_blank", label: "🌐 Portfolio" },
  { href: "https://github.com/vaasumane",   target: "_blank", label: "🐙 GitHub"    },
  { href: "mailto:varshamane2002@gmail.com", target: undefined, label: "✉️ Email"   },
  { href: undefined,                         target: undefined, label: "📍 Mumbai"  },
];

export default function SecondSection() {
 

  return (
    <>
      <style>{`
        .about-section {
          background: linear-gradient(180deg, #060B18 0%, #090E1A 60%, #060B18 100%);
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 400px;
          background: radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        /* eyebrow */
        .about-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          color: #00E5FF;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        /* heading */
        .about-heading {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 800;
          line-height: 1.15;
          color: #F1F5F9;
          font-family: 'Poppins', system-ui, sans-serif;
          letter-spacing: -0.02em;
        }

        /* body text */
        .about-body {
          color: #94A3B8;
          font-size: 15px;
          line-height: 1.8;
          margin-top: 20px;
        }

        /* badge */
        .about-badge {
          display: inline-block;
          padding: 5px 13px;
          border-radius: 999px;
          border: 1px solid rgba(0,229,255,0.35);
          background: rgba(0,229,255,0.08);
          color: #00E5FF;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.03em;
          transition: background 0.2s, border-color 0.2s;
        }
        .about-badge:hover {
          background: rgba(0,229,255,0.16);
          border-color: rgba(0,229,255,0.6);
        }

        /* links */
        .about-link {
          color: #5D7192;
          font-size: 13px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s;
          cursor: pointer;
        }
        .about-link:hover { color: #00E5FF; }

        /* award card */
        .award-card {
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 20px;
          background: linear-gradient(135deg, rgba(0,229,255,0.10), rgba(15,23,41,0.9));
          border: 1px solid rgba(0,229,255,0.30);
          box-shadow: 0 0 32px rgba(0,229,255,0.07), inset 0 0 24px rgba(0,229,255,0.03);
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .award-card:hover {
          border-color: rgba(0,229,255,0.55);
          box-shadow: 0 0 48px rgba(0,229,255,0.14);
        }
        .award-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Poppins', system-ui, sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #F1F5F9;
        }
        .award-trophy {
          color: #FBBF24;
          font-size: 20px;
          filter: drop-shadow(0 0 8px rgba(251,191,36,0.7));
        }
        .award-body {
          margin-top: 14px;
          color: #94A3B8;
          font-size: 14px;
          line-height: 1.7;
        }

        /* feature card */
        .feat-card {
          background: #111827;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 20px;
          transition: border-color 0.3s, transform 0.2s, box-shadow 0.3s;
          cursor: default;
        }
        .feat-card:hover {
          transform: translateY(-3px);
        }
        .feat-icon-wrap {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          margin-bottom: 14px;
          transition: box-shadow 0.3s;
        }
        .feat-title {
          font-family: 'Poppins', system-ui, sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #F1F5F9;
          margin-bottom: 6px;
        }
        .feat-desc {
          color: #64748B;
          font-size: 13px;
          line-height: 1.55;
        }

        /* section divider */
       
      `}</style>

      {/* top divider matching hero bottom */}
      <div className="section-line" />

      <section className="about-section text-white px-6 md:px-12 lg:px-20 py-20" id="about">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
          data-aos="fade-up"
          data-aos-duration="900"
        >

          {/* ── LEFT ── */}
          <div>
            <p className="about-eyebrow">// about me</p>

            <h2 className="about-heading">
              I build financial systems<br />
              <span style={{
                background: "linear-gradient(90deg, #00E5FF, #38BDF8 50%, #A78BFA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                that move real money.
              </span>
            </h2>

            <p className="about-body">
              With 3.5+ years in full-stack development, I've specialised in
              fintech infrastructure — building back-end engines that power loan
              origination, invoice management, and credit-risk visibility for
              NBFC and banking clients.
            </p>

            <p className="about-body">
              I care about code that's{" "}
              <span style={{ color: "#F1F5F9", fontWeight: 700 }}>
                secure by design
              </span>
              . OpenSSL encryption, RBAC access control, and regulated API
              integrations are part of my daily vocabulary — not afterthoughts.
            </p>

            {/* Badges */}
            <div
              className="flex flex-wrap gap-2 mt-8"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {badges.map((b, i) => (
                <span key={i} className="about-badge">{b}</span>
              ))}
            </div>

            {/* Links */}
            <div
              className="flex flex-wrap gap-6 mt-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {links.map((l, i) =>
                l.href ? (
                  <a
                    key={i}
                    href={l.href}
                    target={l.target}
                    rel={l.target === "_blank" ? "noreferrer" : undefined}
                    className="about-link"
                  >
                    {l.label}
                  </a>
                ) : (
                  <span key={i} className="about-link">{l.label}</span>
                )
              )}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="900">

            {/* Award card */}
            <div className="award-card">
              <div className="award-title">
                <FaTrophy className="award-trophy" />
                Spot Award — SBI Factors Client
              </div>
              <p className="award-body">
                Recognised by SBI for a critical contribution to the successful
                go-live of the Loan Origination System — a high-stakes
                enterprise delivery milestone.
              </p>
            </div>

            {/* Feature cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="feat-card"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
                  style={{
                    "--card-color": card.color,
                    "--card-glow": card.glow,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = card.color + "55";
                    e.currentTarget.style.boxShadow = `0 8px 32px ${card.color}18`;
                    e.currentTarget.querySelector(".feat-icon-wrap").style.boxShadow =
                      `0 0 16px ${card.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.querySelector(".feat-icon-wrap").style.boxShadow = "none";
                  }}
                >
                  <div
                    className="feat-icon-wrap"
                    style={{
                      background: card.glow,
                      color: card.color,
                      border: `1px solid ${card.color}30`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="feat-title">{card.title}</h3>
                  <p className="feat-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* bottom divider */}
      <div className="section-line" />
    </>
  );
}
