import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cpu, HardDrive, Zap, Monitor, Star, CheckCircle } from "lucide-react";
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
    detailedSpecs: {
      cpu: "Intel Core i7-13700KF - 16 Core, 24 Thread",
      gpu: "NVIDIA GeForce RTX 4080 Super 16GB GDDR6X",
      ram: "32GB Corsair Vengeance RGB Pro DDR5-5600",
      storage: "1TB Samsung 980 PRO Gen4 NVMe SSD",
      motherboard: "ASUS ROG Strix Z790-E Gaming",
      cooling: "Corsair H150i RGB Elite Liquid Cooler",
      psu: "Corsair RM850x 850W 80+ Gold Modular",
      case: "Corsair iCUE 5000X RGB Mid-Tower"
    },
    included: ["Assembly & Testing", "2 Year Warranty", "RGB Setup", "Overclocking", "Stress Testing"],
    games: [
      { name: "Cyberpunk 2077", fps: "120+ FPS", settings: "Ultra RTX" },
      { name: "Call of Duty", fps: "180+ FPS", settings: "Ultra" },
      { name: "Fortnite", fps: "240+ FPS", settings: "Epic" }
    ]
  }
];

const BuildDetail = () => {
  const { id } = useParams();
  const build = builds.find(b => b.id === parseInt(id || "1")) || builds[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/builds" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alle Build
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{build.title}</h1>
          <div className="flex flex-wrap gap-4 items-center">
            <Badge variant="default" className="text-lg px-4 py-2 bg-accent text-accent-foreground">{build.category}</Badge>
            <div className="text-3xl font-bold">{build.price}</div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-primary-foreground/80">(127 recensioni)</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image & Features */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={build.image}
                alt={build.title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-xl font-bold">{build.fps}</div>
                <div className="text-sm opacity-80">Performance Target</div>
              </div>
            </div>

            <Card className="bg-secondary/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Cosa Include</h3>
                <div className="space-y-3">
                  {build.included.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specs & Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Specifiche Dettagliate</h2>
              <div className="space-y-4">
                {Object.entries(build.detailedSpecs).map(([key, value]) => {
                  const icons = {
                    cpu: Cpu,
                    gpu: Monitor,
                    ram: Zap,
                    storage: HardDrive,
                    motherboard: Cpu,
                    cooling: Zap,
                    psu: Zap,
                    case: Monitor
                  };
                  const Icon = icons[key as keyof typeof icons] || Cpu;
                  
                  return (
                    <div key={key} className="flex gap-4 p-4 bg-secondary/30 rounded-lg">
                      <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="text-muted-foreground text-sm">{value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Performance nei Giochi</h3>
                <div className="space-y-4">
                  {build.games.map((game) => (
                    <div key={game.name} className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                      <div>
                        <div className="font-semibold">{game.name}</div>
                        <div className="text-sm text-muted-foreground">{game.settings}</div>
                      </div>
                      <div className="text-accent font-bold">{game.fps}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" asChild>
                <Link to="/contact">Richiedi Preventivo</Link>
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Personalizza Build
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildDetail;