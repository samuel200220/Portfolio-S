"use client";

import {motion} from "framer-motion";
import {Briefcase, Zap, HeartPulse, Sparkles} from "lucide-react";
import {useTranslations} from "next-intl";

type ExperienceItem = {
  type: string;
  role: string;
  company: string;
  date: string;
  desc: string;
  icon: "briefcase" | "heartPulse" | "zap";
};

const iconMap = {
  briefcase: Briefcase,
  heartPulse: HeartPulse,
  zap: Zap,
};

export default function Experiences() {
  const t = useTranslations("Experiences");
  const experiences = t.raw("items") as ExperienceItem[];

  return (
    <section id="experiences" className="relative overflow-hidden bg-sky-50/35 py-24 dark:bg-transparent">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(0,243,255,0.08),transparent_26%),radial-gradient(circle_at_85%_70%,rgba(188,19,254,0.08),transparent_22%)] dark:bg-[radial-gradient(circle_at_15%_30%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_85%_70%,rgba(168,85,247,0.1),transparent_26%)]" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.65}}
          viewport={{once: true}}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-neon-blue/80 dark:border-white/10 dark:bg-white/[0.04]">
            <Sparkles size={14} /> {t("badge")}
          </div>
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-tight glow-text md:text-4xl">{t("title")}</h2>
          <p className="mx-auto max-w-2xl text-slate-500 dark:text-slate-300">{t("description")}</p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-10">
          {experiences.map((exp, idx) => {
            const Icon = iconMap[exp.icon];

            return (
              <motion.div
                key={`${exp.role}-${exp.date}`}
                initial={{opacity: 0, x: idx % 2 === 0 ? -24 : 24}}
                whileInView={{opacity: 1, x: 0}}
                transition={{delay: idx * 0.08, duration: 0.55}}
                viewport={{once: true, amount: 0.3}}
                className="grid gap-5 md:grid-cols-[72px_1fr]"
              >
                <div className="relative flex justify-center">
                  <motion.div
                    whileHover={{scale: 1.08, rotate: -6}}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-neon-blue/20 bg-white/88 text-neon-blue shadow-[0_0_24px_rgba(0,243,255,0.16)] dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <Icon size={24} />
                  </motion.div>
                  {idx !== experiences.length - 1 && <div className="absolute top-14 h-full w-px bg-gradient-to-b from-neon-blue/35 to-transparent" />}
                </div>

                <motion.div
                  whileHover={{y: -4}}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/82 p-6 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(90deg,rgba(34,211,238,0.07),transparent)]" />
                  <div className="relative">
                    <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <span className="w-fit rounded-full border border-slate-200/80 bg-white/75 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-neon-blue dark:border-white/10 dark:bg-white/[0.04]">
                        {exp.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.date}</span>
                    </div>
                    <h3 className="mb-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-neon-blue dark:text-white">{exp.role}</h3>
                    <p className="mb-4 text-sm font-medium text-slate-600 dark:text-slate-300">{exp.company}</p>
                    <p className="border-l-2 border-neon-blue/20 pl-4 text-sm italic leading-relaxed text-slate-500 dark:text-slate-400">
                      &quot;{exp.desc}&quot;
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
