import { useState } from 'react'
import Logo from './Logo'
import { brand, languages, nav } from '../content/siteContent'

function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(null)
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])

  return (
    <header className="header">
      <div className="wrap header__row">
        <a href="#" className="brand">
          <Logo />
          <span>{brand.name}</span>
        </a>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <div
              key={item.label}
              className={`nav__item ${expanded === item.label ? 'is-open' : ''}`}
              onMouseEnter={() => item.children && setExpanded(item.label)}
              onMouseLeave={() => setExpanded(null)}
            >
              <a href={item.href}>
                {item.label}
                {item.children && <span className="nav__arrow" aria-hidden="true" />}
              </a>
            </div>
          ))}
          <a href="#platform" className="btn btn--platform">Go To Platform</a>

          <div
            className={`lang ${langOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button type="button" className="lang__current" aria-expanded={langOpen}>
              {lang}
              <span className="lang__arrow" aria-hidden="true" />
            </button>
            {langOpen && (
              <ul className="lang__menu">
                {languages.map((option) => (
                  <li key={option}>
                    <button
                      type="button"
                      className={option === lang ? 'is-active' : ''}
                      onClick={() => { setLang(option); setLangOpen(false) }}
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
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>

      {expanded && (
        <div
          className="header__subbar"
          onMouseEnter={() => setExpanded(expanded)}
          onMouseLeave={() => setExpanded(null)}
        >
          <div className="wrap header__subbar-inner">
            {nav.find((n) => n.label === expanded)?.children?.map((child, i, arr) => (
              <span key={child} className="header__subbar-item">
                <a href={nav.find((n) => n.label === expanded)?.href}>{child}</a>
                {i < arr.length - 1 && <span className="header__subbar-divider" aria-hidden="true" />}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="header__line" aria-hidden="true" />

      <div className={`drawer ${open ? 'is-open' : ''}`}>
        {nav.map((item) => (
          <div key={item.label} className="drawer__group">
            <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            {item.children?.map((child) => (
              <a key={child} href={item.href} className="drawer__sub" onClick={() => setOpen(false)}>
                {child}
              </a>
            ))}
          </div>
        ))}
        <a href="#platform" className="btn btn--platform" onClick={() => setOpen(false)}>
          Go To Platform
        </a>
      </div>
    </header>
  )
}

export default Header
