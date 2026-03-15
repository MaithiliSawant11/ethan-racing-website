"use client"

export default function Hero({ title, subtitle, image }) {

  return (

    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url(${image})`
      }}
    >

      <div className="hero-overlay">

        <h1>{title}</h1>
        <p>{subtitle}</p>

      </div>

    </section>

  )

}