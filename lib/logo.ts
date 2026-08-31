/**
 * Intrinsic pixel dimensions of the mark files in /public/logo.
 *
 * next/image uses these to reserve space before the file loads, so they must
 * match the real files. If a logo is re-cropped, update the numbers here and
 * nowhere else. Verify with:
 *   python3 -c "from PIL import Image; print(Image.open('public/logo/bs-logo-on-dark.png').size)"
 */

export const logoOnDark = {
  src: "/logo/bs-logo-on-dark.png",
  width: 685,
  height: 876,
} as const;

export const logoOnLight = {
  src: "/logo/bs-logo-on-light.png",
  width: 1024,
  height: 1145,
} as const;
