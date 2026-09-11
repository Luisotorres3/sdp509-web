export type Release = {
  id: string;
  title: string;
  year: number;
  type: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  youtubeId?: string;
  featured: boolean;
  description?: string;
  cover?: string;
  accent?: string;
};
export const releases: Release[] = [
  {
    id: "32-agost",
    title: "32 d'agost",
    year: 2026,
    type: "Single",
    spotifyUrl: "https://open.spotify.com/track/3hQY9SLbkd0DKnmvKKeCAj",
    youtubeUrl: "https://www.youtube.com/watch?v=ocWyZVdRv7c",
    youtubeId: "ocWyZVdRv7c",
    featured: true,
    description:
      "Quan l'agost s'acaba però tu encara no estàs preparat per tornar a la rutina.",
  },
  {
    id: "coses-passen",
    title: "Són coses que passen",
    year: 2026,
    type: "EP",
    featured: false,
  },
  {
    id: "veig",
    title: "Veig veig",
    year: 2026,
    type: "Single",
    featured: false,
  },
  {
    id: "cuc",
    title: "Cuc de seda",
    year: 2026,
    type: "Single",
    featured: false,
  },
  {
    id: "vida",
    title: "Són coses de la vida",
    year: 2026,
    type: "Single",
    featured: false,
  },
  { id: "turra", title: "Turra", year: 2025, type: "Single", featured: false },
  {
    id: "tan",
    title: "TAN TAN TAN",
    year: 2025,
    type: "Single",
    featured: false,
  },
  {
    id: "mode-avio",
    title: "Mode Avió",
    year: 2024,
    type: "Àlbum · 12 cançons",
    featured: false,
  },
  {
    id: "estiuet",
    title: "Estiuet 23",
    year: 2023,
    type: "EP",
    featured: false,
  },
  {
    id: "cubata",
    title: "Cubata amb Pinya",
    year: 2022,
    type: "EP",
    featured: false,
  },
];
export const latestRelease =
  releases.find((release) => release.featured) ?? releases[0];
