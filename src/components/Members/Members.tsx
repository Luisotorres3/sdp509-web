import { useRef, useState } from "react";
import { members } from "../../data/members";
import type { Member } from "../../data/members";
import { Toy } from "../shared";
export function Members() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Member>(members[0]);
  function show(member: Member) {
    setSelected(member);
    dialog.current?.showModal();
  }
  return (
    <section className="members section" id="la-pinya">
      <div className="section-kicker">
        <span>05 / LA PINYA</span>
        <span>VUIT PERSONES. MASSA IDEES.</span>
      </div>
      <h2>
        QUI HI HA DARRERE
        <br />
        DE TOT <em>AIXÒ?</em>
      </h2>
      <div className="members-intro">
        <p>
          Vuit persones. Una pinya.
          <br />
          Massa idees per quedar-se en un sol gènere.
        </p>
        <span>Toca una figura i coneix la pinya ↙</span>
      </div>
      <div className="toys">
        {members.map((m, i) => (
          <button
            className="toy-button"
            style={{ "--toy-color": m.color } as React.CSSProperties}
            key={m.id}
            onClick={() => show(m)}
            aria-label={`Coneix ${m.displayName}`}
          >
            <span className="toy-index">PINYA TOY / 0{i + 1}</span>
            <Toy member={m} index={i} />
            <strong>{m.displayName}</strong>
            <span className="toy-role">{m.role}</span>
            <span className="toy-plus" aria-hidden="true">
              +
            </span>
          </button>
        ))}
      </div>
      <p className="provisional-note">
        Figures individuals conceptuals. Els retrats de cada membre, ben aviat.
      </p>
      <dialog
        ref={dialog}
        className="member-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          onClick={() => dialog.current?.close()}
          aria-label="Tanca la fitxa"
        >
          ×
        </button>
        <div className="dialog-art">
          <Toy member={selected} index={members.indexOf(selected)} />
        </div>
        <div>
          <span className="eyebrow">LA PINYA / SDP509</span>
          <h3>{selected.displayName}</h3>
          <p className="real-name">{selected.realName}</p>
          <span className="badge">{selected.role}</span>
          <p>{selected.description}</p>
        </div>
      </dialog>
    </section>
  );
}
