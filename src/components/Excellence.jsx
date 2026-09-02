import { excellence } from "../content/siteContent";
import { ArrowRight } from "./ui/AmberUi";

function Excellence() {
  const { featured, cards, title } = excellence;

  return (
    <section className="section section--excellence">
      <div className="wrap">
        <h2 className="section__title section__title--accent">{title}</h2>

        <article className="exc-featured">
          <div className="exc-featured__copy">
            <h3>{featured.title}</h3>
            <p>{featured.body}</p>
            <span className="exc-featured__arrow">
              <ArrowRight />
            </span>
          </div>
          <div className="exc-featured__awards">
            {featured.awards.map((name) => (
              <div key={name} className="exc-award">
                <span>{name}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="exc-grid">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`exc-card exc-card--${card.tone}`}
            >
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <span className="exc-card__arrow">
                <ArrowRight />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Excellence;
