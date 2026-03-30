import AnimatedSection from "./AnimatedSection";
import { Award } from "lucide-react";

const certs = [
  "Completed Challenging Python course in Udemy",
  "Certificate of participation in Python Web Development",
  "Completed Guvi's Sawit.AI Learnathon",
  "Received Proficiency Award – 2nd Topper in last Semester",
];

const CertificationsSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-12">
        Certifications & <span className="gradient-text">Awards</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1} className="glass-card p-5 flex items-start gap-3">
            <Award size={18} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm text-secondary-foreground">{c}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default CertificationsSection;
