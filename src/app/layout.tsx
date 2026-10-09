import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Ticker } from "@/components/Ticker";
import { WhatsAppDock } from "@/components/WhatsAppDock";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "TRUEFINE FOODS — Dehydrated Products from India",
    template: "%s | TRUEFINE FOODS",
  },
  description:
    "Premium dehydrated food ingredients from India for food businesses. Vegetable, fruit and botanical powders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body className={`${serif.variable} ${sans.variable} font-sans antialiased`}>
        <CartProvider>
          <Ticker />
          <Header />
          <main className="pb-20 md:pb-0">{children}</main>
          <Footer />
          <WhatsAppDock />
        </CartProvider>
      </body>
    </html>
  );
}
