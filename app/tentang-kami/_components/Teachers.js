import { TEACHERS, TEACHER_CATEGORIES } from "../_data";
import { Container, SectionHeader, Visual } from "@/components/ui";

/* =====================================================================
   PENGAJAR — dipakai di halaman Tentang Kami
   ===================================================================== */
export function Teachers() {
  const hasData = TEACHERS.length > 0;
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader ko="선생님 소개" title="Pengajar Kami" intro={`Kategori pengajar: ${TEACHER_CATEGORIES.join(", ")}.`} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hasData
            ? TEACHERS.map((t) => (
                <li key={t.name} className="overflow-hidden rounded-3xl border border-line bg-paper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photo} alt={t.name} className="aspect-[4/3] w-full object-cover" />
                  <div className="p-6">
                    <p className="text-sm font-medium text-coral">{t.category}</p>
                    <h3 className="mt-1 text-xl font-bold text-navy">{t.name}</h3>
                    <p className="text-ink-soft">{t.position}</p>
                    <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div><dt className="text-ink-soft">Pengalaman</dt><dd className="font-semibold">{t.experience}</dd></div>
                      <div><dt className="text-ink-soft">Spesialisasi</dt><dd className="font-semibold">{t.specialty}</dd></div>
                    </dl>
                    <p className="mt-4 leading-relaxed text-ink-soft">{t.bio}</p>
                  </div>
                </li>
              ))
            : TEACHER_CATEGORIES.slice(0, 3).map((cat) => (
                <li key={cat} className="overflow-hidden rounded-3xl border-2 border-dashed border-navy/20">
                  <Visual label="Pengajar" ko="선" tone="bg-grey" className="aspect-[4/3] rounded-none" />
                  <div className="space-y-1 p-6 text-ink-soft">
                    <p className="text-sm font-medium text-coral">{cat}</p>
                    <p className="text-lg font-semibold">[Nama pengajar]</p>
                    <p>[Posisi] • [Pengalaman mengajar]</p>
                    <p>[Spesialisasi]</p>
                    <p className="pt-2 text-sm">[Biografi singkat]</p>
                  </div>
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
}
