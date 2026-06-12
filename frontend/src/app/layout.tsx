import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// IMPORT PRELOADER LU BALIK KE SINI BRAY
import Preloader from "@/components/Preloader"; 

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--ff-dm-sans",
});

export const metadata: Metadata = {
  title: "Cryptex - Buy & Sell Digital Assets",
  description: "Coin Cryptex is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  // JURUS SAKTI suppressHydrationWarning ADA DI BARIS INI COK 👇
  <html lang="en" className="scroll-smooth" suppressHydrationWarning>
    <body className={dmSans.className}>
      
      {/* PASANG LAGI PRELOADERNYA DI SINI */}
      <Preloader />

      {children}

      {/* SCRIPT IONICONS */}
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
  </html>
  );
}