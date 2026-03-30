import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Music, ScanText } from "lucide-react";

const projects = [
  {
    icon: Music,
    title: "Rhythmix – Web Music App",
    description: "A responsive music web app that allows users to explore songs by language, play tracks, and save favorites.",
    link: "https://viji0620.github.io/rhythmix/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: ScanText,
    title: "Scribble to Digital – AI Handwritten Notes Converter",
    description: "A web application using Streamlit and Python that converts handwritten notes into structured digital text using OCR with Tesseract.",
    link: "https://scribble-to-digital.streamlit.app/",
    tags: ["Python", "Streamlit", "OCR"],
  },
];

const ProjectsSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div id="projects" className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-12">
        <span className="gradient-text">Projects</span>
      </h2>
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col sm:flex-row gap-5 group cursor-pointer block"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary self-start group-hover:bg-primary/20 transition-colors">
                <p.icon size={28} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading font-semibold text-lg">{p.title}</h3>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">{t}</span>
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
