import { Button, Container, Visual } from "@/components/ui";

/* ============ HERO ============ */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid gap-12 pb-20 pt-12 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14 md:pb-28 md:pt-20">
        <div>
          <p lang="ko" className="inline-flex items-center gap-2 rounded-full bg-coral-soft px-4 py-1.5 text-[15px] font-medium text-coral-deep">
            한국어를 함께 배워요
          </p>
          <h1 className="mt-6 text-[clamp(2.25rem,5.4vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.03em] text-navy">
            Belajar Bahasa Korea dengan Percaya Diri
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft md:text-xl">
            Pelajari Bahasa Korea mulai dari Hangul hingga percakapan tingkat lanjut melalui pembelajaran yang
            terstruktur, materi praktis, dan bimbingan yang dirancang untuk pelajar Indonesia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/kursus" size="lg">Lihat Kursus</Button>
            <Button href="/kontak" variant="outline" size="lg">Mulai Belajar</Button>
          </div>
        </div>

        {/* Ganti Visual dengan foto hero client (kelas, guru & siswa, atau suasana Seoul) */}
        <div className="relative">
          <Visual label="Kelas Bahasa Korea" ko="한" className="aspect-[4/5] md:aspect-[5/6]" />
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-paper p-5 shadow-soft sm:left-auto sm:right-[-12px] sm:w-72 md:-left-10 md:right-auto">
            <p lang="ko" className="text-2xl font-bold text-navy">안녕하세요^^</p>
            <p className="mt-1 text-ink-soft">Artinya “halo”, kalimat pertama yang Anda pelajari di kelas pemula.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
