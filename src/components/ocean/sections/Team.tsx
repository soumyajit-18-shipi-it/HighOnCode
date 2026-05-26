import { useState } from "react";
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
  about: string;
  skills: string[];
  interests: string[];
  projects: string[];
  extras: { label: string; items: string[] }[];
  hobbies: string[];
  socials: { icon: typeof Github; href: string; label: string }[];
};

const team: Member[] = [
  {
    name: "Soumyajit Rout",
    initials: "SR",
    college: "BITS Pilani",
    role: "Frontend Developer & AI Enthusiast",
    accent: "#00D9FF",
    accentLabel: "Neon Cyan",
    about:
      "Computer Science undergraduate building scalable interfaces, AI systems, and software products that quietly do a lot.",
    skills: ["React", "Next.js", "JavaScript", "GSAP", "SASS", "Firebase", "SQL", "Python", "Java", "C"],
    interests: ["AI Engineering", "Full Stack", "Cloud Computing", "System Design"],
    projects: [
      "BOSM 2025 Website",
      "Student Union Web Portal",
      "Inspired Karters Website",
      "Futures Analysis Project",
      "UPPAAL Traffic System",
    ],
    extras: [
      {
        label: "Leadership",
        items: ["Student Union Technical Team", "President · Utkal Samaj", "Project Lead · Nirmaan"],
      },
    ],
    hobbies: ["Building interfaces", "Community initiatives", "Problem solving"],
    socials: [
      { icon: Github, href: "#", label: "GitHub" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Mail, href: "#", label: "Email" },
    ],
  },
  {
    name: "Abhinav Prajapati",
    initials: "AP",
    college: "BITS Pilani",
    role: "Software Engineering & Security Enthusiast",
    accent: "#5EF2FF",
    accentLabel: "Electric Aqua",
    about:
      "Dual degree student fascinated by problem solving, product development, accessibility, and practical software systems.",
    skills: ["C", "Java", "Python", "MySQL", "Git", "HTML"],
    interests: ["Full Stack Development", "Cybersecurity", "DSA"],
    projects: ["Hotel Management System", "UAV / Drone Assembly Project"],
    extras: [
      {
        label: "Certifications",
        items: ["Cyber Security Essentials — Macquarie University"],
      },
    ],
    hobbies: ["Exploring systems", "Security concepts", "Engineering projects"],
    socials: [
      { icon: Github, href: "#", label: "GitHub" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Mail, href: "#", label: "Email" },
    ],
  },
  {
    name: "Aayush Agrawal",
    initials: "AA",
    college: "BITS Pilani",
    role: "AI & Machine Learning Developer",
    accent: "#7FFFD4",
    accentLabel: "Bioluminescent Teal",
    about:
      "Computer Science student focused on intelligent systems, blockchain, machine learning, and real-world AI applications.",
    skills: ["Python", "Java", "Solidity", "PyTorch", "NumPy", "DBMS", "DSA"],
    interests: ["AI", "Machine Learning", "Intelligent Systems", "Blockchain"],
    projects: ["Binary Digit Classifier", "Decentralized To-Do dApp"],
    extras: [
      {
        label: "Achievements",
        items: ["BITSAT 342/390", "JEE Mains 99.48 percentile", "MHT-CET 99.92 percentile"],
      },
    ],
    hobbies: ["AI experimentation", "Problem solving", "Blockchain exploration"],
    socials: [
      { icon: Github, href: "#", label: "GitHub" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Mail, href: "#", label: "Email" },
    ],
  },
];

export function Team() {
  return (
    <SectionShell id="team" eyebrow="02 / The Crew" title="Three Signals Beneath the Surface">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      style={{
        transform: `perspective(1000px) rotateY(${pos.x * 8}deg) rotateX(${-pos.y * 8}deg)`,
        transition: "transform 200ms ease-out",
      }}
      className="group relative h-full overflow-hidden rounded-3xl glass neon-hover p-6"
    >
      {/* accent glow */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full opacity-50 transition group-hover:opacity-90"
        style={{ background: `radial-gradient(circle, ${m.accent}55, transparent 60%)`, filter: "blur(30px)" }}
      />
      {/* moving spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${50 + pos.x * 100}% ${50 + pos.y * 100}%, ${m.accent}22, transparent 50%)`,
        }}
      />

      {/* avatar + identity */}
      <div className="relative flex items-start gap-4">
        <Avatar initials={m.initials} accent={m.accent} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: m.accent, boxShadow: `0 0 10px ${m.accent}` }} />
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: m.accent }}>
              {m.accentLabel}
            </span>
          </div>
          <h3 className="mt-1 truncate font-display text-xl font-bold text-white">{m.name}</h3>
          <p className="text-xs text-[#9EE9F2]/80">{m.college}</p>
          <p className="mt-1 text-xs font-semibold" style={{ color: m.accent }}>{m.role}</p>
        </div>
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-[#C7EEF4]/85">{m.about}</p>

      <div className="relative mt-5 space-y-4 text-xs">
        <Group label="Skills">
          <div className="flex flex-wrap gap-1.5">
            {m.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#5EF2FF]/20 bg-[#041C24]/60 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#B6EAF2] transition hover:border-[color:var(--a)] hover:text-white"
                style={{ ["--a" as any]: m.accent }}
              >
                {s}
              </span>
            ))}
          </div>
        </Group>
        <Group label="Interests">
          <p className="text-[#C7EEF4]/85">{m.interests.join(" · ")}</p>
        </Group>
        <Group label="Projects">
          <ul className="space-y-1 text-[#C7EEF4]/85">
            {m.projects.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 rounded-full" style={{ background: m.accent }} />
                {p}
              </li>
            ))}
          </ul>
        </Group>
        {m.extras.map((e) => (
          <Group key={e.label} label={e.label}>
            <ul className="space-y-1 text-[#C7EEF4]/85">
              {e.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-3 w-3 shrink-0" style={{ color: m.accent }} />
                  {it}
                </li>
              ))}
            </ul>
          </Group>
        ))}
        <Group label="Hobbies">
          <p className="text-[#C7EEF4]/85">{m.hobbies.join(" · ")}</p>
        </Group>
      </div>

      <div className="relative mt-6 flex items-center justify-between border-t border-[#5EF2FF]/15 pt-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#5EF2FF]/70">Signal</span>
        <div className="flex items-center gap-2">
          {m.socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-8 w-8 place-items-center rounded-full border border-[#5EF2FF]/20 bg-[#041C24]/60 text-[#B6EAF2] transition hover:scale-110 hover:text-white"
              style={{ boxShadow: `inset 0 0 0 0 ${m.accent}` }}
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-[9px] uppercase tracking-[0.35em] text-[#5EF2FF]/60">{label}</div>
      {children}
    </div>
  );
}

function Avatar({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div className="relative h-16 w-16 shrink-0">
      <div className="absolute inset-0 animate-spin-slow rounded-full"
           style={{ background: `conic-gradient(from 0deg, transparent, ${accent}, transparent 60%)`, filter: "blur(2px)" }} />
      <div className="absolute inset-[2px] grid place-items-center rounded-full bg-[#041C24]" style={{ boxShadow: `inset 0 0 20px ${accent}30` }}>
        <span className="font-display text-lg font-bold text-white" style={{ textShadow: `0 0 12px ${accent}` }}>
          {initials}
        </span>
      </div>
    </div>
  );
}