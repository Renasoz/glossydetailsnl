export interface Package {
  name: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
}

export const maandPakketten: Package[] = [
  {
    name: "Basis",
    price: "vanaf €79",
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
    price: "vanaf €149",
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
    price: "vanaf €249",
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

export const interieurPakketten: Package[] = [
  {
    name: "Interieur Basis",
    price: "vanaf €89",
    features: [
      "Volledig stofzuigen",
      "Dashboard & panelen reinigen",
      "Ramen binnenzijde",
      "Vloermatten wassen",
    ],
  },
  {
    name: "Interieur Diep",
    price: "vanaf €179",
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
    price: "vanaf €279",
    features: [
      "Alles uit Diep",
      "Leervoeding & bescherming",
      "Hemelbekleding reinigen",
      "Antibacteriële behandeling",
      "Geurverwijdering",
    ],
  },
];

export const exterieurPakketten: Package[] = [
  {
    name: "Exterieur Basis",
    price: "vanaf €69",
    features: [
      "Handwas met snow foam",
      "Velgen & banden",
      "Ramen & spiegels",
      "Drogen & afwerking",
    ],
  },
  {
    name: "Exterieur Glans",
    price: "vanaf €199",
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
    price: "vanaf €399",
    features: [
      "Alles uit Glans",
      "Machine polijsten (2-stap)",
      "Keramische coating",
      "Ruitcoating",
      "Tot 5 jaar bescherming",
    ],
  },
];

export const combiPakketten: Package[] = [
  {
    name: "Combi Basis",
    price: "vanaf €139",
    features: [
      "Uitwendige handwas & snow foam",
      "Interieur stofzuigen",
      "Ramen binnen & buiten",
      "Velgen & bandenglans",
      "Dashboard afwerking",
    ],
  },
  {
    name: "Combi Premium",
    price: "vanaf €329",
    popular: true,
    features: [
      "Alles uit Combi Basis",
      "Stoelen dieptereiniging",
      "Machine polijsten (1-stap)",
      "Wax beschermlaag",
      "Luchtverfrisser",
    ],
  },
  {
    name: "Combi Totaal",
    price: "vanaf €599",
    features: [
      "Alles uit Combi Premium",
      "Leervoeding & bescherming",
      "Keramische coating",
      "Stoomreiniging interieur",
      "Ruitcoating & chroomwerk",
    ],
  },
];
