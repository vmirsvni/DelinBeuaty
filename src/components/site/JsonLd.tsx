import { site } from "@/data/site";
import { services } from "@/data/services";

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}

export const salonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Delin Beauty",
  alternateName: "سالن زیبایی دلین",
  url: site.url,
  telephone: site.phoneIntl,
  image: `${site.url}/images/d2d/d2-hero.jpg`,
  logo: `${site.url}/brand/delin-logo-512.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "بلوار پاسداران، پاسداران ۳/۱",
    addressLocality: "سبزوار",
    addressRegion: "خراسان رضوی",
    addressCountry: "IR",
  },
  areaServed: "سبزوار",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات زیبایی",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/demo-2/booking?service=${s.slug}` },
    })),
  },
};
