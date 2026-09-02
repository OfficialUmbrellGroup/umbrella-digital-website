import { platform } from "../content/siteContent";

function Platform() {
  return (
    <section className="section section--platform" id="about">
      <div className="wrap">
        <header className="section__intro">
          <h2 className="section__title section__title--accent">
            {platform.title}
          </h2>
          <p className="section__subtitle">{platform.subtitle}</p>
        </header>

        <div className="platform-clients">
          {platform.clients.map((client) => (
            <article key={client.title} className="platform-client">
              <h3>{client.title}</h3>
              <p>{client.body}</p>
            </article>
          ))}
        </div>

        <div className="platform-products">
          <h3 className="platform-products__heading">
            Regulated investment products
          </h3>
          <ul className="platform-products__list">
            {platform.products.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Platform;
