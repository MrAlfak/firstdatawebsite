import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avvalin Data | First Data",
  description: "Bilingual digital studio website for Avvalin Data / First Data."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
