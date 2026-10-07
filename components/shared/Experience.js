import { EXPERIENCE } from "@/lib/content";
import { Container, SectionHeader } from "@/components/ui";

/* =====================================================================
   PENGALAMAN BELAJAR
   ===================================================================== */
export function Experience() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
        <div>
          <SectionHeader ko="단어 암기만이 아닙니다" title="Bukan Sekadar Menghafal Kosakata" />
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Pembelajaran menggabungkan dasar Bahasa Korea dengan komunikasi praktis sehingga peserta tidak hanya
            memahami apa yang harus dikatakan, tetapi juga bagaimana dan kapan menggunakannya.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {EXPERIENCE.map(([ko, id], i) => (
            <li
              key={id}
              className={`flex aspect-square flex-col justify-between rounded-2xl p-4 ${
                i % 3 === 0 ? "bg-navy text-paper" : i % 3 === 1 ? "bg-beige text-navy" : "bg-coral-soft text-navy"
              }`}
            >
              <span lang="ko" className="text-2xl font-bold md:text-[1.7rem]">{ko}</span>
              <span className="text-sm font-medium opacity-80">{id}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
