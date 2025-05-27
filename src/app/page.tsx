import { Metadata } from "next";
import HomeClientComponent from "./pageClientComponent";

export const metadata: Metadata = {
  title: "VIVIDCOMET - ゲームクリエイターのためのコミュニティ",
  description: "ゲームクリエイターのためのコミュニティ",
  openGraph: {
    title: "VIVIDCOMET - ゲームクリエイターのためのコミュニティ",
    description: "ゲームクリエイターのためのコミュニティ",
    url: "https://vividco-hp.vercel.app/",
    siteName: "VIVIDCOMET",
    images: [
      {
        url: "https://game-creators-community.com/img/icon.png",
        width: 1200,
        height: 630,
        alt: "Game Creators Community OG Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VIVIDCOMET - ゲームクリエイターのためのコミュニティ",
    description: "ゲームクリエイターのためのコミュニティ",
    site: "@VIVID_COMET",
    creator: "@yuito_it_",
    images: ["https://vividco-hp.vercel.app/img/icon.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
  themeColor: "#ffffff",
};

export default function Home() {
  return <HomeClientComponent />;
}
