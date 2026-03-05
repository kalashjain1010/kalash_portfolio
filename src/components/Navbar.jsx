import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`${styles.paddingX} fixed top-0 left-0 right-0 z-50 flex items-center py-4 transition-all duration-300 min-w-0 max-w-[100vw] ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-bg-border"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between min-w-0">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="Kalash"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-bg-border group-hover:ring-accent/50 transition-all"
          />
          <span className="font-display font-semibold text-text-primary text-lg hidden sm:block">
            Kalash
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === item.title
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                onClick={() => setActive(item.title)}
              >
                {item.title}
                {active === item.title && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent-muted rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
<a
            href="#contact"
            className="ml-2 min-h-[44px] inline-flex items-center px-4 py-2.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent/90 hover:shadow-glow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            onClick={() => setActive("Contact")}
          >
            Get in touch
          </a>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-2 rounded-lg bg-accent/20 text-accent text-sm font-medium"
          >
            Contact
          </a>
          <button
            type="button"
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
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
        className="fixed inset-0 top-[72px] md:hidden bg-bg/95 backdrop-blur-xl z-40"
        onClick={() => setToggle(false)}
      />
      <motion.div
        initial={false}
        animate={{
          x: toggle ? 0 : "100%",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-[72px] right-0 bottom-0 w-[min(320px,85vw)] md:hidden z-50 bg-bg-elevated border-l border-bg-border p-6 shadow-2xl"
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  active === item.title
                    ? "text-accent bg-accent-muted"
                    : "text-text-primary hover:bg-bg-card"
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
          <li className="pt-4 border-t border-bg-border">
            <a
              href="#contact"
              className="block px-4 py-3 rounded-xl bg-accent text-bg font-semibold text-center"
              onClick={() => setToggle(false)}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
