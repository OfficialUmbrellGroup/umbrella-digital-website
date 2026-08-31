import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getAdjacentNews, getNewsBySlug, news } from '../content/newsContent'
import { brand } from '../content/siteContent'
import { ArrowRight } from '../components/ui/AmberUi'

function NewsArticlePage() {
  const { slug } = useParams()
  const article = getNewsBySlug(slug)
  const { prev, next } = getAdjacentNews(slug)

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | ${brand.name}`
    }
    return () => {
      document.title = `${brand.name} | Institutional Investment & Asset Management`
    }
  }, [article])

  if (!article) {
    return <Navigate to="/insights" replace />
  }

  return (
    <article className="insight-page">
      <header className="insight-hero band band--white">
        <div className="insights-shell">
          <figure className={`insight-hero__banner news-banner news-banner--${article.image}`}>
            <img className="news-banner__img" src={article.banner} alt="" />
            <div className="news-banner__overlay" aria-hidden="true" />
            <figcaption className="news-banner__caption">
              <span className="news-banner__category">{article.category}</span>
            </figcaption>
          </figure>

          <div className="insight-prose">
            <Link to="/insights" className="insight-back">← News & Insights</Link>
            <div className="insight-hero__meta">
              <span className="news-article__category">{article.category}</span>
              <time dateTime={article.dateISO}>{article.date}</time>
            </div>
            <h1 className="insight-hero__title">{article.title}</h1>
            <p className="insight-hero__excerpt">{article.excerpt}</p>
          </div>
        </div>
      </header>

      <div className="insights-shell">
        <div className="insight-prose insight-body">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <aside className="band band--muted insight-nav">
        <div className="insights-shell insight-nav__inner">
          {prev ? (
            <Link to={`/insights/${prev.slug}`} className="insight-nav__link insight-nav__link--prev">
              <span className="insight-nav__label">Previous</span>
              <span className="insight-nav__title">{prev.title}</span>
            </Link>
          ) : (
            <div className="insight-nav__spacer" aria-hidden="true" />
          )}
          {next ? (
            <Link to={`/insights/${next.slug}`} className="insight-nav__link insight-nav__link--next">
              <span className="insight-nav__label">Next</span>
              <span className="insight-nav__title">{next.title}</span>
              <ArrowRight className="insight-nav__arrow" />
            </Link>
          ) : (
            <div className="insight-nav__spacer" aria-hidden="true" />
          )}
        </div>
      </aside>

      <section className="band band--white insight-related">
        <div className="insights-shell">
          <h2 className="insights-section-title">More insights</h2>
          <ul className="insight-related__list">
            {news.items
              .filter((item) => item.slug !== article.slug)
              .slice(0, 3)
              .map((item) => (
                <li key={item.slug}>
                  <Link to={`/insights/${item.slug}`} className="insight-related__item">
                    <span className="insight-related__meta">
                      {item.category} · {item.date}
                    </span>
                    <span className="insight-related__title">{item.title}</span>
                    <ArrowRight className="insight-related__arrow" />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

export default NewsArticlePage
