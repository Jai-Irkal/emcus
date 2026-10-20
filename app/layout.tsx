import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Raleway } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../src/components/HeaderComponent/HeaderComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans"
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EMCUS - Product Development for Fire & Safety",
  description: "EMCUS Technology Solutions is a specialized fire & safety engineering partner for OEMs, delivering end-to-end design & development of fire & safety systems. With certification-aware engineering and expertise in UL & EN-54 readiness, we support customers throughout the product development & certification journey, accelerating the delivery of reliable, standards-ready fire & safety products.",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${jakartaSans.variable}
        ${raleway.variable}
        ${geistMono.variable}
      `}
    >
      <body
        className={`
          ${jakartaSans.className}
          antialiased
        `}
      >
        <div className="2xl:max-w-7xl
          2xl:mx-auto
          2xl:px-4
          px-0">
            {children}
        </div>
      </body>
    </html>
  );
}
