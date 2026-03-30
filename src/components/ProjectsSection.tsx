import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Music, ScanText, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Music,
    title: "Rhythmix",
    subtitle: "Web Music App",
    description: "A responsive music web app that allows users to explore songs by language, play tracks, and save favorites.",
    link: "https://viji0620.github.io/rhythmix/",
    tags: ["HTML", "CSS", "JavaScript"],
    gradient: "from-primary/10 to-accent/10",
  },
  {
    icon: ScanText,
    title: "Scribble to Digital",
    subtitle: "AI Handwritten Notes Converter",
    description: "Converts handwritten notes into structured digital text using OCR with Tesseract, built with Streamlit and Python.",
    link: "https://scribble-to-digital.streamlit.app/",
    tags: ["Python", "Streamlit", "OCR"],
    gradient: "from-accent/10 to-warm/10",
  },
];

const ProjectsSection = () => (
  <AnimatedSection className="py-28 px-6">
    <div id="projects" className="container mx-auto max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="section-heading mb-3">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-divider" />
        <p className="text-muted-foreground mt-4 max-w-md mx-auto">Things I've built that I'm proud of</p>
      </div>

      <div className="grid gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className={`block glass-card overflow-hidden group`}
            >
              <div className={`p-8 bg-gradient-to-br ${p.gradient}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-popover shadow-md flex items-center justify-center text-primary">
                    <p.icon size={26} />
                  </div>
                  <span className="p-2 rounded-full bg-popover/80 text-muted-foreground group-hover:text-primary group-hover:bg-coral-light transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl">{p.title}</h3>
                <p className="text-sm text-primary font-medium">{p.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-popover/80 text-foreground/70 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProjectsSection;
