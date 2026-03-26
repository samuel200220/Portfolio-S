"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Code2, Sparkles } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export default function Projects() {
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
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-neon-blue/80">
              <Sparkles size={14} /> Selected Work
            </div>
            <h2 className="mb-2 text-3xl font-bold glow-text md:text-4xl">Projets sélectionnés</h2>
            <p className="max-w-2xl text-zinc-500">Solutions innovantes, interfaces maîtrisées et réalisations techniques orientées impact.</p>
          </div>
          <motion.a whileHover={{ x: 4 }} href="https://github.com/samuel200220/" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-neon-blue hover:underline">
            Voir tout sur GitHub &rarr;
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            [1, 2, 3].map((i) => <div key={i} className="glass h-96 animate-pulse rounded-[1.75rem]" />)
          ) : (
            projects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.55 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 p-2 text-zinc-200 backdrop-blur-md"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + techIdx * 0.05 }}
                        viewport={{ once: true }}
                        className="rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-neon-blue"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="relative p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-neon-blue">{project.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-400">
                      Projet
                    </span>
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <a href={project.link} className="flex items-center gap-2 text-xs font-mono text-zinc-400 transition-colors hover:text-white">
                      <Code2 size={14} /> Case Study
                    </a>
                    <a href={project.link} className="flex items-center gap-2 text-xs font-mono text-zinc-400 transition-colors hover:text-neon-blue">
                      <Github size={14} /> Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
