"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Award, BadgeCheck, CalendarDays, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI x Stanford Online",
    year: "Nov 2025",
    status: "Validée",
    image: "/machine_learning.jpeg",
    accent: "from-cyan-400/25 via-cyan-400/5 to-transparent",
    skills: ["Machine Learning", "Regression", "Classification"],
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI x Stanford Online",
    year: "Jan 2026",
    status: "Validée",
    image: "/1.png",
    accent: "from-fuchsia-400/25 via-fuchsia-400/5 to-transparent",
    skills: ["Neural Networks", "Deep Learning", "Training"],
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI x Stanford Online",
    year: "Mar 2026",
    status: "Validée",
    image: "/2.png",
    accent: "from-emerald-400/25 via-emerald-400/5 to-transparent",
    skills: ["Clustering", "Recommenders", "Reinforcement Learning"],
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera x Stanford Online",
    year: "Mar 2026",
    status: "Spécialisation complète",
    image: "/3.png",
    accent: "from-violet-400/25 via-violet-400/5 to-transparent",
    skills: ["ML Foundations", "Supervised", "Unsupervised"],
  },
];

const stats = [
  { label: "Certifications", value: "4" },
  { label: "Parcours complets", value: "1" },
  { label: "Domaine", value: "Machine Learning" },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden bg-zinc-950/20 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,243,255,0.08),transparent_26%),radial-gradient(circle_at_82%_70%,rgba(188,19,254,0.08),transparent_24%)]" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.26em] text-neon-blue/80">
            <Sparkles size={14} /> Credentials
          </div>
          <h2 className="mb-4 text-3xl font-bold glow-text md:text-5xl">Certifications</h2>
          <p className="mx-auto max-w-3xl leading-relaxed text-zinc-400">
            Mes certifications réelles en machine learning, avec les certificats affichés directement pour mettre en valeur le parcours complet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 grid gap-4 md:grid-cols-3"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="glass rounded-[1.5rem] p-5"
            >
              <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-500">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-80`} />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.05 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-neon-blue shadow-[0_0_24px_rgba(0,243,255,0.15)]"
                  >
                    <Award size={22} />
                  </motion.div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-300">
                    {cert.status}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-neon-blue md:text-xl">
                  {cert.title}
                </h3>
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck size={15} className="text-neon-blue" /> {cert.issuer}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={15} className="text-neon-blue" /> {cert.year}
                  </span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative mb-5 overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/20"
                >
                  <div className="relative aspect-[1.45/1] w-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                <div className="flex flex-wrap gap-2.5">
                  {cert.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.28 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.04 }}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-mono text-zinc-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
