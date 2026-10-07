import { Button, Icon } from "@/components/ui";

/* Kartu ringkasan di samping (sticky di desktop) */
export default function CourseSummary({ course: c, facts, askHref }) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-3xl border border-line bg-paper p-6 shadow-soft">
        <p lang="ko" className="text-sm font-medium text-coral">{c.ko}</p>
        <p className="mt-1 text-xl font-bold text-navy">{c.title}</p>
        <dl className="mt-5 space-y-3 text-[15px]">
          {facts.map(([icon, label, value]) => (
            <div key={label} className="flex gap-3">
              <Icon name={icon} className="mt-0.5 size-[18px] shrink-0 text-ink-soft" />
              <div>
                <dt className="text-ink-soft">{label}</dt>
                <dd className="font-semibold text-navy">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
        <div className="mt-6 grid gap-2">
          <Button href={`/kontak?kursus=${c.slug}`} variant="coral" className="w-full">Daftar Sekarang</Button>
          <Button href={askHref} variant="outline" className="w-full">Tanyakan Tentang Kursus</Button>
        </div>
      </div>
    </aside>
  );
}
