import { Link } from "react-router-dom";
import { servicesGateway, productServices } from "../content/productContent";
import { ArrowRight, productIcons } from "./ui/AmberUi";

function ServicesGrid() {
  return (
    <section className="services-gateway" id="services">
      <div className="wrap services-gateway__inner">
        <h2 className="services-gateway__title">{servicesGateway.title}</h2>
        <p className="services-gateway__subtitle">{servicesGateway.subtitle}</p>

        <div className="services-grid">
          {productServices.map((product) => {
            const Icon = productIcons[product.icon];
            return (
              <Link
                key={product.id}
                to={product.path}
                className="services-grid__cell"
              >
                <span className="services-grid__icon">{Icon && <Icon />}</span>
                <span className="services-grid__label">{product.name}</span>
                <ArrowRight className="services-grid__arrow" />
              </Link>
            );
          })}
        </div>

        <Link
          to="/products/asset-wealth-management#contact"
          className="btn btn--gradient services-gateway__cta"
          id="contact"
        >
          {servicesGateway.cta}
        </Link>
      </div>
    </section>
  );
}

export default ServicesGrid;
