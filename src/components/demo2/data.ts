import { services } from "@/data/services";

/* Short card lines for demo 2 (the reference uses 1–2 line captions). */
export const tagline: Record<string, string> = {
  makeup: "میکاپ مجلسی، متناسب با فرم چهره و رنگ پوست",
  "bridal-makeup": "چهره‌ای درخشان و ماندگار برای روز مراسم",
  chignon: "شنیون‌های کلاسیک و مدرن، هماهنگ با استایل شما",
  keratin: "موهایی صاف، نرم و براق؛ بدون وز",
  "hair-color": "رنگ، لایت و بالیاژ متناسب با رنگ پوست",
  facial: "پاکسازی و آبرسانی برای پوستی شفاف",
  nails: "مانیکور، کاشت، ژلیش و طراحی ناخن",
  lash: "نگاهی پرپشت، فر و جذاب",
};

/* Thumb images for each service (small pills / catalogue cards) */
export const thumb: Record<string, string> = Object.fromEntries(services.map((s) => [s.slug, s.image]));

export const svcList = services.map((s) => ({ ...s, tagline: tagline[s.slug], thumb: thumb[s.slug] }));

/* "Transformation" carousel — ⚠️ demo imagery */
export const transformations = [
  { key: "tr-bridal", title: "عروسی که به خودش شبیه است", text: "میکاپ و شنیون هماهنگ با لباس، تاج و چهره شما.", tag: "میکاپ و شنیون عروس" },
  { key: "tr-color", title: "رنگی که می‌درخشد", text: "لایت و بالیاژ متناسب با رنگ پوست؛ طبیعی و چشم‌نواز.", tag: "رنگ مو و لایت" },
  { key: "tr-makeup", title: "میکاپی برای شب‌های خاص", text: "از پوست درخشان تا لب و چشم؛ ماندگار تا پایان مراسم.", tag: "میکاپ" },
  { key: "tr-nails", title: "دست‌هایی آراسته", text: "فرم و رنگ ناخن، متناسب با فرم دست و سلیقه شما.", tag: "ناخن" },
  { key: "tr-lash", title: "نگاهی پرپشت", text: "اکستنشن سبک و طبیعی؛ جزئیات، از نزدیک.", tag: "اکستنشن مژه" },
];
