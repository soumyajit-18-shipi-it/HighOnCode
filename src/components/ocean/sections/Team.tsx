import { useEffect, useRef, useState, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  stack: string[];
  status: string;
  progress: number;
};

type Member = {
  name: string;
  initials: string;
  college: string;
  role: string;
  accent: string;
  accentLabel: string;
  signalId: string;
  about: string;
  skills: string[];
  interests: string[];
  projects: Project[];
  highlightsLabel: string;
  highlights: string[];
  hobbies: string[];
  socials: { icon: typeof Github; href: string; label: string; external?: boolean }[];
};

const team: Member[] = [
  {
    name: "Soumyajit Rout",
    initials: "SR",
    college: "BITS Pilani",
    role: "Frontend Developer & AI Systems Enthusiast",
    accent: "#5EF2FF",
    accentLabel: "Neon Cyan",
    signalId: "SR",
    about:
      "Computer Science undergraduate passionate about frontend engineering, scalable web systems, and intelligent digital experiences. Experienced in building production-oriented applications using React, Next.js, GSAP, Firebase, and modern frontend architecture practices.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "GSAP", "SASS", "Firebase", "REST APIs", "SQL", "Python", "Java", "C"],
    interests: ["AI Engineering", "Cloud Computing", "System Design", "Full Stack Development", "Scalable Web Systems"],
    projects: [
      {
        title: "BOSM 2025 Website",
        description:
          "Developed and deployed the official BOSM Sports Fest platform using Next.js, TypeScript, GSAP, and SASS. Built scalable participant registration workflows supporting 1500+ users while implementing responsive UI systems and smooth interactive animations.",
        stack: ["Next.js", "TypeScript", "GSAP", "SASS"],
        status: "Shipped",
        progress: 100,
      },
      {
        title: "Student Union Web Portal",
        description:
          "Revamped the BITS Pilani Student Union platform with improved accessibility, Firebase authentication, REST API integration, and scalable frontend modules for student-facing services.",
        stack: ["Firebase", "REST APIs", "Accessibility", "Frontend Modules"],
        status: "Active",
        progress: 92,
      },
      {
        title: "Inspired Karters Website",
        description:
          "Designed and developed an interactive modern website using Next.js, GSAP, and SASS with animated interfaces, responsive layouts, and engaging user experiences.",
        stack: ["Next.js", "GSAP", "SASS"],
        status: "Shipped",
        progress: 100,
      },
      {
        title: "Futures Analysis Project",
        description:
          "Performed stock and futures market analysis using Python and yfinance, including pricing simulations, derivatives modelling, and margin call analysis.",
        stack: ["Python", "yfinance", "Simulation"],
        status: "Research",
        progress: 86,
      },
      {
        title: "UPPAAL Traffic Modelling",
        description:
          "Designed and verified a deadlock-free traffic intersection system using automata modelling in UPPAAL while validating system safety and liveness properties.",
        stack: ["UPPAAL", "Formal Methods", "Automata"],
        status: "Verified",
        progress: 94,
      },
    ],
    highlightsLabel: "Leadership",
    highlights: ["Student Union Technical Team", "President · Utkal Samaj", "Event Coordinator · Nirmaan"],
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
    accent: "#67F7E5",
    accentLabel: "Electric Aqua",
    signalId: "AP",
    about:
      "Dual degree student focused on software engineering, accessibility-driven systems, and practical product development. Interested in building reliable software systems while exploring cybersecurity and full-stack technologies.",
    skills: ["C", "Java", "Python", "HTML", "MySQL", "Git", "GitHub"],
    interests: ["Cybersecurity", "Full Stack Development", "DSA", "Software Systems"],
    projects: [
      {
        title: "Hotel Management System",
        description:
          "Developed a Python-MySQL based hotel management system for handling customer records, room management, and operational workflows through database connectivity.",
        stack: ["Python", "MySQL", "CRUD"],
        status: "Completed",
        progress: 98,
      },
      {
        title: "UAV / Drone Assembly Project",
        description:
          "Assembled and calibrated a UAV drone system for a school engineering project while learning practical hardware integration and control systems.",
        stack: ["Hardware", "Calibration", "Controls"],
        status: "Prototype",
        progress: 82,
      },
    ],
    highlightsLabel: "Certification",
    highlights: ["Cyber Security Essentials — Macquarie University"],
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
    accent: "#47EFD7",
    accentLabel: "Bioluminescent Teal",
    signalId: "AA",
    about:
      "Computer Science student focused on intelligent systems, machine learning, blockchain technologies, and AI-driven software development. Passionate about combining analytical thinking with practical engineering to build impactful systems.",
    skills: ["Python", "Java", "Solidity", "PyTorch", "NumPy", "DBMS", "DSA", "Linux"],
    interests: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "MLOps", "Blockchain", "Agentic AI Systems"],
    projects: [
      {
        title: "Blissful Bites × Team Unstoppable",
        description:
          "Co-led a cross-functional physical and digital ecosystem during APOGEE 2026 involving a responsive microsite, predictive pricing strategies, real-time inventory systems, and growth marketing operations generating INR 1.36 lakh revenue within four days.",
        stack: ["Microsite", "Pricing", "Inventory", "Growth Ops"],
        status: "Executed",
        progress: 100,
      },
      {
        title: "Binary Digits Neural Network",
        description:
          "Designed and trained a neural network pipeline using PyTorch with optimized ReLU activations, achieving 98% validation accuracy on binary digit classification datasets.",
        stack: ["PyTorch", "ReLU", "Classification"],
        status: "Trained",
        progress: 98,
      },
      {
        title: "Decentralized To-Do dApp",
        description:
          "Developed and deployed a Solidity-based decentralized application implementing secure immutable task management on the Ethereum blockchain ecosystem.",
        stack: ["Solidity", "Ethereum", "Web3"],
        status: "Deployed",
        progress: 95,
      },
    ],
    highlightsLabel: "Achievements",
    highlights: ["BITSAT 342/390", "JEE Mains 99.48 percentile", "MHT-CET 99.92 percentile", "IMO Gold Medalist", "NSO Gold Medalist"],
    hobbies: ["AI experimentation", "Problem solving", "Blockchain exploration"],
    socials: [
      { icon: Mail, href: "mailto:f20240543@pilani.bits-pilani.ac.in", label: "Email", external: true },
      { icon: Linkedin, href: "https://linkedin.com/in/aayush777agrawal", label: "LinkedIn", external: true },
      { icon: Github, href: "https://github.com/AayDexterous", label: "GitHub", external: true },
    ],
  },
];

export function Team() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".crew-intro",
        { opacity: 0, y: 18, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        },
      );

      gsap.fromTo(
        ".crew-card",
        { opacity: 0, y: 42, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionShell id="team" eyebrow="02 / The Crew" title="Three Signals Beneath the Surface">
      <div ref={sectionRef} className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[32px]">
          <div className="absolute left-1/2 top-0 h-56 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,217,255,0.18),transparent_70%)] blur-3xl" />
          <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-[#7FFFD4]/10 blur-3xl" />
          <div className="absolute -right-10 top-36 h-56 w-56 rounded-full bg-[#5EF2FF]/10 blur-3xl" />
          <motion.div
            aria-hidden
            className="absolute inset-0 opacity-20"
            animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
            transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="absolute left-0 top-12 h-px w-full bg-gradient-to-r from-transparent via-[#5EF2FF]/45 to-transparent" />
            <div className="absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-[#7FFFD4]/25 to-transparent" />
            <div className="absolute left-0 top-44 h-px w-full bg-gradient-to-r from-transparent via-[#5EF2FF]/18 to-transparent" />
          </motion.div>
          <motion.div
            aria-hidden
            className="absolute bottom-8 left-8 h-14 w-14 rounded-full border border-[#5EF2FF]/10"
            animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-8 right-8 h-10 w-10 rounded-full border border-[#7FFFD4]/10"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <div className="crew-intro relative mb-8 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-[#5EF2FF]/70">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7FFFD4] shadow-[0_0_12px_#7FFFD4]">
              <span className="absolute inset-0 rounded-full bg-[#7FFFD4]/40 animate-ping" />
            </span>
            Live Signal Archive
            <span className="rounded-full border border-[#5EF2FF]/15 bg-[#041C24]/55 px-3 py-1 text-[9px] tracking-[0.35em] text-[#9EE9F2]/80">
              SIGNAL STABLE
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#5EF2FF]/12 bg-[#04151C]/55 px-6 py-5 backdrop-blur-xl sm:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.18),transparent_55%)]" />
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5EF2FF]/12"
              animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <p className="relative text-base font-medium leading-relaxed text-[#C7EEF4]/88 sm:text-lg">
              Three engineers from BITS Pilani exploring scalable systems, intelligent software, AI-driven products,
              and modern digital experiences beneath the surface of technology.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#9EE9F2]/72">
            <span className="rounded-full border border-[#5EF2FF]/15 bg-[#041C24]/50 px-3 py-1">LIVE · highoncode/crew</span>
            <span className="rounded-full border border-[#5EF2FF]/15 bg-[#041C24]/50 px-3 py-1">SYNC STATUS · ACTIVE</span>
            <span className="rounded-full border border-[#5EF2FF]/15 bg-[#041C24]/50 px-3 py-1">UTC · Dynamic live clock</span>
          </div>

          <div className="relative overflow-hidden rounded-[24px] border border-[#5EF2FF]/10 bg-[#020B12]/60 px-4 py-3">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,217,255,0.16),transparent)] opacity-70" />
            <div className="relative flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[#B6EAF2]/80">
              <span className="h-2 w-2 rounded-full bg-[#7FFFD4] shadow-[0_0_10px_#7FFFD4]" />
              <span className="font-mono text-[#9EE9F2]/70">Mission feed</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#5EF2FF]/15 bg-[#04151C]/80 px-2 py-1 text-[#5EF2FF]/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7FFFD4] animate-pulse" />
                Knowledge shared accelerates the system
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <MemberCard m={m} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function MemberCard({ m }: { m: Member }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [openProject, setOpenProject] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setPos({ x: px, y: py });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -10 }}
      style={{
        transform: `perspective(1400px) rotateY(${pos.x * 10}deg) rotateX(${-pos.y * 10}deg) translateY(0)`,
        transition: "transform 200ms ease-out",
      }}
      className="crew-card group relative h-full overflow-hidden rounded-[30px] border border-[#5EF2FF]/14 bg-[#04151C]/72 p-6 shadow-[0_0_0_1px_rgba(94,242,255,0.04),0_20px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(127,255,212,0.08),transparent_32%)] opacity-80" />
      <div
        className="pointer-events-none absolute inset-0 rounded-[30px] opacity-60 transition duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(145deg, rgba(0,217,255,0.08), transparent 28%, rgba(127,255,212,0.06) 70%, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-55 transition duration-700 group-hover:opacity-90"
        style={{ background: `radial-gradient(circle, ${m.accent}40, transparent 65%)`, filter: "blur(34px)" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${50 + pos.x * 100}% ${42 + pos.y * 100}%, ${m.accent}22, transparent 50%)`,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5EF2FF]/80 to-transparent opacity-80"
        animate={{ opacity: [0.45, 0.95, 0.45] }}
        transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5EF2FF]/20 to-transparent" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-12 top-16 h-24 w-24 rounded-full border border-[#5EF2FF]/10"
        animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-12 right-10 h-8 w-8 rounded-full bg-[#7FFFD4]/10 blur-sm"
        animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute left-4 top-4 text-[96px] font-black leading-none tracking-tight text-white/5 select-none">
        {m.initials}
      </div>
      <div className="relative flex items-start gap-4">
        <Avatar initials={m.initials} accent={m.accent} />
        <div className="min-w-0 flex-1 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5EF2FF]/20 bg-[#041C24]/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-[#9EE9F2]">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: m.accent, boxShadow: `0 0 10px ${m.accent}` }} />
              Signal {m.signalId}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em]" style={{ color: m.accent }}>
              {m.accentLabel}
            </span>
          </div>
          <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(0,217,255,0.12)] sm:text-[2.1rem]">
            {m.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#9EE9F2]/75">{m.college}</p>
          <p className="mt-3 max-w-md text-sm font-semibold uppercase tracking-[0.22em]" style={{ color: m.accent }}>
            {m.role}
          </p>
        </div>
      </div>

      <div className="relative mt-5 space-y-4">
        <p className="max-w-prose text-sm leading-relaxed text-[#C7EEF4]/92 sm:text-[15px]">{m.about}</p>

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
            <div className="space-y-2">
              {m.projects.map((project, index) => {
                const isOpen = openProject === index;
                return (
                  <div
                    key={project.title}
                    className={`overflow-hidden rounded-2xl border transition duration-300 ${
                      isOpen
                        ? "border-[color:var(--a)]/65 bg-[#061A22]/85 shadow-[0_0_28px_rgba(0,217,255,0.18)]"
                        : "border-[#5EF2FF]/10 bg-[#041C24]/35 hover:border-[color:var(--a)]/45 hover:bg-[#061A22]/70"
                    }`}
                    style={{ ["--a" as string]: m.accent }}
                  >
                    <motion.button
                      type="button"
                      onClick={() => setOpenProject(isOpen ? null : index)}
                      whileTap={{ scale: 0.99 }}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full" style={{ background: m.accent, boxShadow: `0 0 10px ${m.accent}` }} />
                          <span className="text-sm font-medium text-white">{project.title}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#9EE9F2]/65">
                          <span>{project.status}</span>
                          <span className="h-px w-6 bg-[#5EF2FF]/20" />
                          <span>{project.progress}% complete</span>
                        </div>
                      </div>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-[#9EE9F2]">
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -8 }}
                          animate={{ height: "auto", opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -8 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="relative border-t border-[#5EF2FF]/10 px-4 py-4 text-sm leading-relaxed text-[#C7EEF4]/90">
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,255,0.12),transparent_45%)]" />
                            <div className="relative space-y-4">
                              <p>{project.description}</p>

                              <div className="flex flex-wrap gap-2">
                                {project.stack.map((stackItem) => (
                                  <span
                                    key={stackItem}
                                    className="rounded-full border border-[#5EF2FF]/12 bg-[#020B12]/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#B6EAF2]"
                                  >
                                    {stackItem}
                                  </span>
                                ))}
                              </div>

                              <div>
                                <div className="mb-1 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#9EE9F2]/65">
                                  <span>Signal progress</span>
                                  <span>{project.progress}%</span>
                                </div>
                                <div className="h-1.5 overflow-hidden rounded-full bg-[#041C24]">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${project.progress}%` }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                    className="h-full rounded-full"
                                    style={{ background: `linear-gradient(90deg, ${m.accent}, #7FFFD4)` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Group>

          {m.highlights.length > 0 && (
            <Group label={m.highlightsLabel}>
              <ul className="grid gap-2 text-[#C7EEF4]/90">
                {m.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 rounded-xl border border-[#5EF2FF]/10 bg-[#041C24]/35 px-3 py-2">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: m.accent }} />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Group>
          )}

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

      <div className="pointer-events-none absolute left-6 top-20 h-px w-24 bg-gradient-to-r from-transparent via-[#5EF2FF]/40 to-transparent" />
      <div className="pointer-events-none absolute right-8 top-28 h-px w-20 bg-gradient-to-r from-transparent via-[#7FFFD4]/30 to-transparent" />
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