"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import Logo from "./Logo";
import { Icon } from "@/components/ui";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Tutup menu mobile setiap pindah halaman
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-md">
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-5 md:h-[72px] md:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                    active ? "text-navy" : "text-ink-soft hover:text-navy"
                  }`}
                >
                  {l.label}
                  {active && <span aria-hidden className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-coral" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/kontak"
            className="whitespace-nowrap rounded-full bg-coral px-3.5 py-2 text-[13px] font-semibold text-paper hover:bg-coral-deep sm:px-4 sm:text-sm md:px-5 md:py-2.5 md:text-[15px]"
          >
            Mulai Belajar
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" strokeWidth={2} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-line py-4 text-lg font-medium ${
                    isActive(l.href) ? "text-coral" : "text-navy"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/kursus" className="mt-5 block rounded-full border-2 border-navy/20 px-5 py-3 text-center font-semibold text-navy">
            Lihat Kursus
          </Link>
        </div>
      )}
    </header>
  );
}
