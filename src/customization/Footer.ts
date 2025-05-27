import About from "./About";

export const Footer = {
  title: "VIVID COMET",
  logotype: {
    src: "/img/logotype_white.png",
    alt: "VIVID COMET Logo",
    width: 150,
    height: 20,
  },
  description: "VIVIDECOMETは、ゲームクリエイターのためのコミュニティです。",
  location: "日本",
  email: About.email,
  links: [
    {
      href: "/",
      label: "ホーム",
    },
    {
      href: "/about",
      label: "団体概要",
    },
    {
      href: "/cookies",
      label: "クッキーポリシー",
    },
    {
      href: "/works",
      label: "制作実績",
    },
    {
      href: "/contact",
      label: "お問い合わせ",
    },
  ],
  socialLinks: [
    {
      href: "https://twitter.com/VIVID_COMET",
      label: "Twitter",
      icon: "twitter", // Assuming you have an icon component for Twitter
    },
    {
      href: "https://github.com/VIVID COMET",
      label: "GitHub",
      icon: "github", // Assuming you have an icon component for GitHub
    },
  ],
  copyright: "(c) 2025 VIVID COMET All rights reserved.",
};

export default Footer;
