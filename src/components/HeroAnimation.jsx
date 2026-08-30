import { useEffect, useState } from 'react'
import { headSlider, promoSlides, stats } from '../content/siteContent'
import { useCarousel } from '../hooks/useCarousel'
import { useCountUp } from '../hooks/useCountUp'
import { ArrowRight } from './ui/AmberUi'
import { RollingDigits } from './ui/RollingDigits'

function StatItem({ stat, active }) {
  const value = useCountUp(stat.target, 1800, active)
  const [tipOpen, setTipOpen] = useState(false)

  return (
    <div className="stats-bar__item">
      <div className="stats-bar__value">
        {stat.prefix && <span className="stats-bar__prefix">{stat.prefix}</span>}
        <RollingDigits value={value} active={active} />
        {stat.suffix && <span className="stats-bar__suffix">{stat.suffix}</span>}
      </div>
      {stat.labelHtml ? (
        <p
          className={`stats-bar__label stats-bar__label--tip ${tipOpen ? 'is-open' : ''}`}
          onMouseEnter={() => setTipOpen(true)}
          onMouseLeave={() => setTipOpen(false)}
          onFocus={() => setTipOpen(true)}
          onBlur={() => setTipOpen(false)}
          tabIndex={0}
          role="note"
        >
          <span dangerouslySetInnerHTML={{ __html: stat.labelHtml }} />
          {stat.tip && <span className="stats-bar__tip">{stat.tip}</span>}
        </p>
      ) : (
        <p className="stats-bar__label">{stat.label}</p>
      )}
    </div>
  )
}

function HeadSlider() {
  const { index, setIndex, prev, next } = useCarousel(headSlider.length, 5500)

  return (
    <div className="head-slider">
      <div className="head-slider__dots">
        {headSlider.map((s, i) => (
          <button
            key={s.cta}
            type="button"
            aria-label={`Headline ${i + 1}`}
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className="head-slider__track">
        {headSlider.map((s, i) => (
          <div
            key={s.cta}
            className={`head-slider__slide ${i === index ? 'is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <h2 className="head-slider__title" dangerouslySetInnerHTML={{ __html: s.html }} />
            <button type="button" className="head-slider__cta">
              {s.cta}
              <ArrowRight />
            </button>
          </div>
        ))}
      </div>

      <div className="head-slider__nav">
        <button type="button" onClick={prev}>Previous</button>
        <button type="button" onClick={next}>Next</button>
      </div>
    </div>
  )
}

function PromoCarousel() {
  const { index, setIndex, prev, next } = useCarousel(promoSlides.length, 6500)

  return (
    <div className="promo-carousel">
      <button type="button" className="promo-carousel__edge promo-carousel__edge--prev" aria-label="Previous" onClick={prev} />
      <button type="button" className="promo-carousel__edge promo-carousel__edge--next" aria-label="Next" onClick={next} />

      <div className="promo-carousel__viewport">
        <div
          className="promo-carousel__track"
          style={{ transform: `translateX(calc(-${index * 88}% + 6%))` }}
        >
          {promoSlides.map((slide, i) => (
            <article
              key={slide.title}
              className={`promo-card promo-card--${slide.theme} promo-card--${slide.bg} ${i === index ? 'is-center' : ''}`}
            >
              {slide.badge && (
                <span className="promo-card__badge">
                  <span className="promo-card__badge-icon" aria-hidden="true">🌐</span>
                  {slide.badge}
                </span>
              )}
              <h3 className={`promo-card__title ${slide.titleAccent ? 'promo-card__title--accent' : ''}`}>
                {slide.title}
              </h3>
              <p className="promo-card__desc">{slide.desc}</p>
              <button type="button" className="promo-card__btn">{slide.cta}</button>
            </article>
          ))}
        </div>
      </div>

      <div className="promo-carousel__dots">
        {promoSlides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Promo slide ${i + 1}`}
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}

function HeroAnimation() {
  const [statsActive, setStatsActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStatsActive(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-animation" aria-label="Featured">
      <div className="hero-animation__bg" aria-hidden="true" />
      <div className="hero-animation__content">
        <HeadSlider />

        <div className="stats-bar">
          <div className="wrap stats-bar__inner">
            {stats.map((stat) => (
              <StatItem key={stat.label || stat.labelHtml} stat={stat} active={statsActive} />
            ))}
          </div>
        </div>

        <PromoCarousel />
      </div>
    </section>
  )
}

export default HeroAnimation
