import Header from "@/components/Header";
import Footer from "@/components/Footer";
import maandelijksImg from "@/assets/maandelijks.jpg.asset.json";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MaandelijksPakketten = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Maandelijks Onderhoud</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Vanaf €79 per maand</h2>
          <img
            src={maandelijksImg}
            alt="Maandelijks onderhoud"
            className="w-full max-w-lg mx-auto rounded-2xl mb-8 object-cover aspect-video"
          />
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Wij bieden maandelijks onderhoud volledig op maat. Geen vaste pakketten, maar een offerte die past bij uw auto en wensen.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Neem contact met ons op en wij stellen samen het perfecte onderhoudsplan samen — geheel vrijblijvend.
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
    </div>
    <Footer />
  </div>
);

export default MaandelijksPakketten;
