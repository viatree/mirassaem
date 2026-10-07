import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import Logo from "./Logo";
import { Icon } from "@/components/ui";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.6fr_1fr_1.3fr] md:px-8">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-[38ch] leading-relaxed text-paper/70">{SITE.description}</p>
          <ul className="mt-6 flex gap-2">
            {SITE.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  aria-label={s.name}
                  className="grid size-10 place-items-center rounded-full border border-paper/20 text-paper/80 hover:border-paper hover:text-paper"
                >
                  <Icon name={s.icon} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Navigasi</h2>
          <ul className="mt-4 space-y-2.5 text-paper/70">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-paper">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Kontak</h2>
          <ul className="mt-4 space-y-3 text-paper/70">
            <li className="flex gap-3"><Icon name="mail" className="mt-0.5 size-5 shrink-0" />{SITE.email}</li>
            <li className="flex gap-3"><Icon name="phone" className="mt-0.5 size-5 shrink-0" />WhatsApp {SITE.whatsappLabel}</li>
            <li className="flex gap-3"><Icon name="pin" className="mt-0.5 size-5 shrink-0" />{SITE.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-paper/55 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. Hak Cipta Dilindungi.</p>
          <p lang="ko">한국어를 함께 배워요</p>
        </div>
      </div>
    </footer>
  );
}
