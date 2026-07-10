import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const siteUrl = "https://www.investmentutilities.com";

const ogImage = {
  url: "/IUI_logo.jpg",
  secureUrl: `${siteUrl}/IUI_logo.jpg`,
  width: 1402,
  height: 817,
  alt: "Investment Utilities & Infrastructure",
  type: "image/jpeg",
};

export const metadata: Metadata = {
  title: {
    default: "Investment Utilities & Infrastructure | Utility Site Work | North Georgia & Southeast",
    template: "%s | Investment Utilities & Infrastructure",
  },
  description:
    "Investment Utilities & Infrastructure is a family-owned utility site work contractor serving North Georgia and the Southeast. Specializing in right-of-way clearing, vegetation management, site preparation, storm restoration, and high voltage transmission clearing. Call (770) 529-7181.",
  keywords: [
    "utility site work",
    "right of way clearing",
    "vegetation management",
    "ROW contractor",
    "land clearing Georgia",
    "utility contractor Southeast",
    "storm restoration",
    "high voltage clearing",
    "site preparation",
    "solar site work",
    "North Georgia utility contractor",
    "Investment Utilities Infrastructure",
  ],
  authors: [{ name: "Investment Utilities & Infrastructure" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/IUI_logo.jpg", type: "image/jpeg" }],
    shortcut: [{ url: "/IUI_logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/IUI_logo.jpg", type: "image/jpeg" }],
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    siteName: "Investment Utilities & Infrastructure",
    title: "Investment Utilities & Infrastructure | Utility Site Work | North Georgia",
    description:
      "Family-owned utility site work contractor serving North Georgia and the Southeast. ROW clearing, vegetation management, storm restoration, and more. (770) 529-7181.",
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment Utilities & Infrastructure | Utility Site Work",
    description:
      "Family-owned utility site work contractor in North Georgia. ROW clearing, vegetation management, storm restoration, high voltage transmission clearing.",
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${openSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
