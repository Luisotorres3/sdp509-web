export type Member = {
  id: string;
  displayName: string;
  realName: string;
  role: string;
  description: string;
  color: string;
  image?: string;
};
// Colors and SVG shapes are collection design, never inferred physical traits.
export const members: Member[] = [
  {
    id: "furki",
    displayName: "Furki",
    realName: "Josep Forcada",
    role: "Producció, beatmaker i veu",
    description:
      "Motor de la producció de SDP509. Furki dona forma a bona part de l'univers sonor del grup i també hi posa veu.",
    color: "#bacbc3",
  },
  {
    id: "polxics",
    displayName: "Polxics",
    realName: "Pol Jorba",
    role: "Veu / membre de SDP509",
    description:
      "Una de les peces de la pinya de SDP509, present en el repertori i en la construcció col·lectiva del projecte.",
    color: "#e9bfc5",
  },
  {
    id: "lluisno",
    displayName: "Lluisno",
    realName: "Lluís Nocete",
    role: "Membre de SDP509",
    description:
      "Part del nucli original de Suc de Pinya i de l'aventura musical que va néixer entre amics.",
    color: "#b5c4e7",
  },
  {
    id: "alti",
    displayName: "Alti",
    realName: "Joan Altimira",
    role: "Veu / composició",
    description:
      "Veu recurrent de SDP509 i part activa d'un projecte que converteix la barreja d'estils en identitat.",
    color: "#eee09d",
  },
  {
    id: "gamba",
    displayName: "Gamba",
    realName: "Joan Bañeza",
    role: "Membre de SDP509",
    description:
      "Una altra peça imprescindible de la pinya, present en el projecte col·lectiu de SDP509.",
    color: "#dfb096",
  },
  {
    id: "didi",
    displayName: "Didi",
    realName: "Dídac Sánchez",
    role: "Veu / composició",
    description:
      "Part de les veus i de la construcció creativa d'un repertori que salta d'un estil a l'altre sense complexos.",
    color: "#c6c1da",
  },
  {
    id: "paucru",
    displayName: "PauCru",
    realName: "Pau Crusellas",
    role: "Veu / composició",
    description:
      "Una de les veus recurrents de SDP509 i part de l'energia col·lectiva que defineix la banda.",
    color: "#bed2a4",
  },
  {
    id: "sergi",
    displayName: "Sergi Padilla",
    realName: "Sergi Padilla Golobardes",
    role: "Guitarra / baix",
    description:
      "Les cordes aporten una capa més orgànica al so de SDP509 i connecten el seu univers pop-urbà amb el rock.",
    color: "#dcc5a6",
  },
];
