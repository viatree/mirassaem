/* ============ SECTION HEADER ============
   `ko` = terjemahan Korea kecil di atas judul (elemen Korea yang subtle). */
export function SectionHeader({ ko, title, intro, align = "left", invert = false, className = "" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {ko && (
        <p lang="ko" className={`mb-3 text-[15px] font-medium ${invert ? "text-coral-soft/80" : "text-coral"}`}>
          {ko}
        </p>
      )}
      <h2 className={`text-[2rem] font-bold leading-[1.15] tracking-[-0.02em] md:text-[2.75rem] ${invert ? "text-paper" : "text-navy"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${invert ? "text-paper/75" : "text-ink-soft"}`}>{intro}</p>
      )}
    </div>
  );
}
