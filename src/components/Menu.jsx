import { motion } from "framer-motion";

const ITEMS = [
  { name: "Drip, house blend", note: "A rotating blend of our three origins", price: "4" },
  { name: "Cortado", note: "Equal parts espresso and steamed milk", price: "4.5" },
  { name: "Pour over", note: "Single origin, brewed to order", price: "6" },
  { name: "Oat cappuccino", note: "Our house oat milk, extra foam on request", price: "5.5" },
  { name: "Cold brew", note: "Steeped eighteen hours, served over ice", price: "5" },
  { name: "Espresso tonic", note: "Double shot, grapefruit tonic, mint", price: "5.5" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Menu() {
  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-gradient-to-b from-espresso via-espresso-light/70 to-espresso-light"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-4"
          >
            <h2 className="font-display text-4xl italic leading-tight text-bone md:text-5xl">
              The counter.
            </h2>
            <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-bone-muted">
              A short list, changed with the seasons. Ask whoever's on bar
              what's brewing today — it usually isn't on here yet.
            </p>
          </motion.div>

          <ul className="md:col-span-8">
            {ITEMS.map((item, i) => (
              <motion.li
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.05 }}
                data-cursor="hover"
                className="group flex items-baseline justify-between gap-6 rounded-xl border-b border-espresso-lighter px-4 py-5 transition-all duration-300 -mx-4 hover:border-transparent hover:bg-espresso-lighter/40"
              >
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <p className="font-display text-lg text-bone">{item.name}</p>
                  <p className="mt-1 font-body text-sm text-bone-muted">{item.note}</p>
                </div>
                <span className="shrink-0 font-body text-sm text-brass transition-colors duration-300 group-hover:text-bone">
                  ${item.price}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
