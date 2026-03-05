import React, { useState, useEffect } from "react";

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
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3"
      aria-label="Page sections"
    >
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          aria-label={`Go to ${label}`}
        >
          <span
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              activeId === id
                ? "bg-accent scale-125 ring-2 ring-accent/30"
                : "bg-text-muted group-hover:bg-text-secondary"
            }`}
          />
          <span
            className={`text-xs font-medium max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[80px] ${
              activeId === id ? "text-accent max-w-[80px]" : "text-text-muted"
            }`}
          >
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
};

export default SectionNav;
