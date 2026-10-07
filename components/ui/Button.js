import Link from "next/link";

/* ============ BUTTON ============ */
const BTN = {
  primary: "bg-navy text-paper hover:bg-navy-deep",
  coral: "bg-coral text-paper hover:bg-coral-deep",
  outline: "border-2 border-navy/20 text-navy hover:border-navy bg-paper",
  light: "bg-paper text-navy hover:bg-beige",
  outlineLight: "border-2 border-paper/30 text-paper hover:border-paper",
};
const SIZE = {
  md: "px-5 py-3 text-[15px]",
  lg: "px-7 py-4 text-base",
  sm: "px-4 py-2 text-sm",
};

export function Button({ href, variant = "primary", size = "md", className = "", children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors ${BTN[variant]} ${SIZE[size]} ${className}`;
  if (href?.startsWith("http")) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
