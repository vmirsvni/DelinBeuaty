/* ──────────────────────────────────────────────────────────────
   SHARED MEDIA BASE
   Each demo has its own graded photo set and manifest
   (media2.ts · media3.ts · media4.ts). They fall back to the alt text
   and focal points below for slot keys they don't describe themselves.
   Credits and sources: docs/CREDITS.md
   ────────────────────────────────────────────────────────────── */

export interface MediaItem {
  src: string;
  alt: string;
  /** CSS object-position — keeps faces safe in every crop */
  focal: string;
  isDemo: boolean;
  credit?: { name: string; url: string };
  w: number;
  h: number;
  blur?: string;
}

const base: Record<string, { alt: string; focal: string }> = {
  "hero": { alt: "پرتره نزدیک زنی با میکاپ طبیعی و نگاه مستقیم، در نور گرم", focal: "50% 32%" },
  "editorial-closed": { alt: "پرتره روشن با میکاپ طبیعی", focal: "55% 30%" },
};

/** Alt + focal fallback for a slot key; `src`/size are always set by the demo's own manifest. */
export function getMedia(key: string): MediaItem {
  const b = base[key] ?? { alt: "", focal: "50% 40%" };
  return { src: "", alt: b.alt, focal: b.focal, isDemo: true, w: 1200, h: 1500 };
}
