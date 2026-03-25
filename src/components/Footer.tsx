import { Github, Linkedin, Twitter, Terminal } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 font-mono font-bold text-lg">
                        <Terminal className="text-neon-blue" size={20} />
                        SAMUEL<span className="text-neon-blue">.DEV</span>
                    </div>

                    <p className="text-zinc-500 text-sm font-mono">
                        &copy; {new Date().getFullYear()} Samuel Sean Fotsing Tagatsing. Built with Next.js & Framer Motion.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-zinc-500 hover:text-neon-blue transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-neon-blue transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-neon-blue transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
