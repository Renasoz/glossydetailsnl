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
    name: "Premium Interieur Detail",
    price: "vanaf €79",
    description: "Basic Detail. Een grondige basisreiniging voor het complete interieur.",
    features: [
      "Interieur uitblazen",
      "Stofzuigen",
      "Dashboard & middenconsole reinigen",
      "Ramen reinigen interieur",
      "Kofferbak reinigen",
      "Vlekverwijdering bekleding basis",
      "Deurpanelen reinigen",
    ],
  },
  {
    name: "Showroom Interieur Detail",
    price: "vanaf €129",
    popular: true,
    description: "Deep Clean Detail. Het interieur grondig gereinigd tot in elk detail.",
    features: [
      "Alles uit Premium Interieur Detail",
      "Vlekverwijdering bekleding grondig",
      "Kunststofdelen poetsen",
      "Leerbehandeling",
      "Plafond uitstomen",
      "Dieptereiniging automatten + vloer",
      "Instaplijsten/deurnaden",
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
      "Waxlaag over de gehele auto (3 maanden bescherming)",
      "Drogen & afwerking",
    ],
    extras: [
      {
        name: "Kunststof Voeding",
        description: "Wil je dat jou kunststofdelen van het exterieur er weer helemaal strak en netjes bijstaan? Laat deze dan voeden voor het perfecte resultaat.",
        price: "€30",
      },
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
      "Wax beschermlaag (handmatig aangebracht, 1 jaar bescherming)",
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
    description: "Jouw auto van binnen en buiten weer showroom ready. Inclusief stoomreiniging, grondige vlekverwijdering, dieptereiniging van de vloer, kunststof voeding, motorruimte reinigen en kleibehandeling.",
    features: [
      "Alles uit Combi Basis",
      "Stoelen dieptereiniging",
      "Luchtverfrisser",
    ],
    extras: [
      {
        name: "Dierenharen Verwijderen",
        description: "Heb je huisdieren en zitten er hardnekkige haren in de bekleding of vloermatten? Met deze optie verwijderen we alle dierenharen grondig.",
        price: "€35",
      },
      {
        name: "Handmatig Aangebrachte Waxlaag",
        description: "Wil je een extra beschermende en glanzende laag over de gehele autolak? Deze waxlaag wordt met de hand aangebracht en blijft tot een jaar zitten voor langdurige bescherming en een diepe glans.",
        price: "€50",
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
