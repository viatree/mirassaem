import Link from "next/link";
import { FAQS } from "@/lib/content";
import { Container, Icon, SectionHeader } from "@/components/ui";

/* =====================================================================
   FAQ — accordion
   ===================================================================== */
export function FAQ({ items = FAQS, title = "Pertanyaan yang Sering Diajukan" }) {
  return (
    <section id="faq" className="py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <div>
          <SectionHeader ko="자주 묻는 질문" title={title} />
          <p className="mt-5 text-ink-soft">
            Belum menemukan jawabannya?{" "}
            <Link href="/kontak" className="font-semibold text-navy underline decoration-coral decoration-2 underline-offset-4">
              Hubungi kami
            </Link>
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-grey text-navy transition-transform group-open:rotate-45">
                  <Icon name="plus" className="size-4" strokeWidth={2.2} />
                </span>
              </summary>
              <p className="mt-3 max-w-[60ch] leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
