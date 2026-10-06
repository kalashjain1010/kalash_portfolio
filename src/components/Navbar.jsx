import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((item) => item.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navLinks.find((item) => item.id === entry.target.id);
            if (match) setActive(match.title);
          }
        });
      },
      { root: null, rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.4 }}
      className={`${styles.paddingX} fixed top-0 left-0 right-0 z-50 flex items-center py-4 transition-all duration-500 min-w-0 max-w-[100vw] ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between min-w-0">
        <Link
          to="/"
          className="group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="font-serif text-xl sm:text-2xl tracking-[-0.03em] text-text-primary group-hover:text-accent transition-colors">
            KJ
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  active === item.title
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setActive(item.title)}
              >
                {item.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-3 min-h-[40px] inline-flex items-center px-5 py-2 rounded-full bg-accent text-bg font-semibold text-sm hover:brightness-110 transition-all"
              onClick={() => setActive("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
          >
            <img src={toggle ? close : menu} alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          opacity: toggle ? 1 : 0,
          pointerEvents: toggle ? "auto" : "none",
        }}
        className="fixed inset-0 top-[64px] md:hidden bg-bg/95 backdrop-blur-xl z-40"
        onClick={() => setToggle(false)}
      />
      <motion.div
        initial={false}
        animate={{ x: toggle ? 0 : "100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 220 }}
        className="fixed top-[64px] right-0 bottom-0 w-[min(300px,88vw)] md:hidden z-50 bg-bg-elevated border-l border-white/[0.07] p-6"
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block px-3 py-3 font-medium ${
                  active === item.title ? "text-accent" : "text-text-primary"
                }`}
                onClick={() => {
                  setToggle(false);
                  setActive(item.title);
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
          <li className="pt-4 mt-2 border-t border-white/[0.07]">
            <a
              href="#contact"
              className="block px-3 py-3 rounded-full bg-accent text-bg font-semibold text-center"
              onClick={() => setToggle(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
