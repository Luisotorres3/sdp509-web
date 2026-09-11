import { concerts } from "../../data/concerts";
import { siteConfig } from "../../data/site";
import { Arrow, Sun } from "../shared";
export function Concerts() {
  return (
    <section className="concerts section" id="directe">
      <div className="section-kicker">
        <span>03 / FORA DELS AURICULARS</span>
        <span>EN VIU I AMB TOTA LA PINYA</span>
      </div>
      <h2>
        ENS VEIEM
        <br />
        AL <em>DIRECTE.</em>
      </h2>
      {concerts.length ? (
        <div className="concert-list">
          {concerts.map((c) => (
            <article className="ticket" key={c.id}>
              <time dateTime={c.date}>
                <strong>{c.date.slice(8, 10)}</strong>
                {new Intl.DateTimeFormat("ca", {
                  month: "short",
                  timeZone: "UTC",
                }).format(new Date(c.date))}
              </time>
              <div>
                <h3>{c.city}</h3>
                <p>
                  {c.venue} {c.time && `· ${c.time}`}
                </p>
              </div>
              {c.soldOut ? (
                <span>Entrades exhaurides</span>
              ) : c.ticketUrl ? (
                <a
                  className="button green"
                  href={c.ticketUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.ticketLabel || "Entrades"} ↗
                </a>
              ) : c.free ? (
                <span>Entrada gratuïta</span>
              ) : (
                <span>Entrades aviat</span>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-ticket">
          <Sun />
          <div>
            <h3>ESTEM CUINANT NOVES DATES 🍍</h3>
            <p>
              Encara no hi ha pròxims concerts anunciats.
              <br />
              Segueix-nos i sigues el primer a saber quan tornem a l'escenari.
            </p>
          </div>
          <a
            className="button green"
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Segueix-nos a Instagram <Arrow />
          </a>
        </div>
      )}
    </section>
  );
}
