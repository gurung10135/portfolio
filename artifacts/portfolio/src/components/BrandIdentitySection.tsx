import { motion } from "framer-motion";

const PROJECTS = [
  { id: 1, title: "Sushi House", category: "Brand Identity" },
  { id: 2, title: "Flydeal", category: "Brand Identity" },
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
              className={`flex flex-col gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-2/3 aspect-[16/9] bg-[#111] border border-white/5 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                   <div className="w-full h-full flex flex-col items-center justify-center border border-white/5 m-4">
                     <span className="text-white/20 font-display text-2xl uppercase tracking-widest group-hover:text-primary/50 transition-colors duration-500">
                       Mockup Presentation
                     </span>
                   </div>
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-1/3 flex flex-col justify-center px-4 md:px-12">
                <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
                  {String(index + 1).padStart(2, '0')} — {project.category}
                </span>
                <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 font-sans leading-relaxed mb-8">
                  A comprehensive brand identity project exploring visual language, typography, and core aesthetics to create a memorable and impactful brand presence.
                </p>
                <div>
                  <button className="text-white hover:text-primary transition-colors uppercase tracking-widest text-sm font-semibold border-b border-primary/50 pb-1" data-testid={`btn-view-project-${project.id}`}>
                    View Full Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
