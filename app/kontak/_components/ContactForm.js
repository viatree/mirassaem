"use client";

import { useState } from "react";
import { COURSES } from "@/lib/courses";
import { SITE } from "@/lib/site";
import { CURRENT_LEVELS } from "../_data";

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-navy focus:ring-4 focus:ring-navy/10";

/* Belum ada backend: saat dikirim, pesan disusun lalu dibuka di WhatsApp
   (jika SITE.whatsapp diisi). Ganti handleSubmit dengan API route / form service bila perlu. */
export default function ContactForm({ defaultCourse = "" }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      `Halo ${SITE.name}, saya ingin bertanya tentang kursus.`,
      "",
      `Nama: ${f.get("nama")}`,
      `Email: ${f.get("email")}`,
      `WhatsApp: ${f.get("whatsapp")}`,
      `Kursus yang diminati: ${f.get("kursus")}`,
      `Level saat ini: ${f.get("level")}`,
      "",
      `${f.get("pesan")}`,
    ].join("\n");

    if (SITE.whatsapp) {
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-navy-soft p-8">
        <p lang="ko" className="font-medium text-coral">감사합니다!</p>
        <h3 className="mt-2 text-2xl font-bold text-navy">Pesan terkirim</h3>
        <p className="mt-2 leading-relaxed text-ink-soft">
          Tim kami akan menghubungi Anda melalui WhatsApp atau email untuk membantu memilih kursus yang sesuai.
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 font-semibold text-navy underline decoration-coral decoration-2 underline-offset-4">
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 sm:col-span-2">
        <span className="font-semibold text-navy">Nama</span>
        <input name="nama" required autoComplete="name" className={field} placeholder="Nama lengkap" />
      </label>
      <label className="grid gap-2">
        <span className="font-semibold text-navy">Email</span>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="nama@email.com" />
      </label>
      <label className="grid gap-2">
        <span className="font-semibold text-navy">Nomor WhatsApp</span>
        <input name="whatsapp" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="08xx xxxx xxxx" />
      </label>
      <label className="grid gap-2">
        <span className="font-semibold text-navy">Kursus yang Diminati</span>
        <select name="kursus" required defaultValue={defaultCourse} className={field}>
          <option value="" disabled>Pilih kursus</option>
          {COURSES.map((c) => <option key={c.slug} value={c.title}>{c.title}</option>)}
          <option value="Belum tahu">Belum tahu, butuh saran</option>
        </select>
      </label>
      <label className="grid gap-2">
        <span className="font-semibold text-navy">Level Bahasa Korea Saat Ini</span>
        <select name="level" required defaultValue="" className={field}>
          <option value="" disabled>Pilih level</option>
          {CURRENT_LEVELS.map((l) => <option key={l}>{l}</option>)}
        </select>
      </label>
      <label className="grid gap-2 sm:col-span-2">
        <span className="font-semibold text-navy">Pesan</span>
        <textarea name="pesan" rows={5} className={`${field} resize-y`} placeholder="Tuliskan pertanyaan Anda tentang kursus, jadwal, atau pendaftaran" />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="w-full rounded-full bg-coral px-7 py-4 font-semibold text-paper hover:bg-coral-deep sm:w-auto">
          Kirim Pesan
        </button>
      </div>
    </form>
  );
}
