import { SKILLS } from "@/lib/content";
import { Container, Icon, SectionHeader } from "@/components/ui";

/* =====================================================================
   APA YANG AKAN DIPELAJARI
   ===================================================================== */
export function Skills() {
  return (
    <section className="bg-grey py-20 md:py-28">
      <Container>
        <SectionHeader ko="무엇을 배우나요?" title="Apa yang Akan Anda Pelajari?" />
        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s) => (
            <li key={s.title} className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-paper text-xl text-navy shadow-soft">
                <Icon name={s.icon} className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">
                  {s.title} <span lang="ko" className="ml-1 text-sm font-medium text-coral">{s.ko}</span>
                </h3>
                <p className="mt-1 leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
