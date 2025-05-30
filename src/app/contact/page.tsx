import ContactsPageClientComponent from "./pageClientComponent";
import { Metadata } from "next";

import { Common } from "@/customization";

export const metadata: Metadata = {
  title: `お問い合わせ - ${Common.siteName}`,
  description: "お問い合わせページ",
  openGraph: {
    title: `お問い合わせ - ${Common.siteName}`,
    description: `${Common.orgName}へのお問い合わせページです。`,
    url: "https://vividcomet.jp/contact",
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

export default function ContactsPage() {
  return <ContactsPageClientComponent />;
}
