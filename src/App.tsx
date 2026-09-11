import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { LatestRelease } from "./components/LatestRelease/LatestRelease";
import { Music } from "./components/Music/Music";
import { Concerts } from "./components/Concerts/Concerts";
import { Merch } from "./components/Merch/Merch";
import { Members } from "./components/Members/Members";
import { Story } from "./components/Story/Story";
import { Footer } from "./components/Footer/Footer";
import { siteConfig } from "./data/site";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#contingut">
        Salta al contingut
      </a>
      <Header />
      <main id="contingut">
        <Hero />
        <LatestRelease />
        <Music />
        <Concerts />
        <Merch />
        <Members />
        <Story />
      </main>
      <Footer />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: siteConfig.name,
          alternateName: siteConfig.longName,
          sameAs: Object.values(siteConfig.socials).filter(
            (url) => !url.includes("linktr.ee"),
          ),
        })}
      </script>
    </>
  );
}
