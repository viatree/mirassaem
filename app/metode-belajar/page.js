/* =====================================================================
   HALAMAN METODE BELAJAR ( /metode-belajar )
   Halaman ini menyusun section dari components/shared/
   ===================================================================== */
import { PageHero } from "@/components/shared/PageHero";
import { MethodTimeline } from "@/components/shared/MethodTimeline";
import { Experience } from "@/components/shared/Experience";
import { Skills } from "@/components/shared/Skills";
import { LevelPathway } from "@/components/shared/LevelPathway";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata = {
  title: "Metode Belajar",
  description:
    "Pelajari, berlatih, terapkan, dan tingkatkan. Begini cara kami membantu Anda belajar Bahasa Korea secara bertahap dan praktis.",
};

export default function MetodeBelajarPage() {
  return (
    <>
      <PageHero
        ko="학습 방법"
        title="Metode Pembelajaran"
        intro="Empat langkah sederhana yang diulang di setiap level, dari Hangul pertama hingga percakapan tingkat lanjut."
      />
      <MethodTimeline dark={false} />
      <div className="bg-beige">
        <Experience />
      </div>
      <Skills />
      <LevelPathway
        title="Jalur Belajar dari Pemula hingga Lanjutan"
        intro="Setiap level membangun kemampuan dari level sebelumnya. Belum tahu harus mulai dari mana? Konsultasikan dengan kami."
      />
      <CTABanner />
    </>
  );
}
