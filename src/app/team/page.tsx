"use client"

import TeamCard from "@/components/TeamCard"
import teamMembers from "@/data/team"

export default function TeamPage(){

return(

<section className="team-page">

<h1 className="team-title">Our Team</h1>
<p className="team-subtitle">
The people behind Ethan Racing's innovation and performance
</p>

{/* Leadership */}

<div className="team-section">

<h2 className="team-role-title">Leadership</h2>

<div className="team-grid">

{teamMembers
.filter(member => member.roleCategory === "leadership")
.map((member,index)=>(
<TeamCard key={index} member={member}/>
))}

</div>

</div>


{/* Technical Team */}

<div className="team-section">

<h2 className="team-role-title">Technical Team</h2>

<div className="team-grid">

{teamMembers
.filter(member => member.roleCategory === "technical")
.map((member,index)=>(
<TeamCard key={index} member={member}/>
))}

</div>

</div>


{/* Management */}

<div className="team-section">

<h2 className="team-role-title">Management</h2>

<div className="team-grid">

{teamMembers
.filter(member => member.roleCategory === "management")
.map((member,index)=>(
<TeamCard key={index} member={member}/>
))}

</div>

</div>

</section>

)

}