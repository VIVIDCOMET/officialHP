export const Footer = {
  title: "VIVIDCOMET",
  logotype: {
    src: "/img/logotype_white.png",
    alt: "VIVIDCOMET Logo",
    width: 150,
    height: 20,
  },
  description:
    "VIVIDCOMETは、Web制作とデジタルコンテンツの制作を専門とする団体です。",
  location: "日本",
  //TODO: メールアドレスを設定
  email: "info@vividcomet.com",
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
      href: "https://github.com/VIVIDCOMET",
      label: "GitHub",
      icon: "github", // Assuming you have an icon component for GitHub
    },
  ],
  copyright: "(c) 2025 VIVIDCOMET All rights reserved.",
};

export default Footer;
