import { gateway } from '../content/siteContent'
import { ArrowRight, productIcons } from './ui/AmberUi'

function Gateway() {
  return (
    <section className="gateway" id="services">
      <div className="wrap gateway__inner">
        <h1 className="gateway__title">{gateway.title}</h1>
        <p className="gateway__subtitle">{gateway.subtitle}</p>

        <div className="gateway__grid">
          {gateway.products.map((product) => {
            const Icon = productIcons[product.icon]
            return (
              <a key={product.name} href="#services" className="gateway-card">
                <span className="gateway-card__icon">{Icon && <Icon />}</span>
                <span className="gateway-card__title">{product.name}</span>
                <span className="gateway-card__arrow"><ArrowRight /></span>
              </a>
            )
          })}
        </div>

        <a href="#contact" className="btn btn--gradient btn--gateway" id="contact">
          {gateway.cta}
        </a>
      </div>
    </section>
  )
}

export default Gateway
