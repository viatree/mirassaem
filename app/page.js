/* =====================================================================
   HALAMAN HOME ( / )
   Komponen khusus halaman ini ada di app/_components/
   Komponen yang dipakai ulang ada di components/shared/
   ===================================================================== */
import Hero from "./_components/Hero";
import { IntroHighlights } from "./_components/IntroHighlights";
import { AboutCourse } from "./_components/AboutCourse";
import { Programs } from "./_components/Programs";
import { Audience } from "./_components/Audience";
import { Testimonials } from "./_components/Testimonials";
import { Stats } from "./_components/Stats";

import { LevelPathway } from "@/components/shared/LevelPathway";
import { WhyUs } from "@/components/shared/WhyUs";
import { MethodTimeline } from "@/components/shared/MethodTimeline";
import { Experience } from "@/components/shared/Experience";
import { Skills } from "@/components/shared/Skills";
import { FAQ } from "@/components/shared/FAQ";
import { CTABanner } from "@/components/shared/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroHighlights />
      <AboutCourse />
      <LevelPathway />
      <Programs />
      <WhyUs />
      <MethodTimeline />
      <Experience />
      <Skills />
      <Audience />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTABanner />
    </>
  );
}
