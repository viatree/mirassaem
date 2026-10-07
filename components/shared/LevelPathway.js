import Link from "next/link";
import { LEVELS } from "@/lib/courses";
import { Button, Container, Icon, SectionHeader } from "@/components/ui";

/* =====================================================================
   LEVEL KURSUS — ditampilkan sebagai jalur bertahap (learning pathway)
   ===================================================================== */
export function LevelPathway({ title = "Pilih Kursus Bahasa Korea Anda", intro, className = "" }) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            ko="나에게 맞는 레벨"
            title={title}
            intro={intro ?? "Mulai dari level yang sesuai dengan kemampuan Anda saat ini, lalu naik secara bertahap."}
          />
          <Button href="/kursus" variant="outline" className="self-start md:self-auto">Lihat Semua Kursus</Button>
        </div>

        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* garis jalur di desktop */}
          <span aria-hidden className="absolute left-0 right-0 top-[23px] hidden h-0.5 bg-line lg:block" />
          {LEVELS.map((l) => (
            <li key={l.slug} className="relative flex flex-col">
              <div className="mb-5 flex items-center gap-3">
                <span className="relative z-10 grid size-12 place-items-center rounded-full border-2 border-navy bg-paper text-lg font-bold text-navy">
                  {l.step}
                </span>
                <span lang="ko" className="relative z-10 bg-paper pr-3 text-sm font-medium text-coral">{l.ko}</span>
              </div>
              <article className="flex flex-1 flex-col rounded-3xl border border-line bg-paper p-6 shadow-soft">
                <h3 className="text-xl font-bold leading-snug text-navy">{l.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{l.description}</p>
                <p className="mt-5 text-sm font-semibold text-ink">Cocok untuk:</p>
                <ul className="mt-2 space-y-2 text-[15px] text-ink-soft">
                  {l.forWho.map((w) => (
                    <li key={w} className="flex gap-2">
                      <Icon name="check" className="mt-0.5 size-[18px] shrink-0 text-coral" strokeWidth={2.4} />
                      {w}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/kursus/${l.slug}`}
                  className="mt-auto inline-flex pt-6 font-semibold text-navy underline decoration-coral decoration-2 underline-offset-[6px] hover:text-coral"
                >
                  {l.cta}
                </Link>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
