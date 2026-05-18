import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { SiFiverr, SiInstagram, SiBehance } from "react-icons/si";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter uppercase mb-6 leading-tight">
                LET'S WORK <br/><span className="text-primary text-glow">TOGETHER</span>
              </h2>
              <p className="text-white/60 font-sans text-lg mb-12 max-w-md">
                Have a project in mind? Let's turn your idea into something visually stunning. Drop me a message below.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <a href="mailto:santoshdesigns@example.com" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium text-lg">santoshdesigns@example.com</span>
              </a>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-white" aria-label="Fiverr">
                  <SiFiverr className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-white" aria-label="Instagram">
                  <SiInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 hover:bg-primary hover:text-black transition-colors flex items-center justify-center text-white" aria-label="Behance">
                  <SiBehance className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111] p-8 md:p-10 border border-white/5"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-white text-lg placeholder:text-white/20 h-12"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email"
                          {...field} 
                          className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-white text-lg placeholder:text-white/20 h-12"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/60 uppercase tracking-widest text-xs">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          {...field} 
                          className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-white text-lg placeholder:text-white/20 min-h-[120px] resize-none"
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage className="text-destructive" />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 rounded-none uppercase tracking-widest mt-8"
                  data-testid="btn-submit-contact"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
