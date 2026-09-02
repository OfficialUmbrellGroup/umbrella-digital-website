import { Link } from "react-router-dom";
import { useCarousel } from "../hooks/useCarousel";
import { news } from "../content/newsContent";
import { ArrowRight } from "./ui/AmberUi";

function NewsCarousel() {
  const { index, setIndex, prev, next } = useCarousel(news.items.length, 7000);
  const active = news.items[index];

  return (
    <section className="section section--news" id="news">
      <div className="wrap">
        <h2 className="section__title section__title--accent">{news.title}</h2>

        <div className="news-carousel">
          <div className="news-carousel__toolbar">
            <div className="news-carousel__dots">
              {news.items.map((item, i) => (
                <button
                  key={item.slug}
                  type="button"
                  aria-label={`Article ${i + 1}`}
                  className={i === index ? "is-active" : ""}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <div className="news-carousel__nav">
              <button
                type="button"
                aria-label="Previous article"
                onClick={prev}
              >
                Previous
              </button>
              <button type="button" aria-label="Next article" onClick={next}>
                Next
              </button>
            </div>
          </div>

          <div className="news-carousel__stage">
            {news.items.map((item, i) => (
              <figure
                key={item.slug}
                className={`news-banner news-banner--${item.image} ${
                  i === index ? "is-active" : ""
                }`}
                aria-hidden={i !== index}
              >
                <Link
                  to={`/insights/${item.slug}`}
                  className="news-banner__link"
                  tabIndex={i === index ? 0 : -1}
                >
                  <img
                    className="news-banner__img"
                    src={item.banner}
                    alt=""
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="news-banner__overlay" aria-hidden="true" />
                  <figcaption className="news-banner__caption">
                    <span className="news-banner__category">
                      {item.category}
                    </span>
                  </figcaption>
                </Link>
              </figure>
            ))}
          </div>

          <article className="news-article">
            <div className="news-article__meta">
              <span className="news-article__category">{active.category}</span>
              <time className="news-article__date" dateTime={active.dateISO}>
                {active.date}
              </time>
            </div>
            <h3 className="news-article__title">
              <Link
                to={`/insights/${active.slug}`}
                className="news-article__link"
              >
                <span className="news-article__text">{active.title}</span>
                <ArrowRight className="news-article__arrow" />
              </Link>
            </h3>
            {active.excerpt && (
              <p className="news-article__excerpt">{active.excerpt}</p>
            )}
          </article>
        </div>

        <Link to="/insights" className="btn btn--outline-dark news-read-more">
          Read more
        </Link>
      </div>
    </section>
  );
}

export default NewsCarousel;
