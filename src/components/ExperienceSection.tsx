import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => (
  <AnimatedSection className="py-28 px-6">
    <div id="experience" className="container mx-auto max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="section-heading mb-3">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="section-divider" />
      </div>

      <motion.div whileHover={{ y: -3 }} className="glass-card p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-coral-light rounded-full blur-[60px] opacity-40" />
        <div className="flex items-start gap-5 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-lg">
            <Briefcase size={24} className="text-primary-foreground" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-coral-light text-primary font-semibold mb-2">
              May 2025 – June 2025
            </span>
            <h3 className="font-heading font-bold text-xl">Web Development Python Fullstack Intern</h3>
            <p className="text-muted-foreground text-sm mt-1">GB Tech Corporation, Tambaram</p>
            <div className="mt-4 space-y-3">
              {[
                "Gained hands-on experience in web development using HTML, CSS, JavaScript, Python, and SQL.",
                "Contributed to building and debugging applications, enhancing problem-solving and teamwork skills.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
