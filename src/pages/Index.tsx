import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PackageSection from "@/components/PackageSection";
import Footer from "@/components/Footer";
import maandelijksImg from "@/assets/maandelijks.jpg";
import interieurImg from "@/assets/interieur.jpg";
import exterieurImg from "@/assets/exterieur.jpg";

const maandPakketten = [
  {
    name: "Basis",
    price: "€79",
    period: "maand",
    features: [
      "Uitwendige handwas",
      "Velgenreiniging",
      "Bandenglans",
      "Ramen wassen",
      "1x per maand",
    ],
  },
  {
    name: "Premium",
    price: "€149",
    period: "maand",
    popular: true,
    features: [
      "Alles uit Basis",
      "Interieur stofzuigen",
      "Dashboard reiniging",
      "Luchtverfrisser",
      "2x per maand",
    ],
  },
  {
    name: "VIP",
    price: "€249",
    period: "maand",
    features: [
      "Alles uit Premium",
      "Leerbehandeling",
      "Motor reiniging",
      "Keramische spray coating",
      "Elke week",
    ],
  },
];

const interieurPakketten = [
  {
    name: "Interieur Basis",
    price: "€89",
    features: [
      "Volledig stofzuigen",
      "Dashboard & panelen reinigen",
      "Ramen binnenzijde",
      "Vloermatten wassen",
    ],
  },
  {
    name: "Interieur Diep",
    price: "€179",
    popular: true,
    features: [
      "Alles uit Basis",
      "Stoelen dieptereiniging",
      "Vlekverwijdering",
      "Stoomreiniging",
      "Luchtzuivering",
    ],
  },
  {
    name: "Interieur Totaal",
    price: "€279",
    features: [
      "Alles uit Diep",
      "Leervoeding & bescherming",
      "Hemelbekleding reinigen",
      "Antibacteriële behandeling",
      "Geurverwijdering",
    ],
  },
];

const exterieurPakketten = [
  {
    name: "Exterieur Basis",
    price: "€69",
    features: [
      "Handwas met snow foam",
      "Velgen & banden",
      "Ramen & spiegels",
      "Drogen & afwerking",
    ],
  },
  {
    name: "Exterieur Glans",
    price: "€199",
    popular: true,
    features: [
      "Alles uit Basis",
      "Klei-behandeling",
      "Machine polijsten (1-stap)",
      "Wax beschermlaag",
      "Chroomwerk polijsten",
    ],
  },
  {
    name: "Exterieur Showroom",
    price: "€399",
    features: [
      "Alles uit Glans",
      "Machine polijsten (2-stap)",
      "Keramische coating",
      "Ruitcoating",
      "Tot 5 jaar bescherming",
    ],
  },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <div id="pakketten">
      <PackageSection
        id="maandelijks"
        title="Maandelijkse Pakketten"
        subtitle="Zorgeloos onderhoud"
        packages={maandPakketten}
        image={maandelijksImg}
      />
      <PackageSection
        id="interieur"
        title="Interieur Pakketten"
        subtitle="Van binnen als nieuw"
        packages={interieurPakketten}
        image={interieurImg}
      />
      <PackageSection
        id="exterieur"
        title="Exterieur Pakketten"
        subtitle="Stralend van buiten"
        packages={exterieurPakketten}
        image={exterieurImg}
      />
    </div>
    <Footer />
  </div>
);

export default Index;
