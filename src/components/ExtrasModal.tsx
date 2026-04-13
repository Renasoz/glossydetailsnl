import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

const parseBasePrice = (priceStr: string): number | null => {
  const match = priceStr.match(/€(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

const ExtrasModal = ({ open, onOpenChange, packageName, packagePrice, extras }: ExtrasModalProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [carSize, setCarSize] = useState<string>("");
  const [showError, setShowError] = useState(false);

  const basePrice = parseBasePrice(packagePrice);

  const toggle = (name: string) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const selectedSize = carSizes.find((s) => s.value === carSize);

  const buildMessage = () => {
    const sizeLabel = selectedSize ? selectedSize.label : "";
    let msg = `Hallo! Ik heb interesse in het pakket "${packageName}" voor een ${sizeLabel}.`;
    if (selected.length > 0) {
      msg += ` Met extra opties: ${selected.join(", ")}.`;
    }
    msg += " Graag een offerte op maat!";
    return encodeURIComponent(msg);
  };

  const handleContact = (type: "whatsapp" | "phone") => {
    if (!carSize) {
      setShowError(true);
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
            const total = basePrice !== null ? basePrice + size.extra : null;
            const isActive = carSize === size.value;
            return (
              <button
                key={size.value}
                type="button"
                onClick={() => { setCarSize(size.value); setShowError(false); }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-muted-foreground/30"
                }`}
              >
                <span className="font-medium text-foreground">{size.label}</span>
                {total !== null && (
                  <span className="text-primary font-bold text-lg">€{total}</span>
                )}
              </button>
            );
          })}
          {showError && (
            <p className="text-destructive text-sm mt-1">Selecteer eerst een autogrootte.</p>
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
