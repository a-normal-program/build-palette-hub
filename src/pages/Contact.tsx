import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Youtube, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@buildmaster.it",
      description: "Scrivici per qualsiasi domanda"
    },
    {
      icon: Phone,
      title: "Telefono",
      content: "+39 123 456 7890",
      description: "Lun-Ven 9:00-18:00"
    },
    {
      icon: MapPin,
      title: "Sede",
      content: "Milano, Italia",
      description: "Disponibili per consulenze"
    },
    {
      icon: Youtube,
      title: "YouTube",
      content: "@BuildMasterIT",
      description: "50K+ subscribers"
    }
  ];

  const services = [
    "Build Gaming PC",
    "Workstation Professionale",
    "Upgrade Componenti",
    "Consulenza Hardware",
    "Setup RGB",
    "Liquid Cooling",
    "Overclocking",
    "Altro"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contattaci
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Hai un progetto in mente? Vuoi una consulenza personalizzata? 
            Siamo qui per aiutarti a realizzare il PC perfetto per le tue esigenze.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  Richiedi una Consulenza
                </CardTitle>
                <p className="text-muted-foreground">
                  Compila il form e ti risponderemo entro 24 ore con un preventivo personalizzato.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome *</Label>
                    <Input id="firstName" placeholder="Il tuo nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Cognome *</Label>
                    <Input id="lastName" placeholder="Il tuo cognome" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="la-tua-email@esempio.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefono</Label>
                  <Input id="phone" type="tel" placeholder="+39 123 456 7890" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Tipo di Servizio *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona il servizio" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Indicativo</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleziona la fascia di budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500-1000">€500 - €1.000</SelectItem>
                      <SelectItem value="1000-1500">€1.000 - €1.500</SelectItem>
                      <SelectItem value="1500-2500">€1.500 - €2.500</SelectItem>
                      <SelectItem value="2500-4000">€2.500 - €4.000</SelectItem>
                      <SelectItem value="4000+">€4.000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Descrizione Progetto *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descrivi nel dettaglio cosa stai cercando: utilizzo previsto, giochi che vuoi giocare, software che usi, preferenze estetiche, ecc."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button variant="accent" size="lg" className="w-full">
                  Invia Richiesta
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Campi obbligatori. I tuoi dati saranno trattati nel rispetto della privacy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Informazioni di Contatto</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                    <CardContent className="p-6">
                      <info.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-secondary/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Orari di Lavoro</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunedì - Venerdì</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabato</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domenica</span>
                    <span className="text-muted-foreground">Chiuso</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent text-accent-foreground">
              <CardContent className="p-6 text-center">
                <Youtube className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seguici su YouTube</h3>
                <p className="mb-4">
                  Guide, recensioni e build complete sul nostro canale
                </p>
                <Button variant="outline" className="bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                  Iscriviti al Canale
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;