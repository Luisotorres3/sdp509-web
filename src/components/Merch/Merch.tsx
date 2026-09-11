import { merch, storeUrl } from "../../data/merch";
import { socials } from "../../data/socials";
import { Arrow } from "../shared";
const statuses = {
  available: "Disponible",
  "coming-soon": "Aviat",
  "sold-out": "Exhaurit",
  concept: "Concepte",
};
export function Merch() {
  return (
    <section className="merch section" id="merch">
      <div className="merch-copy">
        <span className="eyebrow">04 / MERCH OFICIAL SDP509</span>
        <h2>
          PORTA LA
          <br />
          <em>PINYA</em> POSADA.
        </h2>
        <p>Porta una mica de Suc de Pinya allà on vagis.</p>
        <a
          className="button cream"
          href={storeUrl || socials.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Veure novetats <Arrow />
        </a>
      </div>
      {merch.length ? (
        <div className="merch-items">
          {merch.map((m) => (
            <article key={m.id}>
              {m.image && (
                <img
                  src={`${import.meta.env.BASE_URL}${m.image}`}
                  alt={m.name}
                  width="360"
                  height="360"
                  loading="lazy"
                />
              )}
              <h3>{m.name}</h3>
              <p>
                {statuses[m.status]} {m.price && `· ${m.price}`}
              </p>
              {m.url && m.status === "available" && (
                <a
                  className="button cream"
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Veure producte ↗
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="sticker-collage" aria-hidden="true">
          <span className="oval-sticker">
            BEURE SUC
            <br />
            DE PINYA
          </span>
          <span className="square-sticker">
            sdp
            <br />
            509<span>DES D'ARTÉS AMB SUC</span>
          </span>
          <span className="flower-sticker">✳</span>
          <span className="little-sticker">una sola pinya.</span>
        </div>
      )}
    </section>
  );
}
