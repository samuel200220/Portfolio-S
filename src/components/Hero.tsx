"use client";

import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";

export default function Hero() {
  const t = useTranslations("Hero");
  const words = t.raw("words") as string[];
  const highlights = t.raw("highlights") as string[];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && reverse === false) {
      setTimeout(() => setReverse(true), 1800);
      return;
    }

    if (subIndex === 0 && reverse) {
      const resetTimeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);

      return () => clearTimeout(resetTimeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 55 : 115);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,243,255,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(188,19,254,0.1),transparent_25%)]" />
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2}}
        className="absolute inset-x-0 top-1/3 h-72 bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_60%)] blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{opacity: 0, y: 18}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/10 px-4 py-1.5 text-sm font-mono text-neon-blue"
        >
          <motion.span
            animate={{scale: [1, 1.18, 1]}}
            transition={{duration: 2.4, repeat: Infinity, ease: "easeInOut"}}
            className="inline-block h-2 w-2 rounded-full bg-neon-blue"
          />
          {t("availability")}
        </motion.div>

        <motion.h1
          initial={{opacity: 0, y: 26}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.1}}
          className="mb-4 text-5xl font-bold tracking-tight md:text-7xl"
        >
          <span className="glow-text">Samuel Sean</span>
        </motion.h1>

        <motion.p
          initial={{opacity: 0, y: 22}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
          className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg"
        >
          {t("description")}
        </motion.p>

        <div className="mb-10 flex h-12 items-center justify-center md:h-16">
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.35, duration: 0.8}}
            className="text-xl font-mono text-slate-700 dark:text-slate-100 md:text-3xl"
          >
            {words[index].substring(0, subIndex)}
            <span className="typing-cursor"></span>
          </motion.p>
        </div>

        <motion.div
          initial={{opacity: 0, y: 18}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.45, duration: 0.8}}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {highlights.map((item, idx) => (
            <motion.span
              key={item}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.55 + idx * 0.08, duration: 0.45}}
              whileHover={{y: -3}}
              className="rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.8, duration: 1}}
          className="mt-12 flex flex-col justify-center gap-6 sm:flex-row"
        >
          <motion.a whileHover={{y: -3}} whileTap={{scale: 0.98}} href="#projects" className="cyber-button">
            {t("viewProjects")}
          </motion.a>
          <motion.a
            whileHover={{y: -3}}
            whileTap={{scale: 0.98}}
            href="/cv.pdf"
            className="rounded-full border border-slate-200/80 bg-white/80 px-6 py-3 font-mono text-sm uppercase tracking-[0.22em] transition-all hover:border-slate-300 hover:bg-white dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            {t("downloadCv")}
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{y: [0, 8, 0], opacity: [0.15, 0.4, 0.15]}}
        transition={{duration: 2.4, repeat: Infinity, ease: "easeInOut"}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-1 rounded-full bg-gradient-to-b from-neon-blue to-transparent" />
      </motion.div>
    </section>
  );
}
