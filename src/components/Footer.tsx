import Link from "next/link";
import React from "react";
import { Footer as FooterCustom } from "@/customization";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "#181818",
        color: "#bbb",
        padding: "2rem 0 1rem 0",
        fontSize: "0.95rem",
        borderTop: "1px solid #333",
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
            borderBottom: "1px solid #333",
            paddingBottom: "1.5rem",
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              {FooterCustom.logotype ? (
                <Image
                  src={FooterCustom.logotype.src}
                  alt={FooterCustom.logotype.alt}
                  width={FooterCustom.logotype.width}
                  height={FooterCustom.logotype.height}
                  style={{ display: "block", marginBottom: "0.5rem" }}
                />
              ) : (
                FooterCustom.title
              )}
            </Link>
            <p style={{ marginTop: "0.5rem" }}>{FooterCustom.description}</p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>所在地:</strong> {FooterCustom.location || "日本"}
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              <strong>メール:</strong>{" "}
              <a
                href={`mailto:${FooterCustom.email}`}
                style={{ color: "#bbb", textDecoration: "none" }}
              >
                {FooterCustom.email}
              </a>
            </p>
          </div>
          <div>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              サイトメニュー
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FooterCustom.links.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#bbb",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              SNS
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FooterCustom.socialLinks.map((social) => (
                <li key={social.href} style={{ marginBottom: "0.5rem" }}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#bbb",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "1.5rem", color: "#666" }}
        >
          {FooterCustom.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
