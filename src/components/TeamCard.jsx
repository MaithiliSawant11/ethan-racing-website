export default function TeamCard({member}){

return(

<div className="team-card">

<div className="team-image">

<img src={member.image} alt={member.name}/>

</div>

<div className="team-info">

<h3>{member.name}</h3>
<p className="team-role">{member.role}</p>
<p className="team-dept">{member.department}</p>

</div>

</div>

)

}