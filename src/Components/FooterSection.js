import React from "react";
import { FaGithub } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 20,
        background: "#040810",
        borderTop: "1px solid rgba(0,229,255,.14)",
        padding: "22px 6vw",
      }}
    >
      <style>{`
        .footer-link {
          color: #64748B; text-decoration: none; display: inline-flex;
          align-items: center; gap: 6px; transition: color .2s;
        }
        .footer-link:hover { color: #00E5FF; }
      `}</style>

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, color: "#64748B", margin: 0 }}>
          Built by{" "}
          <span style={{ color: "#00E5FF", fontWeight: 700 }}>Varsharani Mane</span>
        </p>

        <span style={{ color: "#334155" }}>·</span>

        <a
          href="https://github.com/vaasumane/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{ fontSize: 13 }}
        >
          <FaGithub size={12} /> github.com/vaasumane
        </a>
      </div>
    </footer>
  );
}
