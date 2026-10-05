import type { Metadata } from "next";
import { RevealObserver } from "@/components/ui/Reveal";
import "../demo3.css";

export const metadata: Metadata = {
  title: { absolute: "Delin Beauty | دمو ۲، سالن زیبایی سبزوار", template: "%s | Delin Beauty · دمو ۲" },
  description: "Delin Beauty سبزوار؛ میکاپ و میکاپ عروس، شنیون، کراتین، رنگ مو، فیشال، ناخن و مژه. رزرو آنلاین و پرداخت اقساطی.",
  alternates: { canonical: "/demo-3" },
};

export default function Demo3Layout({ children }: LayoutProps<"/demo-3">) {
  return (
    <div className="theme-nue min-h-[100svh] overflow-x-clip">
      {children}
      <RevealObserver />
    </div>
  );
}
