import { Icon } from "@/components/ui";
import { STEPS } from "@/lib/content";
import CourseBlock from "./CourseBlock";

/* Isi utama halaman detail kursus */
export default function CourseContent({ course: c, facts }) {
  return (
    <div>
      <CourseBlock id="tentang" title="Tentang Kursus">
        <p className="max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          {c.description} Materi disusun bertahap dan dilengkapi latihan, sehingga Anda bisa langsung memakai apa yang
          dipelajari.
        </p>
      </CourseBlock>

      <CourseBlock id="materi" title="Apa yang Akan Dipelajari">
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.learn.map((m) => (
            <li key={m} className="flex items-center gap-3 rounded-2xl bg-grey px-4 py-3 font-medium">
              <Icon name="check" className="size-5 shrink-0 text-coral" strokeWidth={2.4} />
              {m}
            </li>
          ))}
        </ul>
      </CourseBlock>

      <CourseBlock id="kurikulum" title="Kurikulum">
        <ol className="space-y-3">
          {c.curriculum.map((m, i) => (
            <li key={m.title} className="flex gap-4 rounded-2xl border border-line p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-paper">{i + 1}</span>
              <div>
                <h3 className="font-bold text-navy">{m.title}</h3>
                <p className="mt-1 text-ink-soft">{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </CourseBlock>

      <CourseBlock id="cocok" title="Siapa yang Cocok Mengikuti">
        <ul className="space-y-2.5 text-lg">
          {c.forWho.map((w) => (
            <li key={w} className="flex gap-3">
              <Icon name="check" className="mt-1 size-5 shrink-0 text-coral" strokeWidth={2.4} />
              {w}
            </li>
          ))}
        </ul>
      </CourseBlock>

      <CourseBlock id="metode" title="Metode Pembelajaran">
        <ol className="grid gap-4 sm:grid-cols-2">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-beige p-5">
              <p className="text-sm font-semibold text-coral">
                {String(i + 1).padStart(2, "0")} <span lang="ko" className="font-normal text-ink-soft">{s.ko}</span>
              </p>
              <h3 className="mt-1 font-bold text-navy">{s.title}</h3>
              <p className="mt-1 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </CourseBlock>

      <CourseBlock id="info" title="Durasi, Jadwal & Biaya">
        <dl className="divide-y divide-line rounded-2xl border border-line">
          {facts.map(([icon, label, value]) => (
            <div key={label} className="flex items-center gap-4 px-5 py-4">
              <Icon name={icon} className="size-5 shrink-0 text-coral" />
              <dt className="w-36 shrink-0 text-ink-soft">{label}</dt>
              <dd className="font-semibold text-navy">{value}</dd>
            </div>
          ))}
        </dl>
      </CourseBlock>

      <CourseBlock id="pengajar" title="Pengajar">
        <div className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-navy/20 p-5 text-ink-soft">
          <span className="size-16 shrink-0 rounded-full bg-grey" />
          <div>
            <p className="font-semibold">{c.teacher}</p>
            <p className="text-sm">[Posisi • Pengalaman mengajar • Spesialisasi]</p>
          </div>
        </div>
      </CourseBlock>
    </div>
  );
}
