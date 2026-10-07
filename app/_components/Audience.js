import { AUDIENCE } from "../_data";
import { Container, Icon, SectionHeader } from "@/components/ui";

/* =====================================================================
   UNTUK SIAPA KURSUS INI
   ===================================================================== */
export function Audience() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader ko="이런 분들께 추천해요" title="Siapa yang Cocok Mengikuti Kursus Ini?" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a) => (
            <li key={a.title} className="flex gap-4 bg-paper p-6 md:p-7">
              <Icon name={a.icon} className="mt-0.5 size-7 shrink-0 text-coral" />
              <div>
                <h3 className="text-lg font-bold text-navy">{a.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{a.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
