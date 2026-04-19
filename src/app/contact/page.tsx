"use client"

export default function ContactPage(){

return(

<div className="contact-page">

{/* HERO SECTION */}

<section className="contact-hero">

  <div className="contact-hero-overlay">

    <h1>GET IN TOUCH WITH US</h1>

    <p>
      If you have any queries or would like to collaborate with Ethan Racing,
      feel free to reach out to us.
    </p>

  </div>

</section>


{/* CONTACT SECTION */}

<section className="contact-container">

{/* LEFT SIDE */}

<div className="contact-info">

<h2>Contact Information</h2>

<div className="contact-cards">

<div className="contact-card">
<h3><p>Captain: Sankalp Jadhav</p></h3>
<p>Phone : +91 80107 06299 </p>
{/* <p>Email : faculty@ethanracing.com</p> */}
</div>

<div className="contact-card">
<h3><p>Sahil Shah</p></h3>
<p>Phone : +91 90218 45762</p>
{/* <p>Email : advisory@ethanracing.com</p> */}
</div>

<div className="contact-card">
<h3>Team Contact</h3>
<p>Email : team@ethanracing.com</p>
<p>Instagram : @ethanracing_vcet</p>
</div>

</div>


{/* MAP */}

<div className="contact-map">

<iframe
src="https://maps.google.com/maps?q=Vidyavardhini%20College%20of%20Engineering%20and%20Technology&t=&z=13&ie=UTF8&iwloc=&output=embed"
loading="lazy"
/>

</div>

</div>



{/* RIGHT SIDE FORM */}

<div className="contact-form">

<h2>Send a Message</h2>

<form>

<div className="form-row">

<input
type="text"
placeholder="Your Name"
required
/>

<input
type="tel"
placeholder="Phone"
/>

</div>

<input
type="email"
placeholder="Email Address"
required
/>

<textarea
placeholder="Your Message"
rows={5}
required
/>

<button type="submit">
Send Message
</button>

</form>

</div>

</section>

</div>

)

}