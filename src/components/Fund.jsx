import { fund } from "../content/siteContent";

function Fund() {
  return (
    <section className="section section--fund" id="fund">
      <div className="wrap">
        <div className="fund-panel">
          <div className="fund-panel__copy">
            <p className="fund-panel__eyebrow">{fund.eyebrow}</p>
            <h2 className="fund-panel__title">{fund.title}</h2>
            <p className="fund-panel__text">{fund.body}</p>
            <a href="#contact" className="btn btn--gradient">
              {fund.cta}
            </a>
          </div>
          <ul className="fund-panel__list">
            {fund.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Fund;
