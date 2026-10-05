/* ──────────────────────────────────────────────────────────────
   DEMO 3 MEDIA — paper & espresso, warm bronze glam.
   Luxury editorial set picked from the two Pinterest idea pages the
   client chose (beauty-editorial-photography, luxury-beauty-editorial);
   one shared light "paper" grade.
   Service photos: supplied by the client (PIC/Demo3), same paper grade.
   ⚠️ Pinterest pins: source/rights unknown, demo only — docs/CREDITS.md
   ────────────────────────────────────────────────────────────── */

import meta3 from "./image-meta3.json";
import { getMedia, type MediaItem } from "./media";

type Meta = Record<string, { w: number; h: number; blur: string }>;
const M3 = meta3 as Meta;

const items: Record<string, Pick<MediaItem, "alt" | "focal">> = {
  hero: { alt: "پرتره زنی با شنیون جمع‌شده و لباس ابریشمی کرم", focal: "50% 25%" },
  services: { alt: "پرتره نیم‌رخ با شنیون و شانه‌های برهنه و پارچه ابریشمی کرم", focal: "50% 30%" },
  book: { alt: "پرتره با پوست طبیعی میان یقه‌ای از تور کرم", focal: "45% 25%" },
  "svc-makeup": { alt: "مدل با میکاپ درخشان و موهای جمع‌شده", focal: "50% 40%" },
  "svc-bridal-makeup": { alt: "عروس با لباس دانتل، شنیون و میکاپ ملایم", focal: "50% 40%" },
  "svc-chignon": { alt: "شنیون نامرتب و رمانتیک از نمای پشت", focal: "50% 40%" },
  "svc-keratin": { alt: "سه مدل موی صاف، موج‌دار و فر از نمای پشت", focal: "50% 40%" },
  "svc-hair-color": { alt: "موی دم‌اسبی با لایت و بالیاژ روشن", focal: "50% 40%" },
  "svc-facial": { alt: "اجرای ماسک فیشال با براش روی پوست", focal: "50% 40%" },
  "svc-nails": { alt: "مدل با پوست درخشان و ناخن‌های نود کشیده", focal: "50% 40%" },
  "svc-lash": { alt: "اجرای اکستنشن مژه با موچین روی پد زیر چشم", focal: "50% 40%" },
};

export function getMedia3(key: string): MediaItem {
  const m = M3[key];
  const base = items[key] ?? getMedia(key);
  return {
    alt: base.alt,
    focal: base.focal,
    isDemo: true,
    src: `/images/d3c/${key}.jpg`,
    w: m?.w ?? 1200,
    h: m?.h ?? 1500,
    blur: m?.blur,
  };
}
