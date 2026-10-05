import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Delin Beauty | سالن زیبایی دلین در سبزوار",
    template: "%s | Delin Beauty سبزوار",
  },
  description:
    "سالن زیبایی دلین در سبزوار؛ میکاپ و میکاپ عروس، شنیون، کراتین مو، رنگ مو و لایت، فیشال، ناخن، اکستنشن و لیفت مژه و آکادمی آموزشی دلین. مشاوره حضوری و رزرو آنلاین نوبت.",
  applicationName: "Delin Beauty",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "Delin Beauty",
    images: [{ url: "/images/d4b/portrait.jpg", width: 1112, height: 1400, alt: "Delin Beauty" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf6f0",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/vazirmatn-arabic-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/markazi-text-arabic-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        {/* enables reveal-on-scroll only when JS runs, so content never hides without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
