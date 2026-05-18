import { motion } from "framer-motion";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";
import thumb4 from "../assets/thumb4.jpg";

const THUMBNAILS = [
  { id: 1, src: thumb1, title: "Thumbnail 1" },
  { id: 2, src: thumb2, title: "Thumbnail 2" },
  { id: 3, src: thumb3, title: "Thumbnail 3" },
  { id: 4, src: thumb4, title: "Thumbnail 4" },
];

export default function ThumbnailsSection() {
  return (
    <section id="thumbnails" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter uppercase">
            Thumbnails
          </h2>
          <div className="w-24 h-1 bg-primary mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {THUMBNAILS.map((thumb, index) => (
            <motion.div
              key={thumb.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden aspect-video"
            >
              <img
                src={thumb.src}
                alt={thumb.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 mix-blend-overlay" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
