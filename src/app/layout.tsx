import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], weight: ["500"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nazibuddoula Nayeem — Product Designer",
  description:
    "10 years experienced Product Designer & Problem Solver, focused on turning ideas into meaningful products and intuitive user experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
