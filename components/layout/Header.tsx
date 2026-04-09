"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeSelect } from "@/components/common/ThemeSelect";

const NavItems = [
  { name: "技术笔记", path: "/tech" },
  { name: "生活与想象", path: "/life" },
  { name: "弗兰克的视线", path: "/sight" },
  { name: "说字", path: "/hanzi" },
];

export function Header() {
  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 flex w-full items-center justify-center border-b backdrop-blur">
      <div className="flex h-14 w-full items-center px-[4vw]">
        <Link href="/" className="flex h-full items-center">
          {/* Logo */}
          <Image
            src="/logo.svg"
            alt="logo"
            width={24}
            height={24}
            unoptimized
            className="h-full w-full"
          />
        </Link>
        <div className="flex flex-1 items-center justify-end gap-4">
          <nav className="flex items-center">
            {NavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="hover:text-primary p-2 font-semibold transition-all duration-500 not-last:mr-2 hover:scale-102"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ThemeSelect />
        </div>
      </div>
    </header>
  );
}
