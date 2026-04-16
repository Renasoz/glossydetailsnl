import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import maandelijksImg from "@/assets/maandelijks.jpg";
import interieurImg from "@/assets/interieur.jpg";
import exterieurImg from "@/assets/exterieur.jpg";
import combiImg from "@/assets/combi.jpg";
import { MapPin, Car, Sparkles, Phone, MessageCircle } from "lucide-react";

const services = [
  {
    title: "Interieur Detailing",
    description: "Van stofzuigen tot dieptereiniging en leerbehandeling — uw interieur als nieuw.",
    image: interieurImg,
    href: "/interieur",
    startingPrice: "Vanaf €99",
  },
  {
    title: "Exterieur Detailing",
    description: "Handwas, polijsten en keramische coating voor een showroomglans.",
    image: exterieurImg,
    href: "/exterieur",
    startingPrice: "Vanaf €79",
  },
  {
    title: "Combi Pakketten",
    description: "Binnen & buiten compleet verzorgd in één behandeling.",
    image: combiImg,
    href: "/combi",
    startingPrice: "Vanaf €149",
  },
  {
    title: "Maandelijks Onderhoud",
    description: "Zorgeloos rijden met een vast maandelijks onderhoudspakket.",
    image: maandelijksImg,
    href: "/maandelijks",
    startingPrice: "Vanaf €89/maand",
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
        <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Mobiel door heel Nederland</span>
        <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary" /> Professionele producten</span>
      </div>
    </section>


    {/* Hoe werkt het */}
    <section className="py-20 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Hoe Werkt Het</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">In 3 Simpele Stappen</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold font-serif">1</div>
            <h3 className="text-lg font-semibold text-foreground">Neem Contact Op</h3>
            <p className="text-muted-foreground text-sm">Bel of app ons en vertel wat uw auto nodig heeft. Wij adviseren u graag.</p>
          </div>
          <div className="space-y-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold font-serif">2</div>
            <h3 className="text-lg font-semibold text-foreground">Wij Komen Langs</h3>
            <p className="text-muted-foreground text-sm">Op de afgesproken dag en tijd staan wij bij u op de oprit — met alles erop en eraan.</p>
          </div>
          <div className="space-y-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold font-serif">3</div>
            <h3 className="text-lg font-semibold text-foreground">Genieten Maar</h3>
            <p className="text-muted-foreground text-sm">Uw auto glimt als nooit tevoren. Wij ruimen alles netjes op en u rijdt weer met plezier.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Diensten */}
    <section id="diensten" className="py-24 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Onze Diensten</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Wat Kunnen Wij Voor U Doen?</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Kies het pakket dat bij u past. Van een snelle opfrisbeurt tot een volledige detailing — wij hebben het.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>

    {/* Waarom Glossy Details */}
    <section className="py-20 px-4 border-t border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Waarom Glossy Details?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Glossy Details is een mobiel autopoetsbedrijf. Wij komen naar ú toe — 
          op uw oprit, parkeerplaats of kantoor. Geen gedoe met wegbrengen, geen wachttijden. 
          U gaat gewoon door met uw dag terwijl wij uw auto laten stralen.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Met professionele producten en oog voor detail zorgen wij voor een resultaat dat u ziet én voelt. 
          Van een snelle wasbeurt tot een complete detailing met keramische coating — wij regelen het.
        </p>
      </div>
    </section>

    <section className="py-20 px-4 border-t border-border">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Offerte Op Maat Aanvragen</h2>
        <p className="text-muted-foreground text-lg mb-4">
          Elke auto verdient een persoonlijke aanpak. Neem contact op en wij maken een offerte op maat — geheel vrijblijvend.
        </p>
        <p className="text-muted-foreground mb-8">
          Bel of app ons en wij adviseren u graag over het beste pakket voor uw auto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0685038115">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8 w-full sm:w-auto">
              <Phone className="w-5 h-5" />
              Bel: 06 - 85 03 81 15
            </Button>
          </a>
          <a href="https://wa.me/31685038115" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2 text-base px-8 w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
