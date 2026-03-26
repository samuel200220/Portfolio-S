import {getLocale} from "next-intl/server";
import {Inter, Fira_Code} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"], variable: "--font-geist-sans"});
const firaCode = Fira_Code({subsets: ["latin"], variable: "--font-geist-mono"});

const htmlLangByLocale: Record<string, string> = {
  fr: "fr",
  en: "en",
  ch: "zh-CN",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={htmlLangByLocale[locale] ?? "fr"} className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans selection:bg-neon-blue/30`}>
        {children}
      </body>
    </html>
  );
}
