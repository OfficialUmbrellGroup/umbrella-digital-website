import { media } from '../content/siteContent'
import { QuotationMark } from './ui/AmberUi'

function MediaQuotes() {
  return (
    <section className="section section--media">
      <div className="wrap">
        <header className="section__intro section__intro--light">
          <h2 className="section__title">{media.title}</h2>
          <p className="section__subtitle">{media.subtitle}</p>
        </header>
        <div className="media-grid">
          {media.quotes.map((quote) => (
            <blockquote key={quote.headline} className="media-card">
              <div className="media-card__content">
                <QuotationMark className="media-card__quote" />
                <p>{quote.headline}</p>
              </div>
              <footer className="media-card__footer">
                <span className="media-card__line" aria-hidden="true" />
                <cite>{quote.outlet}</cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaQuotes
