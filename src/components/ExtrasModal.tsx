import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, MessageCircle } from "lucide-react";
import type { ExtraOption } from "@/data/packages";

interface ExtrasModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  packageName: string;
  extras: ExtraOption[];
}

const ExtrasModal = ({ open, onOpenChange, packageName, extras }: ExtrasModalProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const buildMessage = () => {
    let msg = `Hallo! Ik heb interesse in het pakket "${packageName}".`;
    if (selected.length > 0) {
      msg += ` Met extra opties: ${selected.join(", ")}.`;
    }
    msg += " Graag een offerte op maat!";
    return encodeURIComponent(msg);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            Extra opties bij {packageName}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Selecteer eventuele extra's en neem contact op voor een offerte op maat.
          </p>
        </DialogHeader>

        <div className="space-y-3 mt-4">
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

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a href={`https://wa.me/31685038115?text=${buildMessage()}`} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Offerte
            </Button>
          </a>
          <a href="tel:0685038115" className="flex-1">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 gap-2">
              <Phone className="w-4 h-4" />
              Bel Ons
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExtrasModal;
