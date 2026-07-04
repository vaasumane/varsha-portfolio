/**
 * HeroSection.jsx
 * Drop-in hero for Varsharani Mane's portfolio.
 *
 * Dependencies (already in your project):
 *   npm install aos react-icons
 *
 * Typewriter is implemented with a built-in hook so you don't need
 * an extra package, but it is easy to swap for "typewriter-effect"
 * or "react-type-animation" if you prefer.
 *
 * Usage:
 *   import HeroSection from "./HeroSection";
 *   // Place your photo at src/assets/profile.jpg (or change PROFILE_IMG below)
 */

import React, { useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import {
  FaPhp,
  FaLaravel,
  FaReact,
  FaJs,
  FaGitAlt,
  FaShieldAlt,
  FaCloud,
  FaBrain,
  FaCode,
  FaServer,
  FaDatabase,
  FaArrowRight,
  FaPaperPlane,
  FaTrophy,
  FaCheckCircle,
  FaBoxOpen,
  FaUserCheck,
  FaDownload,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

// ── Replace with your actual image / resume paths ──────────────────────────────
const PROFILE_IMG = "/profile.jpeg"; // e.g. import profileImg from "./assets/profile.jpg"
const RESUME_FILE = "/Varsharani_Mane_Resume.pdf"; // drop your PDF into the public/ folder with this name

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 50, pauseMs = 2200) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (pauseRef.current) return;
    const current = words[wordIdx % words.length];

    const delay = deleting ? deletingSpeed : typingSpeed;

    const tid = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          pauseRef.current = true;
          setTimeout(() => {
            pauseRef.current = false;
            setDeleting(true);
          }, pauseMs);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(tid);
  }, [displayed, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

// ── Stars background ──────────────────────────────────────────────────────────
function Stars({ count = 120 }) {
  const stars = useRef(
    Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.6 + 0.3,
      o: Math.random() * 0.6 + 0.2,
      d: Math.random() * 4 + 2, // twinkle duration
    }))
  ).current;

  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        pointerEvents: "none", zIndex: 0,
      }}
    >
      {stars.map((s, i) => (
        <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r}
          fill="white" opacity={s.o}
          style={{ animation: `twinkle ${s.d}s ease-in-out infinite alternate` }}
        />
      ))}
    </svg>
  );
}

// ── Diagram node data ─────────────────────────────────────────────────────────
// angle: standard math (0 = right, CCW). Position = center + R * (cos, -sin)
const NODES = [
  {
    id: "backend", label: "Backend", Icon: FaServer,
    color: "#00E5FF", glow: "rgba(0,229,255,0.55)",
    angle: 88, lines: ["PHP • Laravel", "REST APIs"],
    labelPos: "top",
  },
  {
    id: "frontend", label: "Frontend", Icon: FaCode,
    color: "#A78BFA", glow: "rgba(167,139,250,0.55)",
    angle: 133, lines: ["React.js • Tailwind", "HTML • CSS • JS"],
    labelPos: "left",
  },
  {
    id: "database", label: "Database", Icon: FaDatabase,
    color: "#60A5FA", glow: "rgba(96,165,250,0.55)",
    angle: 47, lines: ["MySQL • PostgreSQL", "Query Optimization"],
    labelPos: "right",
  },
  {
    id: "apis", label: "APIs", Icon: FaBoxOpen,
    color: "#FB923C", glow: "rgba(251,146,60,0.55)",
    angle: 205, lines: ["Integration", "Third Party APIs"],
    labelPos: "left",
  },
  {
    id: "devops", label: "Version Control", Icon: FaCloud,
    color: "#C084FC", glow: "rgba(192,132,252,0.55)",
    angle: 337, lines: ["Git • GitHub", "Deployment"],
    labelPos: "right",
  },
  {
    id: "problem", label: "Problem Solving", Icon: FaBrain,
    color: "#38BDF8", glow: "rgba(56,189,248,0.55)",
    angle: 252, lines: ["Data Structures", "System Design"],
    labelPos: "bottom",
  },
  {
    id: "security", label: "Security", Icon: FaShieldAlt,
    color: "#FBBF24", glow: "rgba(251,191,36,0.55)",
    angle: 296, lines: ["Data Protection", "Best Practices"],
    labelPos: "bottom",
  },
];

const RADIUS_FRAC = 0.38; // fraction of container width

// ── Single hex node ───────────────────────────────────────────────────────────
function HexNode({ node, cx, cy, containerSize, delay = 0 }) {
  const rad     = (node.angle * Math.PI) / 180;
  const r       = containerSize * RADIUS_FRAC;
  const x       = cx + r * Math.cos(rad);
  const y       = cy - r * Math.sin(rad);
  const nodeW   = containerSize * 0.13;
  const nodeH   = nodeW;

  // label offset from node center
  let labelStyle = { position: "absolute", whiteSpace: "nowrap", textAlign: "center" };
  if (node.labelPos === "top")    labelStyle = { ...labelStyle, bottom: "100%", left: "50%", transform: "translateX(-50%)", paddingBottom: 6 };
  if (node.labelPos === "bottom") labelStyle = { ...labelStyle, top:    "100%", left: "50%", transform: "translateX(-50%)", paddingTop:  6 };
  if (node.labelPos === "left")   labelStyle = { ...labelStyle, right:  "100%", top:  "50%", transform: "translateY(-50%)", paddingRight: 8, textAlign: "right" };
  if (node.labelPos === "right")  labelStyle = { ...labelStyle, left:   "100%", top:  "50%", transform: "translateY(-50%)", paddingLeft:  8, textAlign: "left" };

  return (
    <div style={{
      position: "absolute",
      left: x - nodeW / 2,
      top:  y - nodeH / 2,
      width: nodeW, height: nodeH,
      display: "flex", alignItems: "center", justifyContent: "center",
      animation: `floatNode 3.5s ease-in-out ${delay}s infinite alternate`,
    }}>
      {/* hexagon */}
      <div style={{
        width: "100%", height: "100%",
        clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
        background: `linear-gradient(135deg, ${node.color}22, ${node.color}55)`,
        border: `1.5px solid ${node.color}`,
        boxShadow: `0 0 18px ${node.glow}, inset 0 0 12px ${node.color}18`,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
      }}>
        <node.Icon size={nodeW * 0.36} color={node.color} />
      </div>
      {/* label */}
      <div style={{ ...labelStyle, pointerEvents: "none" }}>
        <p style={{ color: node.color, fontWeight: 700, fontSize: nodeW * 0.22, lineHeight: 1.3, margin: 0 }}>
          {node.label}
        </p>
        {node.lines.map((l, i) => (
          <p key={i} style={{ color: "#94A3B8", fontSize: nodeW * 0.17, margin: 0, lineHeight: 1.4 }}>{l}</p>
        ))}
      </div>
    </div>
  );
}

// ── SVG orbit rings + connecting lines ───────────────────────────────────────
function DiagramSVG({ cx, cy, containerSize }) {
  const r1 = containerSize * RADIUS_FRAC;
  const r2 = r1 * 0.6;

  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <defs>
        <radialGradient id="orbGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* outer glow fill */}
      <circle cx={cx} cy={cy} r={r1} fill="url(#orbGrad)" />

      {/* orbit rings */}
      {[r1, r2].map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          fill="none" stroke="#00E5FF" strokeWidth={i === 0 ? 0.6 : 0.4}
          strokeOpacity={0.25} strokeDasharray={i === 0 ? "4 6" : "2 8"}
        />
      ))}

      {/* lines from center to each node */}
      {NODES.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const nx  = cx + r1 * Math.cos(rad);
        const ny  = cy - r1 * Math.sin(rad);
        const mx  = cx + r2 * Math.cos(rad);
        const my  = cy - r2 * Math.sin(rad);
        // mid-dot position
        const dx  = cx + (r1 * 0.72) * Math.cos(rad);
        const dy  = cy - (r1 * 0.72) * Math.sin(rad);
        return (
          <g key={node.id}>
            <line x1={cx} y1={cy} x2={nx} y2={ny}
              stroke={node.color} strokeWidth={0.8} strokeOpacity={0.35}
              strokeDasharray="3 5"
            />
            {/* glowing travel dot */}
            <circle cx={dx} cy={dy} r={3} fill={node.color} opacity={0.75}
              style={{ animation: `pulseDot 2.5s ease-in-out ${node.angle / 100}s infinite` }}
            />
            <circle cx={mx} cy={my} r={1.8} fill={node.color} opacity={0.5} />
          </g>
        );
      })}
    </svg>
  );
}

// ── Tech marquee data ─────────────────────────────────────────────────────────
const TECH_MARQUEE = [
  { Icon: FaPhp,       label: "PHP",          color: "#8892BF" },
  { Icon: FaLaravel,   label: "Laravel",       color: "#FF2D20" },
  { Icon: FaReact,     label: "React.js",      color: "#61DAFB" },
  { Icon: FaJs,        label: "JavaScript",    color: "#F7DF1E" },
  { Icon: SiMysql,     label: "MySQL",         color: "#4479A1" },
  { Icon: FaGitAlt,    label: "Git",           color: "#F05032" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
  { Icon: FaCode,      label: "CodeIgniter",   color: "#DD4814" },
  { Icon: FaShieldAlt, label: "OpenSSL",       color: "#00C9A7" },
  { Icon: FaDatabase,  label: "RBAC",          color: "#A78BFA" },
];

const STATS = [
  { Icon: FaCheckCircle, value: "3.5+", label: "Years\nExperience", color: "#00E5FF" },
  { Icon: FaTrophy,      value: "1",    label: "Spot\nAward",       color: "#FBBF24" },
//   { Icon: FaCode,        value: "10+",  label: "Projects\nDelivered", color: "#00E5FF" },
  { Icon: FaUserCheck,   value: "100%", label: "Client\nSatisfaction", color: "#00E5FF" },
];

// ── Main component ────────────────────────────────────────────────────────────
export default function HeroSection() {
  const diagramRef  = useRef(null);
  const [diagSize, setDiagSize] = useState(480);

  const typedText = useTypewriter(
    ["Full-Stack Engineer", "Laravel Developer", "React Developer"],
    80, 45, 2000
  );

  

  // measure diagram container for responsive sizing
  useEffect(() => {
    const observe = () => {
      if (diagramRef.current) {
        setDiagSize(diagramRef.current.offsetWidth);
      }
    };
    observe();
    const ro = new ResizeObserver(observe);
    if (diagramRef.current) ro.observe(diagramRef.current);
    return () => ro.disconnect();
  }, []);

  const cx = diagSize / 2;
  const cy = diagSize / 2;
  const centerR = diagSize * 0.155;

  // Duplicate marquee for seamless loop
  const marqueeItems = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <section style={{
      background: "radial-gradient(ellipse 80% 80% at 60% 40%, #060B18 0%, #0A0F1E 50%, #040810 100%)",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      

      {/* Starfield */}
      <Stars count={130} />

      {/* ── Main grid ── */}
      <div className="hero-grid" style={{
        flex: 1, display: "flex", alignItems: "center",
        gap: 40, padding: "100px 6vw 40px",
        maxWidth: 1440, margin: "0 auto", width: "100%", position: "relative", zIndex: 1,
      }}>

        {/* ── LEFT CONTENT ── */}
        <div className="hero-left" style={{ flex: "0 0 auto", maxWidth: 520 }}>

          {/* Available badge */}
          <div data-aos="fade-right" data-aos-delay="0"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,229,255,.08)", border: "1px solid rgba(0,229,255,.3)",
              borderRadius: 999, padding: "7px 16px", marginBottom: 24,
            }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%", background: "#00E5FF",
              boxShadow: "0 0 8px #00E5FF",
              animation: "glowPulse 2s ease-in-out infinite",
            }}/>
            <span style={{ color: "#00E5FF", fontSize: 13, fontWeight: 600, letterSpacing: ".04em" }}>
              Available • Mumbai &amp; Remote
            </span>
          </div>

          {/* Heading */}
          <div data-aos="fade-right" data-aos-delay="100">
            <h1 style={{
              fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1,
              color: "#F1F5F9", margin: 0, letterSpacing: "-.02em",
              fontFamily: "'Poppins', 'Inter', system-ui, sans-serif",
            }} className="hero-title">
              Hi, I'm<br/>
              <span style={{
                background: "linear-gradient(90deg, #00E5FF, #38BDF8, #A78BFA)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Varsharani Mane
              </span>
            </h1>
          </div>

          {/* Typewriter subtitle */}
          <div data-aos="fade-right" data-aos-delay="200"
            style={{ display: "flex", alignItems: "center", gap: 10, margin: "20px 0 18px", flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(0,229,255,.1)", border: "1px solid rgba(0,229,255,.35)",
              borderRadius: 6, padding: "5px 12px",
              color: "#00E5FF", fontFamily: "monospace", fontWeight: 700, fontSize: 14,
            }}>
              <span style={{ fontSize: 16 }}>{"{"}</span>
              <span style={{ fontSize: 11, opacity: .7 }}>·</span>
              <span style={{ fontSize: 16 }}>{"}"}</span>
            </span>
            <span style={{
              color: "#E2E8F0", fontSize: "clamp(15px, 2vw, 19px)", fontWeight: 600,
            }}>
              {typedText}
              <span style={{ animation: "blink 1s step-end infinite", color: "#00E5FF", fontWeight: 400, marginLeft: 2 }}>|</span>
            </span>
            <span style={{ color: "#64748B", fontSize: 16 }}>| Fintech &amp; NBFC</span>
          </div>

          {/* Body */}
          <p data-aos="fade-right" data-aos-delay="300"
            style={{ color: "#94A3B8", fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.8, marginBottom: 32, maxWidth: 460 }}>
            I build scalable, secure and performance-driven financial systems that
            power the future of lending and digital finance.
          </p>

          {/* Buttons */}
          <div className="hero-buttons" data-aos="fade-right" data-aos-delay="400"
            style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
            <a href="#projects" className="hero-btn-primary">
              View My Work <FaArrowRight size={13}/>
            </a>
            <a
              href={RESUME_FILE}
              download="Varsharani_Mane_Resume.pdf"
              className="hero-btn-outline"
            >
              Download Resume <FaDownload size={13}/>
            </a>
            <a href="#contact" className="hero-btn-ghost">
              Get In Touch <FaPaperPlane size={13}/>
            </a>
          </div>

          {/* Stats grid */}
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="500"
            style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12, maxWidth: 560,
            }}>
            {STATS.map((s, i) => (
              <div key={i} className="stat-card">
                <s.Icon size={18} color={s.color} style={{ marginBottom: 4 }}/>
                <div style={{
                  fontFamily: "'Poppins', system-ui", fontWeight: 800,
                  fontSize: "clamp(20px, 2.5vw, 26px)", color: s.color, lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: "#64748B", lineHeight: 1.4, whiteSpace: "pre-line" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT DIAGRAM ── */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div
            ref={diagramRef}
            className="hero-diagram"
            data-aos="zoom-in" data-aos-delay="200"
            style={{
              position: "relative",
              width: "min(520px, 48vw)",
              height: "min(520px, 48vw)",
            }}
          >
            {/* orbit rings + lines */}
            <DiagramSVG cx={cx} cy={cy} containerSize={diagSize} />

            {/* all hex nodes */}
            {NODES.map((node, i) => (
              <HexNode
                key={node.id}
                node={node}
                cx={cx} cy={cy}
                containerSize={diagSize}
                delay={i * 0.25}
              />
            ))}

            {/* center circle */}
            <div style={{
              position: "absolute",
              left: cx - centerR, top: cy - centerR,
              width: centerR * 2, height: centerR * 2,
              borderRadius: "50%",
              border: "2.5px solid #00E5FF",
              boxShadow: "0 0 30px #00E5FF88, 0 0 70px #00E5FF44, inset 0 0 30px #00E5FF18",
              animation: "glowPulse 3s ease-in-out infinite",
              overflow: "hidden",
              background: "linear-gradient(135deg, #0A1628, #0D2040)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column",
              zIndex: 2,
            }}>
              {/* Spinning ring */}
              <div style={{
                position: "absolute", inset: -4,
                borderRadius: "50%",
                border: "1.5px dashed rgba(0,229,255,.35)",
                animation: "spin 12s linear infinite",
              }}/>

              {/* Profile image */}
              <img
                src={PROFILE_IMG}
                alt="Varsharani Mane"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", objectPosition: "top",
                  borderRadius: "50% 50% 0 0",
                }}
                onError={(e) => { e.target.style.display = "none"; }}
              />

              {/* Center text */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(0,15,40,.95) 60%, transparent)",
                padding: "10px 4px 10px",
                textAlign: "center",
              }}>
                <p style={{ color: "#00E5FF", fontWeight: 800, fontSize: centerR * 0.16, margin: 0, letterSpacing: ".05em" }}>ENGINEER</p>
                <p style={{ color: "#94A3B8", fontSize: centerR * 0.11, margin: 0, lineHeight: 1.5 }}>
                  Problem Solver<br/>• Builder • Innovator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div data-aos="fade-up" data-aos-delay="600"
        style={{
          borderTop: "1px solid rgba(0,229,255,.12)",
          background: "rgba(0,0,0,.35)",
          padding: "20px 0",
          overflow: "hidden",
          position: "relative", zIndex: 1,
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px, 3vw, 32px)", paddingLeft: "clamp(16px, 4vw, 48px)", marginBottom: 12 }}>
          <span style={{ color: "#475569", fontSize: 13, fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", flexShrink: 0 }}>
            Let's I Work With
          </span>
        </div>
        <div style={{ overflow: "hidden", width: "100%" }}>
          <div style={{
            display: "flex", gap: 48,
            width: "max-content",
            animation: "marquee 30s linear infinite",
          }}>
            {marqueeItems.map((tech, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10, flexShrink: 0,
                opacity: 0.75, transition: "opacity .2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "0.75"}
              >
                <tech.Icon size={26} color={tech.color}
                  style={{ filter: `drop-shadow(0 0 6px ${tech.color}88)` }}
                />
                <span style={{ color: "#CBD5E1", fontWeight: 600, fontSize: 15, whiteSpace: "nowrap" }}>
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
