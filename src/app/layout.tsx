import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "러닝크루 | 함께 달리는 즐거움",
  description: "디자인에 강점이 있는 러닝크루와 함께 달려보세요. 초보자부터 전문가까지 모두를 위한 러닝 커뮤니티입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${inter.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
