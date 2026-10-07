import { HIGHLIGHTS } from "../_data";
import { Container, Icon, SectionHeader } from "@/components/ui";

/* =====================================================================
   PENGENALAN + highlight
   ===================================================================== */
export function IntroHighlights() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <SectionHeader ko="한글부터 유창하게" title="Mulai dari Hangul hingga Lancar Berbahasa Korea" />
          <p className="text-lg leading-relaxed text-ink-soft md:pb-2">
            Pelajari Bahasa Korea secara bertahap melalui pembelajaran yang terstruktur dan disesuaikan dengan berbagai
            kebutuhan serta tingkat kemampuan.
          </p>
        </div>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <li key={h.title} className="bg-paper p-6 md:p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-navy-soft text-navy">
                <Icon name={h.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{h.title}</h3>
              <p className="mt-1.5 text-ink-soft">{h.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
