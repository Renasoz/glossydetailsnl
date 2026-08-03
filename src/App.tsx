import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import MaandelijksPakketten from "./pages/MaandelijksPakketten";
import InterieurPakketten from "./pages/InterieurPakketten";
import ExterieurPakketten from "./pages/ExterieurPakketten";
import CombiPakketten from "./pages/CombiPakketten";
import OverOns from "./pages/OverOns";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/glossydetailsnl">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/maandelijks" element={<MaandelijksPakketten />} />
          <Route path="/interieur" element={<InterieurPakketten />} />
          <Route path="/exterieur" element={<ExterieurPakketten />} />
          <Route path="/combi" element={<CombiPakketten />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
