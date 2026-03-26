import {Github, Linkedin, Twitter, Terminal} from "lucide-react";
import {useTranslations} from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-slate-200/70 bg-white/70 py-12 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3 font-mono text-lg font-bold">
            <Terminal className="text-neon-blue" size={20} />
            SAMUEL<span className="text-neon-blue">.DEV</span>
          </div>

          <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
            {t("builtWith", {year: new Date().getFullYear()})}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label={t("github")}
              className="text-slate-500 transition-colors hover:text-neon-blue dark:text-slate-400"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              aria-label={t("linkedin")}
              className="text-slate-500 transition-colors hover:text-neon-blue dark:text-slate-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              aria-label={t("twitter")}
              className="text-slate-500 transition-colors hover:text-neon-blue dark:text-slate-400"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
