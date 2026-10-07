/* ============ ICON ============ */
const c = (cx, cy, r) => `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const PATHS = {
  sprout: ["M12 21v-9", "M12 12C12 8 9 5 4 5c0 5 3 7 8 7z", "M12 12c0-3 2-6 7-6 0 4-2 6-7 6z"],
  stairs: ["M3 20h5v-5h5v-5h5V5h3"],
  chat: ["M4 5h16v11H9l-5 4V5z", "M8 10h8", "M8 13h5"],
  award: [c(12, 9, 6), "M8.5 13.5 7 22l5-3 5 3-1.5-8.5"],
  user: [c(12, 8, 4), "M4 21a8 8 0 0 1 16 0"],
  clock: [c(12, 12, 9), "M12 7v5l3 2"],
  layers: ["M12 3l9 5-9 5-9-5 9-5z", "M3 13l9 5 9-5", "M3 17.5l9 5 9-5"],
  briefcase: ["M3 8h18v12H3z", "M8 8V5h8v3", "M3 13h18"],
  globe: [c(12, 12, 9), "M3 12h18", "M12 3c3.5 3.5 3.5 14.5 0 18", "M12 3c-3.5 3.5-3.5 14.5 0 18"],
  check: ["M5 12.5l4.5 4.5L19 7.5"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  tv: ["M3 6h18v12H3z", "M8 21h8", "M10 10l4 2-4 2z"],
  cap: ["M2 9l10-5 10 5-10 5-10-5z", "M6 11v5c3 2 9 2 12 0v-5"],
  heart: ["M12 20s-8-5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z"],
  vocab: ["M4 19 9 5l5 14", "M6 14h6", "M16 10h5", "M16 15h5"],
  grammar: ["M4 6h16", "M4 12h10", "M4 18h13"],
  mic: ["M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z", "M5 11a7 7 0 0 0 14 0", "M12 18v3"],
  headphones: ["M4 15v-3a8 8 0 0 1 16 0v3", "M4 15h3v5H4z", "M17 15h3v5h-3z"],
  read: ["M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z", "M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"],
  pen: ["M4 20l4-1L19 8l-3-3L5 16l-1 4z", "M14 7l3 3"],
  pin: ["M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z", c(12, 10, 2.5)],
  mail: ["M3 6h18v12H3z", "M3 7l9 6 9-6"],
  phone: ["M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"],
  instagram: ["M4 4h16v16H4z", c(12, 12, 4), "M17 7h.01"],
  tiktok: ["M14 3v11a4 4 0 1 1-4-4", "M14 3c1 3 3 4.5 6 4.5"],
  youtube: ["M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z", "M10 9l5 3-5 3z"],
  camera: ["M4 7h4l2-2h4l2 2h4v12H4z", c(12, 13, 3.5)],
  calendar: ["M4 5h16v16H4z", "M4 10h16", "M8 3v4", "M16 3v4"],
  monitor: ["M3 4h18v12H3z", "M8 20h8", "M12 16v4"],
  wallet: ["M3 6h16v13H3z", "M15 12h6v4h-6z", "M3 6l13-3v3"],
  menu: ["M4 7h16", "M4 17h16"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  plus: ["M12 5v14", "M5 12h14"],
};

export function Icon({ name, className = "size-6", strokeWidth = 1.8 }) {
  if (name === "hangul") {
    return (
      <span lang="ko" aria-hidden className={`grid place-items-center font-bold leading-none ${className}`}>
        ㄱ
      </span>
    );
  }
  const paths = PATHS[name] ?? [];
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
