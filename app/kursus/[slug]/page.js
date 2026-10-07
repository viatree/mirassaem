/* =====================================================================
   HALAMAN DETAIL KURSUS ( /kursus/[slug] )
   Contoh: /kursus/pemula, /kursus/topik
   Komponen khusus halaman ini ada di app/kursus/[slug]/_components/
   ===================================================================== */
import { notFound } from "next/navigation";
import CourseHeader from "./_components/CourseHeader";
import CourseContent from "./_components/CourseContent";
import CourseSummary from "./_components/CourseSummary";
import { Container } from "@/components/ui";
import { FAQ } from "@/components/shared/FAQ";
import { CTABanner } from "@/components/shared/CTABanner";
import { COURSES, getCourse } from "@/lib/courses";
import { FAQS } from "@/lib/content";
import { whatsappHref } from "@/lib/site";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = getCourse(slug);
  if (!c) return {};
  return { title: `Kursus ${c.title}`, description: c.description };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const facts = [
    ["clock", "Durasi Kursus", course.duration],
    ["monitor", "Format Kelas", course.format],
    ["calendar", "Jadwal Kelas", course.schedule],
    ["user", "Pengajar", course.teacher],
    ["wallet", "Biaya Kursus", course.price ?? "[Biaya kursus]"],
  ];
  const askHref = whatsappHref(`Halo, saya ingin bertanya tentang Kursus ${course.title}.`);

  return (
    <>
      <CourseHeader course={course} askHref={askHref} />

      <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_340px] lg:gap-16">
        <CourseContent course={course} facts={facts} />
        <CourseSummary course={course} facts={facts} askHref={askHref} />
      </Container>

      <div className="bg-grey">
        <FAQ items={FAQS.filter((_, i) => [0, 2, 4, 6, 7].includes(i))} />
      </div>
      <div className="pt-20 md:pt-28">
        <CTABanner />
      </div>
    </>
  );
}
