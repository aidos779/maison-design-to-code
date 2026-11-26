import { residences, type Filters } from "../listings";
import { Button } from "./Button";

function FilterField({
  label,
  value,
  all,
  options,
  onChange,
}: {
  label: string;
  value: string;
  all: string;
  options: [string, string][];
  onChange: (v: string) => void;
}) {
  return (
    <label className="filter-field">
      <span className="eyebrow">{label}</span>
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{all}</option>
        {options.map(([v, n]) => (
          <option key={v} value={v}>
            {n}
          </option>
        ))}
      </select>
    </label>
  );
}
export function ResidenceSearch({
  draft,
  change,
  apply,
}: {
  draft: Filters;
  change: (f: Filters) => void;
  apply: () => void;
}) {
  const update = (key: keyof Filters) => (value: string) =>
    change({ ...draft, [key]: value });
  return (
    <form
      aria-label="Property search"
      className="property-search"
      onSubmit={(e) => {
        e.preventDefault();
        apply();
      }}
    >
      <FilterField
        label="Destination"
        all="Anywhere"
        value={draft.place}
        options={residences.map((p) => [p.place, p.place])}
        onChange={update("place")}
      />
      <FilterField
        label="Property type"
        all="All residences"
        value={draft.type}
        options={residences.map((p) => [p.type, p.type])}
        onChange={update("type")}
      />
      <FilterField
        label="Price range"
        all="Any price"
        value={draft.price}
        options={[
          ["under", "Under €3 million"],
          ["over", "€3 million and above"],
        ]}
        onChange={update("price")}
      />
      <Button type="submit">Search residences</Button>
    </form>
  );
}
