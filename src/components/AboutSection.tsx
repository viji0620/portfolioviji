import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { User, MapPin, Phone, Calendar, Heart } from "lucide-react";

const items = [
  { icon: User, label: "Name", value: "Vijayalakshmi S" },
  { icon: Calendar, label: "DOB", value: "06 June 2005" },
  { icon: Phone, label: "Phone", value: "9444880447" },
  { icon: MapPin, label: "Location", value: "Chengalpattu, TN" },
];

const AboutSection = () => (
  <AnimatedSection className="py-28 px-6">
    <div id="about" className="container mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="section-heading mb-3">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider" />
      </div>

      <div className="warm-card p-8 md:p-10 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <Heart size={20} className="text-accent mt-1 shrink-0" />
          <p className="text-foreground/80 leading-relaxed text-lg">
            I'm a passionate BCA student who loves turning ideas into interactive web experiences. 
            With a strong foundation in HTML, CSS, JavaScript, and Python, I enjoy building products that are 
            both beautiful and functional. Always eager to learn, grow, and collaborate!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-4 text-center"
          >
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-coral-light flex items-center justify-center text-primary">
              <item.icon size={18} />
            </div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
            <p className="font-semibold text-sm mt-0.5">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
