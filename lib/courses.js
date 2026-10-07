/* =====================================================================
   DATA KURSUS — dipakai di Home, Kursus, Detail Kursus, dan Kontak
   ===================================================================== */

/* ---------- Kursus ----------
   kind "level"   = jalur bertahap (Pemula → Lanjutan)
   kind "program" = program khusus sesuai tujuan
   filter         = kategori filter di halaman Kursus
   Kurikulum di bawah adalah DRAFT struktur; sesuaikan dengan silabus client. */
const TBD = (x) => `[${x}]`;

export const COURSES = [
  {
    slug: "pemula",
    kind: "level",
    step: 1,
    level: "Pemula",
    filter: "Pemula",
    ko: "입문",
    title: "Bahasa Korea untuk Pemula",
    tone: "bg-beige",
    description:
      "Mulai dari dasar dengan mempelajari Hangul, pelafalan, kosakata, dan ekspresi sehari-hari.",
    forWho: [
      "Pemula yang benar-benar baru",
      "Peserta yang belum pernah belajar Bahasa Korea",
      "Peserta yang ingin menguasai Hangul",
    ],
    learn: ["Hangul & pelafalan", "Kosakata dasar", "Salam & perkenalan diri", "Ekspresi sehari-hari"],
    curriculum: [
      { title: "Mengenal Hangul", text: "Vokal, konsonan, dan cara menyusun suku kata." },
      { title: "Pelafalan & batchim", text: "Aturan bunyi akhir dan perubahan bunyi dasar." },
      { title: "Salam & perkenalan", text: "Menyapa, memperkenalkan diri, dan sopan santun dasar." },
      { title: "Angka & waktu", text: "Dua sistem angka Korea, jam, tanggal, dan harga." },
      { title: "Ekspresi sehari-hari", text: "Kalimat pendek untuk situasi yang sering ditemui." },
    ],
    cta: "Lihat Kursus Pemula",
  },
  {
    slug: "dasar",
    kind: "level",
    step: 2,
    level: "Dasar",
    filter: "Dasar",
    ko: "초급",
    title: "Bahasa Korea Dasar",
    tone: "bg-navy-soft",
    description:
      "Bangun dasar kemampuan Bahasa Korea melalui kosakata, tata bahasa, struktur kalimat, dan percakapan dasar.",
    forWho: ["Peserta yang sudah memahami Hangul", "Peserta dengan pengetahuan dasar Bahasa Korea"],
    learn: ["Struktur kalimat", "Partikel & konjugasi", "Kosakata tematik", "Percakapan dasar"],
    curriculum: [
      { title: "Struktur kalimat", text: "Pola subjek–objek–predikat dan partikel utama." },
      { title: "Konjugasi kata kerja", text: "Bentuk sopan, lampau, dan akan datang." },
      { title: "Kosakata tematik", text: "Keluarga, makanan, transportasi, dan kegiatan harian." },
      { title: "Percakapan dasar", text: "Bertanya, menjawab, memesan, dan membuat janji." },
    ],
    cta: "Lihat Kursus Dasar",
  },
  {
    slug: "menengah",
    kind: "level",
    step: 3,
    level: "Menengah",
    filter: "Menengah",
    ko: "중급",
    title: "Bahasa Korea Menengah",
    tone: "bg-coral-soft",
    description:
      "Kembangkan kemampuan tata bahasa, kosakata, membaca, mendengarkan, dan percakapan.",
    forWho: ["Peserta dengan kemampuan dasar", "Peserta yang ingin berkomunikasi lebih natural"],
    learn: ["Tata bahasa menengah", "Membaca teks pendek", "Listening", "Percakapan natural"],
    curriculum: [
      { title: "Tata bahasa menengah", text: "Kalimat majemuk, sebab-akibat, dan pengandaian." },
      { title: "Membaca", text: "Memahami artikel pendek, pesan, dan pengumuman." },
      { title: "Mendengarkan", text: "Dialog dengan kecepatan bicara yang natural." },
      { title: "Percakapan", text: "Menyampaikan pendapat dan bercerita pengalaman." },
    ],
    cta: "Lihat Kursus Menengah",
  },
  {
    slug: "lanjutan",
    kind: "level",
    step: 4,
    level: "Lanjutan",
    filter: "Lanjutan",
    ko: "고급",
    title: "Bahasa Korea Lanjutan",
    tone: "bg-grey",
    description:
      "Tingkatkan kemampuan berbicara, tata bahasa kompleks, kosakata, pemahaman bacaan, dan percakapan tingkat lanjut.",
    forWho: [
      "Peserta tingkat menengah",
      "Peserta tingkat lanjut",
      "Peserta yang ingin meningkatkan kemampuan Bahasa Korea",
    ],
    learn: ["Tata bahasa kompleks", "Kosakata abstrak", "Bacaan panjang", "Diskusi & presentasi"],
    curriculum: [
      { title: "Tata bahasa kompleks", text: "Ekspresi formal, nuansa, dan gaya bahasa tulis." },
      { title: "Kosakata lanjutan", text: "Topik sosial, budaya, dan isu terkini." },
      { title: "Pemahaman bacaan", text: "Teks panjang, opini, dan berita." },
      { title: "Berbicara tingkat lanjut", text: "Diskusi, debat ringan, dan presentasi." },
    ],
    cta: "Lihat Kursus Lanjutan",
  },
  {
    slug: "percakapan",
    kind: "program",
    level: "Semua level",
    filter: "Percakapan",
    ko: "일상 회화",
    icon: "chat",
    title: "Percakapan Sehari-hari",
    tone: "bg-beige",
    description: "Latih Bahasa Korea yang dapat digunakan dalam situasi kehidupan sehari-hari.",
    forWho: ["Peserta yang ingin lebih lancar berbicara", "Peserta yang akan bepergian ke Korea"],
    learn: ["Ekspresi harian", "Pelafalan & intonasi", "Role-play situasi nyata", "Bahasa informal"],
    curriculum: [
      { title: "Situasi sehari-hari", text: "Belanja, restoran, transportasi, dan bertanya arah." },
      { title: "Bahasa sopan & informal", text: "Kapan memakai 존댓말 dan 반말." },
      { title: "Role-play", text: "Simulasi percakapan dengan umpan balik pengajar." },
    ],
    cta: "Lihat Kursus Percakapan",
  },
  {
    slug: "topik",
    kind: "program",
    level: "Dasar – Lanjutan",
    filter: "TOPIK",
    ko: "TOPIK 준비",
    icon: "award",
    title: "Persiapan TOPIK",
    tone: "bg-navy-soft",
    description:
      "Persiapkan diri menghadapi TOPIK melalui pembelajaran kosakata, tata bahasa, membaca, mendengarkan, dan latihan soal.",
    forWho: ["Peserta yang akan mengikuti TOPIK I atau TOPIK II", "Calon pelajar dan pekerja di Korea"],
    learn: ["Kosakata TOPIK", "Strategi membaca", "Strategi listening", "Latihan soal & simulasi"],
    curriculum: [
      { title: "Mengenal format TOPIK", text: "Struktur ujian, penilaian, dan target level." },
      { title: "Kosakata & tata bahasa", text: "Pola yang paling sering muncul di soal." },
      { title: "Reading & listening", text: "Strategi menjawab dan manajemen waktu." },
      { title: "Writing (TOPIK II)", text: "Menulis jawaban esai sesuai kriteria penilaian." },
      { title: "Simulasi ujian", text: "Latihan soal lengkap dan pembahasan." },
    ],
    cta: "Lihat Kursus TOPIK",
  },
  {
    slug: "pekerjaan",
    kind: "program",
    level: "Dasar – Menengah",
    filter: null,
    ko: "직장 한국어",
    icon: "briefcase",
    title: "Bahasa Korea untuk Pekerjaan",
    tone: "bg-coral-soft",
    description:
      "Kembangkan kemampuan Bahasa Korea untuk komunikasi di lingkungan profesional dan pekerjaan.",
    forWho: ["Calon pekerja di Korea", "Karyawan di perusahaan Korea"],
    learn: ["Bahasa formal kantor", "Email & pesan kerja", "Rapat & presentasi", "Etika kerja Korea"],
    curriculum: [
      { title: "Bahasa formal", text: "Tingkat kesopanan dan sapaan di tempat kerja." },
      { title: "Komunikasi tertulis", text: "Email, laporan singkat, dan pesan kerja." },
      { title: "Komunikasi lisan", text: "Rapat, telepon, dan presentasi." },
      { title: "Budaya kerja", text: "Hierarki, etika, dan kebiasaan di kantor Korea." },
    ],
    cta: "Lihat Kursus Pekerjaan",
  },
  {
    slug: "budaya",
    kind: "program",
    level: "Semua level",
    filter: null,
    ko: "한국어와 문화",
    icon: "globe",
    title: "Bahasa & Budaya Korea",
    tone: "bg-grey",
    description:
      "Pelajari Bahasa Korea sekaligus memahami budaya, ekspresi, etika, dan kehidupan sehari-hari di Korea.",
    forWho: ["Penggemar K-Drama & K-Pop", "Peserta yang ingin memahami budaya Korea"],
    learn: ["Ekspresi budaya", "Etika & sopan santun", "Kehidupan di Korea", "Bahasa dalam drama & lagu"],
    curriculum: [
      { title: "Ekspresi & konteks budaya", text: "Ungkapan yang sering muncul di drama dan keseharian." },
      { title: "Etika", text: "Sopan santun, makan bersama, dan hubungan senior–junior." },
      { title: "Kehidupan di Korea", text: "Hari raya, makanan, dan kebiasaan sehari-hari." },
    ],
    cta: "Lihat Kursus Budaya",
  },
].map((c) => ({
  // Info yang harus diisi client untuk setiap kursus:
  duration: TBD("Durasi kursus"),
  format: TBD("Online / Offline"),
  schedule: TBD("Jadwal kelas"),
  teacher: TBD("Nama pengajar"),
  price: null, // contoh: "Rp 750.000 / bulan" — biarkan null jika belum tersedia
  ...c,
}));

export const LEVELS = COURSES.filter((c) => c.kind === "level");
export const PROGRAMS = COURSES.filter((c) => c.kind === "program");
export const getCourse = (slug) => COURSES.find((c) => c.slug === slug);
export const COURSE_FILTERS = ["Semua", "Pemula", "Dasar", "Menengah", "Lanjutan", "Percakapan", "TOPIK"];
