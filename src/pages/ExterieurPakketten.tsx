import Header from "@/components/Header";
import PackageSection from "@/components/PackageSection";
import Footer from "@/components/Footer";
import { exterieurPakketten, exterieurExtras } from "@/data/packages";
import exterieurImg from "@/assets/exterieur.jpg";

const ExterieurPakketten = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <PackageSection
        id="exterieur"
        title="Exterieur Pakketten"
        subtitle="Stralend van buiten"
        packages={exterieurPakketten}
        image={exterieurImg}
        extras={exterieurExtras}
      />
    </div>
    <Footer />
  </div>
);

export default ExterieurPakketten;
