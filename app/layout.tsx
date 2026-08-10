// app/layout.tsx
import "./globals.css";
import PrimaryNav from "../components/PrimaryNav";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import GlobalCartDrawer from "../components/GlobalCartDrawer";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Greek Colors | Sigma Gamma Rho Sorority, Inc. Collection",
  description:
    "Official luxury Greek boutique featuring exclusive Royal Blue & Gold collections celebrating Sigma Gamma Rho Sorority, Inc. Handcrafted jewelry, custom accessories, and bespoke gifts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} bg-[#080B10] text-[#FAF9F6]`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#080B10] text-[#FAF9F6] selection:bg-[#0033A0]/40 selection:text-[#FFD700]">
        <CartProvider>
          <PrimaryNav />
          <main className="flex-1">{children}</main>
          <Footer />
          <GlobalCartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
