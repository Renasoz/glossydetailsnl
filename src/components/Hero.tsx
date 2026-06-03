import heroCar from "@/assets/hero-car.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroCar}
      alt="Mobiele auto detailing bij u thuis"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

    <div className="relative z-10 container mx-auto text-center px-4 pt-20">
      <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
        <MapPin className="w-4 h-4 inline mr-1" /> Wij Komen Bij U Thuis
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
        Mobiele Detailing{" "}
        <span className="text-gradient-gold">Bij U Op Locatie</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Glossy Details komt naar u toe — thuis, op kantoor of waar u maar wilt.
        Professionele auto detailing zonder dat u de deur uit hoeft.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/combi">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light gap-2 text-base px-8">
            Bekijk Pakketten <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
        <Link to="/over-ons">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-base px-8">
            Over Ons
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
