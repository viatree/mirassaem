import { Container, Visual } from "@/components/ui";
import { OPENING } from "../_data";

export default function Opening() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h2 className="text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] text-navy md:text-[2.75rem]">
            {OPENING.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {OPENING.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <Visual label="Suasana kelas / tim pengajar" ko="함" className="aspect-[4/3]" />
      </Container>
    </section>
  );
}
