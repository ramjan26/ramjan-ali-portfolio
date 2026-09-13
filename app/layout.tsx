import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramjan Ali — Software, Data & AI",
  description:
    "Ramjan Ali is a multidisciplinary developer building products across software, data analytics, AI, OCR and interfaces.",
  openGraph: {
    title: "Ramjan Ali — Software, Data & AI",
    description:
      "A multidisciplinary developer building across software, data and AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramjan Ali — Software, Data & AI",
    description:
      "A multidisciplinary developer building across software, data and AI.",
  },
};

const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem("ramjan-theme");
var dark = stored === "dark";

    document.documentElement.dataset.theme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={fraunces.variable}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: themeInit,
          }}
        />
      </head>

      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}