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

  <h2 className="benefits-title">Why Sponsor Ethan Racing?</h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <h3>Brand Visibility</h3>
      <p>Your logo on our race car and team apparel.</p>
    </div>

    <div className="benefit-card">
      <h3>National Exposure</h3>
      <p>Presence in Formula Student competitions across India.</p>
    </div>

    <div className="benefit-card">
      <h3>Social Media Reach</h3>
      <p>Promotion across our digital platforms.</p>
    </div>

    <div className="benefit-card">
      <h3>Engineering Talent</h3>
      <p>Connect with skilled and passionate engineers.</p>
    </div>

  </div>

</div>

      {/* </div> */}

    </section>
  );
}