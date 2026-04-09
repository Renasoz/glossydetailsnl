import Header from "@/components/Header";
import PackageSection from "@/components/PackageSection";
import Footer from "@/components/Footer";
import { combiPakketten } from "@/data/packages";
import combiImg from "@/assets/combi.jpg";

const CombiPakketten = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <PackageSection
        id="combi"
        title="Combi Pakketten"
        subtitle="Binnen & buiten compleet"
        packages={combiPakketten}
        image={combiImg}
      />
    </div>
    <Footer />
  </div>
);

export default CombiPakketten;
