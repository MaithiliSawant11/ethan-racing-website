import { client } from "@/lib/sanity"

async function getCars() {

  const query = `*[_type == "car"]{
    name,
    weight,
    engine,
    topSpeed
  }`

  return client.fetch(query)
}

export default async function CMSCars() {

  const cars = await getCars()

  return (

    <div>

      {cars.map((car:any,index:number)=>(
        <div key={index}>

          <h2>{car.name}</h2>
          <p>{car.weight}</p>

        </div>
      ))}

    </div>

  )
}