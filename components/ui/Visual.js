import { Icon } from "./Icon";

/* ============ VISUAL (placeholder foto) ============
   Ganti dengan foto asli client, contoh:
   <Image src="/images/hero.jpg" alt="Kelas Bahasa Korea" fill className="object-cover" />
   Placeholder ini sengaja diberi label agar designer tahu foto apa yang dibutuhkan. */
export function Visual({ label, ko = "한", className = "", tone = "bg-beige", children }) {
  return (
    <div className={`relative overflow-hidden rounded-[28px] ${tone} ${className}`}>
      <span
        lang="ko"
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.18em] -right-[0.06em] select-none text-[clamp(8rem,22vw,15rem)] font-bold leading-none text-navy/[0.07]"
      >
        {ko}
      </span>
      {label && (
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1.5 text-xs font-medium text-ink-soft">
          <Icon name="camera" className="size-4" />
          Foto: {label}
        </span>
      )}
      {children}
    </div>
  );
}
