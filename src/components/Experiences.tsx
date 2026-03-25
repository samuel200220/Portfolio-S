"use client";

import { motion } from "framer-motion";
import { Briefcase, Zap, HeartPulse, Sparkles } from "lucide-react";

const experiences = [
  {
    type: "Stage",
    role: "Developpeur Fullstack",
    company: "Projet Academique",
    date: "2025",
    desc: "Developpement d'un calculateur de tarifs urbains (Fare Calculator).",
    icon: Briefcase,
  },
  {
    type: "Hackathon",
    role: "IA Sante",
    company: "Hackathon 2025",
    date: "2025",
    desc: "Chatbot medical, gestion des patients et prevision de stock de sang.",
    icon: HeartPulse,
  },
  {
    type: "Hackathon",
    role: "CIDP Hackathon",
    company: "Innovation Africaine",
    date: "2025",
    desc: "Plateforme sociale pour les ONG africaines.",
    icon: Zap,
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="relative bg-zinc-950/30 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(0,243,255,0.08),transparent_26%),radial-gradient(circle_at_85%_70%,rgba(188,19,254,0.08),transparent_22%)]" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-neon-blue/80">
            <Sparkles size={14} /> Journey
          </div>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight glow-text md:text-4xl">Experiences & Hackathons</h2>
          <p className="mx-auto max-w-2xl text-zinc-500">Quelques experiences structurantes qui ont renforce ma pratique produit, data et execution technique.</p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-5 md:grid-cols-[72px_1fr]"
            >
              <div className="relative flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -6 }}
                  className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-neon-blue/20 bg-zinc-900 text-neon-blue shadow-[0_0_24px_rgba(0,243,255,0.16)]"
                >
                  <exp.icon size={24} />
                </motion.div>
                {idx !== experiences.length - 1 && <div className="absolute top-14 h-full w-px bg-gradient-to-b from-neon-blue/35 to-transparent" />}
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-neon-blue">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{exp.date}</span>
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-neon-blue">{exp.role}</h3>
                  <p className="mb-4 text-sm font-medium text-zinc-400">{exp.company}</p>
                  <p className="border-l-2 border-neon-blue/20 pl-4 text-sm italic leading-relaxed text-zinc-500">
                    &quot;{exp.desc}&quot;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
