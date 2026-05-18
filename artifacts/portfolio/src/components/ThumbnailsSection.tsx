import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const THUMBNAILS = Array.from({ length: 4 }).map((_, i) => ({
  id: i + 1,
  title: `Thumbnail #${i + 1}`
}));

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {THUMBNAILS.map((thumb, index) => (
            <motion.div
              key={thumb.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#111] border-white/5 overflow-hidden group rounded-none">
                <CardContent className="p-0 aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center overflow-hidden">
                     {/* Abstract shape for thumbnail placeholder */}
                     <div className="w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-150" />
                     <span className="absolute z-10 font-display font-black text-3xl md:text-4xl text-white/40 uppercase tracking-tighter group-hover:text-white transition-colors duration-300 drop-shadow-lg">
                       {thumb.title}
                     </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
