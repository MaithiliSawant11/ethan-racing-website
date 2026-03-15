"use client"
import Link from "next/link"

import Hero from "@/components/Hero"

export default function SupportPage(){

const sponsors = [

"/sponsors/s1.png",
"/sponsors/s4.png",
"/sponsors/s6.png",
"/sponsors/s12.png",
"/sponsors/s15.png",
"/sponsors/s22.png",
"/sponsors/s28.png",
"/sponsors/s16.png",
"/sponsors/s20.png",
"/sponsors/s10.png"


]

return(

<div>

<Hero
title="SUPPORT US"
subtitle="Help Ethan Racing build the next generation Formula Student race car"
image="/hero_achievements.jpg"
/>


{/* WHY SUPPORT US */}

<section className="support-why">

<h2>Why Support Ethan Racing?</h2>

<div className="support-reasons">

<div className="reason-card">
<h3>Innovation</h3>
<p>
Your support enables students to design and build a
high-performance Formula Student race car using
real engineering principles.
</p>
</div>

<div className="reason-card">
<h3>Future Engineers</h3>
<p>
Team Ethan Racing helps students gain hands-on
experience in automotive design, manufacturing,
and motorsports engineering.
</p>
</div>

<div className="reason-card">
<h3>Brand Visibility</h3>
<p>
Sponsors receive brand exposure through race cars,
events, competitions, and social media platforms.
</p>
</div>

</div>

</section>



{/* CROWDFUNDING */}

<section className="crowdfunding">

  <div className="crowdfunding-progress">

<p>Project Goal: ₹3,00,000</p>

<div className="progress-bar">
<div className="progress-fill"></div>
</div>

<p className="progress-text">
₹85,000 raised so far
</p>

</div>

<h2>Support Our Journey</h2>

<p>
Building a Formula Student race car requires research,
manufacturing, and testing. Your contribution helps us
represent our college in national motorsport competitions.
</p>

<div className="support-actions">

<Link href="/donate">
<button className="donate-btn">
Donate Now
</button>
</Link>



<Link href="/sponsor">
<button className="sponsor-btn">
Become a Sponsor
</button>
</Link>
</div>

</section>


{/* SPONSORS */}

<section className="sponsor-section">

<h2>Our Sponsors</h2>

<div className="sponsor-grid">

{sponsors.map((logo,index)=>(
<div className="sponsor-card" key={index}>
<img src={logo} alt="Sponsor"/>
</div>
))}

</div>

<p className="more-sponsors">
And even more...
</p>

</section>

</div>

)

}