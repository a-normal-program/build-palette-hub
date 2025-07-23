import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cpu, HardDrive, Zap } from "lucide-react";
import build1 from "@/assets/build1.jpg";
import build2 from "@/assets/build2.jpg";
import build3 from "@/assets/build3.jpg";

const builds = [
  {
    id: 1,
    title: "Gaming Beast RGB",
    image: build1,
    price: "€2,500",
    category: "Gaming",
    specs: ["RTX 4080", "i7-13700K", "32GB DDR5", "1TB NVMe"],
    description: "Build da gaming estremo con RGB personalizzabile e prestazioni top.",
  },
  {
    id: 2,
    title: "Minimal Workstation",
    image: build2,
    price: "€1,800",
    category: "Workstation",
    specs: ["RTX 4060 Ti", "i5-13600K", "16GB DDR5", "500GB NVMe"],
    description: "Design pulito e minimalista per professionisti creativi.",
  },
  {
    id: 3,
    title: "Streaming Setup Pro",
    image: build3,
    price: "€3,200",
    category: "Streaming",
    specs: ["RTX 4090", "i9-13900K", "64GB DDR5", "2TB NVMe"],
    description: "La configurazione perfetta per streaming e content creation.",
  },
  {
    id: 4,
    title: "Budget Gaming",
    image: build1,
    price: "€1,200",
    category: "Budget",
    specs: ["RTX 4060", "i5-12400F", "16GB DDR4", "500GB NVMe"],
    description: "Ottimo rapporto qualità-prezzo per iniziare a giocare.",
  },
  {
    id: 5,
    title: "Creator Studio",
    image: build2,
    price: "€2,800",
    category: "Creative",
    specs: ["RTX 4070 Ti", "i7-13700K", "32GB DDR5", "1TB NVMe"],
    description: "Perfetta per video editing e rendering 3D professionale.",
  },
  {
    id: 6,
    title: "Ultimate RGB",
    image: build3,
    price: "€4,500",
    category: "Premium",
    specs: ["RTX 4090", "i9-13900KS", "128GB DDR5", "4TB NVMe"],
    description: "La build più potente del nostro catalogo con RGB spettacolare.",
  },
];

const categories = ["Tutti", "Gaming", "Workstation", "Streaming", "Budget", "Creative", "Premium"];

const Builds = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Gallery
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Scopri le nostre build PC personalizzate, progettate per ogni esigenza e budget. 
            Ogni configurazione è testata e ottimizzata per garantire prestazioni eccellenti.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Builds Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {builds.map((build) => (
              <Card key={build.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      {build.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white bg-black/70 px-3 py-1 rounded">
                      {build.price}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {build.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {build.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {build.specs.map((spec, index) => {
                      const icons = [Cpu, HardDrive, Zap, HardDrive];
                      const Icon = icons[index] || Cpu;
                      return (
                        <div key={spec} className="flex items-center gap-2 text-sm">
                          <Icon className="w-4 h-4 text-accent" />
                          <span>{spec}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Dettagli Build
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Builds;