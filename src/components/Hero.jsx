import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import useReducedMotion from "../hooks/useReducedMotion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.08]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-0"
    >
      {/* Soft warm glow behind the headline — a quiet, static light source rather than a moving effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[38rem] w-[38rem] rounded-full bg-brass/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 md:col-span-7"
        >
          <motion.h1
            variants={rise}
            className="font-display text-[clamp(2.75rem,10vw,5.5rem)] font-light italic leading-[0.95] tracking-tight text-bone"
          >
            Slow mornings,
            <br />
            well roasted.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-7 max-w-md font-body text-base leading-relaxed text-bone-muted md:text-lg"
          >
            Hearth is a small-batch coffee bar turning single-origin beans
            into something worth sitting still for — roasted in-house, cupped
            weekly, poured with intention.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-5">
            <MagneticButton
              href="#menu"
              data-cursor="hover"
              showArrow
              className="rounded-full bg-brass px-7 py-3 font-body text-sm font-medium text-espresso"
            >
              See the menu
            </MagneticButton>
            <MagneticButton
              href="#visit"
              data-cursor="hover"
              className="rounded-full border border-bone-muted/40 px-7 py-3 font-body text-sm font-medium text-bone transition-colors hover:border-bone"
            >
              Visit us
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="relative h-[46vh] md:col-span-5 md:h-[64vh]">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute inset-0 overflow-hidden rounded-[2rem] md:rounded-[2.5rem]"
          >
            <motion.img
              style={{ y: imgY, scale: imgScale }}
              src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1200&auto=format&fit=crop"
              alt="Barista pouring latte art into a warm-toned ceramic cup"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-muted md:flex"
      >
        <span className="font-body text-xs">scroll</span>
        <span className="h-10 w-px bg-bone-muted/50" />
      </motion.div>
    </section>
  );
}
