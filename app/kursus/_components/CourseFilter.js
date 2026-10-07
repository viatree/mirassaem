"use client";

import { useState } from "react";
import { COURSES, COURSE_FILTERS } from "@/lib/courses";
import CourseCard from "./CourseCard";

export default function CourseFilter() {
  const [active, setActive] = useState("Semua");
  const list = active === "Semua" ? COURSES : COURSES.filter((c) => c.filter === active);

  return (
    <div>
      <div role="group" aria-label="Filter kursus" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {COURSE_FILTERS.map((f) => {
          const on = f === active;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors ${
                on ? "bg-navy text-paper" : "bg-grey text-ink hover:bg-navy-soft"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-6 text-ink-soft">
        Menampilkan <strong className="text-navy">{list.length}</strong> kursus
        {active !== "Semua" && <> untuk kategori <strong className="text-navy">{active}</strong></>}
      </p>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <li key={c.slug}>
            <CourseCard course={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}
