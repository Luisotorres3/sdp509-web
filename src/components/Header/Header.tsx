import { useState, useRef } from "react";
import { socialLinks, socials } from "../../data/socials";
import { Icon, Arrow } from "../shared";
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a className="wordmark" href="#inici" aria-label="SDP509, inici">
        sdp<span>509</span>
        <i aria-hidden="true">✳</i>
      </a>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Tanca" : "Menú"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="main-nav"
        className={open ? "open" : ""}
        aria-label="Navegació principal"
      >
        {[
          ["Inici", "inici"],
          ["Música", "musica"],
          ["Directe", "directe"],
          ["Merch", "merch"],
          ["La pinya", "la-pinya"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-socials">
        {socialLinks.map((s) => (
          <a
            key={s.name}
            href={s.url}
            aria-label={s.name}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name={s.icon} />
          </a>
        ))}
      </div>
      <a
        className="button small green header-listen"
        href={socials.spotify}
        target="_blank"
        rel="noreferrer"
      >
        Escolta'ns <Arrow />
      </a>
    </header>
  );
}
