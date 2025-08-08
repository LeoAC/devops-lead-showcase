import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "DevOps Lead",
    company: "IBM",
    location: "Remote",
    period: "2021 - Present",
    duration: "3 years",
    highlights: [
      "Led migration of 50+ legacy applications to Azure cloud, reducing infrastructure costs by 40%",
      "Implemented CI/CD pipelines serving 200+ developers across 15 product teams",
      "Designed and deployed Kubernetes clusters handling 10M+ daily requests",
      "Established security-first DevOps practices achieving SOC 2 compliance"
    ],
    technologies: ["Azure", "Kubernetes", "Terraform", "Jenkins", "Python", "Docker"]
  },
  {
    title: "Senior DevOps Engineer",
    company: "Microsoft",
    location: "Seattle, WA",
    period: "2019 - 2021",
    duration: "2 years",
    highlights: [
      "Automated deployment processes reducing release time from 4 hours to 15 minutes",
      "Built monitoring infrastructure with 99.9% uptime SLA achievement",
      "Mentored junior engineers and established DevOps best practices",
      "Led incident response team for critical production systems"
    ],
    technologies: ["Azure DevOps", "PowerShell", "ARM Templates", "Grafana", "Prometheus"]
  },
  {
    title: "DevOps Engineer",
    company: "Accenture",
    location: "Chicago, IL",
    period: "2017 - 2019",
    duration: "2 years",
    highlights: [
      "Designed multi-cloud infrastructure for enterprise clients",
      "Implemented Infrastructure as Code reducing provisioning time by 70%",
      "Collaborated with security teams to implement zero-trust architecture",
      "Optimized CI/CD workflows improving deployment frequency by 300%"
    ],
    technologies: ["AWS", "Terraform", "Ansible", "GitLab CI", "Linux", "Bash"]
  },
  {
    title: "Systems Administrator",
    company: "TechStart Solutions",
    location: "Austin, TX",
    period: "2015 - 2017",
    duration: "2 years",
    highlights: [
      "Managed hybrid cloud infrastructure supporting 1000+ users",
      "Implemented backup and disaster recovery solutions",
      "Reduced system downtime by 85% through proactive monitoring",
      "Automated routine tasks saving 20+ hours weekly"
    ],
    technologies: ["VMware", "Windows Server", "Linux", "PowerShell", "MySQL"]
  }
];

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            9+ years of progressive leadership in DevOps and cloud infrastructure
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={`${exp.company}-${exp.period}`}
              className="card-elegant animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary">{exp.title}</CardTitle>
                    <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      <span className="text-primary font-medium">({exp.duration})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;