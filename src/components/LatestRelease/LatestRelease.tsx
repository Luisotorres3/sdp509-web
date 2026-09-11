import { latestRelease as release } from "../../data/releases";
import { Embed, Arrow, Sun } from "../shared";
export function LatestRelease() {
  return (
    <section className="latest section" id="nou">
      <div className="section-kicker">
        <span>01 / ACABAT D'ESPRÉMER</span>
        <span className="badge">NOU LANÇAMENT</span>
      </div>
      <div className="latest-grid">
        <div>
          <h2>
            UN DIA MÉS
            <br />
            D'<em>ESTIU.</em>
          </h2>
          <p className="release-title">{release.title}</p>
          <p className="body-copy">{release.description}</p>
          <div className="link-row">
            {release.spotifyUrl && (
              <a
                className="button green"
                href={release.spotifyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Escolta a Spotify <Arrow />
              </a>
            )}
            {release.youtubeUrl && (
              <a
                className="text-link"
                href={release.youtubeUrl}
                target="_blank"
                rel="noreferrer"
              >
                YouTube <Arrow />
              </a>
            )}
          </div>
        </div>
        <div className="latest-video">
          {release.youtubeId && (
            <Embed
              src={`https://www.youtube-nocookie.com/embed/${release.youtubeId}`}
              title={`Videoclip de ${release.title}`}
              url={
                release.youtubeUrl ||
                `https://www.youtube.com/watch?v=${release.youtubeId}`
              }
            >
              <div className="summer-art">
                <span className="summer-date">
                  {release.title.split(" ")[0]}
                  <span>{release.title.split(" ").slice(1).join(" ")}</span>
                </span>
                <Sun className="video-sun" />
                <span className="summer-bottom">EL QUE ENS QUEDA D'ESTIU.</span>
                <svg
                  viewBox="0 0 600 120"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 60Q100 0 200 60T400 60T600 60V120H0"
                    fill="#204e37"
                  />
                  <path
                    d="M0 100Q150 40 300 100T600 100V120H0"
                    fill="#163baa"
                  />
                </svg>
              </div>
            </Embed>
          )}
          <span className="video-footnote">UN DIA EXTRA. TOTES LES GANES.</span>
        </div>
      </div>
    </section>
  );
}
