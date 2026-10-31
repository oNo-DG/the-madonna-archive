import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Madonna Archive — Celebrity, Ageing & Fan Nostalgia",
  description:
    "An interactive editorial archive based on Chapter 7 of Joanne Garde-Hansen's Media and Memory.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
