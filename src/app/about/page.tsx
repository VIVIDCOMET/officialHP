import { Common } from "@/customization";
import AboutPage from "./pageClientComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `団体概要 - ${Common.siteName}`,
  description: `${Common.orgName}の団体概要ページです。`,
  openGraph: {
    title: `団体概要 - ${Common.siteName}`,
    description: `${Common.orgName}の団体概要ページです。`,
    url: "https://vividco-hp.vercel.app/about",
    siteName: Common.siteName,
    images: [Common.ogpImage],
    locale: "ja_JP",
    type: "website",
  },
  twitter: Common.twitter,
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: Common.themeColor,
};

export default function About() {
  return <AboutPage />;
}
