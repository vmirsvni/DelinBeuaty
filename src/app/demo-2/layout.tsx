import type { Metadata } from "next";
import { RevealObserver } from "@/components/ui/Reveal";
import "../demo2.css";

export const metadata: Metadata = {
  title: { absolute: "Delin Beauty | دمو ۱، سالن زیبایی سبزوار", template: "%s | Delin Beauty · دمو ۱" },
  description: "Delin Beauty سبزوار؛ میکاپ و میکاپ عروس، شنیون، کراتین، رنگ مو، فیشال، ناخن و مژه. رزرو آنلاین نوبت.",
  alternates: { canonical: "/demo-2" },
};

export default function Demo2Layout({ children }: LayoutProps<"/demo-2">) {
  return (
    <div className="theme-rose min-h-[100svh]">
      {children}
      <RevealObserver />
    </div>
  );
}
