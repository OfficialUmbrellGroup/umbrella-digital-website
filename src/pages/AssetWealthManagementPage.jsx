import { useEffect } from "react";
import { Link } from "react-router-dom";
import { assetWealthPage, productServices } from "../content/productContent";
import { brand } from "../content/siteContent";
import { ArrowRight, productIcons } from "../components/ui/AmberUi";

function AssetWealthManagementPage() {
  const page = assetWealthPage;

  useEffect(() => {
    document.title = page.meta.title;
    return () => {
      document.title =
        "Umbrella Digital | Institutional Investment & Asset Management";
    };
  }, [page.meta.title]);

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="wrap product-hero__inner">
          <p className="product-hero__eyebrow">{page.hero.eyebrow}</p>
          <h1 className="product-hero__title">{page.hero.title}</h1>
          <p className="product-hero__lead">{page.hero.lead}</p>
          <div className="product-hero__actions">
            <a
              href={`mailto:${brand.email}`}
              className="btn btn--gradient"
              id="contact"
            >
              {page.hero.cta}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="btn btn--outline-light"
            >
              {page.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="product-pillars band band--light">
        <div className="wrap">
          <div className="product-pillars__grid">
            {page.pillars.map((pillar) => (
              <article key={pillar.title} className="product-pillar">
                <h2>{pillar.title}</h2>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--white product-section">
        <div className="wrap">
          <header className="product-section__head">
            <h2 className="product-section__title">{page.wealth.title}</h2>
            <p className="product-section__lead">{page.wealth.lead}</p>
          </header>
          <div className="product-features">
            {page.wealth.features.map((feature) => (
              <article key={feature.title} className="product-feature">
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--muted product-section">
        <div className="wrap">
          <header className="product-section__head product-section__head--center">
            <h2 className="product-section__title">
              {page.assetManagement.title}
            </h2>
            <p className="product-section__lead">{page.assetManagement.lead}</p>
          </header>
          <div className="product-highlights">
            {page.assetManagement.highlights.map((item, i) => (
              <article key={item.title} className="product-highlight">
                <span className="product-highlight__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--dark product-section">
        <div className="wrap">
          <header className="product-section__head product-section__head--light">
            <h2 className="product-section__title">
              {page.infrastructure.title}
            </h2>
            <p className="product-section__lead">{page.infrastructure.lead}</p>
          </header>
          <div className="product-infra-grid">
            {page.infrastructure.items.map((item) => (
              <article key={item.title} className="product-infra-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--light product-crosssell">
        <div className="wrap">
          <h2 className="product-crosssell__title">Our Products & Services</h2>
          <p className="product-crosssell__sub">
            Tailored solutions designed by industry experts
          </p>
          <div className="services-grid services-grid--compact">
            {productServices.map((product) => {
              const Icon = productIcons[product.icon];
              return (
                <Link
                  key={product.id}
                  to={product.path}
                  className={`services-grid__cell ${
                    product.id === "asset-wealth" ? "is-current" : ""
                  }`}
                >
                  <span className="services-grid__icon">
                    {Icon && <Icon />}
                  </span>
                  <span className="services-grid__label">{product.name}</span>
                  <ArrowRight className="services-grid__arrow" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-cta-band">
        <div className="wrap product-cta-band__inner">
          <h2>{page.ctaBand.title}</h2>
          <p>{page.ctaBand.body}</p>
          <a href={`mailto:${brand.email}`} className="btn btn--gradient">
            {page.ctaBand.cta}
          </a>
        </div>
      </section>
    </div>
  );
}

export default AssetWealthManagementPage;
