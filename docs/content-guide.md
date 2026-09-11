# Guia de contingut

La interfície pública és en català. Els fitxers `src/data/` són la font de contingut. No convertir referències, estimacions o exemples en fets.

## Integrants

Editar noms, rols i descripcions a `src/data/members.ts`. **Validar les biografies individuals amb el grup abans de considerar-les definitives.** Les vuit fitxes segueixen l'encàrrec, no una certificació de la formació actual. Consulteu `member-visual-references.md` abans d'assignar imatges als noms.

Per substituir un SVG, afegiu `image: 'images/members/furki.webp'` a la fitxa amb el retrat aprovat. La ruta no comença amb `/`; el component hi afegeix el `BASE_URL`. Mantenir escala i enquadrament coherents i una proporció aproximada 4:5. Hero col·lectiu a `public/images/members/pinya-group.webp`.

## Concerts

`src/data/concerts.ts` està buit perquè no hi ha dates futures verificades al snapshot. Afegir només concerts anunciats, en ordre cronològic. El component substitueix automàticament l'estat buit per entrades amb dia, mes, ciutat, sala, hora i enllaç opcional. Eliminar dates passades quan es revisi l'agenda.

Exemple **DEMO, NO ÉS UN CONCERT REAL I NO S'HA PUBLICAT**:

```ts
{
  id: '2026-demo',
  date: '2026-10-10',
  city: 'Barcelona',
  venue: 'Sala de demostració',
  time: '21:00',
  ticketUrl: 'https://example.org/entrades-demo'
}
```

Data ISO `YYYY-MM-DD`. `soldOut: true` mostra «Entrades exhaurides»; `free: true` permet indicar entrada gratuïta. No inventar preus ni disponibilitat. Sense URL es mostra «Entrades aviat».

## Llançament destacat

A `releases.ts`, marcar exactament un element amb `featured: true`. Editar-ne `title`, `description`, `spotifyUrl`, `youtubeUrl`, `youtubeId`. Hero i secció de llançament llegeixen el mateix registre. `cover` i `accent` estan previstos al model; l'edició actual fa servir composicions tipogràfiques originals. La façana estiuenca és direcció d'art d'aquesta edició, no una portada oficial: adaptar-la si el nou llançament té un concepte diferent.

Cada discografia sense URL concreta es presenta com a registre informatiu, sense enllaç fals. Confirmar URL de cada tema abans d'afegir-la. La playlist Mode Avió es configura a `site.ts`.

## Merch i contactes

`src/data/merch.ts`: catàleg buit i `storeUrl` buit fins a confirmació. El teaser només enllaça a Instagram. Afegir productes reals, imatges autoritzades, preus i enllaços validats; estats disponibles: `available`, `coming-soon`, `sold-out`, `concept`. No hi ha checkout intern.

Xarxes a `socials.ts`. Contactes `bookingEmail`, `managementEmail`, `privacyUrl`, `legalUrl` a `site.ts`; si són buits, no apareixen. No posar correus de mostra.

## Checklist editorial

- [ ] Validar bios con SDP509
- [ ] Añadir fotografías oficiales
- [ ] Validar integrantes actuales
- [ ] Confirmar URL oficial de merch
- [ ] Añadir próximas fechas cuando se anuncien
- [ ] Confirmar contacto de booking antes de publicarlo
- [ ] Confirmar correspondència de cada cara amb el nom i aprovar les figures individuals
- [ ] Registrar permisos i crèdits de cada fotografia publicable
