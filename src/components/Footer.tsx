import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="contact" className="border-t border-border bg-card py-16 px-4">
    <div className="container mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-xl font-serif font-bold text-gradient-gold mb-4">Glossy Details</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Mobiel autopoetsbedrijf. Wij komen bij u thuis, op kantoor of waar u maar wilt.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Contact</h4>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Nederland</p>
          <a href="tel:0685038115" className="flex items-center gap-3 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" /> 06 - 85 03 81 15
          </a>
          <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> info@glossydetails.nl</p>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="font-semibold text-foreground">Pagina's</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <Link to="/over-ons" className="block hover:text-primary transition-colors">Over Ons</Link>
          <Link to="/interieur" className="block hover:text-primary transition-colors">Interieur Pakketten</Link>
          <Link to="/exterieur" className="block hover:text-primary transition-colors">Exterieur Pakketten</Link>
          <Link to="/combi" className="block hover:text-primary transition-colors">Combi Pakketten</Link>
          <Link to="/maandelijks" className="block hover:text-primary transition-colors">Maandelijks Onderhoud</Link>
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
      © 2026 Glossy Details. Alle rechten voorbehouden.
    </div>
  </footer>
);

export default Footer;
