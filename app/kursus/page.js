/* =====================================================================
   HALAMAN KURSUS ( /kursus )
   Komponen khusus halaman ini ada di app/kursus/_components/
   ===================================================================== */
import CourseFilter from "./_components/CourseFilter";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/shared/PageHero";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata = {
  title: "Kursus Bahasa Korea",
  description:
    "Pilih kursus Bahasa Korea sesuai level dan tujuan: Pemula, Dasar, Menengah, Lanjutan, Percakapan, dan Persiapan TOPIK.",
};

export default function KursusPage() {
  return (
    <>
      <PageHero
        ko="한국어 강좌"
        title="Kursus Bahasa Korea Kami"
        intro="Temukan kursus Bahasa Korea yang sesuai dengan kemampuan dan tujuan belajar Anda."
      />
      <section className="py-14 md:py-20">
        <Container>
          <CourseFilter />
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
