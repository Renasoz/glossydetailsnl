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

export const interieurExtras: ExtraOption[] = [
  {
    name: "Stoomreiniging",
    description: "Wil je dat het interieur van jouw auto écht diep gereinigd wordt? Met stoomreiniging verwijderen we vuil, bacteriën en geurtjes uit alle hoeken.",
    price: "€50",
  },
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
  {
    name: "Dierenharen Verwijderen",
    description: "Heb je huisdieren en zitten er hardnekkige haren in de bekleding of vloermatten? Met deze optie verwijderen we alle dierenharen grondig.",
    price: "€35",
  },
];

export const interieurPakketten: Package[] = [
  {
    name: "Interieur Basis",
    price: "vanaf €69",
    description: "Een basis reiniging voor het interieur. Perfect voor het verwijderen van stof en opfrissen.",
    features: [
      "Volledig stofzuigen",
      "Dashboard & panelen reinigen",
      "Ramen binnenzijde",
      "Vloermatten wassen",
    ],
    extras: interieurExtras,
  },
  {
    name: "Interieur Diep",
    price: "vanaf €119",
    popular: true,
    description: "Het interieur grondig gereinigd. Inclusief stoomreiniging, grondige vlekverwijdering, dieptereiniging van de vloer en kunststof voeding — alle extra opties uit het Basis pakket zijn standaard inbegrepen.",
    features: [
      "Alles uit Basis",
      "Stoelen dieptereiniging",
      "Lederreiniging",
      "Stoomreiniging",
      "Vlekverwijdering grondig",
      "Dieptereiniging vloer",
      "Kunststof/plastic voeding",
      "Luchtzuivering",
    ],
    extras: [
      {
        name: "Dierenharen Verwijderen",
        description: "Heb je huisdieren en zitten er hardnekkige haren in de bekleding of vloermatten? Met deze optie verwijderen we alle dierenharen grondig.",
        price: "€35",
      },
    ],
  },
  {
    name: "Interieur Totaal",
    price: "vanaf €219",
    description: "Compleet interieur als nieuw. Leervoeding, antibacterieel en geurverwijdering inbegrepen.",
    features: [
      "Alles uit Diep",
      "Stoomreiniging",
      "Leervoeding & bescherming",
      "Hemelbekleding reinigen",
      "Antibacteriële behandeling",
      "Geurverwijdering",
    ],
    extras: [
      {
        name: "Dierenharen Verwijderen",
        description: "Heb je huisdieren en zitten er hardnekkige haren in de bekleding of vloermatten? Met deze optie verwijderen we alle dierenharen grondig.",
        price: "€35",
      },
    ],
  },
];

export const exterieurPakketten: Package[] = [
  {
    name: "Exterieur Basis",
    price: "vanaf €79",
    description: "Een grondige handwas met snow foam. Velgen, banden en ramen worden netjes afgewerkt. Daarnaast wordt er een waxlaag over de gehele auto aangebracht voor extra bescherming.",
    features: [
      "Handwas met snow foam",
      "Velgen & banden",
      "Ramen & spiegels",
      "Waxlaag over de gehele auto",
      "Drogen & afwerking",
    ],
  },
  {
    name: "Exterieur Glans",
    price: "vanaf €169",
    popular: true,
    description: "Exterieur helemaal schoon, glad en beschermd. De waxlaag wordt met de hand aangebracht over de gehele autolak voor een extra shiny look. Inclusief reiniging en voeding van de motorruimte en voeding van alle kunststoffen en plastics aan de buitenkant van de auto, aangevuld met semi coating op alle banden.",
    features: [
      "Alles uit Basis",
      "Klei-behandeling",
      "Wax beschermlaag",
      "Motorruimte reinigen & voeden",
      "Kunststof/plastic voeding (buitenkant)",
      "Semi coating op alle banden",
    ],
  },
];

export const combiPakketten: Package[] = [
  {
    name: "Combi Basis",
    price: "vanaf €119",
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
    price: "vanaf €249",
    popular: true,
    description: "Jouw auto van binnen en buiten weer showroom ready. Inclusief stoomreiniging, grondige vlekverwijdering, dieptereiniging van de vloer, kunststof voeding, motorruimte reinigen, kleibehandeling en een handmatig aangebrachte waxlaag over de gehele autolak.",
    features: [
      "Alles uit Combi Basis",
      "Stoelen dieptereiniging",
      "Handmatig aangebrachte waxlaag",
      "Luchtverfrisser",
    ],
    extras: [
      {
        name: "Dierenharen Verwijderen",
        description: "Heb je huisdieren en zitten er hardnekkige haren in de bekleding of vloermatten? Met deze optie verwijderen we alle dierenharen grondig.",
        price: "€35",
      },
    ],
  },
  {
    name: "Combi Totaal",
    price: "vanaf €319",
    description: "Jouw auto weer helemaal zo goed als nieuw, met stoomreiniging.",
    features: [
      "Alles uit Combi Premium",
      "Leervoeding & bescherming",
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
    price: "€30",
  },
  {
    name: "Kleibehandeling",
    description: "Voelt jou lak zelfs na het schoonmaken grof aan? Een kleibehandeling zorgt voor het verwijderen van zelfs de kleinste vervuilingen.",
    price: "€50",
  },
];


export const combiExtras: ExtraOption[] = [
  ...exterieurExtras,
  ...interieurExtras,
];
