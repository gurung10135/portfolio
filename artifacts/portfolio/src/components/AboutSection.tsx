import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const SKILLS = ["Adobe Photoshop", "Adobe Illustrator", "Figma"];
const LANGUAGES = ["English — Fluent", "Nepali — Fluent"];
const INTERESTS = ["Design", "Art & Craft", "Music", "Gaming", "Creative Thinking"];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left / Heading area */}
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter mb-8"
            >
              ABOUT ME
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-white/70 text-lg leading-relaxed font-sans"
            >
              <p>
                I'm a Nepali designer from Kathmandu city, specialized in graphic design. My passion lies in crafting and enhancing projects that stand out with a distinctive style, ensuring they convey the right message with a genuine and unique personality.
              </p>
              <p>
                Inspired by the stars, I believe in limitless creativity, where every idea has the potential to shine and leave a lasting impact.
              </p>
              <div className="pt-4 border-t border-white/10 mt-6">
                <p className="text-primary font-medium">
                  1+ year of freelancing experience on Fiverr working with clients worldwide.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right / Details area */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors duration-300 rounded-none h-full group">
                <CardContent className="p-8">
                  <h3 className="text-[#8b5cf6] font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors">TECHNICAL SKILLS</h3>
                  <ul className="space-y-2">
                    {SKILLS.map(skill => (
                      <li key={skill} className="text-white/80">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors duration-300 rounded-none h-full group">
                <CardContent className="p-8">
                  <h3 className="text-[#8b5cf6] font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors">LANGUAGES</h3>
                  <ul className="space-y-2">
                    {LANGUAGES.map(lang => (
                      <li key={lang} className="text-white/80">{lang}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors duration-300 rounded-none h-full group">
                <CardContent className="p-8">
                  <h3 className="text-[#8b5cf6] font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors">INTERESTS</h3>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map(interest => (
                      <span key={interest} className="text-sm bg-white/10 px-3 py-1 text-white/80 rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors duration-300 rounded-none h-full group">
                <CardContent className="p-8">
                  <h3 className="text-[#8b5cf6] font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors">EDUCATION</h3>
                  <p className="text-white/80 font-medium">2024 +2 in Computer Science</p>
                  <p className="text-white/60 text-sm mt-1">Kathmandu Institute of Science & Technology</p>
                </CardContent>
              </Card>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
