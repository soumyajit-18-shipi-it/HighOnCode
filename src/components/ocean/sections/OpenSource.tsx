import { Reveal } from "../Reveal";
import { SectionShell } from "./Identity";
import { Github, Star, GitFork } from "lucide-react";

const repos = [
  { name: "facebook/react", desc: "The library that started our journey.", lang: "JavaScript", stars: "230k", forks: "47k" },
  { name: "vercel/next.js", desc: "Full-stack React in production.", lang: "TypeScript", stars: "126k", forks: "27k" },
  { name: "pytorch/pytorch", desc: "Tensors and dynamic neural networks.", lang: "Python", stars: "84k", forks: "23k" },
  { name: "torvalds/linux", desc: "Where all good engineering descends.", lang: "C", stars: "180k", forks: "55k" },
  { name: "firebase/firebase-js-sdk", desc: "Realtime backend in your pocket.", lang: "TypeScript", stars: "5k", forks: "1.6k" },
  { name: "openai/openai-cookbook", desc: "Recipes for the AI ecosystem.", lang: "Python", stars: "60k", forks: "9k" },
  { name: "ethereum/solidity", desc: "Smart contracts for a curious crew.", lang: "C++", stars: "23k", forks: "6k" },
  { name: "vitejs/vite", desc: "Frontend tooling that finally feels fast.", lang: "TypeScript", stars: "70k", forks: "6k" },
];

const langColor: Record<string, string> = {
  TypeScript: "#5EF2FF",
  JavaScript: "#7FFFD4",
  Python: "#00D9FF",
  C: "#9EE9F2",
  "C++": "#7FFFD4",
};

export function OpenSource() {
  return (
    <SectionShell id="opensource" eyebrow="06 / Open Source" title="Currents We Want to Swim With">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.04}>
            <div className="group relative h-full overflow-hidden rounded-2xl glass neon-hover p-5">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-40 transition group-hover:opacity-80"
                   style={{ background: "radial-gradient(circle, rgba(0,217,255,0.4), transparent 60%)", filter: "blur(20px)" }} />
              <div className="relative flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#5EF2FF]/70">
                <Github className="h-3.5 w-3.5" />
                Public Repo
              </div>
              <h3 className="relative mt-2 truncate font-mono text-sm text-white">{r.name}</h3>
              <p className="relative mt-2 text-xs leading-relaxed text-[#C7EEF4]/85">{r.desc}</p>
              <div className="relative mt-5 flex items-center justify-between text-[11px] text-[#9EE9F2]/80">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: langColor[r.lang] ?? "#7FFFD4", boxShadow: `0 0 8px ${langColor[r.lang] ?? "#7FFFD4"}` }} />
                  {r.lang}
                </span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 text-[#7FFFD4]" /> {r.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="h-3 w-3 text-[#5EF2FF]" /> {r.forks}</span>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}