import Link from "next/link";

/* Sticky CTA di mobile (sesuai brief). Disembunyikan di desktop. */
export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 pt-3 backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <Link href="/kursus" className="flex-1 rounded-full border-2 border-navy/20 py-3 text-center text-[15px] font-semibold text-navy">
          Lihat Kursus
        </Link>
        <Link href="/kontak" className="flex-1 rounded-full bg-navy py-3 text-center text-[15px] font-semibold text-paper">
          Mulai Belajar
        </Link>
      </div>
    </div>
  );
}
