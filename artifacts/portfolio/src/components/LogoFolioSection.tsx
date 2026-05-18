import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const LOGOS = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Brand Logo #${i + 1}`
}));

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#111] border-white/5 overflow-hidden group cursor-pointer rounded-none h-full aspect-square relative hover:border-primary/50 transition-all duration-500">
                <CardContent className="p-0 h-full w-full flex items-center justify-center relative">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-transparent to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Placeholder text */}
                  <span className="text-white/30 font-display font-bold text-xl group-hover:text-primary transition-colors duration-300 group-hover:scale-110 transform">
                    {logo.title}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
