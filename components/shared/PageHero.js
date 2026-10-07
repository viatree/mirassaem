import { Container } from "@/components/ui";

/* =====================================================================
   PAGE HERO — header untuk halaman selain Home
   ===================================================================== */
export function PageHero({ ko, title, intro, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-beige">
      <span
        lang="ko"
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-[-0.25em] select-none text-[clamp(7rem,18vw,14rem)] font-bold leading-none text-navy/[0.06]"
      >
        {ko}
      </span>
      <Container className="relative py-16 md:py-24">
        <p lang="ko" className="text-[15px] font-medium text-coral">{ko}</p>
        <h1 className="mt-3 max-w-[20ch] text-[2.25rem] font-bold leading-[1.1] tracking-[-0.025em] text-navy md:text-[3.5rem]">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink-soft md:text-xl">{intro}</p>}
        {children}
      </Container>
    </section>
  );
}
