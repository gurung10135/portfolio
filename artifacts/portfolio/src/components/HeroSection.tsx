import { motion } from "framer-motion";
import portraitImg from "@assets/pp2_1779125276102.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3" />
      
      {/* Giant Typography Background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[clamp(8rem,20vw,24rem)] leading-[0.8] font-display font-black text-white/5 tracking-tighter whitespace-nowrap"
        >
          SANTOSH
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-[clamp(8rem,20vw,24rem)] leading-[0.8] font-display font-black text-white/5 tracking-tighter whitespace-nowrap"
        >
          GRG
        </motion.h1>
      </div>

      <div className="container relative z-10 px-6 h-full flex flex-col md:flex-row items-center justify-center pt-20">
        
        {/* Left Content */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-sm z-20">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 text-sm md:text-base leading-relaxed mb-6 font-sans"
          >
            Every project starts with an idea and ends with something worth showing. Clean design, sharp concepts, and visuals that do the talking.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-none px-8 py-6 uppercase tracking-wider text-xs"
              onClick={() => document.querySelector('#logo-folio')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="btn-view-portfolio"
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none px-8 py-6 uppercase tracking-wider text-xs"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="btn-contact-me"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Center Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-md md:max-w-xl aspect-[3/4] flex items-end justify-center pointer-events-none"
        >
          {/* Subtle glow behind portrait */}
          <div className="absolute inset-0 bg-primary/5 blur-[50px] rounded-full" />
          
          <img 
            src={portraitImg} 
            alt="Santosh Gurung Portrait" 
            className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl grayscale contrast-125"
          />
        </motion.div>

      </div>
    </section>
  );
}
