import { Icon } from "@/components/ui";
import { SITE, whatsappHref } from "@/lib/site";

const isFilled = (v) => v && !v.startsWith("[");

export default function ContactInfo() {
  const info = [
    { icon: "pin", label: "Lokasi", value: SITE.address },
    { icon: "mail", label: "Email", value: SITE.email, href: isFilled(SITE.email) ? `mailto:${SITE.email}` : undefined },
    { icon: "phone", label: "WhatsApp", value: SITE.whatsappLabel, href: SITE.whatsapp ? whatsappHref() : undefined },
    ...SITE.socials.slice(0, 2).map((s) => ({
      icon: s.icon,
      label: s.name,
      value: s.label,
      href: s.href !== "#" ? s.href : undefined,
    })),
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy md:text-3xl">Informasi Kontak</h2>
      <ul className="mt-6 divide-y divide-line border-y border-line">
        {info.map((i) => {
          const content = (
            <>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-soft text-navy">
                <Icon name={i.icon} className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-ink-soft">{i.label}</span>
                <span className="font-semibold text-navy">{i.value}</span>
              </span>
            </>
          );
          return (
            <li key={i.label}>
              {i.href ? (
                <a
                  href={i.href}
                  className="flex items-center gap-4 py-4 hover:text-coral"
                  target={i.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-4 py-4">{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
