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
  title: "Greek Colors Colors | Sigma Gamma Rho Sorority, Inc. Official Collection",
  description:
    "Official luxury Greek boutique featuring exclusive Royal Blue (#003399) & Gold (#CCA147) collections celebrating Sigma Gamma Rho Sorority, Inc. Handcrafted jewelry, custom accessories, and bespoke gifts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} bg-[#001B55] text-[#FCFFFE]`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-[#001B55] text-[#FCFFFE] selection:bg-[#003399]/60 selection:text-[#E7CA83]">
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
