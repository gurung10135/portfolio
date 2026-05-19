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

function CanvaIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.1 0C5.61 0 .26 5.17.01 11.66-.27 18.71 5.36 24.57 12.4 24.57c2.91 0 5.57-.99 7.65-2.65l.02-.02c.1-.07.19-.16.27-.25.88-.81.83-2.24-.2-2.91l-.93-.61c-.84-.55-1.91-.38-2.68.25l-.08.06c-1.15.85-2.57 1.37-4.12 1.37-3.87 0-7.01-3.14-7.01-7.01 0-3.86 3.14-7 7-7 1.56 0 2.99.52 4.14 1.39.75.58 1.82.72 2.63.17l.97-.65c1.03-.68 1.1-2.08.23-2.9-.08-.08-.17-.17-.27-.24C18.08 1.05 15.18 0 12.1 0z" fill="#7D2AE8"/>
    </svg>
  );
}

const SKILLS = [
  { name: "Adobe Photoshop", icon: <PhotoshopIcon />, color: "#31A8FF" },
  { name: "Adobe Illustrator", icon: <IllustratorIcon />, color: "#FF9A00" },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" size={32} />, color: "#F24E1E" },
  { name: "Canva", icon: <CanvaIcon />, color: "#00C4CC" },
];
const LANGUAGES = ["English — Fluent", "Nepali — Fluent"];
const INTERESTS = ["Design", "Art & Craft", "Music", "Gaming", "Creative Thinking"];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
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
          <div className="lg:col-span-7 lg:pl-16" style={{ display: 'flex', alignItems: 'flex-start' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '280px 280px',
                gap: '16px',
              }}
            >
              {/* Technical Skills */}
              <div style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 24, overflow: 'hidden', boxSizing: 'border-box' }}>
                <p style={{ color: '#8b5cf6', fontWeight: 700, fontSize: 15, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>Technical Skills</p>
                {SKILLS.map(skill => (
                  <div key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <span style={{ color: skill.color, flexShrink: 0 }}>{skill.icon}</span>
                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 24, overflow: 'hidden', boxSizing: 'border-box' }}>
                <p style={{ color: '#8b5cf6', fontWeight: 700, fontSize: 15, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>Languages</p>
                {LANGUAGES.map(lang => (
                  <p key={lang} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginBottom: 10 }}>{lang}</p>
                ))}
              </div>

              {/* Interests */}
              <div style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 24, overflow: 'hidden', boxSizing: 'border-box' }}>
                <p style={{ color: '#8b5cf6', fontWeight: 700, fontSize: 15, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>Interests</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {INTERESTS.map(interest => (
                    <span key={interest} style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', fontSize: 13, padding: '4px 12px', borderRadius: 999 }}>{interest}</span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div style={{ width: 280, height: 280, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 24, overflow: 'hidden', boxSizing: 'border-box' }}>
                <p style={{ color: '#8b5cf6', fontWeight: 700, fontSize: 15, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>Education</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>2024 +2 in Computer Science</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Kathmandu Institute of Science & Technology</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
