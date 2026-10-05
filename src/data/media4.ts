/* ──────────────────────────────────────────────────────────────
   DEMO 4 MEDIA — "Nuvé" AI-scan look (QClay reference).
   Hero: AI-generated video supplied by the client, played forward-and-back,
   with tracked scan boxes.
   Photos: Look Studio series on Unsplash (free licence), "clean lilac" grade.
   Academy: Antoni Shkraba studio series (Pexels), Unsplash makeup/lash photos + graduate portraits
   by Vitaly Gariev (Unsplash), same grade.
   Service photos: supplied by the client (PIC/Demo3), same lilac grade.
   ⚠️ Temporary demo imagery, rights unconfirmed — docs/CREDITS.md
   ────────────────────────────────────────────────────────────── */

import meta4 from "./image-meta4.json";
import { getMedia, type MediaItem } from "./media";

type Meta = Record<string, { w: number; h: number; blur: string }>;
const M4 = meta4 as Meta;

const items: Record<string, Pick<MediaItem, "alt" | "focal">> = {
  scan: { alt: "مدل در ویدیوی آنالیز چهره", focal: "50% 35%" },
  analysis: { alt: "مدل با دستانی کنار صورت و پوستی درخشان روی زمینه روشن", focal: "50% 35%" },
  portrait: { alt: "مدل با چشمان بسته و پوست درخشان", focal: "50% 35%" },
  cta: { alt: "مدل خندان در حال مراقبت از پوست", focal: "45% 40%" },
  "svc-makeup": { alt: "مدل با میکاپ درخشان و موهای جمع‌شده", focal: "50% 40%" },
  "svc-bridal-makeup": { alt: "عروس با لباس دانتل، شنیون و میکاپ ملایم", focal: "50% 30%" },
  "svc-chignon": { alt: "شنیون نامرتب و رمانتیک از نمای پشت", focal: "50% 35%" },
  "svc-keratin": { alt: "سه مدل موی صاف، موج‌دار و فر از نمای پشت", focal: "50% 40%" },
  "svc-hair-color": { alt: "موی دم‌اسبی با لایت و بالیاژ روشن", focal: "50% 40%" },
  "svc-facial": { alt: "اجرای ماسک فیشال با براش روی پوست", focal: "50% 45%" },
  "svc-nails": { alt: "مدل با پوست درخشان و ناخن‌های نود کشیده", focal: "50% 40%" },
  "svc-lash": { alt: "اجرای اکستنشن مژه با موچین روی پد زیر چشم", focal: "50% 40%" },
  "ac-makeup": { alt: "اجرای میکاپ چشم روی مدل در کلاس آکادمی", focal: "55% 45%" },
  "ac-lash": { alt: "نمای نزدیک از اجرای اکستنشن مژه", focal: "50% 50%" },
  "pill-217834": { alt: "", focal: "50% 45%" },
  "pill-291832": { alt: "", focal: "50% 45%" },
  "pill-267814": { alt: "", focal: "50% 45%" },
  "pill-242233": { alt: "", focal: "50% 45%" },
  "ac-hero": { alt: "مربی آکادمی در حال میکاپ روی مدل در استودیوی روشن", focal: "55% 40%" },
  "ac-train": { alt: "مربی و هنرجو در حال تمرین عملی در استودیو", focal: "60% 40%" },
  "team-1": { alt: "نگار، میکاپ آرتیست و متخصص میکاپ عروس", focal: "40% 25%" },
  "team-2": { alt: "مهسا، متخصص رنگ، لایت و کراتین مو", focal: "45% 22%" },
  "team-3": { alt: "الناز، متخصص ناخن و مژه و مدرس آکادمی", focal: "50% 30%" },
  "team-4": { alt: "ترانه، مشاور زیبایی و متخصص شنیون", focal: "40% 25%" },
  "team-5": { alt: "سارا، متخصص فیشال و مراقبت پوست", focal: "55% 18%" },
  "grad-1": { alt: "پرتره هنرجوی آکادمی", focal: "50% 35%" },
  "grad-2": { alt: "پرتره هنرجوی آکادمی", focal: "50% 35%" },
  "grad-3": { alt: "پرتره هنرجوی آکادمی", focal: "50% 30%" },
  "grad-4": { alt: "پرتره هنرجوی آکادمی", focal: "50% 35%" },
  "grad-5": { alt: "پرتره هنرجوی آکادمی", focal: "50% 35%" },
  "grad-6": { alt: "پرتره هنرجوی آکادمی", focal: "50% 35%" },
};

export function getMedia4(key: string): MediaItem {
  const m = M4[key];
  const base = items[key] ?? getMedia(key);
  return {
    alt: base.alt,
    focal: base.focal,
    isDemo: true,
    src: `/images/d4b/${key}.jpg`,
    w: m?.w ?? 1200,
    h: m?.h ?? 1500,
    blur: m?.blur,
  };
}
