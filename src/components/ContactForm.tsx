"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {Send, Loader2, CheckCircle2, Sparkles, Mail, MapPin} from "lucide-react";
import {useTranslations} from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({name: "", email: "", message: ""});
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,243,255,0.08),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(188,19,254,0.08),transparent_24%)]" />
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.65}}
            viewport={{once: true}}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.24em] text-neon-blue/80">
              <Sparkles size={14} /> {t("badge")}
            </div>
            <h2 className="mb-6 text-4xl font-bold uppercase tracking-tight glow-text">{t("title")}</h2>
            <p className="mb-8 max-w-md text-zinc-400">{t("description")}</p>

            <div className="space-y-4 text-sm font-mono">
              <motion.div whileHover={{x: 4}} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-zinc-300">
                <MapPin size={16} className="text-neon-blue" /> {t("location")}
              </motion.div>
              <motion.div whileHover={{x: 4}} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-zinc-300">
                <Mail size={16} className="text-neon-blue" /> samuel.sean@dev.com
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.65, delay: 0.05}}
            viewport={{once: true}}
            className="glass relative overflow-hidden rounded-[1.75rem] p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5" />
            {status === "success" ? (
              <motion.div
                initial={{opacity: 0, scale: 0.96}}
                animate={{opacity: 1, scale: 1}}
                className="relative flex h-full min-h-[420px] flex-col items-center justify-center space-y-4 text-center"
              >
                <motion.div
                  initial={{scale: 0.8, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  transition={{duration: 0.45}}
                >
                  <CheckCircle2 className="h-16 w-16 text-green-400" />
                </motion.div>
                <h3 className="text-xl font-bold">{t("successTitle")}</h3>
                <p className="text-sm text-zinc-400">{t("successDescription")}</p>
                <button onClick={() => setStatus("idle")} className="border-b border-neon-blue text-sm text-neon-blue">
                  {t("sendAnother")}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase text-zinc-500">{t("nameLabel")}</label>
                  <motion.input
                    whileFocus={{scale: 1.01}}
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-200 transition-colors focus:border-neon-blue focus:outline-none"
                    placeholder={t("namePlaceholder")}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase text-zinc-500">{t("emailLabel")}</label>
                  <motion.input
                    whileFocus={{scale: 1.01}}
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-200 transition-colors focus:border-neon-blue focus:outline-none"
                    placeholder={t("emailPlaceholder")}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-mono uppercase text-zinc-500">{t("messageLabel")}</label>
                  <motion.textarea
                    whileFocus={{scale: 1.01}}
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-zinc-200 transition-colors focus:border-neon-blue focus:outline-none"
                    placeholder={t("messagePlaceholder")}
                  />
                </div>

                <motion.button
                  whileHover={{y: -2}}
                  whileTap={{scale: 0.99}}
                  type="submit"
                  disabled={status === "loading"}
                  className="cyber-button flex w-full items-center justify-center gap-4 py-4"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      {t("submit")} <Send size={18} />
                    </>
                  )}
                </motion.button>
                {status === "error" && <p className="text-center text-xs text-red-400">{t("error")}</p>}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
