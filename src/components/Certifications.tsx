import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "AZ-900-2023-ARD",
    description: "Foundational knowledge of cloud services and Azure platform capabilities",
    level: "Foundational",
    status: "Active"
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    credentialId: "SAA-C03-2022-ARD",
    description: "Designing distributed systems and architectures on AWS platform",
    level: "Associate",
    status: "Active"
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credentialId: "CKA-2022-ARD",
    description: "Administration and management of Kubernetes clusters",
    level: "Professional",
    status: "Active"
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "2021",
    credentialId: "TA-003-2021-ARD",
    description: "Infrastructure as Code using Terraform for cloud provisioning",
    level: "Associate",
    status: "Active"
  },
  {
    name: "Red Hat Certified System Administrator",
    issuer: "Red Hat",
    date: "2020",
    credentialId: "RHCSA-2020-ARD",
    description: "Linux system administration and enterprise environments",
    level: "Professional",
    status: "Active"
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2019",
    credentialId: "SEC-601-2019-ARD",
    description: "Cybersecurity fundamentals and risk management",
    level: "Foundational",
    status: "Active"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Professional":
      return "bg-primary/20 text-primary border-primary/30";
    case "Associate":
      return "bg-accent/20 text-accent border-accent/30";
    default:
      return "bg-secondary text-secondary-foreground border-border";
  }
};

const Certifications = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud platforms, 
            infrastructure, and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.credentialId}
              className="card-elegant animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                      <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant="outline" 
                    className={getLevelColor(cert.level)}
                  >
                    {cert.level}
                  </Badge>
                  <Badge variant="secondary" className="tech-badge">
                    {cert.status}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Issued {cert.date}</span>
                  </div>
                  <span className="font-mono text-xs">{cert.credentialId}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;