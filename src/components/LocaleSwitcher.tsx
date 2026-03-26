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
      className="flex items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1 dark:border-slate-700/80 dark:bg-slate-900/80"
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
                ? "bg-sky-600 text-white"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            )}
          >
            {localeLabels[nextLocale]}
          </button>
        );
      })}
    </div>
  );
}
