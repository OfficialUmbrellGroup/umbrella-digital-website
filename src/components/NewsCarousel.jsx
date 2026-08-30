import { useCarousel } from '../hooks/useCarousel'
import { news } from '../content/siteContent'
import { ArrowRight } from './ui/AmberUi'

function NewsCarousel() {
  const { index, setIndex, prev, next } = useCarousel(news.items.length, 7000)

  return (
    <section className="section section--news" id="news">
      <div className="wrap">
        <h2 className="section__title section__title--accent">{news.title}</h2>

        <div className="news-carousel">
          <button type="button" className="news-carousel__edge news-carousel__edge--prev" aria-label="Previous" onClick={prev} />
          <button type="button" className="news-carousel__edge news-carousel__edge--next" aria-label="Next" onClick={next} />

          <div className="news-carousel__viewport">
            <div
              className="news-carousel__track"
              style={{ transform: `translateX(calc(-${index * 52}% + 4%))` }}
            >
              {news.items.map((item, i) => (
                <article
                  key={item.title}
                  className={`news-article news-article--${item.image} ${i === index ? 'is-center' : ''}`}
                >
                  <div className="news-article__image" aria-hidden="true" />
                  <h3 className="news-article__title">
                    {item.title}
                    <ArrowRight className="news-article__arrow" />
                  </h3>
                </article>
              ))}
            </div>
          </div>

          <div className="news-carousel__dots">
            {news.items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Article ${i + 1}`}
                className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <button type="button" className="btn btn--outline-dark news-read-more">Read more</button>
      </div>
    </section>
  )
}

export default NewsCarousel
