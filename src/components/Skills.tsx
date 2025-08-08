import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, Code, Shield, GitBranch, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Microsoft Azure", "AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
  },
  {
    title: "Infrastructure",
    icon: Server,
    skills: ["Linux Administration", "Network Security", "Load Balancing", "CDN", "Monitoring", "Backup & Recovery"]
  },
  {
    title: "DevOps Tools",
    icon: GitBranch,
    skills: ["Jenkins", "GitLab CI/CD", "Azure DevOps", "Ansible", "Puppet", "Chef"]
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Bash/Shell", "PowerShell", "Go", "YAML", "JSON"]
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["Identity Management", "RBAC", "SSL/TLS", "Vulnerability Assessment", "Compliance", "Zero Trust"]
  },
  {
    title: "Monitoring",
    icon: Monitor,
    skills: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "New Relic", "Azure Monitor"]
  }
];

const Skills = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning cloud infrastructure, automation, 
            and modern DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-elegant animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="tech-badge text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;