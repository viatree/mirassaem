import Link from "next/link";
import { Button, Container } from "@/components/ui";

/* Header halaman detail: breadcrumb, level, judul, CTA */
export default function CourseHeader({ course: c, askHref }) {
  return (
    <section className={`${c.tone} relative overflow-hidden border-b border-line`}>
      <span lang="ko" aria-hidden className="pointer-events-none absolute -bottom-[0.2em] right-0 select-none text-[clamp(6rem,16vw,12rem)] font-bold leading-none text-navy/[0.07]">
        {c.ko}
      </span>
      <Container className="relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-navy">Home</Link> /</li>
            <li><Link href="/kursus" className="hover:text-navy">Kursus</Link> /</li>
            <li aria-current="page" className="font-medium text-navy">{c.title}</li>
          </ol>
        </nav>
        <p className="mt-8 inline-flex rounded-full bg-paper px-3 py-1 text-sm font-semibold text-navy">
          {c.kind === "level" ? `Level ${c.step} • ${c.level}` : c.level}
        </p>
        <h1 className="mt-4 max-w-[22ch] text-[2.25rem] font-bold leading-[1.1] tracking-[-0.025em] text-navy md:text-[3.5rem]">
          Kursus {c.title}
        </h1>
        <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-ink-soft md:text-xl">{c.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`/kontak?kursus=${c.slug}`} variant="coral" size="lg">Daftar Sekarang</Button>
          <Button href={askHref} variant="outline" size="lg">Tanyakan Tentang Kursus</Button>
        </div>
      </Container>
    </section>
  );
}
