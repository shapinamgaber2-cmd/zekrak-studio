import { useState } from 'react';
import './Header.css';

// رابط الواتساب المباشر
const WHATSAPP_LINK = 'https://wa.me/201000000000?text=Hi%20Zekrak!%20I%20have%20a%20question.'; // استبدلي الرقم برقم زكراك الخاص

const NAV_LINKS = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: WHATSAPP_LINK, isExternal: true }, // ربط الواتساب
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo" aria-label="ZEKRAK Studio">
          <img src="/assets/logo.svg-cropped.svg" className="header__logo-img" alt="ZEKRAK" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header__link"
              target={link.isExternal ? '_blank' : '_self'}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="header__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="header__mobile-nav" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header__link"
              target={link.isExternal ? '_blank' : '_self'}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}