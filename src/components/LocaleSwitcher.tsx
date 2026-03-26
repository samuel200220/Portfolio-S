"use client";

import {startTransition} from "react";
import {useLocale, useTranslations} from "next-intl";
import {routing} from "@/i18n/routing";
import {usePathname, useRouter} from "@/i18n/navigation";
import {cn} from "@/lib/utils";

const localeLabels: Record<string, string> = {
  fr: "FR",
  en: "EN",
  ch: "中文",
};

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      aria-label={t("label")}
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1"
    >
      {routing.locales.map((nextLocale) => {
        const isActive = nextLocale === locale;

        return (
          <button
            key={nextLocale}
            type="button"
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, {locale: nextLocale});
              });
            }}
            className={cn(
              "rounded-full px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] transition-colors",
              isActive
                ? "bg-neon-blue text-black"
                : "text-zinc-400 hover:text-white"
            )}
          >
            {localeLabels[nextLocale]}
          </button>
        );
      })}
    </div>
  );
}
