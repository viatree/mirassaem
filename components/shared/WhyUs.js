import { WHY_US } from "@/lib/content";
import { Container, Icon, SectionHeader } from "@/components/ui";

/* =====================================================================
   MENGAPA MEMILIH KAMI — icon + card
   ===================================================================== */
export function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader ko="우리와 함께 배우는 이유" title="Mengapa Belajar Bersama Kami?" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w) => (
            <li key={w.title} className="rounded-3xl border border-line bg-paper p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-coral-soft text-coral-deep">
                <Icon name={w.icon} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{w.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
