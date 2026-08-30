import { labs } from '../content/siteContent'

function Labs() {
  return (
    <section className="section section--labs">
      <div className="wrap section--labs__inner">
        <p className="labs__eyebrow">{labs.eyebrow}</p>
        <h2 className="labs__title">{labs.title}</h2>
        <p className="labs__text">{labs.body}</p>
        <button type="button" className="btn btn--gradient">{labs.cta}</button>
      </div>
    </section>
  )
}

export default Labs
