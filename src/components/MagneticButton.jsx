import { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * A button that gently pulls toward the cursor when hovered on desktop,
 * and springs back to rest on mouse leave. Falls back to a static button
 * on touch devices (no mousemove events fire there anyway).
 */
export default function MagneticButton({
  children,
  onClick,
  href,
  className = "",
  strength = 0.35,
  showArrow = false,
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * strength, y: relY * strength });
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
    setHovering(false);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={className}
    >
      <motion.span
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
        className="inline-flex items-center gap-2"
      >
        {children}
        {showArrow && (
          <motion.svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
            animate={{ x: hovering ? 4 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <path
              d="M4 10h11M10 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </motion.span>
    </Component>
  );
}
