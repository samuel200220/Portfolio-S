"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {GraduationCap, MapPin, Calendar, Sparkles} from "lucide-react";
import {useTranslations} from "next-intl";

type EducationItem = {
  year: string;
  title: string;
  institution: string;
  desc: string;
};

export default function About() {
  const t = useTranslations("About");
  const education = t.raw("education") as EducationItem[];
  const highlights = t.raw("highlights") as string[];

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,243,255,0.08),transparent_28%),radial-gradient(circle_at_80%_60%,rgba(188,19,254,0.08),transparent_25%)]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          viewport={{once: true}}
          className="relative mx-auto max-w-5xl"
        >
          <div className="mb-16 grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{opacity: 0, x: -24}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.7}}
              viewport={{once: true}}
              className="group relative mx-auto"
            >
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-sky-200/80 to-fuchsia-200/60 blur-2xl opacity-60 transition duration-700 group-hover:opacity-90" />
              <motion.div
                whileHover={{y: -6, rotate: -1}}
                transition={{duration: 0.35}}
                className="relative h-72 w-72 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 dark:border-slate-700/80 dark:bg-slate-900/80"
              >
                <Image
                  src="/Samuel.jpg"
                  alt={t("portraitAlt")}
                  fill
                  sizes="(max-width: 768px) 288px, 288px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent" />
                <motion.div
                  animate={{y: [0, -4, 0]}}
                  transition={{duration: 3.5, repeat: Infinity, ease: "easeInOut"}}
                  className="absolute bottom-5 left-5 rounded-full border border-slate-200/80 bg-white/78 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-700 backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/78 dark:text-slate-200"
                >
                  Samuel Sean
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 24}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.7, delay: 0.1}}
              viewport={{once: true}}
              className="text-center md:text-left"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-neon-blue/80 dark:border-slate-700/80 dark:bg-slate-900/80">
                <Sparkles size={14} /> {t("badge")}
              </div>
              <h2 className="mb-4 inline-block text-3xl font-bold glow-text md:text-4xl">{t("title")}</h2>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">{t("description")}</p>
              <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
                {highlights.map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.15 + idx * 0.07}}
                    viewport={{once: true}}
                    whileHover={{y: -2}}
                    className="rounded-full border border-slate-200/80 bg-white/75 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <motion.div whileHover={{y: -2}} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin size={16} className="text-neon-blue" /> {t("location")}
                </motion.div>
                <motion.div whileHover={{y: -2}} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <GraduationCap size={16} className="text-neon-blue" /> {t("schoolShortcut")}
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <h3 className="mb-8 text-xl font-mono uppercase tracking-widest text-neon-blue/80">{t("educationTitle")}</h3>
            <div className="space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={`${item.title}-${item.year}`}
                  initial={{opacity: 0, x: -20}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{delay: i * 0.12, duration: 0.5}}
                  viewport={{once: true}}
                  whileHover={{x: 6}}
                  className="glass group relative overflow-hidden rounded-[1.5rem] p-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-100/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{rotate: -6, scale: 1.05}}
                      className="mt-1 rounded-xl bg-neon-blue/10 p-2 text-neon-blue"
                    >
                      <Calendar size={20} />
                    </motion.div>
                    <div>
                      <span className="text-sm font-mono text-neon-blue/60">{item.year}</span>
                      <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-neon-blue">
                        {item.title}
                      </h4>
                      <p className="mb-2 text-sm font-medium text-slate-600">{item.institution}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
