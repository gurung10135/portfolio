import { motion } from "framer-motion";
import social1 from "../assets/social1.jpg";
import social2 from "../assets/social2.jpg";
import social3 from "../assets/social3.jpg";
import social4 from "../assets/social4.jpg";
import social5 from "../assets/social5.jpg";
import social6 from "../assets/social6.jpg";
import social7 from "../assets/social7.jpg";
import social8 from "../assets/social8.jpg";
import social9 from "../assets/social9.jpg";

const DESIGNS = [
  { id: 1, src: social1, title: "Social Media Design 1" },
  { id: 2, src: social2, title: "Social Media Design 2" },
  { id: 3, src: social3, title: "Social Media Design 3" },
  { id: 4, src: social4, title: "Social Media Design 4" },
  { id: 5, src: social5, title: "Social Media Design 5" },
  { id: 6, src: social6, title: "Social Media Design 6" },
  { id: 7, src: social7, title: "Social Media Design 7" },
  { id: 8, src: social8, title: "Social Media Design 8" },
  { id: 9, src: social9, title: "Social Media Design 9" },
];

export default function PostersSection() {
  return (
    <section id="posters" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right flex flex-col items-end"
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter uppercase text-right">
            Social Media Designs
          </h2>
          <div className="w-24 h-1 bg-primary mt-6" />
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {DESIGNS.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden"
            >
              <img
                src={design.src}
                alt={design.title}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 mix-blend-overlay" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
