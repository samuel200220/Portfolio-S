"use client";

import {motion, useScroll, useSpring} from "framer-motion";
import {Terminal, Code2, User, Briefcase, Mail, Menu, X} from "lucide-react";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/utils";

const navItems = [
  {key: "home", href: "#", icon: Terminal},
  {key: "about", href: "#about", icon: User},
  {key: "skills", href: "#skills", icon: Code2},
  {key: "projects", href: "#projects", icon: Briefcase},
  {key: "contact", href: "#contact", icon: Mail},
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-slate-200/80 bg-white/80 py-3 backdrop-blur-lg dark:border-slate-800/80 dark:bg-slate-950/80"
            : "border-transparent bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Link href="/" className="group flex items-center gap-2 font-mono text-xl font-bold">
            <Terminal className="text-neon-blue group-hover:animate-pulse" />
            <span className="hidden sm:inline">
              SAMUEL<span className="text-neon-blue">.DEV</span>
            </span>
            <span className="text-neon-blue sm:hidden">SSFT</span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{opacity: 0, y: -10}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: i * 0.1}}
                  className="group flex items-center gap-2 text-sm font-mono tracking-tighter transition-colors hover:text-neon-blue"
                >
                  <item.icon
                    size={14}
                    className="opacity-50 transition-opacity group-hover:opacity-100"
                  />
                  {t(`links.${item.key}`)}
                </motion.a>
              ))}
            </div>
            <ThemeToggle />
            <LocaleSwitcher />
          </div>

          <button
            className="text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("toggleMenu")}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-neon-blue"
          style={{scaleX}}
        />
      </nav>

      <motion.div
        initial={false}
        animate={isOpen ? {opacity: 1, x: 0} : {opacity: 0, x: "100%"}}
        className="fixed inset-0 z-40 bg-white/95 px-6 pt-24 backdrop-blur-xl dark:bg-slate-950/95 md:hidden"
      >
        <div className="flex flex-col gap-6">
          <ThemeToggle />
          <LocaleSwitcher />
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 font-mono text-2xl hover:text-neon-blue dark:text-slate-100"
            >
              <item.icon className="text-neon-blue" />
              {t(`links.${item.key}`)}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
