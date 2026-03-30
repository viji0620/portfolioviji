import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Decorative blobs */}
    <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-coral-light rounded-full blur-[80px] opacity-60" />
    <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-peach rounded-full blur-[80px] opacity-50" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coral-light text-primary text-sm font-medium mb-6"
        >
          <Sparkles size={14} /> Available for opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1]">
          Hi, I'm<br />
          <span className="gradient-text">Vijayalakshmi</span>
        </h1>
        <p className="text-lg text-muted-foreground mt-5 max-w-lg leading-relaxed">
          Aspiring Web Developer & Python Enthusiast crafting clean, user-friendly digital experiences with passion and purpose.
        </p>

        <div className="flex gap-3 mt-8 justify-center md:justify-start">
          <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
            Let's Connect
          </a>
          <a href="#projects" className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors">
            View Projects
          </a>
        </div>

        <div className="flex gap-3 mt-6 justify-center md:justify-start">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/vijayalakshmishanmugam6" },
            { icon: Github, href: "https://github.com/viji0620" },
            { icon: Mail, href: "mailto:vijayalakshmishanmugam6@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-coral-light transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 animate-blob overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
          <img src={profileImg} alt="Vijayalakshmi S" className="w-full h-full object-cover" />
        </div>
        {/* Floating badges */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-popover shadow-lg border border-border/50 text-sm font-medium"
        >
          🐍 Python
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-popover shadow-lg border border-border/50 text-sm font-medium"
        >
          💻 Web Dev
        </motion.div>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 8, 0] }}
      transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
    >
      <ArrowDown size={22} />
    </motion.a>
  </section>
);

export default HeroSection;
