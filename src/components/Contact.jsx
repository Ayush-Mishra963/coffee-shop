import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function MapIllustration() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-espresso-light">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full opacity-70"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#3A2F27" strokeWidth="2" fill="none">
          <path d="M0 80 H400" />
          <path d="M0 180 H400" />
          <path d="M0 300 H400" />
          <path d="M90 0 V400" />
          <path d="M230 0 V400" />
          <path d="M330 0 V400" />
        </g>
        <g stroke="#C08552" strokeOpacity="0.5" strokeWidth="3" fill="none">
          <path d="M0 140 Q150 120 230 180 T400 220" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-brass/20" />
        <span className="relative block h-4 w-4 rounded-full border-2 border-espresso bg-brass shadow-[0_0_0_4px_rgba(192,133,82,0.25)]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
    </div>
  );
}

const DETAILS = [
  { label: "Address", lines: ["214 Kettle Street, Riverside"] },
  { label: "Hours", lines: ["Mon – Fri, 7am – 4pm", "Sat – Sun, 8am – 3pm"] },
  { label: "Phone", lines: ["(555) 214-0699"] },
  { label: "Email", lines: ["hello@hearthcoffee.co"] },
];

export default function Contact() {
  return (
    <section id="visit" className="scroll-mt-24 bg-gradient-to-b from-espresso via-espresso-light/70 to-espresso-light">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-28 md:grid-cols-12 md:px-10 md:py-36">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-between md:col-span-5"
        >
          <div>
            <h2 className="font-display text-4xl italic leading-tight text-bone md:text-5xl">
              Come say hi.
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 font-body text-sm text-bone-muted sm:grid-cols-2">
              {DETAILS.map((d) => (
                <div key={d.label}>
                  <p className="text-bone">{d.label}</p>
                  {d.lines.map((line) => (
                    <p key={line} className="mt-1">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="font-body text-sm text-bone">Follow along</p>
              <div className="mt-2 flex gap-4 font-body text-sm text-bone-muted">
                <a href="#" data-cursor="hover" className="transition-colors hover:text-bone">
                  Instagram
                </a>
                <a href="#" data-cursor="hover" className="transition-colors hover:text-bone">
                  Newsletter
                </a>
              </div>
            </div>
          </div>

          <MagneticButton
            href="https://maps.google.com"
            data-cursor="hover"
            showArrow
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-brass px-7 py-3 font-body text-sm font-medium text-espresso"
          >
            Get directions
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="h-72 md:col-span-7 md:h-auto"
        >
          <MapIllustration />
        </motion.div>
      </div>
    </section>
  );
}
