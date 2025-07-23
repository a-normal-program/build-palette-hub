import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Cpu, Settings, Users, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import build1 from "@/assets/build1.jpg";
import build2 from "@/assets/build2.jpg";
import build3 from "@/assets/build3.jpg";

const Index = () => {
  const featuredBuilds = [
    {
      title: "Gaming Beast RGB",
      image: build1,
      price: "€2,500",
      rating: 5,
      description: "Build da gaming estremo con RGB e prestazioni top"
    },
    {
      title: "Minimal Workstation", 
      image: build2,
      price: "€1,800",
      rating: 5,
      description: "Design pulito per professionisti creativi"
    },
    {
      title: "Streaming Setup Pro",
      image: build3, 
      price: "€3,200",
      rating: 5,
      description: "Perfetta per streaming e content creation"
    }
  ];

  const services = [
    {
      icon: Monitor,
      title: "Build Gaming",
      description: "PC da gaming personalizzati per ogni budget e prestazione desiderata"
    },
    {
      icon: Cpu,
      title: "Workstation Pro",
      description: "Sistemi professionali per rendering, video editing e sviluppo"
    },
    {
      icon: Settings,
      title: "Upgrade & Tuning",
      description: "Potenziamento componenti e ottimizzazione prestazioni"
    },
    {
      icon: Users,
      title: "Consulenza",
      description: "Supporto personalizzato per scegliere la configurazione ideale"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Offriamo soluzioni complete per ogni esigenza, dal gaming professionale alle workstation creative
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Builds */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build in Evidenza</h2>
              <p className="text-xl text-muted-foreground">
                Le nostre configurazioni più richieste e apprezzate dalla community
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex" asChild>
              <Link to="/builds">
                Vedi Tutte
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBuilds.map((build, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      Popular
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white bg-black/70 px-3 py-1 rounded">
                      {build.price}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {build.title}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(build.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {build.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                    Scopri di più
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/builds">
                Vedi Tutte le Build
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a Realizzare il Tuo PC Perfetto?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Contattaci per una consulenza gratuita e scopri come possiamo trasformare 
            le tue idee in una build PC eccezionale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Richiedi Preventivo
              </Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                Guarda il Canale YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
