import { motion } from "framer-motion";
import { SiFiverr, SiInstagram, SiBehance } from "react-icons/si";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter uppercase mb-6 leading-tight">
            LET'S WORK <br/><span className="text-primary text-glow">TOGETHER</span>
          </h2>
          <p className="text-white/60 font-sans text-lg mb-12 max-w-md">
            Have a project in mind? Let's turn your idea into something visually stunning. Reach out and let's create together.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <a href="mailto:santosh.grg009870@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group w-fit">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-medium text-lg">santosh.grg009870@gmail.com</span>
          </a>
          <div className="flex gap-4 mt-4">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-white" aria-label="Fiverr">
              <SiFiverr className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/santosh___grg/#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-white" aria-label="Instagram">
              <SiInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-white" aria-label="Behance">
              <SiBehance className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
