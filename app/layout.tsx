import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ weight: ["200", "300"], subsets: ["latin"] });

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
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
