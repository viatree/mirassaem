/* Satu blok konten di halaman detail (Tentang Kursus, Kurikulum, dst.) */
export default function CourseBlock({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0">
      <h2 id={`${id}-h`} className="text-2xl font-bold tracking-tight text-navy md:text-[1.75rem]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
