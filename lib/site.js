/* =====================================================================
   DATA GLOBAL SITUS — dipakai di semua halaman (navbar, footer, kontak)
   Teks dalam [kurung siku] = WAJIB diisi dengan data asli dari client.
   ===================================================================== */

export const SITE = {
  name: "Koreanmirassaem", // [Nama Kursus / Perusahaan]
  description:
    "Platform pembelajaran Bahasa Korea modern yang membantu pelajar Indonesia mengembangkan kemampuan Bahasa Korea secara praktis, mulai dari pemula hingga tingkat lanjut.",
  address: "[Alamat Kursus]",
  email: "[Alamat Email]",
  // Format internasional tanpa "+" (contoh: 6281234567890). Jika kosong, tombol WhatsApp diarahkan ke /kontak.
  whatsapp: "",
  whatsappLabel: "[Nomor WhatsApp]",
  socials: [
    { name: "Instagram", icon: "instagram", label: "[Akun Instagram]", href: "#" },
    { name: "TikTok", icon: "tiktok", label: "[Akun TikTok]", href: "#" },
    { name: "YouTube", icon: "youtube", label: "[Akun YouTube]", href: "#" },
  ],
};

export const whatsappHref = (text = "") =>
  SITE.whatsapp
    ? `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : "/kontak";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/kursus", label: "Kursus" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/metode-belajar", label: "Metode Belajar" },
  { href: "/kontak", label: "Kontak" },
];
