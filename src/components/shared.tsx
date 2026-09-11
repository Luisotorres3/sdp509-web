import { useState, useId } from "react";
import type { Member } from "../data/members";
export function Icon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      {name === "spotify" ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M6 9q6-3 12 0M7 12q5-2 10 0M8 15q4-1 8 0" />
        </>
      ) : name === "youtube" ? (
        <>
          <rect x="2" y="5" width="20" height="14" rx="5" />
          <path d="m10 9 5 3-5 3Z" />
        </>
      ) : name === "instagram" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r=".7" />
        </>
      ) : (
        <path d="M14 3v12a4 4 0 1 1-4-4M14 3q1 6 7 6" />
      )}
    </svg>
  );
}
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <g fill="currentColor">
        <path d="m60 0 8 22 18-15 1 24 24-1-13 21 22 9-22 9 13 21-24-1-1 24-18-15-8 22-8-22-18 15-1-24-24 1 13-21L0 60l22-9L9 30l24 1 1-24 18 15Z" />
      </g>
      <circle cx="48" cy="52" r="4" fill="var(--cream)" />
      <circle cx="73" cy="52" r="4" fill="var(--cream)" />
      <path
        d="M43 70q17 16 34 0"
        stroke="var(--cream)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function Toy({ member, index = 0 }: { member: Member; index?: number }) {
  const id = useId();
  return member.image ? (
    <img
      src={`${import.meta.env.BASE_URL}${member.image}`}
      width="240"
      height="300"
      loading="lazy"
      alt={`Figura de ${member.displayName}`}
    />
  ) : (
    <svg viewBox="0 0 240 300" aria-hidden="true">
      <defs>
        <linearGradient id={id} x2=".8" y2="1">
          <stop stopColor="#fff" stopOpacity=".6" />
          <stop offset=".6" stopColor={member.color} />
          <stop offset="1" stopColor="#204e37" stopOpacity=".35" />
        </linearGradient>
      </defs>
      <ellipse cx="120" cy="280" rx="69" ry="12" fill="#204e37" opacity=".12" />
      <g fill={member.color} stroke="#204e37" strokeWidth="2">
        <rect x="85" y="227" width="30" height="48" rx="13" />
        <rect x="127" y="227" width="30" height="48" rx="13" />
        <rect
          x="69"
          y="172"
          width="24"
          height="58"
          rx="12"
          transform="rotate(12 69 172)"
        />
        <rect
          x="149"
          y="172"
          width="24"
          height="58"
          rx="12"
          transform="rotate(-12 149 172)"
        />
        <rect x="83" y="167" width="74" height="79" rx="25" />
        <rect
          x="47"
          y="52"
          width="146"
          height="127"
          rx="55"
          fill={`url(#${id})`}
        />
      </g>
      <path
        d="M120 57q-42-4-39-36 31 3 39 29 4-42 27-43 8 29-21 51"
        fill="var(--leaf)"
      />
      <ellipse cx="91" cy="117" rx="7" ry="10" fill="var(--leaf)" />
      <ellipse cx="150" cy="117" rx="7" ry="10" fill="var(--leaf)" />
      <path
        d="M105 142q15 13 30 0"
        stroke="var(--leaf)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="120"
        y="211"
        fontSize="19"
        fontWeight="700"
        fill="var(--leaf)"
        textAnchor="middle"
      >
        0{index + 1}
      </text>
    </svg>
  );
}
export function Embed({
  src,
  title,
  url,
  kind = "video",
  children,
}: {
  src: string;
  title: string;
  url: string;
  kind?: "video" | "spotify";
  children?: React.ReactNode;
}) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`embed-wrap ${kind}`}>
      <div className={`embed ${active ? "active" : ""}`}>
        {active ? (
          <>
            <div
              className={`embed-loading ${loaded ? "loaded" : ""}`}
              role="status"
            >
              Carregant el reproductor…
            </div>
            <iframe
              src={
                kind === "video"
                  ? `${src}${src.includes("?") ? "&" : "?"}hl=ca`
                  : src
              }
              title={title}
              loading="lazy"
              allow="encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setLoaded(true)}
            />
          </>
        ) : (
          <button
            className="embed-facade"
            onClick={() => setActive(true)}
            aria-label={`Carrega ${title}`}
          >
            {children}
            <span className="play" aria-hidden="true">
              ▶
            </span>
            <span className="embed-label">
              {kind === "spotify"
                ? "Obre el reproductor de Spotify"
                : "Carrega el vídeo de YouTube"}
            </span>
            <span className="external-note">
              En prémer, connectes amb{" "}
              {kind === "spotify" ? "Spotify" : "YouTube"}.
            </span>
          </button>
        )}
      </div>
      <a className="fallback" href={url} target="_blank" rel="noreferrer">
        {active ? "Si no es carrega, obre’l a " : "Obre a "}
        {kind === "spotify" ? "Spotify" : "YouTube"} <Arrow />
      </a>
    </div>
  );
}
