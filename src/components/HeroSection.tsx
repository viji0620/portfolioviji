import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Terminal } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    {/* Background image */}
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />

    {/* Decorative floating elements */}
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      className="absolute top-32 left-[10%] w-16 h-16 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center text-primary/30 hidden md:flex"
    >
      <Code size={24} />
    </motion.div>
    <motion.div
      animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
      className="absolute bottom-40 right-[12%] w-14 h-14 rounded-2xl bg-accent/8 border border-accent/15 flex items-center justify-center text-accent/30 hidden md:flex"
    >
      <Terminal size={20} />
    </motion.div>

    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10 pt-20">
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
          <Sparkles size={14} /> Open to Opportunities
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

      {/* Creative profile photo section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/20"
        />
        {/* Second ring opposite direction */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -inset-12 rounded-full border border-accent/10"
        />

        {/* Main photo with hexagonal clip */}
        <div className="w-72 h-72 md:w-80 md:h-80 relative">
          <div className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-primary/25 shadow-2xl shadow-primary/15 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img src={profileImg} alt="Vijayalakshmi S" className="w-full h-full object-cover" />
          </div>
          
          {/* Accent corner decoration */}
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-primary shadow-lg" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-md bg-accent shadow-lg" />
        </div>

        {/* Floating tech badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-8 px-4 py-2.5 rounded-2xl bg-popover shadow-xl border border-border/50 text-sm font-semibold flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Python Dev
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 px-4 py-2.5 rounded-2xl bg-popover shadow-xl border border-border/50 text-sm font-semibold flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Web Dev
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
