import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div id="experience" className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-12">
        <span className="gradient-text">Experience</span>
      </h2>
      <div className="glass-card p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Briefcase size={24} />
          </div>
          <div>
            <p className="text-xs text-primary font-medium">May 2025 – June 2025</p>
            <h3 className="font-heading font-semibold text-lg mt-1">Web Development Python Fullstack Intern</h3>
            <p className="text-muted-foreground text-sm">GB Tech Corporation, Tambaram</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-4">
              <li>Gained hands-on experience in web development using HTML, CSS, JavaScript, Python, and SQL.</li>
              <li>Contributed to building and debugging applications, while enhancing problem-solving and teamwork skills.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
