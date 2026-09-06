import { useEffect, useState } from "react";

/**
 * CSS transitions/animations are already neutralised globally for
 * prefers-reduced-motion in index.css. Scroll-linked transforms driven by
 * Framer Motion's useScroll/useTransform bypass CSS entirely though, so
 * anything using those (e.g. the hero parallax) checks this hook instead.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}
