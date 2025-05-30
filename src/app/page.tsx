import { Metadata } from "next";
import HomeClientComponent from "./pageClientComponent";
import { Common } from "@/customization";

export const metadata: Metadata = {
  title: `${Common.siteName} - ゲームクリエイターのためのコミュニティ`,
  description: "ゲームクリエイターのためのコミュニティ",
  openGraph: {
    title: `${Common.siteName} - ゲームクリエイターのためのコミュニティ`,
    description: "ゲームクリエイターのためのコミュニティ",
    url: "https://vividcomet.jp/",
    siteName: Common.siteName,
    images: [Common.ogpImage],
    locale: "ja_JP",
    type: "website",
  },
  twitter: Common.twitter,
  icons: {
    icon: Common.favicon,
    /*apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],*/
  },
  themeColor: Common.themeColor,
};

export default function Home() {
  return <HomeClientComponent />;
}
