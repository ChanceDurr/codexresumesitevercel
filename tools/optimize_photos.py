from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageOps

SOURCE_DIR = Path("src/renderer/photos")
OUTPUT_DIR = SOURCE_DIR / "optimized"
TARGET_WIDTHS = [640, 1200, 1800]
QUALITY = 82
VALID_EXT = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}


def optimize_photo(src_path: Path) -> int:
    stem = src_path.stem
    count = 0

    with Image.open(src_path) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")

        orig_w, orig_h = img.size
        generated_widths = []
        for target_w in TARGET_WIDTHS:
            if target_w >= orig_w:
                continue
            generated_widths.append(target_w)

        if not generated_widths:
            generated_widths = [orig_w]

        for width in generated_widths:
            height = int(orig_h * (width / orig_w))
            resized = img.resize((width, height), Image.Resampling.LANCZOS)
            out_path = OUTPUT_DIR / f"{stem}_{width}.webp"
            resized.save(out_path, format="WEBP", quality=QUALITY, method=6)
            count += 1

    return count


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    images = [
        p
        for p in SOURCE_DIR.iterdir()
        if p.is_file() and p.suffix.lower() in VALID_EXT and p.parent != OUTPUT_DIR
    ]

    total_files = 0
    total_variants = 0

    for image in sorted(images):
        variants = optimize_photo(image)
        total_files += 1
        total_variants += variants
        print(f"optimized: {image.name} -> {variants} variant(s)")

    print(f"done: {total_files} image(s), {total_variants} optimized file(s)")


if __name__ == "__main__":
    main()
