/* ──────────────────────────────────────────────────────────────
   DEMO 2 MEDIA — rosy/light "Beauty Center" grade.
   Free Unsplash photos for the Delin services and academy, plus the
   hero portraits carried over from the original demo set.
   ⚠️ All temporary demo imagery.
   Credits: docs/CREDITS.md
   ────────────────────────────────────────────────────────────── */

import meta2 from "./image-meta2.json";
import { getMedia, type MediaItem } from "./media";

type Meta = Record<string, { w: number; h: number; blur: string }>;
const M2 = meta2 as Meta;

const U = (id: string) => `https://images.unsplash.com/${id}`;

const extra: Record<string, Omit<MediaItem, "w" | "h" | "blur" | "src">> = {
  "d2-hero": {
    alt: "زنی با ابروهای پرپشت و پوست درخشان در برابر دیوار صورتی",
    focal: "50% 22%",
    isDemo: true,
    credit: { name: "Oleg Ivanov", url: "https://images.unsplash.com/photo-1548550702-9c59121819b7" },
  },  "d2-interior": {
    alt: "فضای داخلی آرام سالن با آینه‌های قوسی",
    focal: "50% 55%",
    isDemo: true,
    credit: { name: "Barney Goodman", url: "https://images.unsplash.com/photo-1781450090585-1a511b7066d9" },
  },  "d2-cream": {
    alt: "بافت کرم روی زمینه نود",
    focal: "50% 50%",
    isDemo: true,
    credit: { name: "Kelsey Curtis", url: "https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1" },
  },  /* Delin services — photos supplied by the client (PIC/Demo3) */
  "svc-makeup": { alt: "مدل با میکاپ درخشان و موهای جمع‌شده", focal: "50% 40%", isDemo: true },
  "svc-bridal-makeup": { alt: "عروس با لباس دانتل، شنیون و میکاپ ملایم", focal: "50% 40%", isDemo: true },
  "svc-chignon": { alt: "شنیون نامرتب و رمانتیک از نمای پشت", focal: "50% 40%", isDemo: true },
  "svc-keratin": { alt: "سه مدل موی صاف، موج‌دار و فر از نمای پشت", focal: "50% 40%", isDemo: true },
  "svc-hair-color": { alt: "موی دم‌اسبی با لایت و بالیاژ روشن", focal: "50% 40%", isDemo: true },
  "svc-facial": { alt: "اجرای ماسک فیشال با براش روی پوست", focal: "50% 40%", isDemo: true },
  "svc-nails": { alt: "مدل با پوست درخشان و ناخن‌های نود کشیده", focal: "50% 40%", isDemo: true },
  "svc-lash": { alt: "اجرای اکستنشن مژه با موچین روی پد زیر چشم", focal: "50% 40%", isDemo: true },
  /* transformations and academy */
  "tr-bridal": { alt: "عروس با شنیون و تاج گل در نور طبیعی", focal: "50% 35%", isDemo: true, credit: { name: "Rikonavt", url: U("photo-1586342805832-c0f10f33ac3d") } },
  "tr-color": { alt: "موی بلند با لایت و بالیاژ روشن", focal: "50% 45%", isDemo: true, credit: { name: "Jessie Dee Dabrowski", url: U("photo-1554519934-e32b1629d9ee") } },
  "tr-makeup": { alt: "اجرای میکاپ لب با براش", focal: "50% 40%", isDemo: true, credit: { name: "Candice Picard", url: U("photo-1541088120351-d566aa6ac53f") } },
  "tr-nails": { alt: "دست‌هایی با ناخن‌های نود و براق", focal: "50% 50%", isDemo: true, credit: { name: "Chelson Tamares", url: U("photo-1610992015762-45dca7fa3a85") } },
  "tr-lash": { alt: "نمای نزدیک از مژه‌های اکستنشن‌شده", focal: "50% 50%", isDemo: true, credit: { name: "Samela Carvalho", url: U("photo-1683719312734-e31de63957ab") } },
  "ac-tools": { alt: "براش‌های حرفه‌ای میکاپ روی زمینه روشن", focal: "50% 50%", isDemo: true, credit: { name: "Edz Norton", url: U("photo-1620464003286-a5b0d79f32c2") } },
  "ac-phone": { alt: "پالت سایه و براش‌های میکاپ", focal: "50% 50%", isDemo: true, credit: { name: "William Shu", url: U("photo-1679623100266-db82be84f5f3") } },
  "ac-magazine": { alt: "اجرای اکستنشن مژه با موچین", focal: "50% 50%", isDemo: true, credit: { name: "Victor Sirbu", url: U("photo-1735151225764-eac694642dbf") } },
  "ac-makeup": { alt: "مربی آکادمی در حال میکاپ روی مدل", focal: "60% 40%", isDemo: true, credit: { name: "Johan Mouchet", url: U("photo-1602910344008-22f323cc1817") } },
};

/* ── Hero portraits carried over from the original demo set, graded for demo 2 ── */
const client: Record<string, Omit<MediaItem, "w" | "h" | "blur" | "src">> = {
  "hs-1": { alt: "پرتره با میکاپ ملایم، کک‌ومک و پوست درخشان", focal: "42% 42%", isDemo: true },
  "hs-2": { alt: "پرتره طبیعی با میکاپ نود و خط چشم ظریف", focal: "50% 38%", isDemo: true },
  "hs-3": { alt: "پرتره با لب‌های براق و مژه‌های بلند روی زمینه صورتی", focal: "48% 40%", isDemo: true },
  "hs-4": { alt: "پرتره با لب‌های صورتی و مژه‌های بلند", focal: "50% 42%", isDemo: true },
  "hs-5": { alt: "پرتره با موهای فر و پوست درخشان", focal: "50% 38%", isDemo: true },
  "editorial-closed": { alt: "پرتره روشن با میکاپ طبیعی و موهای حالت‌دار", focal: "50% 35%", isDemo: true },
};

export function getMedia2(key: string): MediaItem {
  const m = M2[key];
  const base = client[key] ?? extra[key] ?? getMedia(key);
  return {
    ...base,
    src: `/images/d2d/${key}.jpg`,
    w: m?.w ?? 1600,
    h: m?.h ?? 2000,
    blur: m?.blur,
  };
}
