/* =====================================================================
   HALAMAN KONTAK ( /kontak )
   /kontak?kursus=pemula → kursus otomatis terpilih di form
   Komponen khusus halaman ini ada di app/kontak/_components/
   ===================================================================== */
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";
import { CONTACT_INTRO } from "./_data";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { getCourse } from "@/lib/courses";

export const metadata = {
  title: "Kontak",
  description: "Punya pertanyaan mengenai kursus, level, jadwal, atau pendaftaran? Hubungi tim kami.",
};

export default async function KontakPage({ searchParams }) {
  const { kursus } = await searchParams;
  const preselect = getCourse(kursus)?.title ?? "";

  return (
    <>
      <PageHero ko="함께 시작해요" title="Mulai Perjalanan Belajar Bahasa Korea Anda" intro={CONTACT_INTRO} />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <ContactInfo />
          <div className="rounded-[28px] border border-line bg-paper p-6 shadow-soft md:p-10">
            <h2 className="text-2xl font-bold text-navy md:text-3xl">Kirim Pertanyaan</h2>
            <p className="mb-8 mt-2 text-ink-soft">Isi form di bawah, kami bantu pilihkan kelas yang sesuai.</p>
            <ContactForm defaultCourse={preselect} />
          </div>
        </Container>
      </section>

      <div className="bg-grey">
        <FAQ />
      </div>
    </>
  );
}
