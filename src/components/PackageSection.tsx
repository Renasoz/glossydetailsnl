import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import ExtrasModal from "@/components/ExtrasModal";
import type { ExtraOption } from "@/data/packages";

interface Package {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  extras?: ExtraOption[];
}

interface PackageSectionProps {
  id: string;
  title: string;
  subtitle: string;
  packages: Package[];
  image?: string;
  extras?: ExtraOption[];
}

const categories = [
  { label: "Exterieur", href: "/exterieur" },
  { label: "Interieur", href: "/interieur" },
  { label: "Combi", href: "/combi" },
  { label: "Maandelijks", href: "/maandelijks" },
];

const PackageCard = ({
  pkg,
  onSelect,
}: {
  pkg: Package;
  onSelect: (name: string, price: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onSelect(pkg.name, pkg.price)}
    className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all hover:shadow-lg hover:-translate-y-0.5 ${
      pkg.popular
        ? "border-primary bg-surface-elevated shadow-md shadow-primary/10"
        : "border-border bg-card"
    }`}
  >
    <div className="flex-1 min-w-0">
      <h3 className="text-base font-serif font-bold text-foreground">{pkg.name}</h3>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
        {pkg.description}
      </p>
    </div>
    <div className="shrink-0 text-right pl-4 border-l border-border">
      <span className="text-xl font-bold text-primary">{pkg.price.replace("vanaf ", "")}</span>
      <p className="text-xs text-muted-foreground">Vanaf</p>
    </div>
  </button>
);

const PackageSection = ({ id, title, subtitle, packages, image, extras }: PackageSectionProps) => {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPkgExtras, setSelectedPkgExtras] = useState<ExtraOption[]>([]);
  const handleSelect = (pkgName: string, pkgPrice: string, pkgExtras?: ExtraOption[]) => {
    setSelectedPkg(pkgName);
    setSelectedPrice(pkgPrice);
    setSelectedPkgExtras(pkgExtras ?? []);
    setModalOpen(true);
  };

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

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} onSelect={handleSelect} />
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

      <ExtrasModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        packageName={selectedPkg}
        packagePrice={selectedPrice}
        extras={[...(extras ?? []), ...selectedPkgExtras]}
      />
    </section>
  );
};

export default PackageSection;
