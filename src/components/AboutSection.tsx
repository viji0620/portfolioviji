import AnimatedSection from "./AnimatedSection";
import { User, MapPin, Phone, Calendar } from "lucide-react";

const AboutSection = () => (
  <AnimatedSection className="py-24 px-6" >
    <div id="about" className="container mx-auto max-w-3xl">
      <h2 className="section-heading mb-8">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="text-muted-foreground leading-relaxed text-lg mb-8">
        As an aspiring candidate seeking a role, I want to use my skills in making websites
        (using HTML, CSS, JavaScript) and programming with Python to create good, easy-to-use
        products. I am eager to learn and grow with my web and programming knowledge.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: User, label: "Name", value: "Vijayalakshmi S" },
          { icon: Calendar, label: "DOB", value: "06-06-2005" },
          { icon: Phone, label: "Phone", value: "9444880447" },
          { icon: MapPin, label: "Location", value: "Chengalpattu, Tamil Nadu" },
        ].map((item) => (
          <div key={item.label} className="glass-card p-4 flex items-center gap-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
