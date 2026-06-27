import type { Metadata } from "next";
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
  metadataBase: new URL("https://www.investmentutilities.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.investmentutilities.com/",
    siteName: "Investment Utilities & Infrastructure",
    title: "Investment Utilities & Infrastructure | Utility Site Work | North Georgia",
    description:
      "Family-owned utility site work contractor serving North Georgia and the Southeast. ROW clearing, vegetation management, storm restoration, and more. (770) 529-7181.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment Utilities & Infrastructure | Utility Site Work",
    description:
      "Family-owned utility site work contractor in North Georgia. ROW clearing, vegetation management, storm restoration, high voltage transmission clearing.",
  },
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
