import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const education = [
  { school: "SRM Arts and Science College", period: "2023–2026", degree: "Bachelor of Computer Application (Pursuing)", grade: "86%", color: "bg-primary" },
  { school: "St. Joseph Matric Hr. Sec. School", period: "2022–2023", degree: "HSC (Higher Secondary)", grade: "84%", color: "bg-accent" },
  { school: "St. Joseph Matric Hr. Sec. School", period: "2020–2021", degree: "SSLC", grade: "PASS", color: "bg-warm" },
];

const EducationSection = () => (
  <AnimatedSection className="py-28 px-6">
    <div id="education" className="container mx-auto max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="section-heading mb-3">
          My <span className="gradient-text">Education</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="grid gap-5">
        {education.map((e, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <motion.div whileHover={{ x: 6 }} className="glass-card p-6 flex items-start gap-5">
              <div className={`w-12 h-12 rounded-2xl ${e.color} flex items-center justify-center shrink-0 shadow-lg`}>
                <GraduationCap size={22} className="text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-heading font-semibold text-lg">{e.degree}</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-coral-light text-primary font-semibold">
                    {e.grade}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">{e.school}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{e.period}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default EducationSection;
