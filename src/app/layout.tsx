import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BackgroundParticles from "@/components/BackgroundParticles";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Samuel Sean | Ingénieur Software & IA",
  description: "Portfolio professionnel de Samuel Sean Fotsing Tagatsing, étudiant ingénieur passionné par le génie logiciel et l'IA.",
  keywords: ["Software Engineer", "AI", "Portfolio", "Next.js", "Cameroun", "ENSPY"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans selection:bg-neon-blue/30`}>
        <BackgroundParticles />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
