import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const skillGroups = [
  { title: "Programming", skills: ["Python", "Java", "C++", "PHP"] },
  { title: "Web Technologies", skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Tools & Version Control", skills: ["Git", "GitHub"] },
  { title: "Soft Skills", skills: ["Problem-Solving", "Team Collaboration"] },
  { title: "Languages", skills: ["Tamil", "English"] },
];

const SkillsSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div id="skills" className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-12">
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="grid gap-6">
        {skillGroups.map((group, gi) => (
          <AnimatedSection key={group.title} delay={gi * 0.1}>
            <h3 className="text-sm text-muted-foreground font-medium mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:shadow-[var(--glow-primary)] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SkillsSection;
