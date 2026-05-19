import { motion } from "framer-motion";
import logo1 from "@assets/image_1779126550877.png";
import logo2 from "@assets/image_1779126557683.png";
import logo3 from "@assets/image_1779126564503.png";
import logo4 from "@assets/image_1779126571483.png";
import logo5 from "@assets/image_1779126576518.png";
import logo6 from "@assets/image_1779126584369.png";

const LOGOS = [
  { id: 1, src: logo1, title: "Logo Design 1" },
  { id: 2, src: logo2, title: "Logo Design 2" },
  { id: 3, src: logo3, title: "Logo Design 3" },
  { id: 4, src: logo4, title: "Logo Design 4" },
  { id: 5, src: logo5, title: "Logo Design 5" },
  { id: 6, src: logo6, title: "Logo Design 6" },
];

export default function LogoFolioSection() {
  return (
    <section id="logo-folio" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter uppercase">
            Logo Folio
          </h2>
          <div className="w-24 h-1 bg-primary mt-6" />
        </motion.div>

        <div className="grid grid-cols-3 gap-3">
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square flex items-center justify-center group cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.title}
                className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
