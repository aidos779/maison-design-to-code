import { money, specs, type Residence } from "../listings";

export function PropertyCard({ p, show }: { p: Residence; show: () => void }) {
  return (
    <article className="property-card">
      <button
        className="card-action"
        onClick={show}
        aria-label={"View " + p.name}
      >
        <img
          className="property-photo"
          src={"/images/" + p.image + ".jpg"}
          alt={p.alt}
        />
        <span className="card-details">
          <span className="eyebrow">
            {p.place}, {p.country}
          </span>
          <span className="card-title">{p.name}</span>
          <span className="caption specs">{specs(p)}</span>
          <span className="price">{money(p.price)}</span>
        </span>
      </button>
    </article>
  );
}
export function DestinationCard({
  p,
  choose,
}: {
  p: Residence;
  choose: () => void;
}) {
  return (
    <button
      className="destination-card"
      onClick={choose}
      aria-label={"Browse residences in " + p.place}
    >
      <img
        className="destination-photo"
        src={"/images/" + p.destinationImage + ".jpg"}
        alt={p.destinationAlt}
      />
      <span className="destination-label flex items-center justify-between">
        <span className="card-title">{p.place}</span>
        <span className="caption">{p.country}</span>
      </span>
    </button>
  );
}
