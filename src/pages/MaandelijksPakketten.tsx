import Header from "@/components/Header";
import PackageSection from "@/components/PackageSection";
import Footer from "@/components/Footer";
import { maandPakketten } from "@/data/packages";
import maandelijksImg from "@/assets/maandelijks.jpg";

const MaandelijksPakketten = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <PackageSection
        id="maandelijks"
        title="Maandelijkse Pakketten"
        subtitle="Zorgeloos onderhoud"
        packages={maandPakketten}
        image={maandelijksImg}
      />
    </div>
    <Footer />
  </div>
);

export default MaandelijksPakketten;
