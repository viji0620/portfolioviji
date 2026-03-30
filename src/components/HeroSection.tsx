import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" />

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-primary font-medium mb-2"
        >
          Hello, I'm
        </motion.p>
        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
          Vijayalakshmi <span className="gradient-text">S</span>
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-md">
          Aspiring Web Developer & Python Enthusiast — Building clean, user-friendly digital experiences.
        </p>
        <div className="flex gap-4 mt-8 justify-center md:justify-start">
          <a href="https://www.linkedin.com/in/vijayalakshmishanmugam6" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/viji0620" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:vijayalakshmishanmugam6@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-border">
          <img src={profileImg} alt="Vijayalakshmi S" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </div>

    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 8, 0] }}
      transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.5 } }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
    >
      <ArrowDown size={24} />
    </motion.a>
  </section>
);

export default HeroSection;
