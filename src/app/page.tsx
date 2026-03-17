"use client";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Home(){

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // 2 seconds



  return () => clearTimeout(timer);
}, []);

useEffect(()=>{

const elements=document.querySelectorAll(".about-block, .sponsor-card")

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})

},{threshold:0.2})

elements.forEach(el=>observer.observe(el))

},[])

  if (loading) {
  return (
    <div className="loader">
      <h1>Ethan Racing</h1>
      <p>Loading Experience...</p>
    </div>
  );
}

return(

<main>

<Navbar/>

{/* HERO */}

<section className="hero">

  <div className="scroll-indicator">↓ Scroll</div>

<div className="hero-content">

<h1>Ethan Racing</h1>

<p>Engineering Performance. Innovation. Speed.</p>

<div className="hero-buttons">

<a href="/team" className="hero-btn">
Explore Team
</a>

<a href="/support" className="hero-btn-secondary">
Support Us
</a>

</div>

</div>

</section>

{/* HERO STATS */}

<section className="hero-stats">

<div className="stat">
<h2>10+</h2>
<p>Years Legacy</p>
</div>

<div className="stat">
<h2>50+</h2>
<p>Team Members</p>
</div>

<div className="stat">
<h2>8</h2>
<p>Formula Cars</p>
</div>

</section>

{/* ACHIEVEMENTS SECTION */}

<AchievementsLegacy/>

<section className="team-gallery">
  <h2>Our Team in Action</h2>

  <div className="gallery-grid">
    <img src="/g1.jpg"/>
    <img src="/g2.jpg"/>
    <img src="/g3.jpg"/>
  </div>
</section>

{/* ABOUT SECTION */}

<section className="about-section" id="about">

<div className="about-container">

{/* ABOUT VCET */}


    <div className="about-block">

      <div className="about-text">
        <h2 className="section-title">ABOUT VCET</h2>
        <p>
        Vidyavardhini means a body committed to enhancement of knowledge. Vidyavardhini was established as registered society in 1970 by late Padmashri H. G. alias Bhausaheb Vartak. Vidyavardhini's College of Engineering & Technology (VCET) is located in Vasai, a suburb of Mumbai, on a sprawling campus spread over an area of 12.27 acres.
        <br/>
        Vidyavardhini's Society received an approval from AICTE to start an engineering college with effect from 1994. The college is affiliated to Mumbai University which offers a 4 year degree program. VCET has a total 6 branches with a total intake of 420 students including Mechanical Engineering which has been accredited by NBA, New Delhi.
        </p>
      </div>

      <div className="about-images">

  <div className="image-card">
    <img src="/about/vcet1.png" alt="VCET Campus"/>
  </div>

</div>
    </div>


    {/* ABOUT TEAM */}

<div className="about-block reverse">

  <div className="about-text">

    <h2 className="section-title">ABOUT TEAM</h2>

    <div className="team-info">

      <div className="vision">

        <h3>TEAM VISION</h3>

        <p>
        Team Ethan comprises a team of engineers who seek to enhance the learning
        experience of the student community at Vidyavardhini’s College of Engineering
        and Technology (VCET) by implementing engineering fundamentals within the
        context of building VCET’s own Formula-Style car.
        </p>

      </div>


      <div className="team-box">

        <h3>TEAM GOALS</h3>

        <p>
        To encourage young minds to take up engineering as a career and set
        an example for innovation and teamwork. The team believes in knowledge
        sharing and communication between members so that both the car and
        the team continue to improve each year.
        </p>

      </div>

    </div>

  </div>

  
  <div className="about-images">

  <div className="image-card">
    <img src="/about/team1.png" alt="Team"/>
  </div>

</div>

</div>

    {/* FORMULA BHARAT */}

    <div className="about-block">

      <div className="about-text">
        <h2 className="section-title">FORMULA BHARAT</h2>
        <p>
         FORMULA BHARAT is an opportunity for students to design, manufacture, and race a formula style car. Over 120 teams from various engineering colleges all over India participate in this competition.
        </p>
      </div>

     <div className="about-images">

  <div className="image-card">
    <img src="/about/fb1.png" alt="Formula Bharat Event"/>
  </div>

  <div className="image-card">
    <img src="/about/fb2.png" alt="Formula Bharat Race"/>
  </div>

</div>
    </div>

  </div>

</section>


{/* SPONSORS */}

<section className="sponsors-section" id="sponsors">

  <h2 className="sponsors-title">OUR SPONSORS</h2>

  <div className="sponsor-carousel">

    <div className="sponsor-track">

      <img src="/sponsors/s1.png"/>
      <img src="/sponsors/s2.png"/>
      <img src="/sponsors/s3.png"/>
      <img src="/sponsors/s4.png"/>
      <img src="/sponsors/s5.png"/>
      <img src="/sponsors/s6.png"/>
      <img src="/sponsors/s7.png"/>
      <img src="/sponsors/s8.png"/>
      
      <img src="/sponsors/s9.png"/>
      <img src="/sponsors/s10.png"/>
      <img src="/sponsors/s11.png"/>
      <img src="/sponsors/s12.png"/>
      <img src="/sponsors/s13.png"/>
      <img src="/sponsors/s14.png"/>
      <img src="/sponsors/s15.png"/>
      <img src="/sponsors/s16.png"/>
      <img src="/sponsors/s17.png"/>
      <img src="/sponsors/s18.png"/>
      <img src="/sponsors/s19.png"/>
      <img src="/sponsors/s20.png"/>
      <img src="/sponsors/s21.png"/>
      <img src="/sponsors/s22.png"/>
      <img src="/sponsors/s23.png"/>
      <img src="/sponsors/s24.png"/>
      <img src="/sponsors/s25.png"/>
      <img src="/sponsors/s26.png"/>
      <img src="/sponsors/s27.png"/>
      <img src="/sponsors/s28.png"/>
      
      {/* duplicate for infinite loop */}

      <img src="/sponsors/s1.png"/>
      <img src="/sponsors/s2.png"/>
      <img src="/sponsors/s3.png"/>
      <img src="/sponsors/s4.png"/>
      <img src="/sponsors/s5.png"/>
      <img src="/sponsors/s6.png"/>
      <img src="/sponsors/s7.png"/>
      <img src="/sponsors/s8.png"/>
      <img src="/sponsors/s9.png"/>
      <img src="/sponsors/s10.png"/>
      <img src="/sponsors/s11.png"/>
      <img src="/sponsors/s12.png"/>
      <img src="/sponsors/s13.png"/>
      <img src="/sponsors/s14.png"/>
      <img src="/sponsors/s15.png"/>
      <img src="/sponsors/s16.png"/>
      <img src="/sponsors/s17.png"/>
      <img src="/sponsors/s18.png"/>
      <img src="/sponsors/s19.png"/>
      <img src="/sponsors/s20.png"/>
      <img src="/sponsors/s21.png"/>
      <img src="/sponsors/s22.png"/>
      <img src="/sponsors/s23.png"/>
      <img src="/sponsors/s24.png"/>
      <img src="/sponsors/s25.png"/>
      <img src="/sponsors/s26.png"/>
      <img src="/sponsors/s27.png"/>
      <img src="/sponsors/s28.png"/>
      
    </div>

  </div>

</section>


</main>

  );

}

 function AchievementsLegacy(){

const [active,setActive] = useState("achievements")

return(

<section className="achievements-legacy">

<h2 className="section-title">Our Journey</h2>

<div className="legacy-tabs">

<button
className={active==="achievements" ? "active-tab":""}
onClick={()=>setActive("achievements")}
>
Achievements
</button>

<button
className={active==="legacy" ? "active-tab":""}
onClick={()=>setActive("legacy")}
>
Team Legacy
</button>

</div>

<div className="legacy-content">

{active==="achievements" && (

<div className="achievement-grid">

<div className="achievement-card">
<h3>Formula Bharat</h3>
<p>Participation in national Formula Student competitions.</p>
</div>

<div className="achievement-card">
<h3>Engineering Innovation</h3>
<p>Designed and built a student Formula race car.</p>
</div>

<div className="achievement-card">
<h3>Team Growth</h3>
<p>Strong multidisciplinary engineering team.</p>
</div>

</div>

)}

{active==="legacy" && (

<div className="legacy-grid">

<div className="legacy-card">
<h3>2014</h3>
<p>Formation of Ethan Racing Team.</p>
</div>

<div className="legacy-card">
<h3>First Prototype</h3>
<p>Team built its first Formula Student car.</p>
</div>

<div className="legacy-card">
<h3>Competitions</h3>
<p>Participation in national motorsport events.</p>
</div>

</div>

)}

</div>

</section>

)

}