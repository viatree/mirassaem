import { STEPS } from "@/lib/content";
import { Container, SectionHeader } from "@/components/ui";

/* =====================================================================
   METODE BELAJAR — timeline 4 langkah
   ===================================================================== */
export function MethodTimeline({ dark = true }) {
  return (
    <section className={`${dark ? "bg-navy text-paper" : ""} py-20 md:py-28`}>
      <Container>
        <SectionHeader ko="쉽게 배우는 방법" title="Cara Mudah Belajar Bahasa Korea" invert={dark} />
        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className={`border-t-2 pt-6 ${dark ? "border-paper/20" : "border-line"}`}>
              <div className="flex items-baseline justify-between gap-3">
                <span className={`text-5xl font-bold tracking-tight ${dark ? "text-coral-soft" : "text-coral"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span lang="ko" className={`text-sm ${dark ? "text-paper/55" : "text-ink-soft"}`}>{s.ko}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className={`mt-2 leading-relaxed ${dark ? "text-paper/75" : "text-ink-soft"}`}>{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
