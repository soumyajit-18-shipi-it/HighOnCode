import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionShell } from "./Identity";
import { getMotionProfile } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────── Types ─────────────────────────── */
type Project = {
  title: string;
  description: string;
  stack: string[];
  status: string;
  progress: number;
  id?: string;
};

type Member = {
  name: string;
  initials: string;
  college: string;
  role: string;
  accent: string;
  signalId: string;
  about: string;
  tagline?: string;
  skills: string[];
  interests: string[];
  projects: Project[];
  highlights: string[];
  achievements?: { title: string; year?: string }[];
  socials: { icon: typeof Github; href: string; label: string; external?: boolean }[];
  creature: "anglerfish" | "octopus" | "jellyfish";
};

type TabKey = "overview" | "skills" | "projects" | "achievements" | "contact";

/* ─────────────────────────── Constants ─────────────────────── */
const tabs: { key: TabKey; label: string }[] = [
  { key: "overview",     label: "Overview"      },
  { key: "skills",       label: "Skills"        },
  { key: "projects",     label: "Projects"      },
  { key: "achievements", label: "Achievements"  },
  { key: "contact",      label: "Contact"       },
];

const team: Member[] = [
  {
    name: "Soumyajit Rout",
    initials: "SR",
    college: "BITS Pilani",
    role: "AI / ML Engineer and Frontend Systems Developer",
    tagline: "B.E. Computer Science 2028 · State Board Science Topper",
    accent: "#63d8e3",
    signalId: "SR",
    creature: "anglerfish",
    about:
      "AI and product-focused engineer building intelligent, data-driven systems with cinematic frontend experiences. Currently working on machine learning, neural systems, and scalable product architecture.",
    skills: ["Python", "NumPy", "Pandas", "scikit-learn", "TypeScript", "Next.js", "React", "GSAP", "MySQL", "Firebase"],
    interests: ["Artificial Intelligence", "Machine Learning", "Cloud Systems", "System Design"],
    projects: [
      {
        id: "01",
        title: "ICICI Bank Futures Analysis",
        description:
          "Built futures pricing and derivatives simulations with margin call tracking on market datasets to evaluate volatility behavior.",
        stack: ["Python", "Pandas", "yfinance"],
        status: "Research",
        progress: 86,
      },
      {
        id: "02",
        title: "BOSM Sports Fest Platform",
        description:
          "Developed and shipped the official BOSM platform with scalable registration architecture and high-performance interaction systems.",
        stack: ["Next.js", "TypeScript", "GSAP", "SASS"],
        status: "Shipped",
        progress: 100,
      },
      {
        id: "03",
        title: "BITS SU Portal Revamp",
        description:
          "Rebuilt a campus platform with Firebase auth, service APIs, and modular frontend architecture for long-term maintainability.",
        stack: ["Next.js", "Firebase", "REST API"],
        status: "Active",
        progress: 92,
      },
    ],
    highlights: ["Student Union Technical Team", "President - Utkal Samaj", "Event Coordinator - Nirmaan"],
    achievements: [
      { title: "Bharti Airtel Foundation Scholarship", year: "2024 - Present" },
      { title: "State Rank 1 - CHSE Odisha Class XII", year: "2024" },
    ],
    socials: [
      { icon: Mail,     href: "mailto:f20240002@pilani.bits-pilani.ac.in",          label: "Email",    external: true },
      { icon: Linkedin, href: "https://www.linkedin.com/in/soumyajit-rout-4a5aa1337", label: "LinkedIn", external: true },
      { icon: Github,   href: "https://github.com/soumyajit-18-shipi-it",            label: "GitHub",   external: true },
    ],
  },
  {
    name: "Abhinav Prajapati",
    initials: "AP",
    college: "BITS Pilani",
    role: "Software Engineering and Security Enthusiast",
    accent: "#8bd8dc",
    signalId: "AP",
    creature: "octopus",
    about:
      "Software engineer focused on practical product systems, accessibility-aware engineering, and security-informed architecture.",
    skills: ["C", "Java", "Python", "MySQL", "Git", "GitHub", "Systems Design", "Testing"],
    interests: ["Cybersecurity", "Full Stack Development", "DSA", "Reliable Software"],
    projects: [
      {
        id: "01",
        title: "Hotel Management System",
        description:
          "Built a Python and MySQL operations system for records, booking workflows, and service lifecycle management.",
        stack: ["Python", "MySQL", "CRUD"],
        status: "Completed",
        progress: 98,
      },
      {
        id: "02",
        title: "UAV Assembly Program",
        description:
          "Assembled and calibrated a functional UAV system while validating hardware integration and control behavior.",
        stack: ["Hardware", "Calibration", "Control"],
        status: "Prototype",
        progress: 82,
      },
    ],
    highlights: ["Cyber Security Essentials - Macquarie University"],
    socials: [
      { icon: Mail,     href: "mailto:f20240865@pilani.bits-pilani.ac.in", label: "Email",    external: true },
      { icon: Linkedin, href: "https://www.linkedin.com/in/abhinavp0310/",  label: "LinkedIn", external: true },
      { icon: Github,   href: "https://github.com/abhinavpraj",             label: "GitHub",   external: true },
    ],
  },
  {
    name: "Aayush Agrawal",
    initials: "AA",
    college: "BITS Pilani",
    role: "AI and Machine Learning Developer",
    accent: "#a4e0cf",
    signalId: "AA",
    creature: "jellyfish",
    about:
      "Engineer building ML-first products across intelligent systems, deep learning pipelines, and blockchain-enabled software experiments.",
    skills: ["Python", "Java", "PyTorch", "NumPy", "Solidity", "Linux", "MLOps", "DBMS"],
    interests: ["Artificial Intelligence", "Deep Learning", "Agentic Systems", "Blockchain"],
    projects: [
      {
        id: "01",
        title: "Blissful Bites x Team Unstoppable",
        description:
          "Led a hybrid operations and product sprint combining microsite growth, inventory intelligence, and predictive pricing.",
        stack: ["Microsite", "Pricing", "Inventory", "Growth Ops"],
        status: "Executed",
        progress: 100,
      },
      {
        id: "02",
        title: "Binary Digits Neural Network",
        description:
          "Trained a PyTorch neural network with tuned activation layers and reached high validation reliability on binary digit tasks.",
        stack: ["PyTorch", "Classification", "ReLU"],
        status: "Trained",
        progress: 98,
      },
      {
        id: "03",
        title: "Decentralized To-Do dApp",
        description: "Built and deployed a Solidity dApp for immutable and secure task management over EVM infrastructure.",
        stack: ["Solidity", "Ethereum", "Web3"],
        status: "Deployed",
        progress: 95,
      },
    ],
    highlights: ["BITSAT 342/390", "JEE Mains 99.48 percentile", "MHT-CET 99.92 percentile"],
    socials: [
      { icon: Mail,     href: "mailto:f20240543@pilani.bits-pilani.ac.in", label: "Email",    external: true },
      { icon: Linkedin, href: "https://linkedin.com/in/aayush777agrawal",   label: "LinkedIn", external: true },
      { icon: Github,   href: "https://github.com/AayDexterous",            label: "GitHub",   external: true },
    ],
  },
];

/* ─────────────────────── Global keyframes ───────────────────── */
const KEYFRAMES = `
@keyframes pulse-ring {
  0%   { transform: scale(0.9);  opacity: 0.6; }
  70%  { transform: scale(1.18); opacity: 0;   }
  100% { transform: scale(0.9);  opacity: 0;   }
}
@keyframes orbit-cw {
  from { transform: rotate(0deg);   }
  to   { transform: rotate(360deg); }
}
@keyframes orbit-ccw {
  from { transform: rotate(0deg);    }
  to   { transform: rotate(-360deg); }
}
@keyframes shimmer-sweep {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}
@keyframes dot-pulse {
  0%, 100% { opacity: 1;   box-shadow: 0 0 6px currentColor; }
  50%       { opacity: 0.3; box-shadow: none; }
}
@keyframes float-bob {
  0%, 100% { transform: translateY(0px)   rotate(0deg);  }
  33%       { transform: translateY(-7px)  rotate(1.5deg); }
  66%       { transform: translateY(-3px)  rotate(-1deg);  }
}
@keyframes tentacle-wave {
  0%, 100% { transform: scaleX(1)   skewY(0deg);  }
  50%       { transform: scaleX(0.9) skewY(4deg);  }
}
@keyframes jelly-pulse {
  0%, 100% { transform: scaleY(1)    scaleX(1);    }
  50%       { transform: scaleY(0.92) scaleX(1.06); }
}
@keyframes glow-lure {
  0%, 100% { filter: drop-shadow(0 0 4px #63d8e3) drop-shadow(0 0 8px #63d8e388); }
  50%       { filter: drop-shadow(0 0 10px #63d8e3) drop-shadow(0 0 20px #63d8e3cc); }
}
@keyframes skill-pop {
  0%   { transform: scale(0.84) translateY(8px); opacity: 0; }
  100% { transform: scale(1)    translateY(0);   opacity: 1; }
}
@keyframes card-enter {
  0%   { opacity: 0; transform: translateY(40px) scale(0.97); }
  100% { opacity: 1; transform: translateY(0)    scale(1);    }
}
@keyframes scanline {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100%);  }
}
@keyframes bubble-rise {
  0%   { transform: translateY(0)    scale(1);    opacity: 0.6; }
  100% { transform: translateY(-40px) scale(0.7); opacity: 0;   }
}
`;

function StyleOnce() {
  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const el = document.createElement("style");
    el.textContent = KEYFRAMES;
    document.head.appendChild(el);
  }, []);
  return null;
}

/* ─────────────────────────── Team ───────────────────────────── */
export function Team() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const profile = getMotionProfile();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".crew-intro-line",
        { opacity: 0, y: 18 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.07, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", invalidateOnRefresh: true },
        },
      );
      gsap.fromTo(
        ".crew-card-shell",
        { opacity: 0, y: 52, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.82, stagger: 0.11, ease: "power3.out",
          scrollTrigger: { trigger: ".crew-grid-modern", start: "top 80%", invalidateOnRefresh: true },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <StyleOnce />
      <SectionShell id="team" eyebrow="02 / The Crew" title="Three Signals Beneath the Surface">
        <div ref={sectionRef} className="relative">

          {/* Ambient background blobs */}
          {!profile.lowPower && (
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px]">
              <div className="absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,216,227,0.12),transparent_70%)] blur-3xl" />
              <div className="absolute -left-16 top-32 h-56 w-56 rounded-full bg-[#63d8e3]/6 blur-3xl" />
              <div className="absolute -right-16 top-48 h-64 w-64 rounded-full bg-[#a4e0cf]/6 blur-3xl" />
              <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-[#8bd8dc]/5 blur-2xl" />
            </div>
          )}

          {/* Intro block */}
          <div className="mb-10 space-y-4">
            <div className="crew-intro-line flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.36em] text-[#9ed8dc]/80">
              <span
                className="h-2.5 w-2.5 rounded-full bg-[#a4e0cf]"
                style={{ animation: "pulse-ring 2.4s ease-out infinite", boxShadow: "0 0 8px #a4e0cf88" }}
              />
              Underwater Intelligence Archive
              <span className="rounded-full border border-[#8bd8dc]/20 bg-[#04151C]/55 px-3 py-1 text-[9px] tracking-[0.24em] text-[#c2e3e6]/80">
                LIVE CREW SIGNALS
              </span>
            </div>

            <div className="crew-intro-line max-w-5xl rounded-[24px] border border-[#8bd8dc]/14 bg-gradient-to-br from-[#041a22]/68 via-[#03111a]/72 to-[#020b12]/80 px-6 py-6 backdrop-blur-xl sm:px-8">
              <p className="text-[16px] leading-relaxed text-[#d2e9eb]/88 sm:text-[18px]">
                A cinematic, living dossier of three engineers building intelligent systems, modern software, and immersive
                interfaces — each one a creature of the deep, surfacing briefly to ship.
              </p>
            </div>

            <div className="crew-intro-line flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#9cbec0]/80">
              {["Depth Layer · Active", "Parallax Sync · Stable", "Classified Files · Encrypted"].map((t) => (
                <span key={t} className="rounded-full border border-[#8bd8dc]/15 bg-[#03141b]/65 px-3 py-1">{t}</span>
              ))}
            </div>
          </div>

          {/*
            FIX: `items-start` prevents grid rows from stretching cards to equal height,
            which was causing the 3rd card to visually "start" mid-row.
            No per-card translate-y offsets — those caused overflow clipping.
          */}
          <div className="crew-grid-modern grid items-start gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {team.map((m, i) => (
              <MemberCard key={m.name} m={m} index={i} profile={profile} />
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  );
}

/* ───────────────────────── MemberCard ──────────────────────── */
function MemberCard({
  m, index, profile,
}: {
  m: Member;
  index: number;
  profile: ReturnType<typeof getMotionProfile>;
}) {
  const [activeTab, setActiveTab]       = useState<TabKey>("overview");
  const [activeProject, setActiveProject] = useState(0);
  const [hovered, setHovered]           = useState(false);
  const cardRef  = useRef<HTMLDivElement | null>(null);
  const hoverX   = useRef<((v: number) => void) | null>(null);
  const hoverY   = useRef<((v: number) => void) | null>(null);
  const hoverRX  = useRef<((v: number) => void) | null>(null);
  const hoverRY  = useRef<((v: number) => void) | null>(null);

  useEffect(() => {
    if (!cardRef.current || profile.coarsePointer || profile.reduced) return;
    hoverX.current  = gsap.quickTo(cardRef.current, "x",         { duration: 0.24, ease: "power2.out" }) as unknown as (v: number) => void;
    hoverY.current  = gsap.quickTo(cardRef.current, "y",         { duration: 0.24, ease: "power2.out" }) as unknown as (v: number) => void;
    hoverRX.current = gsap.quickTo(cardRef.current, "rotationX", { duration: 0.24, ease: "power2.out" }) as unknown as (v: number) => void;
    hoverRY.current = gsap.quickTo(cardRef.current, "rotationY", { duration: 0.24, ease: "power2.out" }) as unknown as (v: number) => void;
  }, [profile.coarsePointer, profile.reduced]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    setHovered(true);
    if (!hoverX.current) return;
    const b  = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - b.left)  / b.width  - 0.5;
    const py = (e.clientY - b.top)   / b.height - 0.5;
    hoverX.current(px * 5);
    hoverY.current(py * 3);
    hoverRX.current(-py * 3);
    hoverRY.current(px * 4);
  };

  const onLeave = () => {
    setHovered(false);
    hoverX.current?.(0); hoverY.current?.(0);
    hoverRX.current?.(0); hoverRY.current?.(0);
  };

  const dossierId = `DSR-${String(index + 1).padStart(3, "0")}-${m.signalId}`;

  return (
    <article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      /* KEY FIX: no translate-y offset here. overflow-hidden is on the article only. */
      className="crew-card-shell group relative rounded-[28px] border border-[#8bd8dc]/16 bg-gradient-to-b from-[#03131a]/92 via-[#041a22]/88 to-[#020c14]/95 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.95)] transition-shadow duration-500 hover:shadow-[0_36px_96px_-40px_rgba(0,0,0,0.98)]"
      style={{ ["--card-accent" as string]: m.accent }}
    >
      {/* Scanline shimmer overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[28px] opacity-0 group-hover:opacity-100 overflow-hidden"
        style={{ transition: "opacity 0.4s" }}
      >
        <div
          className="absolute left-0 right-0 h-[2px] opacity-[0.06]"
          style={{
            background: `linear-gradient(90deg, transparent, ${m.accent}, transparent)`,
            animation: "scanline 3s linear infinite",
          }}
        />
      </div>

      {/* Hover glow border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${m.accent}1a 0%, transparent 45%, ${m.accent}0d 100%)`,
          boxShadow: `inset 0 0 0 1px ${m.accent}28`,
        }}
      />

      {/* Bubble particles (decorative, pure CSS) */}
      {[12, 28, 44, 60].map((left, bi) => (
        <div
          key={bi}
          className="pointer-events-none absolute bottom-4 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            left: `${left}%`,
            width: 4 + bi,
            height: 4 + bi,
            border: `1px solid ${m.accent}40`,
            animation: `bubble-rise ${1.8 + bi * 0.4}s ease-out infinite`,
            animationDelay: `${bi * 0.3}s`,
          }}
        />
      ))}

      <div
        ref={cardRef}
        className="relative transform-gpu will-change-transform overflow-hidden rounded-[28px]"
        style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
      >
        {/* Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `radial-gradient(280px circle at 40% 15%, ${m.accent}14, transparent 65%)` }}
        />

        {/* ── HEADER ── */}
        <header className="relative border-b border-[#8bd8dc]/12 px-5 pb-5 pt-5 sm:px-6">
          {/* Top bar */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#9bb8bd]/70">{dossierId}</div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8bd8dc]/18 bg-[#021119]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#bde6e8]/80">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: m.accent, animation: "dot-pulse 2s ease-in-out infinite", color: m.accent }}
              />
              Live
            </div>
          </div>

          {/* Avatar + identity */}
          <div className="flex items-center gap-5">
            <OceanAvatar creature={m.creature} accent={m.accent} initials={m.initials} hovered={hovered} />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#7da8ae]/80">{m.college}</p>
              <h3
                className="mt-1.5 truncate text-[26px] font-semibold leading-[1.05] tracking-tight sm:text-[30px]"
                style={{
                  color: hovered ? "transparent" : "#f1fdff",
                  backgroundImage: hovered ? `linear-gradient(90deg, #f1fdff 0%, ${m.accent} 40%, #f1fdff 80%)` : undefined,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: hovered ? "text" : undefined,
                  backgroundClip: hovered ? "text" : undefined,
                  animation: hovered ? "shimmer-sweep 1.6s linear infinite" : undefined,
                  transition: "color 0.25s",
                }}
              >
                {m.name}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-[#9edce1]/85">{m.role}</p>
              {m.tagline && (
                <p className="mt-1 text-[11px] leading-relaxed text-[#bdd6da]/65">{m.tagline}</p>
              )}
            </div>
          </div>
        </header>

        {/* ── BODY ── */}
        <div className="px-5 py-4 sm:px-6">
          {/* Tab bar */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {tabs.map((tab) => (
              <TabButton
                key={tab.key}
                active={activeTab === tab.key}
                accent={m.accent}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>

          {/* Panel container — fixed height, panels are absolute */}
          <div
            className="relative overflow-hidden rounded-[20px] border border-[#8bd8dc]/10 bg-[#010e17]/80"
            style={{ minHeight: 380 }}
          >
            {/* Subtle inner grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(${m.accent} 1px, transparent 1px), linear-gradient(90deg, ${m.accent} 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative p-4 sm:p-5">
              {/* OVERVIEW */}
              <Panel active={activeTab === "overview"}>
                <SectionLabel label="Core Profile" accent={m.accent} />
                <p className="mt-3 text-[13.5px] leading-7 text-[#c8e2e6]/88">{m.about}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.interests.slice(0, 4).map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-[#8bd8dc]/16 bg-[#041a22]/60 px-3 py-1 text-[11px] text-[#c2e4e8]/86 transition-all duration-200 hover:border-[color:var(--card-accent)]/35 hover:bg-[#041a22]/90"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl border border-[#8bd8dc]/10 bg-[#03131a]/70 p-3">
                  <MiniStat label="Signal"     value={m.signalId}                          accent={m.accent} />
                  <MiniStat label="Role Class" value={m.tagline ? "Specialized" : "Active"} accent={m.accent} />
                  <MiniStat label="Projects"   value={`${m.projects.length}`}               accent={m.accent} />
                  <MiniStat label="Status"     value="Online"                               accent={m.accent} />
                </div>
              </Panel>

              {/* SKILLS */}
              <Panel active={activeTab === "skills"}>
                <SectionLabel label="Skill Cluster" accent={m.accent} />
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {m.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-[#8bd8dc]/12 bg-[#03131a]/72 px-3 py-2 text-center text-[10px] uppercase tracking-[0.15em] text-[#d7f5f7] transition-all duration-200 hover:border-[color:var(--card-accent)]/35 hover:bg-[#041a22]/90 hover:-translate-y-0.5"
                      style={{
                        animation: activeTab === "skills" ? "skill-pop 0.26s ease-out both" : undefined,
                        animationDelay: activeTab === "skills" ? `${si * 38}ms` : undefined,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Panel>

              {/* PROJECTS */}
              <Panel active={activeTab === "projects"}>
                <SectionLabel label="Classified Projects" accent={m.accent} />
                <div className="mt-3 grid gap-2">
                  {m.projects.map((project, pi) => {
                    const sel = pi === activeProject;
                    return (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => setActiveProject(pi)}
                        className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                          sel
                            ? "border-[color:var(--card-accent)]/30 bg-[#041922]/80 shadow-[0_0_16px_rgba(0,0,0,0.3)]"
                            : "border-[#8bd8dc]/10 bg-[#03131a]/50 hover:border-[#8bd8dc]/20 hover:bg-[#03131a]/70"
                        }`}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-[13px] text-[#ebfbfd]">{project.title}</span>
                          <span className="mt-0.5 block text-[10px] uppercase tracking-[0.22em] text-[#6fa0a6]">{project.status}</span>
                        </span>
                        <ChevronDown
                          className="h-4 w-4 shrink-0 text-[#9ad8de] transition-transform duration-200"
                          style={{ transform: sel ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="relative mt-3 min-h-[140px] overflow-hidden rounded-2xl border border-[#8bd8dc]/10 bg-[#03141b]/70 p-4">
                  {m.projects.map((project, pi) => (
                    <div
                      key={project.title}
                      className={`absolute inset-4 transition-all duration-200 ease-out ${
                        pi === activeProject
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <p className="text-[12.5px] leading-6 text-[#c5e0e3]/90">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[#8bd8dc]/15 bg-[#041b23]/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#c5edf0]/86"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#87aab0]">
                          <span>Mission Progress</span>
                          <span style={{ color: m.accent }}>{project.progress}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-[#011017]">
                          <div
                            className="h-full origin-left rounded-full transform-gpu transition-transform duration-700 ease-out"
                            style={{
                              transform: `scaleX(${project.progress / 100})`,
                              background: `linear-gradient(90deg, ${m.accent}, #a4e0cf)`,
                              boxShadow: `0 0 8px ${m.accent}80`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>

              {/* ACHIEVEMENTS */}
              <Panel active={activeTab === "achievements"}>
                <SectionLabel label="Notables" accent={m.accent} />
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    ...(m.highlights || []),
                    ...((m.achievements || []).map((a) => (a.year ? `${a.title} · ${a.year}` : a.title))),
                  ]
                    .slice(0, 6)
                    .map((item, ii) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 rounded-xl border border-[#8bd8dc]/12 bg-[#041922]/56 px-3 py-2.5 text-[12px] leading-relaxed text-[#c5e3e7]/90 transition-all duration-200 hover:border-[color:var(--card-accent)]/25 hover:bg-[#041922]/80"
                        style={{
                          animation: activeTab === "achievements" ? "skill-pop 0.24s ease-out both" : undefined,
                          animationDelay: activeTab === "achievements" ? `${ii * 48}ms` : undefined,
                        }}
                      >
                        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: m.accent }} />
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>
              </Panel>

              {/* CONTACT */}
              <Panel active={activeTab === "contact"}>
                <SectionLabel label="Open Channels" accent={m.accent} />
                <p className="mt-3 text-[13px] leading-6 text-[#b9d7db]/80">
                  Reach the crew through priority channels. Each signal is encrypted end-to-end.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {m.socials.map(({ icon: Icon, href, label, external }, ci) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      title={label}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-[#8bd8dc]/16 bg-[#03131a]/70 px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#d7f5f7] transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--card-accent)]/40 hover:bg-[#041a22]/90 hover:shadow-[0_6px_18px_-4px_rgba(0,0,0,0.6)]"
                      style={{
                        animation: activeTab === "contact" ? "skill-pop 0.22s ease-out both" : undefined,
                        animationDelay: activeTab === "contact" ? `${ci * 55}ms` : undefined,
                      }}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────── Ocean Avatars ─────────────────────── */
/**
 * Three distinct ocean-creature + human hybrid SVG avatars:
 *  - SR  → Anglerfish hybrid (bioluminescent lure, big eyes, fins)
 *  - AP  → Octopus hybrid (tentacle hair, sucker eyes, ink-dark palette)
 *  - AA  → Jellyfish hybrid (translucent dome head, trailing tendrils)
 */
function OceanAvatar({
  creature, accent, initials, hovered,
}: {
  creature: Member["creature"];
  accent: string;
  initials: string;
  hovered: boolean;
}) {
  return (
    <div
      className="relative h-[88px] w-[88px] shrink-0"
      style={{ animation: hovered ? "float-bob 2.8s ease-in-out infinite" : undefined }}
    >
      {/* Outer pulse ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          animation: "pulse-ring 2.6s ease-out infinite",
          background: `radial-gradient(circle, ${accent}22, transparent 68%)`,
        }}
      />
      {/* Slow orbit ring */}
      <div
        className="absolute inset-[-5px] rounded-full"
        style={{ border: `1.5px dashed ${accent}38`, animation: "orbit-cw 14s linear infinite" }}
      />
      {/* Counter-orbit dots */}
      <div
        className="absolute inset-[-9px] rounded-full"
        style={{ border: `1px dotted ${accent}20`, animation: "orbit-ccw 22s linear infinite" }}
      />

      {/* SVG creature */}
      <div
        className="absolute inset-[3px] overflow-hidden rounded-full border border-white/8"
        style={{ boxShadow: `inset 0 0 20px ${accent}22, 0 0 0 1px ${accent}18` }}
      >
        {creature === "anglerfish" && <AnglerfishSVG accent={accent} />}
        {creature === "octopus"    && <OctopusSVG    accent={accent} />}
        {creature === "jellyfish"  && <JellyfishSVG  accent={accent} />}
      </div>

      {/* Initials badge */}
      <div
        className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#8bd8dc]/20 font-mono text-[8px] font-bold"
        style={{ background: `linear-gradient(135deg, #041a22, #02080f)`, color: accent, boxShadow: `0 0 8px ${accent}40` }}
      >
        {initials}
      </div>
    </div>
  );
}

function AnglerfishSVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 82 82" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <radialGradient id="af-bg" cx="50%" cy="60%" r="65%">
          <stop offset="0%" stopColor="#051e28" />
          <stop offset="100%" stopColor="#020a10" />
        </radialGradient>
        <radialGradient id="af-body" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#1a4a5e" />
          <stop offset="100%" stopColor="#0a2535" />
        </radialGradient>
        <radialGradient id="af-eye-l" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#d6f8ff" />
          <stop offset="50%" stopColor={accent} />
          <stop offset="100%" stopColor="#001a22" />
        </radialGradient>
        <filter id="af-glow">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="82" height="82" fill="url(#af-bg)" />

      {/* Water caustics */}
      <ellipse cx="20" cy="15" rx="18" ry="6" fill={`${accent}08`} transform="rotate(-20 20 15)" />
      <ellipse cx="62" cy="10" rx="14" ry="5" fill={`${accent}06`} transform="rotate(15 62 10)" />

      {/* Body */}
      <ellipse cx="41" cy="54" rx="22" ry="16" fill="url(#af-body)" />

      {/* Pectoral fins */}
      <path d="M19 52 Q8 46 10 58 Q16 62 22 58Z" fill="#0d3345" />
      <path d="M63 52 Q74 46 72 58 Q66 62 60 58Z" fill="#0d3345" />

      {/* Dorsal fin */}
      <path d="M34 40 Q41 30 48 40" stroke="#0d3345" strokeWidth="2" fill="#0d3345" />

      {/* Neck / human torso suggestion */}
      <rect x="36" y="40" width="10" height="14" rx="4" fill="#1a4a5e" />

      {/* Head */}
      <ellipse cx="41" cy="35" rx="17" ry="16" fill="#1a5068" />

      {/* Bioluminescent lure stem */}
      <path
        d="M41 19 Q38 10 44 6"
        stroke={`${accent}cc`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        style={{ animation: "glow-lure 1.8s ease-in-out infinite" }}
      />
      {/* Lure bulb */}
      <circle
        cx="44"
        cy="5"
        r="3.5"
        fill={accent}
        filter="url(#af-glow)"
        style={{ animation: "glow-lure 1.8s ease-in-out infinite" }}
      />
      <circle cx="44" cy="5" r="1.5" fill="white" opacity="0.9" />

      {/* Big bioluminescent eyes */}
      <ellipse cx="33" cy="33" rx="5.5" ry="6" fill="url(#af-eye-l)" />
      <ellipse cx="49" cy="33" rx="5.5" ry="6" fill="url(#af-eye-l)" />
      <circle cx="33" cy="33" r="3" fill="#001a22" />
      <circle cx="49" cy="33" r="3" fill="#001a22" />
      <circle cx="31.5" cy="31.5" r="1.2" fill="white" opacity="0.9" />
      <circle cx="47.5" cy="31.5" r="1.2" fill="white" opacity="0.9" />
      {/* Eye glow rings */}
      <ellipse cx="33" cy="33" rx="6.5" ry="7" fill="none" stroke={`${accent}40`} strokeWidth="1" />
      <ellipse cx="49" cy="33" rx="6.5" ry="7" fill="none" stroke={`${accent}40`} strokeWidth="1" />

      {/* Fang mouth */}
      <path d="M35 44 Q41 48 47 44" stroke="#0a2535" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="37" y1="44" x2="36" y2="47" stroke={`${accent}aa`} strokeWidth="1.2" />
      <line x1="41" y1="45" x2="41" y2="48" stroke={`${accent}aa`} strokeWidth="1.2" />
      <line x1="45" y1="44" x2="46" y2="47" stroke={`${accent}aa`} strokeWidth="1.2" />

      {/* Scale texture */}
      {[28, 34, 40, 46, 52, 31, 37, 43, 49].map((cx, i) => (
        <circle key={i} cx={cx} cy={50 + (i % 2) * 4} r="1" fill={`${accent}18`} />
      ))}
    </svg>
  );
}

function OctopusSVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 82 82" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <radialGradient id="oct-bg" cx="50%" cy="55%" r="65%">
          <stop offset="0%" stopColor="#0a1a2a" />
          <stop offset="100%" stopColor="#020810" />
        </radialGradient>
        <radialGradient id="oct-body" cx="45%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#2a4a7a" />
          <stop offset="100%" stopColor="#112040" />
        </radialGradient>
      </defs>

      <rect width="82" height="82" fill="url(#oct-bg)" />

      {/* Ink cloud wisps */}
      <ellipse cx="15" cy="68" rx="12" ry="5" fill="#091524" />
      <ellipse cx="65" cy="72" rx="9"  ry="4" fill="#091524" />

      {/* Tentacle hair (8 tentacles arching upward from head) */}
      {[
        "M29 20 Q18 8 22 2",  "M33 17 Q26 4  30 -1",
        "M38 16 Q36 2  40 -2", "M43 16 Q44 2  42 -2",
        "M48 17 Q52 4  50 -1", "M53 20 Q60 8  58 2",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={i % 2 === 0 ? `${accent}cc` : `${accent}88`}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          style={{
            animation: `tentacle-wave ${1.2 + i * 0.2}s ease-in-out infinite alternate`,
            transformOrigin: "center bottom",
          }}
        />
      ))}

      {/* Sucker dots on tentacles */}
      {[[22, 14], [30, 8], [38, 12], [44, 12], [52, 8], [58, 14]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.4" fill="none" stroke={`${accent}88`} strokeWidth="0.8" />
      ))}

      {/* Mantle (dome head) */}
      <ellipse cx="41" cy="22" rx="16" ry="13" fill="url(#oct-body)" />

      {/* Human face area */}
      <ellipse cx="41" cy="34" rx="15" ry="14" fill="#1e3a60" />

      {/* Body / shoulders */}
      <rect x="29" y="44" width="24" height="10" rx="5" fill="#1e3a60" />
      <ellipse cx="41" cy="60" rx="22" ry="14" fill="#142a4a" />

      {/* Lower tentacles */}
      {["M28 62 Q18 72 22 80", "M35 65 Q30 76 32 82", "M41 66 Q41 78 41 83", "M47 65 Q52 76 50 82", "M54 62 Q64 72 60 80"].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={`${accent}${i % 2 === 0 ? "cc" : "88"}`}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{ animation: `tentacle-wave ${1.4 + i * 0.18}s ease-in-out infinite alternate`, transformOrigin: "center top" }}
        />
      ))}

      {/* Eyes — large, pupil-less octopus style */}
      <ellipse cx="34" cy="33" rx="5"   ry="5.5"  fill="#0a1525" />
      <ellipse cx="48" cy="33" rx="5"   ry="5.5"  fill="#0a1525" />
      <ellipse cx="34" cy="33" rx="4"   ry="4.5"  fill={accent} opacity="0.25" />
      <ellipse cx="48" cy="33" rx="4"   ry="4.5"  fill={accent} opacity="0.25" />
      {/* Horizontal pupil slit */}
      <rect x="31.5" y="32.5" width="5" height="2" rx="1" fill="#010a14" />
      <rect x="45.5" y="32.5" width="5" height="2" rx="1" fill="#010a14" />
      <circle cx="32.5" cy="31.5" r="1" fill="white" opacity="0.7" />
      <circle cx="46.5" cy="31.5" r="1" fill="white" opacity="0.7" />
      {/* Eye rings */}
      <ellipse cx="34" cy="33" rx="6" ry="6.5" fill="none" stroke={`${accent}30`} strokeWidth="1" />
      <ellipse cx="48" cy="33" rx="6" ry="6.5" fill="none" stroke={`${accent}30`} strokeWidth="1" />

      {/* Beak-like mouth */}
      <path d="M37 41 Q41 44 45 41" stroke={`${accent}88`} strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Chromatophore spots */}
      {[[26, 48], [38, 50], [50, 48], [32, 56], [44, 57], [54, 55]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill={`${accent}${i % 2 === 0 ? "28" : "18"}`} />
      ))}
    </svg>
  );
}

function JellyfishSVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 82 82" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <defs>
        <radialGradient id="jf-bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#041820" />
          <stop offset="100%" stopColor="#010810" />
        </radialGradient>
        <radialGradient id="jf-bell" cx="50%" cy="38%" r="70%">
          <stop offset="0%" stopColor={`${accent}55`} />
          <stop offset="60%" stopColor={`${accent}22`} />
          <stop offset="100%" stopColor={`${accent}08`} />
        </radialGradient>
        <radialGradient id="jf-inner" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={`${accent}40`} />
          <stop offset="100%" stopColor={`${accent}10`} />
        </radialGradient>
        <filter id="jf-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <rect width="82" height="82" fill="url(#jf-bg)" />

      {/* Floating particles */}
      {[[14, 20], [66, 15], [10, 55], [70, 60], [35, 8]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={1 + (i % 2)} fill={`${accent}30`} />
      ))}

      {/* Bell / dome — the jellyfish head */}
      <ellipse
        cx="41" cy="28"
        rx="22" ry="16"
        fill="url(#jf-bell)"
        style={{ animation: "jelly-pulse 2.2s ease-in-out infinite" }}
      />
      {/* Translucent inner bell */}
      <ellipse cx="41" cy="28" rx="16" ry="11" fill="url(#jf-inner)" opacity="0.7" />
      {/* Bell highlight */}
      <ellipse cx="36" cy="23" rx="8" ry="5" fill="white" opacity="0.08" transform="rotate(-15 36 23)" />

      {/* Bell rim */}
      <path
        d="M19 32 Q25 38 30 34 Q35 40 41 36 Q47 40 52 34 Q57 38 63 32"
        stroke={`${accent}60`}
        strokeWidth="1.2"
        fill="none"
      />

      {/* Human face embedded in bell */}
      <ellipse cx="41" cy="30" rx="12" ry="12" fill={`${accent}15`} />

      {/* Eyes — glowing orbs */}
      <circle cx="35.5" cy="27" r="4"   fill="#041018" />
      <circle cx="46.5" cy="27" r="4"   fill="#041018" />
      <circle cx="35.5" cy="27" r="3"   fill={accent} opacity="0.35" />
      <circle cx="46.5" cy="27" r="3"   fill={accent} opacity="0.35" />
      <circle cx="35.5" cy="27" r="1.5" fill={accent} filter="url(#jf-glow)" opacity="0.9" />
      <circle cx="46.5" cy="27" r="1.5" fill={accent} filter="url(#jf-glow)" opacity="0.9" />
      <circle cx="34.2" cy="25.8" r="0.9" fill="white" opacity="0.8" />
      <circle cx="45.2" cy="25.8" r="0.9" fill="white" opacity="0.8" />

      {/* Gentle smile */}
      <path d="M37 33.5 Q41 36.5 45 33.5" stroke={`${accent}70`} strokeWidth="1.3" fill="none" strokeLinecap="round" />

      {/* Oral arms (thicker inner tentacles) */}
      {[
        { d: "M36 44 Q32 54 30 66 Q29 74 32 80", delay: "0s" },
        { d: "M39 45 Q37 56 37 68 Q37 76 39 82", delay: "0.3s" },
        { d: "M41 45 Q41 57 41 69 Q41 77 41 83", delay: "0.6s" },
        { d: "M43 45 Q45 56 45 68 Q45 76 43 82", delay: "0.9s" },
        { d: "M46 44 Q50 54 52 66 Q53 74 50 80", delay: "1.2s" },
      ].map(({ d, delay }, i) => (
        <path
          key={i}
          d={d}
          stroke={`${accent}${i === 2 ? "aa" : "66"}`}
          strokeWidth={i === 2 ? "2" : "1.4"}
          fill="none"
          strokeLinecap="round"
          style={{ animation: `tentacle-wave 1.8s ease-in-out infinite alternate`, animationDelay: delay }}
        />
      ))}

      {/* Thin trailing tentacles */}
      {[
        "M30 40 Q22 52 20 64 Q19 72 22 78",
        "M52 40 Q60 52 62 64 Q63 72 60 78",
        "M25 38 Q15 50 14 62",
        "M57 38 Q67 50 68 62",
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={`${accent}35`}
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
          style={{ animation: `tentacle-wave ${2 + i * 0.25}s ease-in-out infinite alternate`, animationDelay: `${i * 0.2}s` }}
        />
      ))}

      {/* Bioluminescent spots on bell */}
      {[[33, 20], [41, 18], [49, 20], [37, 24], [45, 24]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.2" fill={accent} opacity={0.3 + i * 0.08} filter="url(#jf-glow)" />
      ))}
    </svg>
  );
}

/* ───────────────────── Shared sub-components ──────────────── */
function Panel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`transition-all duration-200 ease-out ${
        active
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none absolute inset-0 translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function TabButton({
  active, accent, onClick, children,
}: {
  active: boolean; accent: string; onClick: () => void; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${
        active
          ? "border-transparent text-[#04151c] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.4)]"
          : "border-[#8bd8dc]/12 bg-[#03131a]/60 text-[#c3dadd]/75 hover:-translate-y-0.5 hover:border-[#8bd8dc]/25 hover:text-white"
      }`}
      style={active ? { background: `linear-gradient(135deg, ${accent}, #a4e0cf)` } : undefined}
    >
      {children}
    </button>
  );
}

function SectionLabel({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: accent }}>
      <span className="h-px w-8" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      {label}
      <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${accent}30)` }} />
    </div>
  );
}

function MiniStat({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#8bd8dc]/10 bg-[#041922]/44 px-3 py-2 transition-all duration-200 hover:border-[color:var(--card-accent)]/20 hover:bg-[#041922]/70">
      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#7aa0a6]">{label}</span>
      <span className="text-[12px] font-medium text-[#ebfbfd]" style={{ textShadow: `0 0 10px ${accent}18` }}>
        {value}
      </span>
    </div>
  );
}