import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Roastery", href: "#roastery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-espresso-lighter/70 bg-espresso/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            data-cursor="hover"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#top");
            }}
            className="font-display text-xl italic tracking-tight text-bone"
          >
            Hearth
          </a>

          <ul className="hidden gap-9 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-cursor="hover"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(l.href);
                  }}
                  className="group relative font-body text-sm text-bone-muted transition-colors hover:text-bone"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-cursor="hover"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              className="block h-px w-6 bg-bone"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-px w-6 bg-bone"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              className="block h-px w-6 bg-bone"
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-espresso px-8 md:hidden"
          >
            <ul className="flex flex-col gap-6">
              {LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(l.href);
                    }}
                    className="font-display text-4xl italic text-bone"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
