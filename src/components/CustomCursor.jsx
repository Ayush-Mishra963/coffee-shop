import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Small brass dot that trails the pointer with a soft spring, plus a wider
 * ring that expands over anything tagged data-cursor="hover" (links,
 * buttons, gallery tiles). Disabled entirely on touch/coarse-pointer
 * devices, where it would just get in the way.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const over = (e) => {
      setHovering(!!e.target.closest('[data-cursor="hover"]'));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0 }}>
      <motion.div
        className="absolute rounded-full bg-brass"
        style={{ left: x, top: y, width: 6, height: 6, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="absolute rounded-full border border-brass/60"
        animate={{ width: hovering ? 56 : 30, height: hovering ? 56 : 30, opacity: hovering ? 0.9 : 0.45 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ left: ringX, top: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}
