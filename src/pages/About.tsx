import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Users, Award, Monitor } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, label: "50K+ Subscribers", description: "Community attiva su YouTube" },
    { icon: Monitor, label: "500+ Build", description: "PC assemblati e testati" },
    { icon: Award, label: "5+ Anni", description: "Esperienza nel settore" },
    { icon: Youtube, label: "1M+ Views", description: "Video guide e recensioni" },
  ];

  const skills = [
    "Gaming PC Assembly",
    "Workstation Design",
    "RGB Customization",
    "Cable Management",
    "Overclocking",
    "Liquid Cooling",
    "Performance Tuning",
    "Component Testing"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Chi Siamo
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Siamo appassionati di tecnologia e PC building con anni di esperienza 
                nel settore. Il nostro canale YouTube è nato dalla voglia di condividere 
                la passione per l'assemblaggio PC e aiutare altri appassionati.
              </p>
              <Button variant="accent" size="lg">
                <Youtube className="mr-2 h-5 w-5" />
                Visita il Canale
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-accent rounded-lg opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Monitor className="w-32 h-32 text-primary-foreground/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            I Nostri Risultati
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <achievement.icon className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-2">{achievement.label}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                La Nostra Storia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tutto è iniziato 5 anni fa con una semplice passione per i computer 
                  e il gaming. Quello che era iniziato come un hobby si è trasformato 
                  in una vera e propria missione: aiutare gli appassionati a realizzare 
                  il PC dei loro sogni.
                </p>
                <p>
                  Attraverso il nostro canale YouTube, condividiamo guide dettagliate, 
                  recensioni oneste e build step-by-step. Ogni video è pensato per 
                  trasferire conoscenza e ispirare la community.
                </p>
                <p>
                  Oggi, con oltre 500 build completate e una community di 50.000+ 
                  subscriber, continuiamo a crescere e innovare nel mondo del PC building.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Le Nostre Competenze</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            La Nostra Missione
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Rendere il PC building accessibile a tutti, offrendo guide chiare, 
            consigli esperti e build personalizzate. Crediamo che ogni persona 
            meriti un PC perfetto per le proprie esigenze, dal gaming al lavoro 
            professionale.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;