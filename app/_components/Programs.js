import Link from "next/link";
import { PROGRAMS } from "@/lib/courses";
import { Container, Icon, SectionHeader } from "@/components/ui";

/* =====================================================================
   PROGRAM KHUSUS — 4 card
   ===================================================================== */
export function Programs() {
  return (
    <section className="bg-beige py-20 md:py-28">
      <Container>
        <SectionHeader
          ko="목적에 맞는 한국어"
          title="Belajar Bahasa Korea Sesuai Tujuan Anda"
          intro="Program khusus untuk kebutuhan yang lebih spesifik, dari percakapan hingga pekerjaan."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {PROGRAMS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/kursus/${p.slug}`}
                className="group flex h-full gap-5 rounded-3xl bg-paper p-6 transition-shadow hover:shadow-soft md:p-8"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy text-paper">
                  <Icon name={p.icon} />
                </span>
                <div>
                  <p lang="ko" className="text-sm font-medium text-coral">{p.ko}</p>
                  <h3 className="mt-1 text-xl font-bold text-navy group-hover:text-coral">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-soft">{p.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
