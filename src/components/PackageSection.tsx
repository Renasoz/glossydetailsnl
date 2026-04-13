import { Check, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface Package {
  name: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
}

interface PackageSectionProps {
  id: string;
  title: string;
  subtitle: string;
  packages: Package[];
  image?: string;
}

const categories = [
  { label: "Exterieur", href: "/exterieur" },
  { label: "Interieur", href: "/interieur" },
  { label: "Combi", href: "/combi" },
  { label: "Maandelijks", href: "/maandelijks" },
];

const PackageCard = ({ pkg }: { pkg: Package }) => (
  <div
    className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-2xl ${
      pkg.popular
        ? "border-primary bg-surface-elevated shadow-lg shadow-primary/10"
        : "border-border bg-card"
    }`}
  >
    {pkg.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
        Meest Gekozen
      </span>
    )}
    <h3 className="text-xl font-serif font-bold mb-2">{pkg.name}</h3>
    <div className="mb-6">
      <span className="text-3xl font-bold text-gradient-gold">{pkg.price}</span>
      {pkg.period && <span className="text-muted-foreground text-sm ml-1">/{pkg.period}</span>}
    </div>
    <ul className="space-y-3 mb-8">
      {pkg.features.map((f, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <a href="tel:0685038115">
      <Button
        className={`w-full ${
          pkg.popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-muted"
        }`}
      >
        <Phone className="w-4 h-4 mr-2" />
        Vraag Offerte Aan
      </Button>
    </a>
  </div>
);

const PackageSection = ({ id, title, subtitle, packages, image }: PackageSectionProps) => {
  const location = useLocation();

  return (
    <section id={id} className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">{title}</h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = location.pathname === cat.href;
            return (
              <Link key={cat.href} to={cat.href}>
                <Button
                  variant={isActive ? "default" : "secondary"}
                  className={isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }
                >
                  {cat.label}
                </Button>
              </Link>
            );
          })}
        </div>

        {image && (
          <div className="mb-12 max-w-3xl mx-auto rounded-2xl overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              width={1024}
              height={640}
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* Offerte CTA */}
        <div className="mt-16 max-w-2xl mx-auto text-center rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="text-xl font-serif font-bold mb-3">Offerte Op Maat Nodig?</h3>
          <p className="text-muted-foreground mb-6">
            Elke auto is anders. Neem contact met ons op voor een vrijblijvende offerte op maat. 
            Wij adviseren u graag over het beste pakket voor uw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0685038115">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto">
                <Phone className="w-4 h-4" />
                Bel: 06 - 85 03 81 15
              </Button>
            </a>
            <a href="https://wa.me/31685038115" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2 w-full sm:w-auto">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
