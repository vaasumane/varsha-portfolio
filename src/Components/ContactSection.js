import React from "react";
import { FaGithub, FaLink, FaEnvelope, FaArrowRight } from "react-icons/fa";

const contacts = [
  {
    Icon: FaEnvelope,
    color: "#F472B6",
    glow: "rgba(244,114,182,0.5)",
    label: "Email",
    value: "manevarsharani2005@gmail.com",
    link: "mailto:manevarsharani2005@gmail.com",
  },
  {
    Icon: FaLink,
    color: "#00E5FF",
    glow: "rgba(0,229,255,0.5)",
    label: "Portfolio",
    value: "varshamane.vercel.app",
    link: "https://varshamane.vercel.app",
  },
  {
    Icon: FaGithub,
    color: "#FBBF24",
    glow: "rgba(251,191,36,0.5)",
    label: "GitHub",
    value: "github.com/vaasumane",
    link: "https://github.com/vaasumane",
  },
];

export default function ContactSection() {
  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse 75% 60% at 50% 30%, #0A0F1E 0%, #060B18 55%, #040810 100%)",
        color: "#F1F5F9",
        padding: "96px 6vw",
        position: "relative",
        overflow: "hidden",
      }}
      id="contact"
    >
      <style>{`
        @keyframes contactHexGlow {
          0%,100% { box-shadow: 0 0 12px var(--glow); }
          50%     { box-shadow: 0 0 22px var(--glow); }
        }
        .contact-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(0,229,255,.14);
          border-radius: 18px;
          padding: 22px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: border-color .3s, transform .25s, box-shadow .3s;
        }
        .contact-card:hover {
          border-color: rgba(0,229,255,.45);
          transform: translateY(-4px);
          box-shadow: 0 14px 34px rgba(0,229,255,.08);
        }
        .contact-hex {
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center;
          animation: contactHexGlow 3s ease-in-out infinite;
          flex-shrink: 0;
        }
        .contact-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: linear-gradient(135deg, #00E5FF, #0098B8);
          color: #000; border: none; padding: 15px 32px;
          border-radius: 12px; font-weight: 700; font-size: 15px;
          text-decoration: none; transition: transform .2s, box-shadow .2s;
        }
        .contact-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,229,255,.4);
        }
      `}</style>

      <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p
          style={{ color: "#00E5FF", fontFamily: "monospace", fontSize: 13, letterSpacing: "4px", marginBottom: 14 }}
          data-aos="fade-up"
        >
          // GET IN TOUCH
        </p>

        <h2
          style={{
            fontSize: "clamp(26px,4vw,40px)",
            fontWeight: 800,
            marginBottom: 20,
            fontFamily: "'Poppins','Inter',system-ui,sans-serif",
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let's work{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#00E5FF,#A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            together.
          </span>
        </h2>

        <p
          style={{ color: "#94A3B8", fontSize: 14, lineHeight: 1.8, maxWidth: 560, margin: "0 auto" }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm open to full-stack, fintech, and backend engineering roles.
          Let's build secure and scalable systems together.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
            marginTop: 48,
            textAlign: "left",
          }}
        >
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div
                className="contact-hex"
                style={{
                  width: 44,
                  height: 44,
                  background: `linear-gradient(135deg, ${item.color}22, ${item.color}55)`,
                  border: `1.5px solid ${item.color}`,
                  "--glow": item.glow,
                }}
              >
                <item.Icon size={17} color={item.color} />
              </div>

              <div style={{ minWidth: 0 }}>
                <p style={{ color: "#64748B", fontSize: 12, margin: 0 }}>{item.label}</p>
                <p style={{ color: "#E2E8F0", fontWeight: 600, fontSize: 13, margin: "4px 0 0", wordBreak: "break-all" }}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="mailto:manevarsharani2005@gmail.com"
          className="contact-cta"
          style={{ marginTop: 48 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Send me a message <FaArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}
