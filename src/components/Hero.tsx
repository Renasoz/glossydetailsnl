import heroCar from "@/assets/hero-car.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroCar}
      alt="Professionele auto detailing"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

    <div className="relative z-10 container mx-auto text-center px-4 pt-20">
      <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-in">
        Amersfoort &bull; Professioneel &bull; Premium
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
        Uw Auto Verdient{" "}
        <span className="text-gradient-gold">Het Beste</span>
      </h1>
      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Professionele auto detailing in Amersfoort. Van interieurreiniging tot
        keramische coating — wij brengen uw auto terug in showroomconditie.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-light gap-2 text-base px-8">
          Bekijk Pakketten <ArrowRight className="w-5 h-5" />
        </Button>
        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-base px-8">
          Gratis Offerte
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
