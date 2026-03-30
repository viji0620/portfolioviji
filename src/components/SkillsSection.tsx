import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Code, Globe, GitBranch, Users, Languages } from "lucide-react";

const skillGroups = [
  { title: "Programming Languages", icon: Code, skills: ["Python", "Java", "C++", "PHP"] },
  { title: "Web Technologies", icon: Globe, skills: ["HTML", "CSS", "JavaScript"] },
  { title: "Version Control", icon: GitBranch, skills: ["Git", "GitHub"] },
  { title: "Soft Skills", icon: Users, skills: ["Problem-Solving", "Team Collaboration"] },
  { title: "Languages", icon: Languages, skills: ["Tamil", "English"] },
];

const SkillsSection = () => (
  <AnimatedSection className="py-28 px-6">
    <div id="skills" className="container mx-auto max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="section-heading mb-3">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {skillGroups.map((group, gi) => (
          <AnimatedSection key={group.title} delay={gi * 0.08}>
            <div className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-coral-light flex items-center justify-center text-primary">
                  <group.icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-sm">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06 }}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default SkillsSection;
