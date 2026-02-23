import { useEffect, useRef, useState } from "react";
import { getPhotoLabel, pickVariant } from "../lib/photoAssets";
import type { PhotoAsset } from "../types";

type PhotoTileProps = {
  asset: PhotoAsset;
  onOpen: () => void;
};

export function PhotoTile({ asset, onOpen }: PhotoTileProps): JSX.Element {
  const tileRef = useRef<HTMLElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const node = tileRef.current;
    if (!node || shouldLoad) {
      return;
    }

    // Defer image fetching until the tile is close to the viewport so the
    // photography tab remains responsive even as the gallery grows.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || src) {
      return;
    }

    const preview = pickVariant(asset, 640);
    if (preview) {
      void preview.load().then((resolvedSrc) => setSrc(resolvedSrc));
    }
  }, [asset, shouldLoad, src]);

  return (
    <figure
      className="photo-tile"
      ref={tileRef}
      role="button"
      tabIndex={0}
      aria-label={`Open ${getPhotoLabel(asset.key)}`}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      {src ? (
        <img src={src} alt={getPhotoLabel(asset.key)} loading="lazy" decoding="async" />
      ) : (
        <div className="photo-placeholder" aria-hidden="true" />
      )}
    </figure>
  );
}
