import type { Metadata } from "next";
import Provider from "./providers";
import { Noto_Serif_SC, JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

/** 英文文本 */
const lora = localFont({
  src: [
    {
      path: "../public/fonts/Lora-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/fonts/Lora-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-lora",
});

/** 中文文本 */
const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
});

/** 英文代码 */
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
});

/** 中文代码 */
const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Frank's Blog",
  description: "Frank's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        lora.variable,
        notoSerif.variable,
        jetBrainsMono.variable,
        notoSans.variable
      )}
    >
      <body className="flex min-h-full flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
