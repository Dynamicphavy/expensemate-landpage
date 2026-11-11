import type { Metadata } from "next";
import { Fraunces, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces"
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "FAVOUR.SYS",
  description: "Computer Engineering graduate building web, mobile and IoT systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${poppins.variable} ${jetbrains.variable}`}>
      <body className="bg-[#171510] text-white">{children}</body>
    </html>
  );
}
