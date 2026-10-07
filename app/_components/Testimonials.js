import { TESTIMONIALS } from "../_data";
import { Container, SectionHeader } from "@/components/ui";

/* =====================================================================
   TESTIMONI — hanya data asli. Placeholder tampil selama data kosong.
   ===================================================================== */
export function Testimonials() {
  const hasData = TESTIMONIALS.length > 0;
  return (
    <section className="bg-beige py-20 md:py-28">
      <Container>
        <SectionHeader ko="수강생 후기" title="Apa Kata Siswa Kami?" />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {hasData
            ? TESTIMONIALS.map((t) => (
                <li key={t.name}>
                  <figure className="flex h-full flex-col rounded-3xl bg-paper p-7">
                    <span className="self-start rounded-full bg-navy-soft px-3 py-1 text-sm font-semibold text-navy">
                      {t.level}
                    </span>
                    <blockquote className="mt-5 text-lg leading-relaxed">“{t.quote}”</blockquote>
                    <figcaption className="mt-auto flex items-center gap-3 pt-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.photo} alt="" className="size-12 rounded-full object-cover" />
                      <div>
                        <p className="font-bold text-navy">{t.name}</p>
                        <p className="text-sm text-ink-soft">{t.meta}</p>
                      </div>
                    </figcaption>
                  </figure>
                </li>
              ))
            : [1, 2, 3].map((n) => (
                <li key={n} className="flex flex-col rounded-3xl border-2 border-dashed border-navy/20 bg-paper/60 p-7">
                  <span className="self-start rounded-full bg-grey px-3 py-1 text-sm text-ink-soft">[Level kursus]</span>
                  <p className="mt-5 text-lg leading-relaxed text-ink-soft">[Testimoni asli dari siswa]</p>
                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <span className="size-12 rounded-full bg-grey" />
                    <div className="text-sm text-ink-soft">
                      <p className="font-semibold">[Nama siswa]</p>
                      <p>[Usia / pekerjaan]</p>
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
}
