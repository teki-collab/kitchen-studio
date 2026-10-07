import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kitchen Studio | Амтыг урлаж, хоолыг бүтээх нь",
  description:
    "Kitchen Studio — хоол хийх сургалт, private event, амттай туршлагын урлан.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
