import { motion } from "framer-motion";
import sushiImg from "@assets/download_(9)_1779127421817.png";
import flydealImg from "@assets/photo-collage.png_(2)_1779127498761.png";

const PROJECTS = [
  {
    id: 1,
    title: "Sushi House",
    category: "Brand Identity",
    image: sushiImg,
    description:
      "Sushi House is a restaurant known for its amazing sushi and great ambience. For its 2024 edition, it aimed to re-design its visual identity. In this context, a new visual identity was developed to reflect its culture and tradition.",
  },
  {
    id: 2,
    title: "Flydeal",
    category: "Brand Identity",
    image: flydealImg,
    description:
      "Flydeal is a travel agency offering Flight Ticket Booking, Tour Packages, Visa and Travel Support Services. The brand identity was built around a unique logomark combining the Letter F, Letter D, and an airplane symbol — representing movement, destination, and trust.",
  },
];

export default function BrandIdentitySection() {
  return (
    <section id="brand-identity" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter uppercase text-center">
            Brand Identity
          </h2>
          <div className="w-24 h-1 bg-primary mt-6" />
        </motion.div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              {/* Image */}
              <div className="w-full md:w-2/3 bg-[#111] border border-white/5 relative group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="w-full md:w-1/3 flex flex-col justify-center px-4 md:px-12">
                <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
                  {String(index + 1).padStart(2, "0")} — {project.category}
                </span>
                <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
