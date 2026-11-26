export const residences = [
  {
    name: "Casa de los Pinos",
    place: "Costa Blanca",
    country: "Spain",
    type: "Villa",
    price: 2850000,
    beds: 4,
    baths: 3,
    area: 320,
    image: "villa",
    destinationImage: "costa-blanca",
    alt: "White modern villa framed by palm trees and a clipped hedge.",
    destinationAlt: "The Mediterranean coastline near Calpe at sunset.",
    description:
      "Shaded terraces and a garden courtyard connect the living spaces of this Mediterranean villa.",
  },
  {
    name: "Chalet Saanen",
    place: "Gstaad",
    country: "Switzerland",
    type: "Chalet",
    price: 6400000,
    beds: 5,
    baths: 4,
    area: 410,
    image: "chalet",
    destinationImage: "gstaad",
    alt: "Timber chalet on a sunlit Alpine slope.",
    destinationAlt: "Sunlight over mountain ridges near Gstaad.",
    description:
      "A timber chalet with room for family and guests, set above the valley in the Bernese Oberland.",
  },
  {
    name: "Alfama Residence",
    place: "Lisbon",
    country: "Portugal",
    type: "Apartment",
    price: 1650000,
    beds: 3,
    baths: 2,
    area: 185,
    image: "apartment",
    destinationImage: "lisbon",
    alt: "Light-filled living room with wood flooring and broad windows.",
    destinationAlt: "Terracotta rooftops in the Alfama district of Lisbon.",
    description:
      "Generous windows bring daylight into this city apartment, with space to entertain and a quieter private wing.",
  },
] as const;
export type Residence = (typeof residences)[number];
export type Filters = { place: string; type: string; price: string };
export const emptyFilters: Filters = { place: "", type: "", price: "" };
export const money = (value: number) =>
  new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
export const specs = (p: Residence) =>
  `${p.beds} beds  ·  ${p.baths} baths  ·  ${p.area} m²`;
export function matches(p: Residence, f: Filters) {
  return (
    (!f.place || p.place === f.place) &&
    (!f.type || p.type === f.type) &&
    (!f.price || (f.price === "under" ? p.price < 3000000 : p.price >= 3000000))
  );
}
