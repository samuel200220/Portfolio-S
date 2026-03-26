"use client";

import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import {ArrowUpRight, Github, Code2, Sparkles} from "lucide-react";
import Image from "next/image";
import {useTranslations} from "next-intl";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

type ProjectCopy = {
  title: string;
  description: string;
};

export default function Projects() {
  const t = useTranslations("Projects");
  const items = t.raw("items") as Record<string, ProjectCopy>;
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.65}}
          viewport={{once: true}}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-neon-blue/80 dark:border-white/10 dark:bg-white/[0.04]">
              <Sparkles size={14} /> {t("badge")}
            </div>
            <h2 className="mb-2 text-3xl font-bold glow-text md:text-4xl">{t("title")}</h2>
            <p className="max-w-2xl text-slate-500 dark:text-slate-300">{t("description")}</p>
          </div>
          <motion.a whileHover={{x: 4}} href="https://github.com/samuel200220/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-neon-blue hover:underline">
            {t("viewAll")} &rarr;
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            [1, 2, 3].map((i) => <div key={i} className="glass h-96 animate-pulse rounded-[1.75rem]" />)
          ) : (
            projects.map((project, idx) => {
              const copy = items[project.id] ?? {
                title: project.title,
                description: project.description,
              };

              return (
                <motion.article
                  key={project.id}
                  initial={{opacity: 0, y: 28}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{delay: idx * 0.1, duration: 0.55}}
                  viewport={{once: true, amount: 0.2}}
                  whileHover={{y: -8}}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/82 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-sky-50/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:bg-[linear-gradient(180deg,rgba(34,211,238,0.08),transparent)]" />
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={copy.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-black/40" />
                    <motion.div
                      initial={{opacity: 0.5}}
                      whileHover={{opacity: 1}}
                      className="absolute right-4 top-4 rounded-full border border-slate-200/80 bg-white/88 p-2 text-slate-700 backdrop-blur-md dark:border-white/10 dark:bg-black/35 dark:text-slate-100"
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          initial={{opacity: 0, y: 8}}
                          whileInView={{opacity: 1, y: 0}}
                          transition={{delay: 0.2 + techIdx * 0.05}}
                          viewport={{once: true}}
                          className="rounded-full border border-slate-200/80 bg-white/88 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-neon-blue dark:border-white/10 dark:bg-black/35"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="relative p-6">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-neon-blue dark:text-white">{copy.title}</h3>
                      <span className="rounded-full border border-slate-200/80 bg-white/75 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                        {t("projectLabel")}
                      </span>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{copy.description}</p>

                    <div className="flex items-center justify-between border-t border-slate-200/70 pt-4 dark:border-white/10">
                      <a href={project.link} className="flex items-center gap-2 text-xs font-mono text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                        <Code2 size={14} /> {t("caseStudy")}
                      </a>
                      <a href={project.link} className="flex items-center gap-2 text-xs font-mono text-slate-600 transition-colors hover:text-neon-blue dark:text-slate-300">
                        <Github size={14} /> {t("source")}
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
