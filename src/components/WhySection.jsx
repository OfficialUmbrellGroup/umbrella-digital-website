import { why } from "../content/siteContent";
import { ArrowRight, productIcons } from "./ui/AmberUi";

function WhySection() {
  return (
    <section className="section section--why" id="about">
      <div className="section--why__shape" aria-hidden="true" />
      <div className="wrap">
        <header className="section__intro">
          <h2 className="section__title section__title--accent">{why.title}</h2>
          <p className="section__subtitle">{why.subtitle}</p>
        </header>

        <div className="why-grid">
          {why.items.map((item) => {
            const Icon = productIcons[item.icon];
            return (
              <article key={item.title} className="why-card">
                <div className="why-card__top">
                  <span className="why-card__icon">{Icon && <Icon />}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="why-card__bottom">
                  {item.cta}
                  <ArrowRight />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
