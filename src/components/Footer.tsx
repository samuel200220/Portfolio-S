import {Github, Linkedin, Twitter, Terminal} from "lucide-react";
import {useTranslations} from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-white/5 bg-black/50 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3 font-mono text-lg font-bold">
            <Terminal className="text-neon-blue" size={20} />
            SAMUEL<span className="text-neon-blue">.DEV</span>
          </div>

          <p className="text-sm font-mono text-zinc-500">
            {t("builtWith", {year: new Date().getFullYear()})}
          </p>

          <div className="flex items-center gap-6">
            <a href="#" aria-label={t("github")} className="text-zinc-500 transition-colors hover:text-neon-blue">
              <Github size={20} />
            </a>
            <a href="#" aria-label={t("linkedin")} className="text-zinc-500 transition-colors hover:text-neon-blue">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label={t("twitter")} className="text-zinc-500 transition-colors hover:text-neon-blue">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
