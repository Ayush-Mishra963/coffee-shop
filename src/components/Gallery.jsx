import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop",
    caption: "Morning light on the bar",
    span: "sm:col-span-7 sm:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop",
    caption: "Drum roaster, mid-batch",
    span: "sm:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=900&auto=format&fit=crop",
    caption: "Green beans, Ethiopia lot",
    span: "sm:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=900&auto=format&fit=crop",
    caption: "Latte art, table three",
    span: "sm:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=900&auto=format&fit=crop",
    caption: "Beans, fresh off the roast",
    span: "sm:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=1200&auto=format&fit=crop",
    caption: "Weekend, corner table",
    span: "sm:col-span-4",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28 md:px-10 md:py-36">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-14 max-w-lg"
      >
        <h2 className="font-display text-4xl italic leading-tight text-bone md:text-5xl">
          Moments over coffee.
        </h2>
        <p className="mt-6 font-body text-sm leading-relaxed text-bone-muted md:text-base">
          A few rooms, one roaster, and a bar that's usually a little too
          busy on Saturdays.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-12 sm:auto-rows-[13rem]">
        {PHOTOS.map((photo, i) => (
          <motion.figure
            key={photo.src}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06 }}
            data-cursor="hover"
            className={`group relative col-span-1 h-64 overflow-hidden rounded-2xl sm:h-auto ${photo.span}`}
          >
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="absolute inset-0"
            >
              <motion.img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/45" />
            <figcaption className="absolute bottom-4 left-4 translate-y-2 font-body text-sm text-bone opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {photo.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
