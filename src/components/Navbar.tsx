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
{/* <li className="dropdown">
  <span className="dropdown-title">Cars</span>

  <ul className="dropdown-menu">
    <li><Link href="/cars/er1">ER 1.0</Link></li>
    <li><Link href="/cars/er2">ER 2.0</Link></li>
    <li><Link href="/cars/er3">ER 3.0</Link></li>
    <li><Link href="/cars/er4">ER 4.0</Link></li>
    <li><Link href="/cars/er5">ER 5.0</Link></li>
    <li><Link href="/cars/er6">ER 6.0</Link></li>
    <li><Link href="/cars/er7">ER 7.0</Link></li>
    <li><Link href="/cars/er8">ER 8.0</Link></li>
    <li><Link href="/cars/er9">ER 9.0</Link></li>
  </ul>
</li> */}

        <Link href="#team"><Users size={18}/> TEAM</Link>

        <Link href="#events"><Calendar size={18}/> EVENTS</Link>

        <Link href="/sponsors"><Handshake size={18}/> SPONSORS</Link>

        <Link href="#contact"><Mail size={18}/> CONTACT</Link>

      </div>
 
      {/* MOBILE BUTTON */}

      <div className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
        ☰
      </div>

    </nav>

  )
}