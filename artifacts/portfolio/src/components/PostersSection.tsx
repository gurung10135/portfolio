import { motion } from "framer-motion";

const POSTERS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Poster #${i + 1}`,
  height: i % 2 === 0 ? 'aspect-[3/4]' : 'aspect-[4/5]' // varying heights for masonry feel
}));

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
            Posters
          </h2>
          <div className="w-24 h-1 bg-primary mt-6" />
        </motion.div>

        {/* CSS Masonry-ish layout using columns */}
        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          {POSTERS.map((poster, index) => (
            <motion.div
              key={poster.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden bg-[#111] border border-white/5"
            >
              <div className={`w-full ${poster.height} relative flex items-center justify-center bg-gradient-to-b from-[#1a1a1a] to-black`}>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 mix-blend-overlay z-10" />
                <span className="font-display font-bold text-2xl text-white/30 uppercase tracking-widest -rotate-90 group-hover:text-primary transition-colors duration-300">
                  {poster.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
