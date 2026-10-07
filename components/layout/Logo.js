import Link from "next/link";
import { SITE } from "@/lib/site";

/* Ganti isi <span> logo dengan <Image src="/images/logo.svg" .../> jika logo client tersedia */
export default function Logo({ invert = false, className = "" }) {
  return (
    <Link href="/" className={`flex min-w-0 items-center gap-2.5 ${className}`} aria-label={`${SITE.name}, ke beranda`}>
      <span
        aria-hidden
        lang="ko"
        className={`relative grid size-9 shrink-0 place-items-center rounded-[10px] text-[17px] font-bold ${
          invert ? "bg-paper text-navy" : "bg-navy text-paper"
        }`}
      >
        한
        <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-current bg-coral" style={{ borderColor: invert ? "var(--color-navy-deep)" : "var(--color-paper)" }} />
      </span>
      <span className={`truncate text-[15px] font-bold tracking-tight max-[339px]:hidden sm:text-[17px] md:text-lg ${invert ? "text-paper" : "text-navy"}`}>{SITE.name}</span>
    </Link>
  );
}
