import { useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";

type Member = {
  name: string;
  initials: string;
  college: string;
  role: string;
  accent: string;
  accentLabel: string;
  signalId: string;
  badge: string;
  about: string;
  skills: string[];
  interests: string[];
  projects: string[];
  extras: { label: string; items: string[] }[];
  hobbies: string[];
  socials: { icon: typeof Github; href: string; label: string; external?: boolean }[];
};

const CARD_ACCENT = "#5EF2FF";
const CARD_ACCENT_LABEL = "Electric Aqua";

const team: Member[] = [
  {
    name: "Soumyajit Rout",
    initials: "SR",
    college: "BITS Pilani",
    role: "Frontend Developer & AI Systems Enthusiast",
    accent: CARD_ACCENT,
    accentLabel: CARD_ACCENT_LABEL,
    signalId: "SR",
    badge: "Strongest Cyan Glow",
    about:
      "Computer Science undergraduate passionate about frontend engineering, scalable web systems, and intelligent digital experiences. Experienced in production-oriented applications using React, Next.js, GSAP, Firebase, and modern frontend architecture practices.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "GSAP", "SASS", "Firebase", "REST APIs", "SQL", "Python", "Java", "C"],
    interests: ["AI Engineering", "Cloud Computing", "System Design", "Full Stack Development", "Scalable Web Systems"],
    projects: [
      "BOSM 2025 Website",
      "Student Union Web Portal",
      "Inspired Karters Platform",
      "Futures Analysis System",
      "UPPAAL Traffic Modelling",
    ],
    extras: [
      {
        label: "Leadership & Roles",
        items: ["Student Union Technical Team", "President · Utkal Samaj", "Event Coordinator · Nirmaan"],
      },
    ],
    hobbies: ["Building interfaces", "Community initiatives", "Problem solving"],
    socials: [
      { icon: Mail, href: "mailto:f20240002@pilani.bits-pilani.ac.in", label: "Email", external: true },
      { icon: Linkedin, href: "https://www.linkedin.com/in/soumyajit-rout-4a5aa1337", label: "LinkedIn", external: true },
      { icon: Github, href: "https://github.com/soumyajit-18-shipi-it", label: "GitHub", external: true },
    ],
  },
  {
    name: "Abhinav Prajapati",
    initials: "AP",
    college: "BITS Pilani",
    role: "Software Engineering & Security Enthusiast",
    accent: CARD_ACCENT,
    accentLabel: CARD_ACCENT_LABEL,
    signalId: "AP",
    badge: "Tactical Systems Glow",
    about:
      "Dual degree student focused on software engineering, accessibility-driven systems, and practical product development. Interested in building reliable systems while exploring cybersecurity and full-stack technologies.",
    skills: ["C", "Java", "Python", "HTML", "MySQL", "Git", "GitHub"],
    interests: ["Cybersecurity", "Full Stack Development", "DSA", "Software Systems"],
    projects: ["Hotel Management System", "UAV / Drone Assembly Project"],
    extras: [
      {
        label: "Certification",
        items: ["Cyber Security Essentials — Macquarie University"],
      },
    ],
    hobbies: ["Exploring systems", "Security concepts", "Engineering projects"],
    socials: [
      { icon: Mail, href: "mailto:f20240865@pilani.bits-pilani.ac.in", label: "Email", external: true },
      { icon: Linkedin, href: "https://www.linkedin.com/in/abhinavp0310/", label: "LinkedIn", external: true },
      { icon: Github, href: "https://github.com/abhinavpraj", label: "GitHub", external: true },
    ],
  },
  {
    name: "Aayush Agrawal",
    initials: "AA",
    college: "BITS Pilani",
    role: "AI & Machine Learning Developer",
    accent: CARD_ACCENT,
    accentLabel: CARD_ACCENT_LABEL,
    signalId: "AA",
    badge: "Neural Lab Aura",
    about:
      "Computer Science student focused on intelligent systems, machine learning, blockchain technologies, and AI-driven software development. Passionate about combining analytical thinking with practical engineering to build impactful systems.",
    skills: ["Python", "Java", "Solidity", "PyTorch", "NumPy", "DBMS", "DSA", "Linux"],
    interests: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "MLOps", "Blockchain", "Agentic AI Systems"],
    projects: ["Binary Digits Neural Network", "Decentralized To-Do dApp", "Blissful Bites × Team Unstoppable"],
    extras: [
      {
        label: "Achievements",
        items: ["BITSAT 342/390", "JEE Mains 99.48 percentile", "MHT-CET 99.92 percentile", "IMO Gold Medalist", "NSO Gold Medalist"],
      },
    ],
    hobbies: ["AI experimentation", "Problem solving", "Blockchain exploration"],
    socials: [
      { icon: Mail, href: "mailto:f20240543@pilani.bits-pilani.ac.in", label: "Email", external: true },
      { icon: Linkedin, href: "https://linkedin.com/in/aayush777agrawal", label: "LinkedIn", external: true },
      { icon: Github, href: "https://github.com/AayDexterous", label: "GitHub", external: true },
    ],
  },
];

export function Team() {
  return (
    <SectionShell id="team" eyebrow="02 / The Crew" title="Three Signals Beneath the Surface">
      <div className="grid gap-6 xl:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.1}>
            <MemberCard m={m} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function MemberCard({ m }: { m: Member }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setPos({ x: px, y: py });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -6 }}
      style={{
        transform: `perspective(1200px) rotateY(${pos.x * 8}deg) rotateX(${-pos.y * 8}deg) translateY(0)`,
        transition: "transform 200ms ease-out",
      }}
      className="group relative h-full overflow-hidden rounded-[28px] border border-[#5EF2FF]/15 bg-[#04151C]/70 p-6 shadow-[0_0_0_1px_rgba(94,242,255,0.04),0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-60 transition duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(145deg, rgba(0,217,255,0.08), transparent 28%, rgba(127,255,212,0.06) 70%, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-55 transition duration-700 group-hover:opacity-90"
        style={{ background: `radial-gradient(circle, ${m.accent}40, transparent 65%)`, filter: "blur(34px)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${50 + pos.x * 100}% ${42 + pos.y * 100}%, ${m.accent}22, transparent 50%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5EF2FF]/80 to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5EF2FF]/20 to-transparent" />

      <div className="pointer-events-none absolute left-4 top-4 text-[96px] font-black leading-none tracking-tight text-white/5 select-none">
        {m.initials}
      </div>
      <div className="relative flex items-start gap-4">
        <Avatar initials={m.initials} accent={m.accent} />
        <div className="min-w-0 flex-1 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5EF2FF]/20 bg-[#041C24]/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-[#9EE9F2]">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: m.accent, boxShadow: `0 0 10px ${m.accent}` }} />
              {m.signalId}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: m.accent }}>
              {m.accentLabel}
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,217,255,0.12)]">
            {m.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#9EE9F2]/75">{m.college}</p>
          <p className="mt-3 max-w-md text-sm font-medium leading-relaxed" style={{ color: m.accent }}>
            {m.role}
          </p>
        </div>
      </div>

      <div className="relative mt-5 space-y-4">
        <p className="max-w-prose text-sm leading-relaxed text-[#C7EEF4]/90">{m.about}</p>

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5EF2FF]/55 to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#5EF2FF]/60">Core Signal</span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#5EF2FF]/55 to-transparent" />
        </div>

        <div className="grid gap-4">
          <Group label="Skills">
            <div className="flex flex-wrap gap-2">
              {m.skills.map((s) => (
                <Pill key={s} label={s} accent={m.accent} />
              ))}
            </div>
          </Group>

          <Group label="Core Interests">
            <div className="flex flex-wrap gap-2">
              {m.interests.map((interest) => (
                <Pill key={interest} label={interest} accent={m.accent} tone="subtle" />
              ))}
            </div>
          </Group>

          <Group label="Featured Projects">
            <ul className="grid gap-2 text-[#C7EEF4]/90">
              {m.projects.map((project) => (
                <li
                  key={project}
                  className="group/project flex items-start gap-2 rounded-xl border border-[#5EF2FF]/10 bg-[#041C24]/35 px-3 py-2 transition duration-300 hover:border-[color:var(--a)] hover:bg-[#061A22]/75"
                  style={{ ["--a" as string]: m.accent }}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: m.accent, boxShadow: `0 0 8px ${m.accent}` }} />
                  <span className="text-sm leading-relaxed">{project}</span>
                </li>
              ))}
            </ul>
          </Group>

          {m.extras.map((extra) => (
            <Group key={extra.label} label={extra.label}>
              <ul className="grid gap-2 text-[#C7EEF4]/90">
                {extra.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-xl border border-[#5EF2FF]/10 bg-[#041C24]/35 px-3 py-2">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: m.accent }} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Group>
          ))}

          <Group label="Hobbies">
            <div className="flex flex-wrap gap-2">
              {m.hobbies.map((hobby) => (
                <Pill key={hobby} label={hobby} accent={m.accent} tone="subtle" />
              ))}
            </div>
          </Group>
        </div>
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-[#5EF2FF]/15 pt-4">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[#5EF2FF]/70">Signal</span>
        <div className="flex items-center gap-2">
          {m.socials.map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group grid h-10 w-10 place-items-center rounded-full border border-[#5EF2FF]/25 bg-[#041C24]/70 text-[#B6EAF2] transition duration-300 hover:scale-110 hover:border-[color:var(--a)] hover:text-white hover:shadow-[0_0_24px_var(--a)]"
              style={{ ["--a" as string]: m.accent }}
            >
              <Icon className="h-4 w-4 transition duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#5EF2FF]/65">
        <span className="h-px w-8 bg-gradient-to-r from-[#5EF2FF]/70 to-transparent" />
        {label}
      </div>
      {children}
    </div>
  );
}

function Pill({ label, accent, tone = "default" }: { label: string; accent: string; tone?: "default" | "subtle" }) {
  return (
      <span
        className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_var(--a)] ${
          tone === "subtle"
            ? "border-[#5EF2FF]/12 bg-[#041C24]/35 text-[#B6EAF2]/90 hover:text-white"
            : "border-[color:var(--a)]/35 bg-[#041C24]/50 text-white hover:border-[color:var(--a)]"
        }`}
        style={{ ["--a" as string]: accent, backgroundColor: tone === "subtle" ? undefined : `${accent}1F` }}
      >
      {label}
    </span>
  );
}

function Avatar({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div className="relative h-20 w-20 shrink-0">
      <div
        className="absolute inset-0 animate-spin-slow rounded-full"
        style={{ background: `conic-gradient(from 0deg, transparent, ${accent}, transparent 60%)`, filter: "blur(2px)" }}
      />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div
        className="absolute inset-[2px] grid place-items-center rounded-full border border-white/5 bg-[#041C24]"
        style={{ boxShadow: `inset 0 0 24px ${accent}30, 0 0 24px ${accent}18` }}
      >
        <span className="font-display text-xl font-bold text-white" style={{ textShadow: `0 0 14px ${accent}` }}>
          {initials}
        </span>
      </div>
    </div>
  );
}