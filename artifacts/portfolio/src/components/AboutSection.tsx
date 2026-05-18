import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiFigma } from "react-icons/si";
import profileImg from "@assets/pp2_1779129995448.png";

function PhotoshopIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#001E36"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#31A8FF" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Ps</text>
    </svg>
  );
}

function IllustratorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#310000"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#FF9A00" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Ai</text>
    </svg>
  );
}

const SKILLS = [
  { name: "Adobe Photoshop", icon: <PhotoshopIcon />, color: "#31A8FF" },
  { name: "Adobe Illustrator", icon: <IllustratorIcon />, color: "#FF9A00" },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" size={32} />, color: "#F24E1E" },
];
const LANGUAGES = ["English — Fluent", "Nepali — Fluent"];
const INTERESTS = ["Design", "Art & Craft", "Music", "Gaming", "Creative Thinking"];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Left / Heading area */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter mb-8"
            >
              ABOUT ME
            </motion.h2>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col items-center mb-8"
            >
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />
                <img
                  src={profileImg}
                  alt="Santosh Gurung"
                  className="relative w-48 h-48 rounded-full object-cover object-top border-2 border-primary/30"
                  data-testid="img-profile"
                />
              </div>
              <h3 className="font-display font-bold text-2xl text-white tracking-widest uppercase mt-4">
                Santosh Gurung
              </h3>
            </motion.div>

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
                  <h3 className="text-[#8b5cf6] font-display font-bold text-xl mb-6 group-hover:text-primary transition-colors">TECHNICAL SKILLS</h3>
                  <div className="flex flex-col gap-4">
                    {SKILLS.map(skill => (
                      <div key={skill.name} className="flex items-center gap-3">
                        <span style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
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
