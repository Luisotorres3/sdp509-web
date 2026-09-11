import { story } from "../../data/story";
export function Story() {
  return (
    <section className="story section" id="historia">
      <div className="section-kicker">
        <span>06 / DEL CAMP A L'ESTUDI</span>
        <span>S ≈ 5 · D ≈ 0 · P ≈ 9</span>
      </div>
      <div className="story-heading">
        <h2>
          AIXÒ VA COMENÇAR
          <br />
          <em>ENTRE AMICS.</em>
        </h2>
        <p>
          Artés, estiu del 2020. Un beef amistós, una resposta en forma de
          cançó: «509». I una colla que ja no ha parat.
          <br />
          <br />
          Trap, pop, electrònica, rock, rumba… Aquí hi cap tot el que ens mou.
        </p>
      </div>
      <div className="timeline">
        <svg
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 80C100-20 180 180 280 80S470-20 570 80S760 180 860 80S1060-20 1200 80" />
        </svg>
        {story.map((s, i) => (
          <article key={`${s.year}-${i}`}>
            <span>{s.year}</span>
            <div className="timeline-dot" />
            <h3>{s.title}</h3>
            <p>{s.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
