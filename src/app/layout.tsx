import "./globals.css";
import Navbar from "../components/Navbar";
import { Orbitron } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ethan Racing VCET",
};

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400","600","700"]
});

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
      <body className={orbitron.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}