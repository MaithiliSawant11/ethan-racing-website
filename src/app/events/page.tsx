"use client"

import Hero from "@/components/Hero"

export default function EventsPage(){

const events = [

{
name:"Formula Bharat",
location:"Coimbatore, India",
description:"India's biggest Formula Student competition where teams design and race formula-style cars."
},

{
name:"Vehicle Testing",
location:"VCET Campus",
description:"Testing sessions for vehicle dynamics, braking, and endurance."
},

{
name:"Technical Workshops",
location:"VCET",
description:"Workshops conducted to train team members in automotive engineering and manufacturing."
},

{
name:"Design Reviews",
location:"Team Ethan Pitstop",
description:"Engineering discussions and design validation for upcoming race car models."
}

]

return(

<div>

<Hero
title="EVENTS"
subtitle="Competitions and technical events of Ethan Racing"
image="/hero-contact.jpg"
/>

<section className="events-container">

<div className="event-cards">

{events.map((event,index)=>(

<div className="event-card" key={index}>

<h3>{event.name}</h3>

<p className="event-location">{event.location}</p>

<p>{event.description}</p>

</div>

))}

</div>

</section>

</div>

)

}