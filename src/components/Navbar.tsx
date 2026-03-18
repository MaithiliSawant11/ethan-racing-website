"use client";

import Link from "next/link";
import { Home, Info, Car, Users, Calendar, Handshake, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen,setMenuOpen]=useState(false)

  return (

    <nav className="navbar">

      {/* LOGO */}
      <img src="/logo.png" className="logo"/>

      {/* NAV ITEMS */}

      <div className={`nav-links ${menuOpen ? "open":""}`}>

        <Link href="/"><Home size={18}/> HOME</Link>

        <Link href="#about"><Info size={18}/> ABOUT</Link>

        <Link href="/cars"><Car size={18}/> CARS</Link>

        <Link href="/team"><Users size={18}/> TEAM</Link>

        
        <Link href="/achievements"><Users size={18}/> ACHIEVEMENTS</Link>

        <Link href="/events"><Calendar size={18}/> EVENTS</Link>

        <Link href="/sponsors"><Handshake size={18}/> SPONSORS</Link>


        <Link href="/support"><Handshake size={18}/> SUPPORT US</Link>
{/* <div className="dropdown-menu">
<a href="/sponsors">Sponsors</a>
<a href="/crowdfunding">Crowdfunding</a>
</div> */}

        <Link href="/contact"><Mail size={18}/> CONTACT</Link>

      </div>
 
      {/* MOBILE BUTTON */}

      <div className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
        ☰
      </div>
       {/* HAMBURGER ICON */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>

        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </div>

        <Link href="/" onClick={()=>setMenuOpen(false)}>Home</Link>
        <Link href="/team" onClick={()=>setMenuOpen(false)}>Team</Link>
        <Link href="/achievements" onClick={()=>setMenuOpen(false)}>Achievements</Link>
        <Link href="/events" onClick={()=>setMenuOpen(false)}>Events</Link>
        <Link href="/support" onClick={()=>setMenuOpen(false)}>Support Us</Link>
        <Link href="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link>

      </div>

    </nav>

  )
}