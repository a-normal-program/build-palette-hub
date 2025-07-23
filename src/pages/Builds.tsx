import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Cpu, HardDrive, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import build1 from "@/assets/build1.jpg";
import build2 from "@/assets/build2.jpg";
import build3 from "@/assets/build3.jpg";

const builds = [
  {
    id: 1,
    title: "Gaming Beast RGB",
    image: build1,
    price: "€2,499",
    category: "Gaming",
    specs: ["RTX 4080 Super", "i7-13700KF", "32GB DDR5", "1TB Gen4 NVMe"],
    description: "Build da gaming estremo con RGB personalizzabile e prestazioni top per 4K gaming.",
    features: ["RGB Sync", "Overclocking", "Ray Tracing", "DLSS 3.0"],
    fps: "165+ FPS in 1440p",
  },
  {
    id: 2,
    title: "Minimal Workstation",
    image: build2,
    price: "€1,799",
    category: "Workstation",
    specs: ["RTX 4060 Ti", "i5-13600K", "32GB DDR5", "1TB NVMe"],
    description: "Design pulito e minimalista per professionisti creativi e sviluppatori.",
    features: ["Silent Cooling", "Adobe CC", "Blender", "CAD Support"],
    fps: "Render 4K video",
  },
  {
    id: 3,
    title: "Streaming Setup Pro",
    image: build3,
    price: "€3,199",
    category: "Streaming",
    specs: ["RTX 4070 Ti Super", "i7-13700K", "64GB DDR5", "2TB NVMe"],
    description: "La configurazione perfetta per streaming simultaneo su multiple piattaforme.",
    features: ["Dual PC Setup", "Capture Card", "Stream Deck", "OBS Ready"],
    fps: "1080p 60fps stream",
  },
  {
    id: 4,
    title: "Budget Gaming",
    image: build1,
    price: "€1,099",
    category: "Budget",
    specs: ["RTX 4060", "i5-12400F", "16GB DDR4", "500GB NVMe"],
    description: "Ottimo rapporto qualità-prezzo per iniziare a giocare ai titoli più popolari.",
    features: ["1080p Gaming", "Upgrade Ready", "Warranty", "Setup Support"],
    fps: "120+ FPS in 1080p",
  },
  {
    id: 5,
    title: "Creator Studio",
    image: build2,
    price: "€2,799",
    category: "Creative",
    specs: ["RTX 4070 Ti", "i7-13700K", "32GB DDR5", "1TB + 2TB HDD"],
    description: "Perfetta per video editing 4K, rendering 3D e motion graphics professionali.",
    features: ["Premiere Pro", "After Effects", "Cinema 4D", "Color Grading"],
    fps: "4K video editing",
  },
  {
    id: 6,
    title: "Ultimate RGB Showcase",
    image: build3,
    price: "€4,499",
    category: "Premium",
    specs: ["RTX 4090", "i9-13900KS", "64GB DDR5", "2TB Gen5 NVMe"],
    description: "La build più potente e spettacolare del nostro catalogo con RGB sincronizzato.",
    features: ["Liquid Cooling", "Custom Loop", "RGB Everything", "Overclocked"],
    fps: "240+ FPS in 1440p",
  },
  {
    id: 7,
    title: "Silent Productivity",
    image: build1,
    price: "€1,599",
    category: "Office",
    specs: ["RTX 4060", "i5-13400", "16GB DDR5", "512GB NVMe"],
    description: "PC silenzioso per ufficio con prestazioni eccellenti per produttività.",
    features: ["Zero Noise", "Energy Efficient", "Multi-Monitor", "Office Suite"],
    fps: "Perfect for work",
  },
  {
    id: 8,
    title: "Compact Gaming ITX",
    image: build2,
    price: "€2,299",
    category: "Compact",
    specs: ["RTX 4070", "i5-13600K", "32GB DDR5", "1TB NVMe"],
    description: "Gaming potente in formato Mini-ITX per spazi ridotti senza compromessi.",
    features: ["Mini-ITX", "Portable", "High Performance", "Custom Cooling"],
    fps: "144+ FPS in 1440p",
  },
  {
    id: 9,
    title: "AI Workstation",
    image: build3,
    price: "€5,999",
    category: "AI",
    specs: ["RTX 4090", "i9-13900K", "128GB DDR5", "4TB NVMe"],
    description: "Workstation per machine learning, AI development e calcoli scientifici.",
    features: ["CUDA Cores", "Tensor Cores", "Python Ready", "Deep Learning"],
    fps: "AI/ML Training",
  },
  {
    id: 10,
    title: "Esports Champion",
    image: build1,
    price: "€1,899",
    category: "Esports",
    specs: ["RTX 4060 Ti", "i5-13600KF", "32GB DDR5", "1TB NVMe"],
    description: "Ottimizzata per esports con latenza minima e fps stabili nei titoli competitivi.",
    features: ["Low Latency", "240Hz Ready", "Competitive Edge", "Tournament Grade"],
    fps: "300+ FPS in esports",
  },
  {
    id: 11,
    title: "Content Creator Max",
    image: build2,
    price: "€3,799",
    category: "Creator",
    specs: ["RTX 4080 Super", "i9-13900K", "64GB DDR5", "2TB + 4TB HDD"],
    description: "Per YouTuber e content creator che necessitano di massime prestazioni.",
    features: ["Multi-cam Recording", "Live Streaming", "Fast Rendering", "Storage Master"],
    fps: "8K video capable",
  },
  {
    id: 12,
    title: "Server Home Lab",
    image: build3,
    price: "€2,199",
    category: "Server",
    specs: ["No GPU", "Xeon E-2386G", "64GB ECC", "4x2TB RAID"],
    description: "Server domestico per homelab, NAS, virtualizzazione e self-hosting.",
    features: ["24/7 Uptime", "ECC Memory", "RAID Storage", "Virtualization"],
    fps: "Always online",
  }
];

const categories = ["Tutti", "Gaming", "Workstation", "Streaming", "Budget", "Creative", "Premium", "Office", "Compact", "AI", "Esports", "Creator", "Server"];

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
              <Card key={build.id} className="group overflow-hidden hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 hover:shadow-glow animate-fade-in">
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
                  
                  <div className="space-y-3 mb-4">
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
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Performance:</span>
                      <span className="font-semibold text-accent">{build.fps}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {build.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 group-hover:bg-accent group-hover:text-accent-foreground" asChild>
                      <Link to={`/build/${build.id}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Dettagli
                      </Link>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <Link to="/contact">
                        Acquista
                      </Link>
                    </Button>
                  </div>
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