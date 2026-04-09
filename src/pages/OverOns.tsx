import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MapPin, Car, Sparkles, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const OverOns = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Over Ons</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Glossy Details</h1>
          <p className="text-muted-foreground text-lg">
            Mobiel autopoetsbedrijf in de regio Amersfoort
          </p>
        </div>

        <div className="space-y-8 text-secondary-foreground leading-relaxed">
          <p>
            Bij <strong className="text-foreground">Glossy Details</strong> draait alles om gemak en kwaliteit.
            Als mobiel autopoetsbedrijf komen wij naar ú toe — thuis, op kantoor of waar u maar wilt in de regio Amersfoort.
            U hoeft nergens heen te rijden en kunt gewoon doorgaan met uw dag terwijl wij uw auto in topconditie brengen.
          </p>
          <p>
            Met professionele producten en jarenlange ervaring zorgen wij ervoor dat uw auto er van binnen en buiten weer
            als nieuw uitziet. Van een snelle uitwendige wasbeurt tot een complete detailing met keramische coating —
            wij hebben voor elke auto het juiste pakket.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <Car className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Wij Komen Bij U</h3>
              <p className="text-sm text-muted-foreground">Geen gedoe met wegbrengen — wij detailen uw auto op uw eigen oprit.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <Sparkles className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Premium Kwaliteit</h3>
              <p className="text-sm text-muted-foreground">Professionele producten en technieken voor een showroomresultaat.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <Clock className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Flexibel Plannen</h3>
              <p className="text-sm text-muted-foreground">Op een moment dat het u uitkomt — ook in het weekend.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Regio Amersfoort</h3>
              <p className="text-sm text-muted-foreground">Actief in Amersfoort en omliggende gemeenten.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-primary/30 bg-surface-elevated p-8 text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Direct Contact</h2>
          <p className="text-muted-foreground mb-6">
            Bel of app ons voor een vrijblijvende offerte of om een afspraak te maken.
          </p>
          <a href="tel:0685038115">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light gap-2 text-base px-8">
              <Phone className="w-5 h-5" />
              06 - 85 03 81 15
            </Button>
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default OverOns;
