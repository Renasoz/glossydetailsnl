import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <Button
      className={`w-full ${
        pkg.popular
          ? "bg-primary text-primary-foreground hover:bg-gold-light"
          : "bg-secondary text-secondary-foreground hover:bg-muted"
      }`}
    >
      Kies Dit Pakket
    </Button>
  </div>
);

const PackageSection = ({ id, title, subtitle, packages, image }: PackageSectionProps) => (
  <section id={id} className="py-24 px-4">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        {image && (
          <div className="mb-8 max-w-3xl mx-auto rounded-2xl overflow-hidden">
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
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">{subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold">{title}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} pkg={pkg} />
        ))}
      </div>
    </div>
  </section>
);

export default PackageSection;
