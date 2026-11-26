import { useState } from "react";
import { Button } from "./Button";

const routes = [
  ["Residences", "residences"],
  ["Destinations", "destinations"],
  ["Private advisory", "advisory"],
];
export function Navigation({ enquire }: { enquire: () => void }) {
  const [open, setOpen] = useState(false);
  const links = routes.map(([label, id]) => (
    <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
      {label}
    </a>
  ));
  return (
    <header className="masthead flex items-center justify-between">
      <a className="wordmark" href="#top" aria-label="MAISON home">
        MAISON
      </a>
      <nav className="desktop-links" aria-label="Main">
        {links}
      </nav>
      <div className="desktop-action">
        <Button kind="outline" onClick={enquire}>
          Enquire
        </Button>
      </div>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-links"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav id="mobile-links" aria-label="Mobile" className="mobile-links">
          {links}
          <button
            onClick={() => {
              setOpen(false);
              enquire();
            }}
          >
            Enquire
          </button>
        </nav>
      )}
    </header>
  );
}
