import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SectionNav = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (SECTIONS.some((s) => s.id === id)) setActiveId(id);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col gap-4"
      aria-label="Page sections"
    >
      {SECTIONS.map(({ id, label }) => {
        const on = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center justify-end gap-3"
            aria-label={`Go to ${label}`}
            aria-current={on ? "true" : undefined}
          >
            <span
              className={`text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                on
                  ? "text-accent opacity-100 translate-x-0"
                  : "text-text-muted opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
              }`}
            >
              {label}
            </span>
            <span
              className={`block transition-all duration-300 ${
                on
                  ? "h-8 w-0.5 bg-accent"
                  : "h-2 w-0.5 bg-white/25 group-hover:h-4 group-hover:bg-white/50"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default SectionNav;
