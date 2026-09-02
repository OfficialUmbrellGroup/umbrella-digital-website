import { Link } from "react-router-dom";
import Logo from "./Logo";
import { brand, footer } from "../content/siteContent";
import { productServices } from "../content/productContent";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__investors">
        <div className="wrap">
          <h2 className="footer__investors-title">{footer.investors.title}</h2>
          <p className="footer__investors-sub">{footer.investors.subtitle}</p>
          <div className="footer__logos">
            {footer.investors.logos.map((name) => (
              <div key={name} className="footer__logo-item">
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap footer__grid">
        <div className="footer__col">
          <h4>Products & Services</h4>
          <ul>
            {productServices.map((product) => (
              <li key={product.id}>
                <Link to={product.path}>{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {footer.columns
          .filter((col) => col.heading !== "Products & Services")
          .map((col) => (
            <div key={col.heading} className="footer__col">
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        <div className="footer__brand">
          <Link to="/" className="brand brand--footer">
            <Logo />
            <span>{brand.name}</span>
          </Link>
          <div className="footer__social">
            {footer.social.map((network) => (
              <a key={network} href="#">
                {network}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap footer__legal">
        <p>{footer.disclaimer}</p>
        <p>
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
