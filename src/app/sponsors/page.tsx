import { client } from "@/sanity/lib/client";

// async function getSponsorEras() {
//   return await client.fetch(`
//     *[_type == "sponsorEra"] | order(order asc){
//       _id,
//       title,
//       "image": image.asset->url
//     }
//   `);
// }

async function getData() {
  const eras = await client.fetch(`
    *[_type == "sponsorEra"] | order(order asc){
      _id,
      title,
      "image": image.asset->url
    }
  `);

  const benefits = await client.fetch(`
    *[_type == "sponsorBenefit"] | order(order asc){
      _id,
      title,
      description
    }
  `);

  return { eras, benefits };
}

export default async function SponsorsPage() {
  const { eras, benefits } = await getData();
  return (
    <section className="sponsor-page">

      <div className="sponsor-container">

        <h1 className="sponsor-page-title">OUR SPONSOR JOURNEY</h1>

        <p className="sponsor-page-subtitle">
          Sponsors who powered Ethan Racing through the years
        </p>


        {/* <div className="sponsor-history">

          <div className="sponsor-era">
            <h2>ER 1.0</h2>
            <img src="/sponsors/er1.png" alt="ER1 Sponsors"/>
          </div>

          <div className="sponsor-era">
            <h2>ER 2.0</h2>
            <img src="/sponsors/er2.png" alt="ER2 Sponsors"/>
          </div>

          <div className="sponsor-era">
            <h2>ER 3.0</h2>
            <img src="/sponsors/er3.png" alt="ER3 Sponsors"/>
          </div>

          <div className="sponsor-era">
            <h2>ER 4.0</h2>
            <img src="/sponsors/er4.png" alt="ER4 Sponsors"/>
          </div>

          <div className="sponsor-era">
            <h2>ER 5.0</h2>
            <img src="/sponsors/er5.png" alt="ER5 Sponsors"/>
          </div>

          <div className="sponsor-era">
            <h2>ER 6.0</h2>
            <img src="/sponsors/er6.png" alt="ER6 Sponsors"/>
          </div>

        {/*   <div className="sponsor-era">
            <h2>ER 7.0</h2>
            <img src="/sponsors/er7.png" alt="ER7 Sponsors"/>
          </div>
*/}
           {/* <div className="sponsor-era">
            <h2>ER 8.0</h2>
            <img src="/sponsors/er8.png" alt="ER8 Sponsors"/>
          </div>

          <div className="sponsor-era">
            <h2>ER 9.0</h2>
            <img src="/sponsors/er9.png" alt="ER9 Sponsors"/>
          </div> */}

        </div>  


          {eras.map((era: any) => (
            <div className="sponsor-era" key={era._id}>
              <h2>{era.title}</h2>
              <img src={era.image} alt={era.title}/>
            </div>
          ))}

<div className="sponsor-benefits">

  {/* HEADER */}
  <h2 className="benefits-title">Why Join Ethan Racing?</h2>

  <p className="benefits-subtitle">
    One Team. One Machine. One Goal.
  </p>

  <p className="benefits-description">
    Ethan Racing operates like a professional racing organization where
    Technical, Electrical, Software, and Business domains work in perfect synchronization.
  </p>

  {/* PILLARS */}
  <div className="benefits-grid">

    <div className="benefit-card">
      <h3>Structural & Mechanical Excellence</h3>
      <p>
        Focus on chassis, suspension, braking systems, and aerodynamics.
      </p>
      <span>Tools: SolidWorks, Ansys</span>
    </div>

    <div className="benefit-card">
      <h3>Electric Powertrain</h3>
      <p>
        Battery systems, BMS, and motor controller integration.
      </p>
      <span>Tools: MATLAB, Altium</span>
    </div>

    <div className="benefit-card">
      <h3>Intelligence & Systems</h3>
      <p>
        Telemetry, embedded systems, and sensor integration.
      </p>
      <span>Tools: C/C++, IoT</span>
    </div>

    <div className="benefit-card">
      <h3>Business & Strategy</h3>
      <p>
        Sponsorships, branding, finance, and operations.
      </p>
      <span>Tools: Marketing, Project Management</span>
    </div>

  </div>

  {/* ADVANTAGE */}
  <div className="benefits-advantage">

    <h3>The Professional Advantage</h3>

    <ul>
      <li>
        Interdisciplinary learning across mechanical, electrical, and software systems
      </li>
      <li>
        Industry-level standards inspired by Formula Student and global teams
      </li>
      <li>
        Real-world hands-on experience beyond classroom learning
      </li>
    </ul>

  </div>

  {/* MISSION */}
  <div className="benefits-mission">
    <p>
      "Every bolt tightened, every line of code written, every circuit soldered,
      and every sponsorship secured moves us closer to the finish line.
      We don’t just build a car — we build a legacy of engineering excellence."
    </p>
  </div>

</div>

      {/* </div> */}

    </section>
  );
}