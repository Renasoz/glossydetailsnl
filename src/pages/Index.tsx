import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import maandelijksImg from "@/assets/maandelijks.jpg";
import interieurImg from "@/assets/interieur.jpg";
import exterieurImg from "@/assets/exterieur.jpg";
import combiImg from "@/assets/combi.jpg";
import { MapPin, Car, Sparkles } from "lucide-react";

const services = [
  {
    title: "Interieur Detailing",
    description: "Van stofzuigen tot dieptereiniging en leerbehandeling — uw interieur als nieuw.",
    image: interieurImg,
    href: "/interieur",
    startingPrice: "Vanaf €89",
  },
  {
    title: "Exterieur Detailing",
    description: "Handwas, polijsten en keramische coating voor een showroomglans.",
    image: exterieurImg,
    href: "/exterieur",
    startingPrice: "Vanaf €69",
  },
  {
    title: "Combi Pakketten",
    description: "Binnen & buiten compleet verzorgd in één behandeling.",
    image: combiImg,
    href: "/combi",
    startingPrice: "Vanaf €139",
  },
  {
    title: "Maandelijks Onderhoud",
    description: "Zorgeloos rijden met een vast maandelijks onderhoudspakket.",
    image: maandelijksImg,
    href: "/maandelijks",
    startingPrice: "Vanaf €79/maand",
  },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />

    {/* USP strip */}
    <section className="py-12 px-4 border-b border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><Car className="w-5 h-5 text-primary" /> Wij komen bij u thuis</span>
        <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Regio Amersfoort</span>
        <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> Professionele producten</span>
      </div>
    </section>

    <section id="diensten" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Onze Diensten</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Wat Kunnen Wij Voor U Doen?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Index;
