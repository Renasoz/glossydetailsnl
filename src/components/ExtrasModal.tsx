import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, Car } from "lucide-react";
import type { ExtraOption } from "@/data/packages";

interface ExtrasModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
  packagePrice: string;
  extras: ExtraOption[];
}

const carSizes = [
  { value: "klein", label: "Kleine auto", extra: 0, description: "bijv. Polo, Aygo, Up" },
  { value: "middelgroot", label: "Middelgrote auto", extra: 20, description: "bijv. Golf, A4, 3-serie" },
  { value: "groot", label: "Grote auto", extra: 30, description: "bijv. SUV, bus, Touareg" },
] as const;

// Plaatsen binnen omgeving Amersfoort (geen voorrijkosten)
const LOCAL_CITIES = [
  "amersfoort", "leusden", "hoogland", "hooglanderveen", "soest", "soesterberg",
  "bunschoten", "spakenburg", "nijkerk", "hoevelaken", "barneveld", "baarn",
  "woudenberg", "scherpenzeel", "achterveld", "stoutenburg",
];
const DELIVERY_FEE = 15;

const isLocal = (city: string) => {
  const c = city.trim().toLowerCase();
  if (!c) return true;
  return LOCAL_CITIES.some((l) => c.includes(l));
};

const parseBasePrice = (priceStr: string): number | null => {
  const match = priceStr.match(/€(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

const ExtrasModal = ({ open, onOpenChange, packageName, packagePrice, extras }: ExtrasModalProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [carSize, setCarSize] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [showError, setShowError] = useState(false);
  const [showCityError, setShowCityError] = useState(false);

  const basePrice = parseBasePrice(packagePrice);
  const outsideArea = city.trim().length > 0 && !isLocal(city);
  const deliveryFee = outsideArea ? DELIVERY_FEE : 0;

  const toggle = (name: string) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const selectedSize = carSizes.find((s) => s.value === carSize);

  const buildMessage = () => {
    const sizeLabel = selectedSize ? selectedSize.label : "";
    let msg = `Hallo! Ik heb interesse in het pakket "${packageName}" voor een ${sizeLabel}.`;
    if (city.trim()) {
      msg += ` Ik kom uit ${city.trim()}.`;
      if (outsideArea) {
        msg += ` (Buiten omgeving Amersfoort, +€${DELIVERY_FEE} voorrijkosten)`;
      }
    }
    if (selected.length > 0) {
      msg += ` Met extra opties: ${selected.join(", ")}.`;
    }
    msg += " Graag een offerte op maat!";
    return encodeURIComponent(msg);
  };

  const handleContact = (type: "whatsapp" | "phone") => {
    let invalid = false;
    if (!carSize) {
      setShowError(true);
      invalid = true;
    }
    if (!city.trim()) {
      setShowCityError(true);
      invalid = true;
    }
    if (invalid) {
      return;
    }
    if (type === "whatsapp") {
      window.open(`https://wa.me/31685038115?text=${buildMessage()}`, "_blank");
    } else {
      window.location.href = "tel:0685038115";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            Welk type voertuig heeft u?
          </DialogTitle>
        </DialogHeader>

        {/* Car size selection - mandatory */}
        <div className="mt-2 space-y-2">
          {carSizes.map((size) => {
            const total = basePrice !== null ? basePrice + size.extra + deliveryFee : null;
            const isActive = carSize === size.value;
            return (
              <button
                key={size.value}
                type="button"
                onClick={() => { setCarSize(size.value); setShowError(false); }}
                className={`w-full flex items-center justify-between gap-4 p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-muted-foreground/30"
                }`}
              >
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-foreground block">{size.label}</span>
                  <span className="text-sm text-muted-foreground mt-0.5 block">{size.description}</span>
                </div>
                {total !== null && (
                  <span className="text-primary font-bold text-lg shrink-0">€{total}</span>
                )}
              </button>
            );
          })}
          {showError && (
            <p className="text-destructive text-sm mt-1">Selecteer eerst een autogrootte.</p>
          )}
        </div>

        {/* City / province input */}
        <div className="mt-6">
          <Label htmlFor="city" className="font-semibold text-foreground text-sm">
            Uit welke stad/provincie komt u?
          </Label>
          <Input
            id="city"
            value={city}
            onChange={(e) => { setCity(e.target.value); setShowCityError(false); }}
            placeholder="Bijv. Amersfoort, Utrecht, Amsterdam..."
            maxLength={100}
            className="mt-2"
          />
          {showCityError && (
            <p className="text-destructive text-sm mt-1">Vul uw stad of provincie in.</p>
          )}
          {outsideArea && (
            <p className="text-sm text-muted-foreground mt-2">
              Buiten omgeving Amersfoort: <span className="text-primary font-semibold">+€{DELIVERY_FEE} voorrijkosten</span> bovenop het pakket.
            </p>
          )}
          {city.trim() && !outsideArea && (
            <p className="text-sm text-muted-foreground mt-2">
              Binnen omgeving Amersfoort: geen voorrijkosten.
            </p>
          )}
        </div>

        {/* Extra options */}
        {extras.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-foreground text-sm mb-3">Extra opties (optioneel)</h3>
            <div className="space-y-3">
              {extras.map((extra) => {
                const isSelected = selected.includes(extra.name);
                return (
                  <button
                    key={extra.name}
                    type="button"
                    onClick={() => toggle(extra.name)}
                    className={`w-full flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:border-muted-foreground/30"
                    }`}
                  >
                    <Checkbox
                      checked={isSelected}
                      className="mt-1 shrink-0 pointer-events-none"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground">{extra.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {extra.description}
                      </p>
                    </div>
                    <span className="text-primary font-bold text-lg shrink-0">
                      {extra.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            onClick={() => handleContact("whatsapp")}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Offerte
          </Button>
          <Button
            onClick={() => handleContact("phone")}
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary/10 gap-2"
          >
            <Phone className="w-4 h-4" />
            Bel Ons
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExtrasModal;
