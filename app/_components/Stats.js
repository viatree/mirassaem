import { STATS } from "../_data";
import { Container } from "@/components/ui";

/* =====================================================================
   STATISTIK — hanya tampil jika STATS diisi dengan data valid
   ===================================================================== */
export function Stats() {
  if (STATS.length === 0) return null;
  return (
    <section className="border-y border-line py-14">
      <Container>
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-4xl font-bold tracking-tight text-navy md:text-5xl">{s.value}</dd>
              <dd className="mt-1 font-medium text-ink-soft">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
