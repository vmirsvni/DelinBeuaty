import type { Metadata } from "next";
import { Academy4 } from "@/components/demo4/Academy4";

export const metadata: Metadata = {
  title: "آکادمی دلین",
  description: "آکادمی دلین: آموزش حرفه‌ای میکاپ و اکستنشن مژه با مدرک بین‌المللی، گروه‌های کوچک و تمرین عملی روی مدل در سبزوار.",
  alternates: { canonical: "/demo-4/academy" },
};

export default function Demo4Academy() {
  return <Academy4 />;
}
