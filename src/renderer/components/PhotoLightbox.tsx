import { useEffect } from "react";
import { getPhotoLabel } from "../lib/photoAssets";

type PhotoLightboxProps = {
  photoKey: string | null;
  src: string | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function PhotoLightbox({ photoKey, src, onClose, onPrev, onNext }: PhotoLightboxProps): JSX.Element {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowRight") {
        onNext();
        return;
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNext, onPrev]);

  const label = getPhotoLabel(photoKey ?? "Photo");

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="lightbox-body" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" type="button" aria-label="Close image viewer" onClick={onClose}>
          Close
        </button>
        <button className="lightbox-nav left" type="button" aria-label="Previous photo" onClick={onPrev}>
          Prev
        </button>
        <div className="lightbox-media">
          {src ? (
            <>
              <img src={src} alt={label} decoding="async" />
              <p className="lightbox-caption">{label}</p>
            </>
          ) : (
            <div className="photo-placeholder" />
          )}
        </div>
        <button className="lightbox-nav right" type="button" aria-label="Next photo" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
