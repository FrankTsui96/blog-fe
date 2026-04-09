import type { Metadata } from "next";
import Provider from "./providers";
import "./globals.css";

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
    <html lang="zh-CN" suppressHydrationWarning className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
