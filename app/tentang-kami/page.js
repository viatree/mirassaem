/* =====================================================================
   HALAMAN TENTANG KAMI ( /tentang-kami )
   Komponen khusus halaman ini ada di app/tentang-kami/_components/
   ===================================================================== */
import Opening from "./_components/Opening";
import VisionMission from "./_components/VisionMission";
import { Teachers } from "./_components/Teachers";
import { PageHero } from "@/components/shared/PageHero";
import { WhyUs } from "@/components/shared/WhyUs";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata = {
  title: "Tentang Kami",
  description:
    "Kami membantu pelajar Indonesia belajar Bahasa Korea dengan percaya diri melalui program terstruktur, materi praktis, dan bimbingan pengajar.",
};

export default function TentangKamiPage() {
  return (
    <>
      <PageHero ko="우리 소개" title="Tentang Kami" />
      <Opening />
      <VisionMission />
      <Teachers />
      <div className="bg-grey">
        <WhyUs />
      </div>
      <div className="pt-20 md:pt-28">
        <CTABanner />
      </div>
    </>
  );
}
