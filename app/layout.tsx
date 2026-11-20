import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BotShield | Free AI & Meta Scraper Blocker (robots.txt & Cloudflare)",
  description:
    "Generate custom robots.txt and Cloudflare WAF rules in seconds to block meta-externalagent, GPTBot, and ClaudeBot without hurting Google Search.",
  verification: {
    google: "25adP2Sp1AJESEKmqokQTwaTONL3_5Dl5y65bjhI8eM",
  },
  alternates: {
    canonical: "/",
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}
