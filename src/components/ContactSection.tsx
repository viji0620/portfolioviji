import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Linkedin, Send, ArrowUpRight } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "vijayalakshmishanmugam6@gmail.com", href: "mailto:vijayalakshmishanmugam6@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9444880447", href: "tel:9444880447" },
  { icon: MapPin, label: "Location", value: "Chengalpattu, Tamil Nadu – 603204", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/vijayalakshmishanmugam6" },
];

const ContactSection = () => (
  <AnimatedSection className="py-28 px-6 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-coral-light/30 to-peach/40 pointer-events-none" />
    
    <div id="contact" className="container mx-auto max-w-4xl relative z-10">
      <div className="text-center mb-14">
        <h2 className="section-heading mb-3">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <div className="section-divider mb-4" />
        <p className="text-muted-foreground max-w-md mx-auto">
          I'd love to hear from you! Whether it's a project, opportunity, or just a friendly hello — don't hesitate to reach out. 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {contactItems.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <motion.a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              className="glass-card p-6 flex items-center gap-4 group cursor-pointer block bg-popover/60"
            >
              <div className="w-12 h-12 rounded-2xl bg-coral-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <item.icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{item.label}</p>
                <p className="text-sm font-medium text-foreground mt-0.5 truncate">{item.value}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="mt-10 text-center">
        <motion.a
          href="mailto:vijayalakshmishanmugam6@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-shadow"
        >
          <Send size={18} />
          Send me an Email
        </motion.a>
      </AnimatedSection>
    </div>
  </AnimatedSection>
);

export default ContactSection;
