"use client";

import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Home(){

  useEffect(()=>{

    const cards=document.querySelectorAll(".sponsor-card")

    const observer=new IntersectionObserver((entries)=>{

      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show")
        }
      })

    },{threshold:0.2})

    cards.forEach(card=>observer.observe(card))

  },[])

  return(

    <main>

      <Navbar/>

      {/* HERO */}

<section className="hero">

  <div className="hero-wrapper">

    <div className="hero-text">

      <h1 className="hero-title">
        ETHAN RACING
      </h1>

      <p className="hero-subtitle">
        OFFICIAL FORMULA STUDENT RACING TEAM
      </p>

    </div>

  </div>

</section>

<section className="about-section" id="about">

  <div className="about-container">

    {/* ABOUT VCET */}

    <div className="about-block">

      <div className="about-text">
        <h2>ABOUT VCET</h2>
        <p>
        Vidyavardhini means a body committed to enhancement of knowledge. Vidyavardhini was established as registered society in 1970 by late Padmashri H. G. alias Bhausaheb Vartak. Vidyavardhini's College of Engineering & Technology (VCET) is located in Vasai, a suburb of Mumbai, on a sprawling campus spread over an area of 12.27 acres.
<br></br>
Vidyavardhini's Society received an approval from AICTE to start an engineering college with effect from 1994. The college is affiliated to Mumbai University which offers a 4 year degree program.VCET has a total 6 branches with a total intake of 420 students including Mechanical Engineering which has been accredited by NBA,New Delhi.VCET is considered to have the best faculty to guide and educate the students with their wide knowledge and experience acquired in their respective field. the college has a workshop space of 4140 sq. ft. and a very well-equiped Machine Shop.
        </p>
      </div>

      <div className="about-images">
        <img src="/about/vcet1.png"/>
      </div>

    </div>


    {/* ABOUT TEAM */}

   {/* ABOUT TEAM */}

<div className="about-block reverse">

  <div className="about-text">

    <h2>ABOUT TEAM</h2>

    <div className="team-columns">

      <div className="team-box">

        <h3>TEAM VISION</h3>

        <p>
        Team Ethan comprises a team of engineers who seek to enhance the learning
        experience of the student community at Vidyavardhini’s College of Engineering
        and Technology (VCET) by implementing engineering fundamentals within the
        context of building VCET’s own Formula-Style car.

        "Ethan" is a Hebrew word meaning strong, firm, steadfast and safe.
        True to the name, the team steadily progresses toward building
        better race cars and improving its performance in Formula Bharat
        year after year.
        </p>

      </div>


      <div className="team-box">

        <h3>TEAM GOALS</h3>

        <p>
        To encourage young minds to take up engineering as a career and set
        an example for innovation and teamwork.

        The team believes in knowledge sharing and communication between
        members so that both the car and the team continue to improve each year.

        The goal is to maintain growth and performance while competing
        among the best Formula Student teams and achieving strong
        results in Formula Bharat.
        </p>

      </div>

    </div>

  </div>

  <div className="about-images">
    <img src="/about/team1.png"/>
  </div>

</div>
    {/* FORMULA BHARAT */}

    <div className="about-block">

      <div className="about-text">
        <h2>FORMULA BHARAT</h2>
        <p>
         FORMULA BHARAT is an opportunity for students to design, manufacture , and race , a formula style car. Over 120 teams from various engineering college all over INDIA participate in this competition, this series replicate the FORMULA STUDENT held across the globe including countries like USA, UK, Germany, Italy, Japan and Australia.


                        The motive of this competition is to let the participants explain and validate their design, test their driver's abilities and pitch their car to venture capitalists via a presentation, this helps in learning the art of maganement & team work, which are essentail  in the "REAL WORLD".
        </p>
      </div>

      <div className="about-images">
        <img src="/about/fb1.png"/>
        <img src="/about/fb2.png"/>
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

 