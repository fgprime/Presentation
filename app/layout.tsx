import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Work_Sans({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Presentation",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
