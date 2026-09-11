import { latestRelease } from "../../data/releases";
import { socials } from "../../data/socials";
import { Sun, Icon } from "../shared";
export function Hero() {
  return (
    <section className="hero" id="inici">
      <div className="hero-top">
        <span className="eyebrow">
          <span className="status-dot" /> ARTÉS · BAGES · DES DEL 2020
        </span>
        <span className="hero-side">UNA PILA D'ESTILS. UNA SOLA PINYA.</span>
      </div>
      <div className="hero-heading">
        <h1>
          SDP509<span className="sr-only"> · Suc de Pinya</span>
        </h1>
        <div className="subbrand">
          SUC DE
          <br />
          PINYA <span aria-hidden="true">↙</span>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <p>Del camp a l'estudi.</p>
          <p>
            Una pinya d'amics, una pila d'estils
            <br className="desktop-break" /> i zero ganes de quedar-nos quiets.
          </p>
          <div className="hero-actions">
            <a className="button blue" href="#nou">
              <span aria-hidden="true">▶</span> Mira {latestRelease.title}
            </a>
            <a
              className="text-link"
              href={socials.spotify}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="spotify" /> Escolta'ns ↗
            </a>
          </div>
          <span className="handwritten">fet entre amics, sona millor.</span>
        </div>
        <a
          className="hero-art"
          href="#la-pinya"
          aria-label="Coneix els vuit membres de la pinya"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/members/pinya-group.webp`}
            width="1536"
            height="1024"
            alt="Els vuit amics convertits en una col·lecció de figures de vinil, a partir de la fotografia del grup"
            fetchPriority="high"
          />
          <span className="toy-caption">LA COL·LECCIÓ MÉS NOSTRA ↗</span>
        </a>
        <div className="summer-sticker">
          <Sun />
          <span>
            ESTIU
            <br />
            SENSE FI
          </span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>100% SUC. 0% ETIQUETES.</span>
        <a href="#nou">
          Abaixa una mica <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
