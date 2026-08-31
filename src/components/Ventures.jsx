import { ventures } from "../content/siteContent";

function Ventures() {
  return (
    <section className="section section--ventures" id="ventures">
      <div className="wrap section--ventures__inner">
        <p className="ventures__eyebrow">{ventures.eyebrow}</p>
        <h2 className="ventures__title">{ventures.title}</h2>
        <p className="ventures__text">{ventures.body}</p>
        <a href="#contact" className="btn btn--gradient">
          {ventures.cta}
        </a>
      </div>
    </section>
  );
}

export default Ventures;
