"use client";

import {motion, type Variants} from "framer-motion";
import {
  Database,
  Code2,
  Terminal,
  Globe,
  MessageSquare,
  Sparkles,
  Layers3,
  BrainCircuit,
} from "lucide-react";
import {useTranslations} from "next-intl";

type Category = {
  title: string;
  description: string;
  skills: string[];
};

type Stat = {
  label: string;
  value: string;
};

const iconMap = {
  terminal: Terminal,
  globe: Globe,
  database: Database,
  messageSquare: MessageSquare,
  layers: Layers3,
  code: Code2,
  brain: BrainCircuit,
};

const categoryMeta = [
  {key: "languages", icon: iconMap.terminal, accent: "from-cyan-400/30 via-cyan-400/10 to-transparent", level: 88},
  {key: "frontend", icon: iconMap.globe, accent: "from-fuchsia-400/30 via-fuchsia-400/10 to-transparent", level: 84},
  {key: "backend", icon: iconMap.database, accent: "from-emerald-400/30 via-emerald-400/10 to-transparent", level: 82},
  {key: "soft", icon: iconMap.messageSquare, accent: "from-violet-400/30 via-violet-400/10 to-transparent", level: 91},
] as const;

const statsMeta = [iconMap.layers, iconMap.code, iconMap.brain] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {opacity: 0, y: 28},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  const t = useTranslations("Skills");
  const spotlightSkills = t.raw("spotlightSkills") as string[];
  const stats = t.raw("stats") as Stat[];
  const categories = t.raw("categories") as Record<string, Category>;

  return (
    <section id="skills" className="overflow-hidden bg-zinc-950/50 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="mb-16 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.28em] text-neon-blue/80">
            <Sparkles size={14} /> {t("badge")}
          </div>
          <h2 className="mb-4 text-3xl font-bold glow-text md:text-5xl">{t("title")}</h2>
          <p className="mx-auto max-w-3xl leading-relaxed text-zinc-400">{t("description")}</p>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 24}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          viewport={{once: true}}
          className="relative mb-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,243,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(188,19,254,0.16),transparent_35%)]" />
          <div className="relative grid items-start gap-6 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-mono uppercase tracking-[0.24em] text-zinc-500">{t("overviewLabel")}</p>
              <div className="mb-6 flex flex-wrap gap-3">
                {spotlightSkills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{opacity: 0, scale: 0.85}}
                    whileInView={{opacity: 1, scale: 1}}
                    whileHover={{y: -4, scale: 1.04}}
                    transition={{delay: idx * 0.04, duration: 0.35}}
                    viewport={{once: true}}
                    className="skills-orbit-chip rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-mono text-zinc-200 shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{width: 0, backgroundPosition: "0% 50%"}}
                  whileInView={{width: "100%", backgroundPosition: "100% 50%"}}
                  transition={{duration: 2.4, ease: "easeInOut"}}
                  viewport={{once: true}}
                  className="h-full rounded-full bg-[linear-gradient(90deg,rgba(0,243,255,0.9),rgba(188,19,254,0.95),rgba(57,255,20,0.9))] bg-[length:200%_100%]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat, idx) => {
                const Icon = statsMeta[idx];

                return (
                  <motion.div
                    key={stat.label}
                    initial={{opacity: 0, x: 20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: idx * 0.12, duration: 0.45}}
                    viewport={{once: true}}
                    whileHover={{scale: 1.02, y: -2}}
                    className="glass rounded-2xl p-4"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <Icon size={18} className="text-neon-blue" />
                      <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{once: true, amount: 0.15}}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {categoryMeta.map((category) => {
            const content = categories[category.key];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.key}
                variants={cardVariants}
                whileHover={{y: -8, rotateX: 4}}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/80 p-6 md:p-7"
                style={{transformStyle: "preserve-3d"}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} opacity-70`} />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-neon-blue shadow-[0_0_24px_rgba(0,243,255,0.18)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold tracking-wide text-white">{content.title}</h3>
                    </div>
                    <motion.div
                      animate={{y: [0, -5, 0]}}
                      transition={{duration: 2.8, repeat: Infinity, ease: "easeInOut"}}
                      className="text-right"
                    >
                      <div className="text-2xl font-bold text-white">{category.level}%</div>
                      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500">{t("momentum")}</div>
                    </motion.div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-zinc-300">{content.description}</p>

                  <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-500">
                      <span>{t("progressLabel")}</span>
                      <span>{category.level}/100</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{width: 0}}
                        whileInView={{width: `${category.level}%`}}
                        transition={{duration: 1.1, ease: "easeOut"}}
                        viewport={{once: true}}
                        className="skills-shimmer h-full rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {content.skills.map((skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{opacity: 0, y: 10}}
                        whileInView={{opacity: 1, y: 0}}
                        whileHover={{scale: 1.07, y: -2}}
                        transition={{delay: idx * 0.06, duration: 0.28}}
                        viewport={{once: true}}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-mono text-zinc-200 transition-colors group-hover:border-neon-blue/30 group-hover:text-neon-blue"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
