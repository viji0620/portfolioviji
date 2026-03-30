import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, Trophy, BookOpen, Zap } from "lucide-react";

const certs = [
  { icon: BookOpen, text: "Completed Challenging Python course in Udemy" },
  { icon: Zap, text: "Certificate of participation in Python Web Development" },
  { icon: Award, text: "Completed Guvi's Sawit.AI Learnathon" },
  { icon: Trophy, text: "Received Proficiency Award – 2nd Topper in last Semester" },
];

const CertificationsSection = () => (
  <AnimatedSection className="py-28 px-6">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="section-heading mb-3">
          Certifications & <span className="gradient-text">Awards</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 flex items-start gap-4 h-full">
              <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center text-primary shrink-0">
                <c.icon size={18} />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{c.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default CertificationsSection;
