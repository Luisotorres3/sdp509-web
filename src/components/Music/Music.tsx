import { releases } from "../../data/releases";
import { siteConfig } from "../../data/site";
import { Embed, Icon } from "../shared";
export function Music() {
  return (
    <section className="music section" id="musica">
      <div className="section-kicker">
        <span>02 / SONA A NOSALTRES</span>
        <span aria-hidden="true">▂ ▅ ▃ █ ▆ ▂ ▅</span>
      </div>
      <h2>
        POSA'T ELS <em>SDP509.</em>
      </h2>
      <div className="music-grid">
        <div className="players">
          <Embed
            kind="spotify"
            src={siteConfig.spotifyEmbed}
            title="Música de SDP509 a Spotify"
            url={siteConfig.socials.spotify}
          >
            <div className="spotify-art">
              <Icon name="spotify" />
              <span>
                Una pila
                <br />
                d'estils.
                <br />
                <em>Tot el suc.</em>
              </span>
              <span className="record" aria-hidden="true" />
            </div>
          </Embed>
          <div className="playlist-heading">
            <h3>Mode Avió</h3>
            <span>
              2024 · 12 CANÇONS <span aria-hidden="true">⌁</span>
            </span>
          </div>
          <Embed
            src={siteConfig.playlistEmbed}
            title="Visualitzadors de Mode Avió"
            url={siteConfig.playlistUrl}
          >
            <div className="plane-art">
              <span>
                MODE
                <br />
                AVIÓ
              </span>
              <svg viewBox="0 0 200 160" aria-hidden="true">
                <path d="m10 85 180-70-57 136-36-48Z" fill="#eaf38b" />
                <path d="m97 103 93-88-61 109" fill="#adb969" />
              </svg>
            </div>
          </Embed>
        </div>
        <div className="release-list">
          <div className="list-title">
            <h3>L'últim suc</h3>
            <span>DISCOGRAFIA ↙</span>
          </div>
          {releases.map((r, i) => (
            <div className="release-row" key={r.id}>
              <span className="release-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4>{r.title}</h4>
                <span>{r.type}</span>
              </div>
              <span className="release-year">{r.year}</span>
              {r.spotifyUrl && (
                <a
                  href={r.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Escolta ${r.title} a Spotify`}
                >
                  ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
