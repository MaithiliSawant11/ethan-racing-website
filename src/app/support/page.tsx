"use client"

export default function SupportPage() {

  return (

    <div className="support-page">

      {/* HERO SECTION */}

      <section className="support-hero">

        <div className="support-hero-overlay">

          <h1>SUPPORT ETHAN RACING</h1>

          <p>
            Help us push the limits of engineering and innovation.
            Your support enables us to design, build and compete
            in Formula Student competitions.
          </p>

        </div>

      </section>


      {/* SUPPORT CONTENT */}

      <section className="support-container">

        <h2>Why Support Us?</h2>

        <p>
          Ethan Racing represents Vidyavardhini’s College of Engineering and
          Technology in national level Formula Student competitions. Sponsors
          help us develop cutting-edge race cars and provide students with
          real-world engineering experience.
        </p>


        <div className="support-cards">

          <div className="support-card">
            <h3>Innovation</h3>
            <p>
              Support advanced automotive engineering projects and student innovation.
            </p>
          </div>

          <div className="support-card">
            <h3>Brand Visibility</h3>
            <p>
              Get your brand displayed on our race car, merchandise and competitions.
            </p>
          </div>

          <div className="support-card">
            <h3>Future Engineers</h3>
            <p>
              Help train the next generation of engineers and industry leaders.
            </p>
          </div>

        </div>

      </section>

    </div>

  )

}