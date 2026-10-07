import { Container } from "@/components/ui";
import { VISION_MISSION } from "../_data";

export default function VisionMission() {
  return (
    <section className="bg-navy py-20 text-paper md:py-28">
      <Container className="grid gap-6 md:grid-cols-2">
        {VISION_MISSION.map((b) => (
          <article key={b.title} className="rounded-3xl border border-paper/15 p-8 md:p-10">
            <p lang="ko" className="font-medium text-coral-soft">{b.ko}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">{b.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/80">{b.text}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
