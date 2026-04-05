"use client";

import Link from "next/link";
import { Home, Info, Car, Users, Calendar, Handshake, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar relative z-50">

      {/* LOGO */}
      <img src="/logo.png" className="logo" />

      {/* DESKTOP NAV */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link href="/"><Home size={18}/> HOME</Link>
        <Link href="#about"><Info size={18}/> ABOUT</Link>
        <Link href="/cars"><Car size={18}/> CARS</Link>
        <Link href="/team"><Users size={18}/> TEAM</Link>
        <Link href="/achievements"><Users size={18}/> ACHIEVEMENTS</Link>
        <Link href="/events"><Calendar size={18}/> EVENTS</Link>
        <Link href="/sponsors"><Handshake size={18}/> SPONSORS</Link>
        <Link href="/support"><Handshake size={18}/> SUPPORT US</Link>
        <Link href="/contact"><Mail size={18}/> CONTACT</Link>
      </div>

      {/* HAMBURGER BUTTON (MOBILE ONLY) */}
      <div
        className="menu-btn md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {/* OPTIONAL SECOND HAMBURGER (kept as you had it) */}
      <div
        className="hamburger md:hidden cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>

        {/* CLOSE BUTTON */}
        <div
          className="close-btn text-2xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </div>

        {/* MOBILE LINKS */}
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/cars" onClick={() => setMenuOpen(false)}>Cars</Link>
        <Link href="/team" onClick={() => setMenuOpen(false)}>Team</Link>
        <Link href="/achievements" onClick={() => setMenuOpen(false)}>Achievements</Link>
        <Link href="/events" onClick={() => setMenuOpen(false)}>Events</Link>
        <Link href="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link>
        <Link href="/support" onClick={() => setMenuOpen(false)}>Support Us</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

    </nav>
  );
}