import Header from "@/components/Header";
import PackageSection from "@/components/PackageSection";
import Footer from "@/components/Footer";
import { interieurPakketten } from "@/data/packages";
import interieurImg from "@/assets/interieur.jpg";

const InterieurPakketten = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <PackageSection
        id="interieur"
        title="Interieur Pakketten"
        subtitle="Van binnen als nieuw"
        packages={interieurPakketten}
        image={interieurImg}
      />
    </div>
    <Footer />
  </div>
);

export default InterieurPakketten;
