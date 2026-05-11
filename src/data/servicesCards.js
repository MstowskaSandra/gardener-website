import {
  FaSeedling,
  FaLeaf,
  FaTree,
  FaBroom,
  FaBug,
} from "react-icons/fa";

export const servicesCards = [
  {
    title: "Pielęgnacja trawników",
    icon: FaSeedling,
    buttonText: "Zobacz",
    link: "pielegnacja-trawnikow",
    variant: "alt",
    items: ["Koszenie", "Wertykulacja", "Aeracja", "Piaskowanie", "Nawożenie"],
  },
  {
    title: "Pielęgnacja ogrodów",
    icon: FaLeaf,
    buttonText: "Zobacz",
    link: "pielegnacja-ogrodow",
    variant: "default",
    items: [
      "Formowanie żywopłotów",
      "Przycinanie krzewów",
      "Pielęgnacja roślin ozdobnych",
    ],
  },
  {
    title: "Wycinka drzew",
    icon: FaTree,
    buttonText: "Zobacz",
    link: "wycinka-drzew",
    variant: "alt",
    items: ["Wycinka tradycyjna", "Wycinka alpinistyczna", "Przycinanie drzew"],
  },
  {
    title: "Sprzątanie ogrodów",
    icon: FaBroom,
    buttonText: "Zobacz",
    link: "sprzatanie-ogrodow",
    variant: "default",
    items: [
      "Porządkowanie działek",
      "Usuwanie liści",
      "Usługi rębakiem",
      "Przygotowanie ogrodu do sezonu wiosna/zima",
    ],
  },
  {
    title: "Opryski",
    icon: FaBug,
    buttonText: "Zobacz",
    link: "opryski",
    variant: "alt",
    items: [
      "Opryski drzew i krzewów",
      "Ochrona przed chorobami",
      "Ochrona przed szkodnikami",
    ],
  },
];