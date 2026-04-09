import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="border-t border-border bg-card py-16 px-4">
    <div className="container mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-xl font-serif font-bold text-gradient-gold mb-4">Detail Pro Amersfoort</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Professionele auto detailing in het hart van Amersfoort. Kwaliteit en passie voor uw auto.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Contact</h4>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Amersfoort, Nederland</p>
          <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> 033 - 123 4567</p>
          <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> info@detailpro-amersfoort.nl</p>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Openingstijden</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary" /> Ma - Vr: 08:00 - 18:00</p>
          <p className="pl-7">Za: 09:00 - 16:00</p>
          <p className="pl-7">Zo: Gesloten</p>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
      © 2026 Detail Pro Amersfoort. Alle rechten voorbehouden.
    </div>
  </footer>
);

export default Footer;
