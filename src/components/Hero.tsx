import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="relative">
          <img 
            src={profilePhoto} 
            alt="Alex Rodriguez - DevOps Lead"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-2xl animate-glow"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="hero-text">Alex Rodriguez</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
            DevOps Lead | Cloud Infrastructure Architect
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="secondary" className="tech-badge">
              IBM
            </Badge>
            <Badge variant="secondary" className="tech-badge">
              Microsoft Azure Certified
            </Badge>
            <Badge variant="secondary" className="tech-badge">
              9+ Years Experience
            </Badge>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Transforming enterprise infrastructure through automation, cloud-native solutions, 
          and DevOps excellence. Leading high-performance teams to deliver scalable, 
          secure, and reliable systems at scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          <div className="flex gap-3">
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary">
              <Mail className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;