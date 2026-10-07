import { Button } from "@/components/ui";

/* =====================================================================
   CTA BANNER — background gelap, tipografi besar, nuansa Korea
   ===================================================================== */
export function CTABanner() {
  return (
    <section className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-navy px-7 py-14 text-paper md:px-16 md:py-20">
        <span
          lang="ko"
          aria-hidden
          className="pointer-events-none absolute -bottom-[0.22em] right-0 select-none whitespace-nowrap text-[clamp(4.5rem,13vw,10rem)] font-bold leading-none text-paper/[0.07]"
        >
          한국어를 시작해요
        </span>
        <div className="relative max-w-2xl">
          <p lang="ko" className="font-medium text-coral-soft">한국어를 시작해요</p>
          <h2 className="mt-3 text-[2.25rem] font-bold leading-[1.1] tracking-[-0.02em] md:text-[3.25rem]">
            Siap Memulai Perjalanan Belajar Bahasa Korea?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-paper/75">
            Mulai belajar Bahasa Korea hari ini dan kembangkan kemampuan Anda secara bertahap.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/kursus" variant="coral" size="lg">Lihat Kursus</Button>
            <Button href="/kontak" variant="outlineLight" size="lg">Hubungi Kami</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
