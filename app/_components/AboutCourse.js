import { ABOUT_PATH as PATH } from "../_data";
import { Container, SectionHeader, Visual } from "@/components/ui";

/* =====================================================================
   TENTANG KURSUS
   ===================================================================== */
export function AboutCourse() {
  return (
    <section className="bg-grey py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Visual label="Pengajar & siswa di kelas" ko="배" className="aspect-[4/5] md:aspect-[5/6]" />
        <div>
          <SectionHeader ko="한 걸음씩 배우는 한국어" title="Belajar Bahasa Korea Selangkah demi Selangkah" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p className="font-medium text-ink">
              Belajar bahasa baru seharusnya menjadi pengalaman yang menyenangkan, praktis, dan dapat dicapai.
            </p>
            <p>
              Program kursus dirancang agar peserta dapat membangun kemampuan secara bertahap, mulai dari Hangul dan
              kosakata dasar hingga tata bahasa, percakapan, membaca, menulis, dan kemampuan Bahasa Korea tingkat lanjut.
            </p>
            <p>
              Baik untuk percakapan sehari-hari, memahami budaya Korea, pendidikan, pekerjaan, perjalanan, maupun
              persiapan TOPIK, setiap program memiliki jalur pembelajaran yang jelas.
            </p>
          </div>
          <ol aria-label="Urutan belajar" className="mt-8 flex flex-wrap items-center gap-2">
            {PATH.map((p, i) => (
              <li key={p} className="flex items-center gap-2">
                <span lang="ko" className="rounded-full bg-paper px-4 py-2 font-semibold text-navy shadow-soft">{p}</span>
                {i < PATH.length - 1 && <span aria-hidden className="h-px w-4 bg-navy/30" />}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
