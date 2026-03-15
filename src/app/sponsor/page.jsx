"use client"

export default function SponsorPage(){

return(

<div className="sponsor-page">

<h1>Become a Sponsor</h1>

<p>
Ethan Racing represents Vidyavardhini’s College of Engineering and Technology
in national Formula Student competitions. Your sponsorship helps us
design, manufacture, and race our Formula-style vehicle.
</p>

<h2>Why Sponsor Us?</h2>

<ul>
<li>Brand visibility in national competitions</li>
<li>Logo placement on race car</li>
<li>Promotion on social media platforms</li>
<li>Exposure to young engineering talent</li>
</ul>

<h2>Sponsorship Inquiry</h2>

<form className="sponsor-form">

<input
type="text"
placeholder="Company / Organization Name"
required
/>

<input
type="text"
placeholder="Contact Person Name"
required
/>

<input
type="email"
placeholder="Business Email"
required
/>

<input
type="tel"
placeholder="Contact Number"
required
/>

<textarea
placeholder="How would you like to support us?"
rows={4}
required
/>

<button type="submit">
Submit Inquiry
</button>

</form>

</div>

)

}