import { Button } from "@/components/ui/button";
import { Play, Monitor, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pc.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Build</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-accent">PC</span>{" "}
            <span className="text-white">Perfetti</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Trasformiamo le tue idee in potenti macchine da gaming e workstation. 
            Ogni componente scelto con cura, ogni build ottimizzata per le massime prestazioni.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="accent" size="lg" className="group" asChild>
              <Link to="/builds">
                <Monitor className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Scopri le Build
              </Link>
            </Button>
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Guarda il Canale
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-pc-blue transition-colors">
                500+
              </div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">
                Build Completate
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-pc-blue transition-colors">
                50K+
              </div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">
                Subscriber YouTube
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-pc-blue transition-colors">
                5+
              </div>
              <div className="text-gray-400 uppercase tracking-wide text-sm">
                Anni di Esperienza
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-pc-blue/30 rounded-lg animate-pulse hidden lg:block" />
      <div className="absolute top-20 right-20 w-12 h-12 border border-pc-blue/20 rounded-full animate-pulse hidden lg:block" />
      <Cpu className="absolute bottom-20 right-10 w-16 h-16 text-pc-blue/20 animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;