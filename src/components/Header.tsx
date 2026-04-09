import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Interieur", href: "/interieur" },
    { label: "Exterieur", href: "/exterieur" },
    { label: "Combi", href: "/combi" },
    { label: "Maandelijks", href: "/maandelijks" },
    { label: "Over Ons", href: "/over-ons" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="text-2xl font-serif font-bold text-gradient-gold">
          Glossy Details
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:0685038115">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-gold-light gap-2">
              <Phone className="w-4 h-4" />
              Bel Ons
            </Button>
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:0685038115">
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-gold-light gap-2">
              <Phone className="w-4 h-4" />
              06 - 85 03 81 15
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
