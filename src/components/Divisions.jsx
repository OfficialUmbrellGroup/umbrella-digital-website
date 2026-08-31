import { divisions } from "../content/siteContent";

function Divisions() {
  return (
    <section className="section section--divisions" id="divisions">
      <div className="wrap">
        <header className="section__intro">
          <h2 className="section__title section__title--accent">
            {divisions.title}
          </h2>
          <p className="section__subtitle">{divisions.subtitle}</p>
          <p className="section__lead">{divisions.intro}</p>
        </header>

        <div className="divisions-grid">
          {divisions.items.map((division, i) => (
            <article key={division.name} className="division-card">
              <span className="division-card__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{division.name}</h3>
              <p>{division.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Divisions;
