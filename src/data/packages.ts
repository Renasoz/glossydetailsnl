export interface Package {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  extras?: ExtraOption[];
}

export const maandPakketten: Package[] = [
  {
    name: "Basis Maandelijks",
    price: "vanaf €79",
    period: "maand",
    description: "Een maandelijkse wasbeurt om jouw auto fris te houden. Ideaal voor regelmatig onderhoud.",
    features: [
      "Uitwendige handwas",
      "Velgenreiniging",
      "Bandenglans",
      "Ramen wassen",
      "1x per maand",
    ],
  },
  {
    name: "Premium Maandelijks",
    price: "vanaf €149",
    period: "maand",
    popular: true,
    description: "Binnen en buiten verzorgd, elke twee weken. Jouw auto ziet er altijd strak uit.",
    features: [
      "Alles uit Basis",
      "Interieur stofzuigen",
      "Dashboard reiniging",
      "Luchtverfrisser",
      "2x per maand",
    ],
  },
  {
    name: "VIP Maandelijks",
    price: "vanaf €249",
    period: "maand",
    description: "Het ultieme onderhoudspakket. Elke week een volledige behandeling inclusief coating.",
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
    description: "Een basis reiniging voor het interieur. Perfect voor het verwijderen van stof en opfrissen.",
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
    description: "Het interieur grondig gereinigd. Van vlekverwijdering tot stoomreiniging voor een fris resultaat.",
    features: [
      "Alles uit Basis",
      "Stoelen dieptereiniging",
      "Vlekverwijdering",
      "Stoomreiniging",
      "Kunststof/plastic voeding",
      "Luchtzuivering",
    ],
  },
  {
    name: "Interieur Totaal",
    price: "vanaf €279",
    description: "Compleet interieur als nieuw. Leervoeding, antibacterieel en geurverwijdering inbegrepen.",
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
    price: "vanaf €79",
    description: "Een grondige handwas met snow foam. Velgen, banden en ramen worden netjes afgewerkt.",
    features: [
      "Handwas met snow foam",
      "Velgen & banden",
      "Ramen & spiegels",
      "Drogen & afwerking",
    ],
  },
  {
    name: "Exterieur Glans",
    price: "vanaf €149",
    popular: true,
    description: "Exterieur helemaal schoon, glad en beschermd dankzij een wax beschermlaag en kunststofvoeding.",
    features: [
      "Alles uit Basis",
      "Klei-behandeling",
      "Wax beschermlaag",
      "Kunststof/plastic voeding",
      "Chroomwerk polijsten",
    ],
  },
  {
    name: "Exterieur Showroom",
    price: "vanaf €399",
    description: "Showroom kwaliteit met keramische coating en ruitcoating. Tot 5 jaar bescherming.",
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
    description: "Het beste van beide werelden. Interieur en exterieur netjes, opgefrist en beschermd.",
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
    description: "Jouw auto van binnen en buiten weer showroom ready. Dieptereiniging en polijsten inbegrepen.",
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
    description: "Jouw auto weer helemaal zo goed als nieuw, met keramische coating en stoomreiniging.",
    features: [
      "Alles uit Combi Premium",
      "Leervoeding & bescherming",
      "Keramische coating",
      "Stoomreiniging interieur",
      "Ruitcoating & chroomwerk",
    ],
  },
];

export interface ExtraOption {
  name: string;
  description: string;
  price: string;
}

export const exterieurExtras: ExtraOption[] = [
  {
    name: "Motorruimte Reinigen",
    description: "Het hart van de auto, die qua schoonmaak de minste aandacht krijgt. Neem je motorruimte mee in de schoonmaak.",
    price: "€40",
  },
  {
    name: "Banden Dressing",
    description: "Jou banden beschermen tegen uitdroging en UV-straling? En het ziet er ook nog eens netjes uit, de echte afmaker voor elk detail!",
    price: "€20",
  },
  {
    name: "Kleibehandeling",
    description: "Voelt jou lak zelfs na het schoonmaken grof aan? Een kleibehandeling zorgt voor het verwijderen van zelfs de kleinste vervuilingen.",
    price: "€50",
  },
];

export const interieurExtras: ExtraOption[] = [
  {
    name: "Vlekverwijdering Grondig",
    description: "Zijn er vlekken in de bekleding die meer aandacht vereisen dan een basis behandeling? Met deze optie krijgen jou stoelen extra grondige reiniging.",
    price: "€40",
  },
  {
    name: "Dieptereiniging Vloer",
    description: "Zijn jou matten bruin in plaats van zwart? Dan word het eens tijd deze grondig te laten reinigen.",
    price: "€30",
  },
  {
    name: "Kunststof Voeding",
    description: "Wil je dat jou kunststofdelen van het interieur er weer helemaal strak en netjes bijstaan? Laat deze dan voeden voor het perfecte resultaat.",
    price: "€30",
  },
];

export const combiExtras: ExtraOption[] = [
  ...exterieurExtras,
  ...interieurExtras,
];
