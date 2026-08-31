import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { productPlaceholders } from "../content/productContent";

function ProductPlaceholderPage() {
  const { slug } = useParams();
  const page = productPlaceholders[slug];

  useEffect(() => {
    if (page) document.title = `${page.title} | Umbrella Digital`;
  }, [page]);

  if (!page) {
    return (
      <div
        className="product-page band band--light"
        style={{ paddingTop: "8rem" }}
      >
        <div className="wrap" style={{ textAlign: "center" }}>
          <h1>Page not found</h1>
          <Link
            to="/"
            className="btn btn--gradient"
            style={{ marginTop: "1.5rem" }}
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="wrap product-hero__inner">
          <p className="product-hero__eyebrow">Products & Services</p>
          <h1 className="product-hero__title">{page.title}</h1>
          <p className="product-hero__lead">{page.lead}</p>
          <p className="product-hero__note">
            This product page is coming soon. Contact our team to learn more.
          </p>
          <div className="product-hero__actions">
            <a
              href="mailto:contact@umbrelladigital.com"
              className="btn btn--gradient"
            >
              Get in Touch
            </a>
            <Link to="/" className="btn btn--outline-light">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPlaceholderPage;
