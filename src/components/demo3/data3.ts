import { D3 } from "@/lib/demo";

export const nav3 = [
  { href: `${D3}#rows`, label: "خدمات و قیمت‌ها" },
  { href: `${D3}#reviews`, label: "نظرات" },
  { href: `${D3}/account`, label: "پنل کاربر" },
  { href: `${D3}#contact`, label: "تماس" },
];

/* small tag above each service title (reference: "DURABLE FINISH") */
export const tag3: Record<string, string> = {
  makeup: "درخشان و ماندگار",
  "bridal-makeup": "با جلسه مشاوره و تست",
  chignon: "کلاسیک و مدرن",
  keratin: "صاف، نرم و براق",
  "hair-color": "لایت، بالیاژ و آمبره",
  facial: "پوستی شفاف و آبرسانی‌شده",
  nails: "کاشت، ژلیش و طراحی",
  lash: "اکستنشن و لیفت",
};
