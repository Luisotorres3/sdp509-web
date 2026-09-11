import { socialLinks } from "../../data/socials";
import { siteConfig } from "../../data/site";
import { Icon, Arrow } from "../shared";
export function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-top">
        <span className="eyebrow">DE L'ESTUDI A LA TEVA PLAYLIST.</span>
        <a href="#inici">Torna amunt ↑</a>
      </div>
      <p className="footer-title">
        SOM SUC DE PINYA.
        <br />
        <em>UN PLAER.</em>
        <span aria-hidden="true">✳</span>
      </p>
      <div className="footer-links">
        {socialLinks.map((s) => (
          <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
            <Icon name={s.icon} />
            {s.name}
            <Arrow />
          </a>
        ))}
      </div>
      <div className="optional-links">
        {siteConfig.bookingEmail && (
          <a href={`mailto:${siteConfig.bookingEmail}`}>Contractació</a>
        )}
        {siteConfig.managementEmail && (
          <a href={`mailto:${siteConfig.managementEmail}`}>Representació</a>
        )}
        {siteConfig.privacyUrl && (
          <a href={siteConfig.privacyUrl}>Privacitat</a>
        )}
        {siteConfig.legalUrl && <a href={siteConfig.legalUrl}>Avís legal</a>}
      </div>
      <div className="footer-bottom">
        <span>SDP509 · Artés</span>
        <span>Una pila d'estils. Una sola pinya.</span>
        <span>Fet amb suc 🍍</span>
      </div>
    </footer>
  );
}
