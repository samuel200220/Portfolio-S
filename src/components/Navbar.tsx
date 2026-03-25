"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Terminal, Code2, User, Briefcase, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Accueil", href: "#", icon: Terminal },
    { name: "À propos", href: "#about", icon: User },
    { name: "Compétences", href: "#skills", icon: Code2 },
    { name: "Projets", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
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
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled ? "bg-black/80 backdrop-blur-lg border-white/10 py-3" : "bg-transparent border-transparent py-5"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 font-mono font-bold text-xl group"
                    >
                        <Terminal className="text-neon-blue group-hover:animate-pulse" />
                        <span className="hidden sm:inline">SAMUEL<span className="text-neon-blue">.DEV</span></span>
                        <span className="sm:hidden text-neon-blue">SSFT</span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-sm font-mono tracking-tighter hover:text-neon-blue transition-colors flex items-center gap-2 group"
                            >
                                <item.icon size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-zinc-400 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Scroll Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-blue origin-left"
                    style={{ scaleX }}
                />
            </nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
                className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
            >
                <div className="flex flex-col gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-mono flex items-center gap-4 hover:text-neon-blue"
                        >
                            <item.icon className="text-neon-blue" />
                            {item.name}
                        </a>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
