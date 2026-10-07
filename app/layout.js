import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import { SITE } from "@/lib/site";

export const metadata = {
  title: {
    default: "Kursus Bahasa Korea Indonesia | Korean Language Course",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Belajar Bahasa Korea dari pemula hingga lanjutan dengan kursus terstruktur, materi praktis, pengajar berpengalaman, dan pembelajaran fleksibel.",
  keywords: [
    "kursus bahasa Korea", "belajar bahasa Korea", "kursus Korea", "les bahasa Korea",
    "kursus bahasa Korea online", "belajar bahasa Korea online", "les Korea online",
    "kursus Korea untuk pemula", "belajar Hangul", "kursus TOPIK", "les TOPIK",
    "belajar bahasa Korea untuk kerja", "Korean language course Indonesia",
    "Korean course Indonesia", "Korean class Indonesia",
  ],
  openGraph: { type: "website", locale: "id_ID", siteName: SITE.name },
};

export const viewport = { themeColor: "#1d2b4f" };

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-sans">
        <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-paper">
          Langsung ke konten
        </a>
        <Navbar />
        {/* pb-20 memberi ruang untuk sticky CTA di mobile */}
        <main id="konten" className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
