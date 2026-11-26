import { useState } from "react";
import {
  emptyFilters,
  matches,
  money,
  residences,
  specs,
  type Filters,
  type Residence,
} from "./listings";
import { Button } from "./components/Button";
import { Navigation } from "./components/Navigation";
import { ResidenceSearch } from "./components/ResidenceSearch";
import { PropertyCard, DestinationCard } from "./components/Cards";
import { Enquiry, Modal } from "./components/Enquiry";

export default function App() {
  const [draft, change] = useState<Filters>(emptyFilters),
    [filters, setFilters] = useState<Filters>(emptyFilters);
  const [selected, select] = useState<Residence | null>(null),
    [enquiry, setEnquiry] = useState<string | null>(null);
  const filtered = residences.filter((p) => matches(p, filters));
  function search(f: Filters) {
    change(f);
    setFilters(f);
    document.getElementById("residences")?.scrollIntoView({ block: "start" });
  }
  return (
    <div className="site" id="top">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navigation enquire={() => setEnquiry("International residences")} />
      <main id="main" className="wrap">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-message">
            <p className="eyebrow">International real estate</p>
            <h1 id="hero-title">A place apart.</h1>
            <p>
              Distinctive homes, thoughtfully selected
              <span className="desktop-copy"> across borders</span>.
            </p>
          </div>
          <p className="photo-location">Villamartín, Spain</p>
        </section>
        <ResidenceSearch
          draft={draft}
          change={change}
          apply={() => search(draft)}
        />
        <section id="residences" className="collection">
          <div className="collection-heading flex items-center justify-between">
            <h2>Featured residences</h2>
            <span className="result-count caption" aria-live="polite">
              {filtered.length}{" "}
              {filtered.length === 1 ? "residence" : "residences"}
            </span>
          </div>
          {Object.values(filters).some(Boolean) && (
            <button className="reset" onClick={() => search(emptyFilters)}>
              Clear filters
            </button>
          )}
          <div className="cards-grid">
            {filtered.map((p) => (
              <PropertyCard key={p.name} p={p} show={() => select(p)} />
            ))}
          </div>
          {!filtered.length && (
            <p className="empty" role="status">
              No residences match this combination. Try another destination or
              price range.
            </p>
          )}
        </section>
        <section id="destinations" className="destinations">
          <h2>Explore by destination</h2>
          <p className="destination-intro">
            Three settings. Three ways to live.
          </p>
          <div className="destination-grid">
            {residences.map((p) => (
              <DestinationCard
                key={p.place}
                p={p}
                choose={() => search({ ...emptyFilters, place: p.place })}
              />
            ))}
          </div>
        </section>
        <section id="advisory" className="advisory">
          <div>
            <p className="eyebrow">Private advisory</p>
            <h2>
              <span className="desktop-copy">Let’s find</span>
              <span className="mobile-copy">Find</span> your place.
            </h2>
          </div>
          <Button
            kind="outline"
            onClick={() => setEnquiry("International residences")}
          >
            Start a conversation
          </Button>
        </section>
      </main>
      <footer className="footer flex items-center justify-between">
        <a className="wordmark" href="#top">
          MAISON
        </a>
        <small className="caption">© 2026 MAISON</small>
      </footer>
      {selected && (
        <Modal close={() => select(null)}>
          <img
            className="detail-photo"
            src={"/images/" + selected.image + ".jpg"}
            alt={selected.alt}
          />
          <p className="eyebrow">
            {selected.place}, {selected.country}
          </p>
          <h2 id="dialog-title">{selected.name}</h2>
          <p>{selected.description}</p>
          <p>
            {specs(selected)} · {money(selected.price)}
          </p>
          <Button
            onClick={() => {
              setEnquiry(selected.name);
              select(null);
            }}
          >
            Enquire about this home
          </Button>
          <p className="caption">
            Illustrative listing for the MAISON design study.
          </p>
        </Modal>
      )}
      {enquiry && (
        <Modal close={() => setEnquiry(null)}>
          <Enquiry subject={enquiry} />
        </Modal>
      )}
    </div>
  );
}
