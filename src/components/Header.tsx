import Link from "next/link";
import { Header as HeaderCustom } from "@/customization";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {HeaderCustom.Logotype ? (
        <Link href="/">
          <Image
            src={HeaderCustom.Logotype.src}
            alt={HeaderCustom.Logotype.alt}
            width={HeaderCustom.Logotype.width}
            height={HeaderCustom.Logotype.height}
          />
        </Link>
      ) : (
        <h1 className="text-xl font-bold">
          <Link href="/">{HeaderCustom.title}</Link>
        </h1>
      )}

      <nav>
        <ul className="flex space-x-4">
          {HeaderCustom.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
