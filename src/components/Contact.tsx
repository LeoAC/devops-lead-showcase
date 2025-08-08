import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alex.rodriguez@devops.pro",
    href: "mailto:alex.rodriguez@devops.pro"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Austin, TX | Remote",
    href: null
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexrodriguez-devops",
    href: "https://linkedin.com/in/alexrodriguez-devops"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexrodriguez-devops",
    href: "https://github.com/alexrodriguez-devops"
  }
];

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hero-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next DevOps initiative or cloud transformation project? 
            Let's explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    const content = (
                      <div className="flex items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={info.label}
                        href={info.href}
                        className="block hover:scale-105 transition-transform"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={info.label}>
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary flex-1">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl">Open to Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-sm">Available for consulting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-sm">Remote work preferred</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">Leadership roles welcome</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Interested in DevOps transformation, cloud migration, 
                  and building high-performance engineering teams.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  I typically respond to emails within 24 hours during business days. 
                  For urgent matters, please call directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;