import { tradingBusiness } from "../content/siteContent";

function CardArrow() {
  return (
    <svg
      className="trading-card__arrow"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 15L15 5M15 5H8M15 5V12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceList({ services }) {
  return (
    <p className="trading-card__services">
      {services.map((service, i) => (
        <span key={service}>
          {i > 0 && (
            <span className="trading-card__sep" aria-hidden="true">
              {" "}
              |{" "}
            </span>
          )}
          {service}
        </span>
      ))}
    </p>
  );
}

function TradingCard({ card }) {
  return (
    <a href="#services" className={`trading-card trading-card--${card.layout}`}>
      <CardArrow />
      <h3 className="trading-card__title">{card.title}</h3>
      <ServiceList services={card.services} />
    </a>
  );
}

function TradingSolutions() {
  const { title, subtitle, cards, platform } = tradingBusiness;
  const mainCards = cards.filter((c) => c.layout !== "platform");

  return (
    <section className="trading-solutions" id="services">
      <div className="wrap trading-solutions__intro">
        <h2 className="trading-solutions__title">{title}</h2>
        <p className="trading-solutions__subtitle">{subtitle}</p>
      </div>

      <div className="wrap">
        <div className="trading-bento">
          {mainCards.map((card) => (
            <TradingCard key={card.id} card={card} />
          ))}

          <a
            href="#contact"
            className="trading-card trading-card--platform"
            id="contact"
          >
            <CardArrow />
            <h3 className="trading-card__title trading-card__title--center">
              {platform.title}
            </h3>
            <p className="trading-card__platform-desc">
              {platform.description}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TradingSolutions;
