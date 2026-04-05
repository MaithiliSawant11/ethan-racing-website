import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

import { Orbitron, Poppins } from "next/font/google";

/* FONTS */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-orbitron",
});

/* METADATA */

export const metadata = {
  title: "Ethan Racing VCET",
};

/* LAYOUT */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      {/* APPLY BOTH FONTS HERE */}
      <body className={`${poppins.variable} ${orbitron.variable}`}>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}