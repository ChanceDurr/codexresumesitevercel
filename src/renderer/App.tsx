import { useEffect, useRef, useState } from "react";
import { HeroCard } from "./components/HeroCard";
import { PhotoLightbox } from "./components/PhotoLightbox";
import { SiteHeader } from "./components/SiteHeader";
import { TabContent } from "./components/TabContent";
import { DEFAULT_TAB, isNavTab } from "./content/siteContent";
import { photoAssets, pickVariant } from "./lib/photoAssets";
import type { NavTab } from "./types";

function parseTabFromHash(hash: string): NavTab | null {
  const candidate = hash.replace(/^#/, "").trim().toLowerCase();
  return isNavTab(candidate) ? candidate : null;
}

function getInitialTab(): NavTab {
  if (typeof window === "undefined") {
    return DEFAULT_TAB;
  }
  return parseTabFromHash(window.location.hash) ?? DEFAULT_TAB;
}

function App(): JSX.Element {
  const [activeTab, setActiveTab] = useState<NavTab>(getInitialTab);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const lightboxRequestIdRef = useRef(0);

  const closeLightbox = (): void => {
    lightboxRequestIdRef.current += 1;
    setLightboxIndex(null);
    setLightboxSrc(null);
  };

  const openLightbox = (index: number): void => {
    const asset = photoAssets[index];
    if (!asset) {
      return;
    }

    setLightboxIndex(index);
    setLightboxSrc(null);
    const requestId = ++lightboxRequestIdRef.current;
    const best = pickVariant(asset, 1600);
    if (best) {
      void best.load().then((src) => {
        if (lightboxRequestIdRef.current === requestId) {
          setLightboxSrc(src);
        }
      });
    }
  };

  const moveLightbox = (delta: number): void => {
    if (lightboxIndex === null || photoAssets.length === 0) {
      return;
    }

    const nextIndex = (lightboxIndex + delta + photoAssets.length) % photoAssets.length;
    openLightbox(nextIndex);
  };

  useEffect(() => {
    const onHashChange = (): void => {
      const nextTab = parseTabFromHash(window.location.hash) ?? DEFAULT_TAB;
      setActiveTab(nextTab);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const nextHash = `#${activeTab}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(window.history.state, "", nextHash);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== "photography" && lightboxIndex !== null) {
      closeLightbox();
    }
  }, [activeTab, lightboxIndex]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="bg-glow bg-glow-one" />
      <div className="bg-glow bg-glow-two" />

      <SiteHeader activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="content-wrap" id="main-content" tabIndex={-1}>
        <HeroCard activeTab={activeTab} />
        <TabContent activeTab={activeTab} onOpenPhoto={openLightbox} />
      </main>

      {lightboxIndex !== null && (
        <PhotoLightbox
          photoKey={photoAssets[lightboxIndex]?.key ?? null}
          src={lightboxSrc}
          onClose={closeLightbox}
          onPrev={() => moveLightbox(-1)}
          onNext={() => moveLightbox(1)}
        />
      )}
    </div>
  );
}

export default App;
