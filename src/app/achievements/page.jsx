"use client"

import { useState } from "react"
import Hero from "@/components/Hero"

export default function AchievementsPage(){

const [activeTab,setActiveTab] = useState("achievements")

const achievements = [

{
year:"2025",
title:"Formula Bharat",
position:"Top 10 Overall",
description:"Achieved top 10 overall ranking among participating teams."
},

{
year:"2024",
title:"Formula Bharat",
position:"Best Design Recognition",
description:"Recognized for innovative engineering design."
},

{
year:"2023",
title:"Formula Bharat",
position:"Top 15 Overall",
description:"Strong vehicle performance in static and dynamic events."
}

]

const legacyImages = [

"/legacy/team1.jpg",
"/legacy/team2.jpg",
"/legacy/team3.jpg",
"/legacy/team4.jpg",
"/legacy/team5.jpg",
"/legacy/team6.jpg"

]

return(

<div>

<Hero
title="ACHIEVEMENTS"
subtitle="Milestones and legacy of Ethan Racing"
image="/hero_achievements.jpg"
/>

<section className="achievements-container">

<div className="achievements-tabs">

<button
className={activeTab==="achievements" ? "active-tab" : ""}
onClick={()=>setActiveTab("achievements")}
>
Achievements
</button>

<button
className={activeTab==="legacy" ? "active-tab" : ""}
onClick={()=>setActiveTab("legacy")}
>
Team Legacy
</button>

</div>

{/* ACHIEVEMENTS */}

{activeTab==="achievements" && (

<div className="achievement-cards">

{achievements.map((item,index)=>(

<div className="achievement-card" key={index}>

<span className="achievement-year">{item.year}</span>

<h3>{item.title}</h3>

<h4>{item.position}</h4>

<p>{item.description}</p>

</div>

))}

</div>

)}

{/* TEAM LEGACY */}

{activeTab==="legacy" && (

<div className="legacy-grid">

{legacyImages.map((img,index)=>(

<div className="legacy-card" key={index}>

<img src={img} alt="Team Legacy"/>

</div>

))}

</div>

)}

</section>

</div>

)

}