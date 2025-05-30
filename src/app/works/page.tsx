import WorksPage from "./pageClientComponent";
import { Metadata } from "next";
import { Common } from "@/customization";
export const metadata: Metadata = {
  title: `作品一覧 - ${Common.siteName}`,
  description: "ゲームクリエイターの作品一覧",
  openGraph: {
    title: `作品一覧 - ${Common.siteName}`,
    description: "ゲームクリエイターの作品一覧",
    url: "https://vividcomet.jp/works",
    siteName: Common.siteName,
    images: [Common.ogpImage],
    locale: "ja_JP",
    type: "website",
  },
  twitter: Common.twitter,
  icons: {
    icon: Common.favicon,
  },
  themeColor: Common.themeColor,
};

export default function Works() {
  return <WorksPage />;
}
