import type { Metadata } from "next";
import { RevealObserver } from "@/components/ui/Reveal";
import "../demo4.css";

export const metadata: Metadata = {
  title: { absolute: "Delin Beauty | دمو ۳، سالن زیبایی و آکادمی سبزوار", template: "%s | Delin Beauty · دمو ۳" },
  description: "Delin Beauty سبزوار؛ میکاپ و میکاپ عروس، شنیون، کراتین، رنگ مو، فیشال، ناخن و مژه. رزرو آنلاین و پرداخت اقساطی.",
  alternates: { canonical: "/demo-4" },
};

export default function Demo4Layout({ children }: LayoutProps<"/demo-4">) {
  return (
    <div className="theme-nuve min-h-[100svh] overflow-x-clip">
      {children}
      <RevealObserver />
    </div>
  );
}
