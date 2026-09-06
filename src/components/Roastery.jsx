import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

const STEPS = [
  {
    n: "1",
    title: "Source",
    body: "We buy direct from three family farms in Ethiopia, Colombia, and Sumatra, and pay well above commodity price.",
  },
  {
    n: "2",
    title: "Roast",
    body: "Small batches on our drum roaster out back, tuned by ear and nose more than by a screen.",
  },
  {
    n: "3",
    title: "Cup",
    body: "Every new lot is tasted blind by the whole team before it goes anywhere near the grinder.",
  },
  {
    n: "4",
    title: "Pour",
    body: "Dialed in fresh each morning — grind, ratio, and temperature adjusted to that day's beans.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Roastery() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ringY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section
      id="roastery"
      ref={ref}
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-hidden px-6 py-28 md:px-10 md:py-36"
    >
      {/* Decorative coffee ring, drifting slowly behind the copy as you scroll past */}
      <motion.svg
        style={{ y: ringY }}
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 hidden h-72 w-72 text-brass opacity-[0.07] md:block"
      >
        <circle cx="100" cy="100" r="94" stroke="currentColor" strokeWidth="10" fill="none" />
        <circle cx="100" cy="100" r="62" stroke="currentColor" strokeWidth="6" fill="none" />
      </motion.svg>

      <div className="relative grid grid-cols-1 gap-14 md:grid-cols-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-4"
        >
          <h2 className="font-display text-4xl italic leading-tight text-bone md:text-5xl">
            From cherry
            <br />
            to cup.
          </h2>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-bone-muted">
            We roast three days a week in the room you can see from the
            counter. Nothing about the process is hidden, because none of it
            needs to be.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:col-span-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="border-t border-espresso-lighter pt-5 transition-colors duration-300 hover:border-brass/50"
            >
              <span className="font-display text-sm italic text-brass">{s.n}</span>
              <h3 className="mt-2 font-display text-xl text-bone">{s.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-bone-muted">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
