import type { PhotoAsset, PhotoVariant } from "../types";

const optimizedPhotoModules = import.meta.glob("../photos/optimized/*.webp", {
  import: "default"
}) as Record<string, () => Promise<string>>;

const photoCaptions: Record<string, string> = {
  DSC00344: "Morning Light Over the Landscape",
  DSC00345: "Quiet Horizon With Soft Contrast",
  DSC00352: "Golden Hour Texture and Depth",
  DSC00356: "Open Sky and Natural Geometry",
  DSC00360: "Moody Frame With Balanced Light",
  DSC00375: "Layered Distance and Clean Composition",
  DSC00384: "Ambient Tones and Atmospheric Detail",
  DSC00404: "Strong Lines and Natural Framing",
  DSC00409: "Subtle Color Story in Motion",
  DSC00412: "Foreground Contrast, Background Calm",
  DSC00417: "High-Detail Scene With Depth",
  DSC00419: "Cinematic Balance of Light and Shadow",
  DSC00420: "Wide Composition With Bold Presence",
  DSC01432: "Signature Shot: Texture, Tone, and Scale"
};

function getPhotoKey(path: string): string {
  const file = path.split("/").pop() ?? "Photo";
  const noExt = file.replace(/\.[^/.]+$/, "");
  return noExt.replace(/_(\d+)$/, "");
}

function getVariantWidth(path: string): number | null {
  const match = path.match(/_(\d+)\.webp$/i);
  return match ? Number(match[1]) : null;
}

export function getPhotoLabel(key: string): string {
  const mappedCaption = photoCaptions[key];
  if (mappedCaption) {
    return mappedCaption;
  }

  const cleaned = key.replace(/[_-]+/g, " ").trim();
  const dscMatch = cleaned.match(/^DSC\s*0*(\d+)$/i);
  if (dscMatch) {
    return `Photo ${dscMatch[1]}`;
  }

  return cleaned.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function pickVariant(asset: PhotoAsset, targetWidth: number): PhotoVariant | null {
  if (asset.variants.length === 0) {
    return null;
  }

  return asset.variants.find((variant) => variant.width >= targetWidth) ?? asset.variants[asset.variants.length - 1];
}

export const photoAssets: PhotoAsset[] = (() => {
  const grouped = new Map<string, PhotoAsset>();

  // Group generated responsive variants by base filename (e.g. DSC00420)
  // so the UI can request small previews and large lightbox versions from
  // the same logical photo entry.
  for (const [path, load] of Object.entries(optimizedPhotoModules)) {
    const key = getPhotoKey(path);
    const width = getVariantWidth(path);
    if (!width) {
      continue;
    }

    const current = grouped.get(key) ?? { key, variants: [] };
    current.variants.push({ width, load });
    grouped.set(key, current);
  }

  return Array.from(grouped.values())
    .map((asset) => ({
      ...asset,
      variants: asset.variants.sort((a, b) => a.width - b.width)
    }))
    .sort((a, b) => a.key.localeCompare(b.key));
})();
