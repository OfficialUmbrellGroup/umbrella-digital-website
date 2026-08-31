import { useEffect } from "react";
import { Link } from "react-router-dom";
import { news } from "../content/newsContent";
import { brand } from "../content/siteContent";
import { ArrowRight } from "../components/ui/AmberUi";

function NewsIndexPage() {
  useEffect(() => {
    document.title = `News & Insights | ${brand.name}`;
    return () => {
      document.title = `${brand.name} | Institutional Investment & Asset Management`;
    };
  }, []);

  return (
    <div className="insights-index">
      <header className="insights-index__hero band band--light">
        <div className="wrap insight-content insight-content--wide">
          <p className="product-hero__eyebrow">News & Insights</p>
          <h1 className="insights-index__title">{news.title}</h1>
          <p className="insights-index__lead">
            Research, fund updates, and market commentary from across the
            Umbrella Digital platform.
          </p>
        </div>
      </header>

      <div className="wrap insights-index__list">
        {news.items.map((item) => (
          <article key={item.slug} className="insights-index__card">
            <Link
              to={`/insights/${item.slug}`}
              className="insights-index__banner-link"
            >
              <figure
                className={`news-banner news-banner--${item.image} insights-index__banner`}
              >
                <img
                  className="news-banner__img"
                  src={item.banner}
                  alt=""
                  loading="lazy"
                />
                <div className="news-banner__overlay" aria-hidden="true" />
                <figcaption className="news-banner__caption">
                  <span className="news-banner__category">{item.category}</span>
                </figcaption>
              </figure>
            </Link>
            <div className="insights-index__content">
              <div className="news-article__meta">
                <span className="news-article__category">{item.category}</span>
                <time dateTime={item.dateISO}>{item.date}</time>
              </div>
              <h2 className="insights-index__card-title">
                <Link to={`/insights/${item.slug}`}>{item.title}</Link>
              </h2>
              <p className="insights-index__card-excerpt">{item.excerpt}</p>
              <Link
                to={`/insights/${item.slug}`}
                className="insights-index__read"
              >
                Read article
                <ArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default NewsIndexPage;
