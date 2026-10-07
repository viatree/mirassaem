import Link from "next/link";
import { Icon } from "@/components/ui";

/* Course card untuk halaman Kursus — berisi semua field yang diminta brief */
export default function CourseCard({ course: c }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper">
      <div className={`${c.tone} relative flex h-32 items-start justify-between overflow-hidden p-5`}>
        <span className="rounded-full bg-paper px-3 py-1 text-sm font-semibold text-navy">{c.level}</span>
        <span lang="ko" aria-hidden className="absolute -bottom-3 right-4 text-6xl font-bold leading-none text-navy/15">
          {c.ko}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold leading-snug text-navy">{c.title}</h3>
        <p className="mt-2 leading-relaxed text-ink-soft">{c.description}</p>

        <dl className="mt-5 space-y-2 text-[15px]">
          {[
            ["clock", "Durasi", c.duration],
            ["monitor", "Format", c.format],
            ["user", "Pengajar", c.teacher],
          ].map(([icon, label, value]) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon name={icon} className="size-[18px] shrink-0 text-coral" />
              <dt className="sr-only">{label}</dt>
              <dd className="text-ink-soft">{value}</dd>
            </div>
          ))}
        </dl>

        <ul aria-label="Materi" className="mb-6 mt-5 flex flex-wrap gap-1.5">
          {c.learn.slice(0, 3).map((m) => (
            <li key={m} className="rounded-full bg-grey px-3 py-1 text-sm text-ink">{m}</li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-5">
          <p className="font-semibold text-navy">{c.price ?? <span className="font-medium text-ink-soft">Info biaya via konsultasi</span>}</p>
          <Link
            href={`/kursus/${c.slug}`}
            className="shrink-0 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-paper hover:bg-navy-deep"
            aria-label={`Lihat kursus ${c.title}`}
          >
            Lihat Kursus
          </Link>
        </div>
      </div>
    </article>
  );
}
