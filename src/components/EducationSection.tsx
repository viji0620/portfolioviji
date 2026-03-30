import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";

const education = [
  { school: "SRM Arts and Science College", period: "2023–2026", degree: "Bachelor of Computer Application (Pursuing)", grade: "86%" },
  { school: "St. Joseph Matric Higher Secondary School", period: "2022–2023", degree: "HSC", grade: "84%" },
  { school: "St. Joseph Matric Higher Secondary School", period: "2020–2021", degree: "SSLC", grade: "PASS" },
];

const EducationSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div id="education" className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-12">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
        {education.map((e, i) => (
          <AnimatedSection key={i} delay={i * 0.15} className="relative">
            <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap size={12} className="text-primary-foreground" />
            </div>
            <div className="glass-card p-5">
              <p className="text-xs text-primary font-medium mb-1">{e.period}</p>
              <h3 className="font-heading font-semibold text-lg">{e.degree}</h3>
              <p className="text-muted-foreground text-sm">{e.school}</p>
              <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                {e.grade}
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default EducationSection;
