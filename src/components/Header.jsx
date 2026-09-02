import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { brand, languages, nav } from "../content/siteContent";
import { productServices } from "../content/productContent";

function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(languages[0]);
  const location = useLocation();
  const onHome = location.pathname === "/";

  const resolveHref = (href) => {
    if (href.startsWith("#")) return onHome ? href : `/${href}`;
    return href;
  };

  const isInternal = (href) => href.startsWith("/") && !href.startsWith("//");

  return (
    <header className="header">
      <div className="wrap header__row">
        <Link to="/" className="brand">
          <Logo />
          <span>{brand.name}</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <div
              key={item.label}
              className={`nav__item ${
                expanded === item.label ? "is-open" : ""
              }`}
              onMouseEnter={() => item.children && setExpanded(item.label)}
              onMouseLeave={() => setExpanded(null)}
            >
              {isInternal(item.href) && !item.children ? (
                <Link to={item.href}>{item.label}</Link>
              ) : (
                <a href={resolveHref(item.href)}>
                  {item.label}
                  {item.children && (
                    <span className="nav__arrow" aria-hidden="true" />
                  )}
                </a>
              )}
            </div>
          ))}
          <a href={resolveHref("#platform")} className="btn btn--platform">
            Go To Platform
          </a>

          <div
            className={`lang ${langOpen ? "is-open" : ""}`}
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button
              type="button"
              className="lang__current"
              aria-expanded={langOpen}
            >
              {lang}
              <span className="lang__arrow" aria-hidden="true" />
            </button>
            {langOpen && (
              <ul className="lang__menu">
                {languages.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      className={option === lang ? "is-active" : ""}
                      onClick={() => {
                        setLang(option);
                        setLangOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <button
          type="button"
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {expanded === "Products & Services" && (
        <div
          className="header__subbar"
          onMouseEnter={() => setExpanded("Products & Services")}
          onMouseLeave={() => setExpanded(null)}
        >
          <div className="wrap header__subbar-inner">
            {productServices.map((product, i, arr) => (
              <span key={product.id} className="header__subbar-item">
                <Link to={product.path} onClick={() => setExpanded(null)}>
                  {product.name}
                </Link>
                {i < arr.length - 1 && (
                  <span className="header__subbar-divider" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {expanded && expanded !== "Products & Services" && (
        <div
          className="header__subbar"
          onMouseEnter={() => setExpanded(expanded)}
          onMouseLeave={() => setExpanded(null)}
        >
          <div className="wrap header__subbar-inner">
            {nav
              .find((n) => n.label === expanded)
              ?.children?.map((child, i, arr) => (
                <span key={child} className="header__subbar-item">
                  <a
                    href={resolveHref(
                      nav.find((n) => n.label === expanded)?.href,
                    )}
                  >
                    {child}
                  </a>
                  {i < arr.length - 1 && (
                    <span
                      className="header__subbar-divider"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
          </div>
        </div>
      )}

      <div className="header__line" aria-hidden="true" />

      <div className={`drawer ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <div key={item.label} className="drawer__group">
            {isInternal(item.href) && !item.children ? (
              <Link to={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ) : (
              <a href={resolveHref(item.href)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            )}
            {item.label === "Products & Services"
              ? productServices.map((product) => (
                  <Link
                    key={product.id}
                    to={product.path}
                    className="drawer__sub"
                    onClick={() => setOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))
              : item.children?.map((child) => (
                  <a
                    key={child}
                    href={resolveHref(item.href)}
                    className="drawer__sub"
                    onClick={() => setOpen(false)}
                  >
                    {child}
                  </a>
                ))}
          </div>
        ))}
        <a
          href={resolveHref("#platform")}
          className="btn btn--platform"
          onClick={() => setOpen(false)}
        >
          Go To Platform
        </a>
      </div>
    </header>
  );
}

export default Header;
