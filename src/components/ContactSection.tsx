import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => (
  <AnimatedSection className="py-24 px-6">
    <div id="contact" className="container mx-auto max-w-3xl text-center">
      <h2 className="section-heading mb-4">
        Get In <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-muted-foreground mb-10">Feel free to reach out for collaborations or just a friendly hello!</p>
      <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        {[
          { icon: Mail, label: "vijayalakshmishanmugam6@gmail.com", href: "mailto:vijayalakshmishanmugam6@gmail.com" },
          { icon: Phone, label: "9444880447", href: "tel:9444880447" },
          { icon: MapPin, label: "Chengalpattu – 603204", href: "#" },
          { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/vijayalakshmishanmugam6" },
        ].map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="glass-card p-4 flex items-center gap-3 hover:border-primary/50 transition-colors group">
            <item.icon size={18} className="text-primary shrink-0" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ContactSection;
